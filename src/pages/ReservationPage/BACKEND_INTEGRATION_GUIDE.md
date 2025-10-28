# Backend Integration Guide for Reservation System

This guide explains how to integrate the reservation system with a backend API. All integration points are marked with `TODO: Backend Integration Point` comments in the code.

## 📍 Integration Points

### 1. Available Time Slots (`ReservationFormSection.tsx`)

**Location:** Lines ~20-50  
**Function:** `generateTimeSlots()`

**Current Behavior:**

-   Generates static time slots from 5 PM to 11 PM in 30-minute intervals
-   All times are always available

**Backend Integration Steps:**

```typescript
// Add state for available slots (in useReservationForm hook)
const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
const [loadingTimeSlots, setLoadingTimeSlots] = useState(false);

// Fetch when date or guest count changes
useEffect(() => {
	if (!formData.date || !formData.guests) return;

	const fetchAvailableTimeSlots = async () => {
		setLoadingTimeSlots(true);
		try {
			const response = await fetch(
				`/api/reservations/available-times?date=${formData.date}&guests=${formData.guests}`
			);
			const slots = await response.json();
			setAvailableTimeSlots(slots);
		} catch (error) {
			console.error('Error fetching time slots:', error);
		} finally {
			setLoadingTimeSlots(false);
		}
	};

	fetchAvailableTimeSlots();
}, [formData.date, formData.guests]);

// Update generateTimeSlots to use API data
const generateTimeSlots = () => {
	if (loadingTimeSlots) {
		return [{ value: '', label: 'Loading available times...' }];
	}

	if (availableTimeSlots.length === 0) {
		return [{ value: '', label: 'No times available for this date' }];
	}

	return [
		{ value: '', label: t('reservationForm.fields.time.placeholder') },
		...availableTimeSlots.map((slot) => ({
			value: slot.time,
			label: slot.displayTime,
			disabled: !slot.available, // Requires updating SelectField to support disabled
		})),
	];
};
```

**API Endpoint Required:**

```
GET /api/reservations/available-times
Query Parameters:
  - date: string (YYYY-MM-DD)
  - guests: number (1-12)

Response:
[
  {
    "time": "17:00",
    "displayTime": "5:00 PM",
    "available": true
  },
  {
    "time": "17:30",
    "displayTime": "5:30 PM",
    "available": false
  },
  ...
]
```

---

### 2. Available Dates (`ReservationFormSection.tsx`)

**Location:** Lines ~68-75  
**Function:** `getMinDate()`

**Current Behavior:**

-   Only sets minimum date to today
-   All future dates are selectable

**Backend Integration Steps:**

```typescript
// Add state for available dates (in useReservationForm hook)
const [availableDates, setAvailableDates] = useState<string[]>([]);

// Fetch available dates on mount
useEffect(() => {
	const fetchAvailableDates = async () => {
		try {
			const response = await fetch('/api/reservations/available-dates');
			const data = await response.json();
			setAvailableDates(data.dates);
		} catch (error) {
			console.error('Error fetching available dates:', error);
		}
	};

	fetchAvailableDates();
}, []);

// Update InputField to accept disabled dates callback
// (Requires extending InputField component)
<InputField
	label={t('reservationForm.fields.date.label')}
	type="date"
	name="date"
	value={formData.date}
	min={getMinDate()}
	max={getMaxDate()} // Add max date (e.g., 90 days from now)
	isDateDisabled={(date) => !availableDates.includes(date)}
	// ... other props
/>;
```

**API Endpoint Required:**

```
GET /api/reservations/available-dates

Response:
{
  "dates": [
    "2025-10-28",
    "2025-10-29",
    "2025-10-30",
    ...
  ],
  "closedDates": [
    "2025-12-25", // Restaurant closed
    "2025-01-01"  // Restaurant closed
  ]
}
```

---

### 3. Reservation Submission (`useReservationForm.ts`)

**Location:** Lines ~118-155  
**Function:** `handleSubmit()`

**Current Behavior:**

-   Simulates API call with 1.5 second setTimeout
-   Always succeeds with mock data
-   Logs to console

**Backend Integration Steps:**

```typescript
const handleSubmit = async (
	e: React.FormEvent<HTMLFormElement>,
	t: TFunction
) => {
	e.preventDefault();

	if (!validateForm(t)) {
		return;
	}

	setStatus('submitting');

	try {
		// Real API call
		const response = await fetch('/api/reservations', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Reservation failed');
		}

		const result = await response.json();
		console.log('Reservation created:', result);

		setStatus('success');

		// Optional: Store confirmation ID for reference
		// setConfirmationId(result.confirmationId);

		// Reset form after success
		setTimeout(() => {
			setFormData({
				name: '',
				email: '',
				phone: '',
				date: '',
				time: '',
				guests: '2',
				specialRequests: '',
			});
			setStatus('idle');
		}, 3000);
	} catch (error) {
		console.error('Reservation submission error:', error);
		setStatus('error');

		// Optional: Set specific error message
		// setErrorMessage(error.message);

		// Reset error status after 5 seconds
		setTimeout(() => {
			setStatus('idle');
		}, 5000);
	}
};
```

**API Endpoint Required:**

```
POST /api/reservations

Request Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "(555) 123-4567",
  "date": "2025-10-29",
  "time": "19:00",
  "guests": "4",
  "specialRequests": "Celebrating anniversary, prefer quiet table"
}

Success Response (201 Created):
{
  "confirmationId": "RES-20251029-A4B2",
  "status": "pending", // or "confirmed"
  "message": "Reservation request received",
  "estimatedConfirmationTime": "2025-10-28T15:30:00Z"
}

Error Response (400/409):
{
  "error": "time_unavailable",
  "message": "The selected time slot is no longer available",
  "availableAlternatives": ["18:30", "19:30", "20:00"]
}
```

---

## 🔧 Additional Enhancements for Backend

### 4. Guest Count Validation

**Current:** Allows 1-12 guests  
**Enhancement:** Check table availability based on party size

```typescript
// Add to generateGuestOptions or as separate validation
const fetchMaxGuestsForDateTime = async (date: string, time: string) => {
	const response = await fetch(
		`/api/reservations/max-capacity?date=${date}&time=${time}`
	);
	const data = await response.json();
	return data.maxGuests;
};
```

### 5. Real-time Availability Updates

Add WebSocket or polling to update availability in real-time:

```typescript
// Option 1: WebSocket
useEffect(() => {
	const ws = new WebSocket('ws://api.example.com/reservations/updates');
	ws.onmessage = (event) => {
		const update = JSON.parse(event.data);
		// Update available slots based on bookings from other users
		updateAvailableTimeSlots(update);
	};
	return () => ws.close();
}, []);

// Option 2: Polling every 30 seconds
useEffect(() => {
	const interval = setInterval(() => {
		fetchAvailableTimeSlots(formData.date, formData.guests);
	}, 30000);
	return () => clearInterval(interval);
}, [formData.date, formData.guests]);
```

### 6. Email Confirmation

Backend should handle:

-   Send confirmation email to customer
-   Send notification to restaurant staff
-   Include reservation details, confirmation code, cancellation link

### 7. Reservation Confirmation Display

After successful submission, show confirmation details:

```typescript
// Add state for confirmation
const [confirmationDetails, setConfirmationDetails] = useState(null);

// In handleSubmit success block
setConfirmationDetails({
	confirmationId: result.confirmationId,
	...formData,
});

// Show confirmation UI instead of form
{
	confirmationDetails ? (
		<ConfirmationSection details={confirmationDetails} />
	) : (
		<ReservationForm />
	);
}
```

---

## 📋 Backend Requirements Checklist

### Database Schema

```sql
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  confirmation_id VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  guest_count INTEGER NOT NULL,
  special_requests TEXT,
  status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, cancelled, completed
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE restaurant_capacity (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  max_capacity INTEGER NOT NULL,
  current_reservations INTEGER DEFAULT 0,
  UNIQUE(date, time)
);

CREATE TABLE restaurant_hours (
  id SERIAL PRIMARY KEY,
  day_of_week INTEGER NOT NULL, -- 0-6 (Sunday-Saturday)
  open_time TIME NOT NULL,
  close_time TIME NOT NULL,
  is_closed BOOLEAN DEFAULT FALSE
);

CREATE TABLE blocked_dates (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  reason VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints Summary

1. `GET /api/reservations/available-dates` - Get bookable dates
2. `GET /api/reservations/available-times?date={date}&guests={count}` - Get available time slots
3. `POST /api/reservations` - Create reservation
4. `GET /api/reservations/{confirmationId}` - Get reservation details
5. `PATCH /api/reservations/{confirmationId}/cancel` - Cancel reservation
6. `GET /api/reservations/max-capacity?date={date}&time={time}` - Get max guests for slot

### Business Logic

-   **Capacity Management**: Track available seats per time slot
-   **Overbooking Protection**: Lock time slots during booking process
-   **Validation**: Server-side validation of all form data
-   **Email Service**: Send confirmations and reminders
-   **Cancellation Policy**: Allow cancellations up to 24 hours before
-   **Admin Dashboard**: Manage reservations, capacity, blocked dates

---

## 🚀 Migration Strategy

### Phase 1: Read-Only Integration

1. Integrate available dates/times APIs
2. Keep mock submission
3. Test real-time availability updates

### Phase 2: Full Integration

1. Replace mock submission with real API
2. Add error handling for conflicts
3. Implement confirmation flow

### Phase 3: Advanced Features

1. Add email confirmations
2. Implement cancellation flow
3. Add reminder system
4. Create admin dashboard

---

## 🧪 Testing Backend Integration

### Test Scenarios

1. **Happy Path**

    - Select available date → Should show available times
    - Select time → Should successfully book
    - Receive confirmation email

2. **Error Handling**

    - Double booking → Should show error, suggest alternatives
    - Fully booked date → Should show "no availability"
    - Network error → Should show error message, allow retry

3. **Edge Cases**
    - Booking exactly at capacity → Should succeed
    - Last-minute cancellation by another user → Should update availability
    - Restaurant closed dates → Should be disabled in date picker

---

## 📝 Notes

-   All integration points are marked with `TODO: Backend Integration Point` in the code
-   Current implementation works perfectly with mock data for testing/demo
-   No refactoring needed - just add the backend calls as shown above
-   Frontend is designed to be backend-agnostic (works with any REST API)

## 🎯 Priority Order

1. **High Priority**: Reservation submission endpoint
2. **High Priority**: Available time slots endpoint
3. **Medium Priority**: Available dates endpoint
4. **Low Priority**: Real-time updates, advanced capacity management
