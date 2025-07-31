# GitHub Copilot Instructions

## React Component Guidelines

### Component Architecture

-   **Single Responsibility Principle**: Each component should have one clear purpose and responsibility
-   **Break down large components** into smaller, focused components (aim for <150 lines per component)
-   **Composition over inheritance**: Use component composition to build complex UIs
-   **Extract reusable logic** into custom hooks when appropriate

### Component Structure

-   Keep components focused and small
-   If a component handles multiple concerns, break it into:
    -   Container components (handle state and logic)
    -   Presentation components (handle UI rendering)
    -   Utility components (handle specific UI pieces)

Example structure for a user card:

```
UserCard (container)
├── UserAvatar (presentation)
├── UserInfo (presentation)
├── UserActions (presentation)
└── UserStatus (presentation)
```

### Reusability Guidelines

-   **Create generic, reusable components** instead of duplicating similar code
-   Use props for variations instead of creating multiple similar components
-   Prefer configurable components over hardcoded ones

#### Button Example:

Instead of: `PrimaryButton`, `SecondaryButton`, `DangerButton`
Create: `Button` with variant props: `<Button variant="primary|secondary|danger">`

#### Common Reusable Patterns:

-   `Button` with variants (primary, secondary, outline, etc.)
-   `Input` with types (text, email, password, etc.)
-   `Modal` with configurable content
-   `Card` with flexible content slots
-   `Icon` with dynamic icon selection
-   `Loading` with different states and sizes

### Code Organization

-   Group related components in feature folders
-   Create a shared/common components directory for reusables
-   Use consistent naming conventions (PascalCase for components)
-   Export components from index files for clean imports

### Props and API Design

-   **Always use TypeScript interfaces** for prop definitions
-   **Export prop interfaces** for reusability (e.g., `export interface ButtonProps`)
-   Provide sensible defaults for optional props
-   Make components flexible through props, not rigid through hardcoding
-   Use children prop for flexible content composition
-   Use generic types when components need to work with different data types

### Performance Considerations

-   Use React.memo for components that re-render frequently
-   Implement proper key props for lists
-   Avoid creating objects/functions in render (use useCallback/useMemo)
-   Keep state as close to where it's used as possible

### Styling Approach

-   Use consistent styling methodology (CSS modules, styled-components, or Tailwind)
-   Create reusable style variants through props
-   Avoid hardcoded styles - make them configurable
-   Use design tokens for consistent spacing, colors, typography

### State Management

-   Use local state (useState) when state is component-specific
-   Lift state up only when multiple components need it
-   Consider context for deeply nested prop drilling
-   Extract complex state logic into custom hooks

### Custom Hooks

Create custom hooks for:

-   API calls and data fetching
-   Complex state logic
-   Reusable side effects
-   Form handling
-   Local storage interactions

### Testing Considerations

-   Write components that are easy to test
-   Separate business logic from UI logic
-   Use dependency injection for external dependencies
-   Make components predictable (same props = same output)

### File Naming Conventions

-   Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
-   Hooks: `camelCase.ts` starting with "use" (e.g., `useUserData.ts`)
-   Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
-   Types: `PascalCase.types.ts` or `types.ts` (e.g., `User.types.ts`, `api/types.ts`)
-   **Always use .tsx for React components** and .ts for utilities/hooks

### Accessibility (WCAG 2.2 AAA Compliance)

-   **Always implement full accessibility** - this is mandatory, not optional
-   Use semantic HTML elements first (button, nav, main, section, article, etc.)
-   **Always include ARIA attributes** when needed:
    -   `aria-label` for elements without visible text
    -   `aria-labelledby` to reference other elements
    -   `aria-describedby` for additional descriptions
    -   `aria-expanded` for collapsible content
    -   `aria-hidden` for decorative elements
    -   `aria-live` regions for dynamic content
    -   `role` attributes when semantic HTML isn't sufficient
-   **Keyboard navigation support**:
    -   All interactive elements must be keyboard accessible
    -   Implement proper focus management and visible focus indicators
    -   Support Tab, Enter, Space, and Arrow keys where appropriate
    -   Use `tabIndex` appropriately (0 for focusable, -1 for programmatically focusable)
-   **Color and contrast**:
    -   Ensure color contrast ratios meet AAA standards (7:1 for normal text, 4.5:1 for large text)
    -   Never rely on color alone to convey information
    -   Support high contrast mode and dark mode
-   **Screen reader support**:
    -   Use proper heading hierarchy (h1 → h2 → h3)
    -   Provide alternative text for images (`alt` attributes)
    -   Use `aria-live` for dynamic content announcements
    -   Skip links for main content navigation
-   **Form accessibility**:
    -   Associate labels with form controls (htmlFor/id or aria-labelledby)
    -   Provide error messages with `aria-invalid` and `aria-describedby`
    -   Group related form controls with fieldset/legend
    -   Use `required` and `aria-required` attributes
-   **Motion and animation**:
    -   Respect `prefers-reduced-motion` media query
    -   Provide pause/stop controls for auto-playing content
    -   Avoid flashing content that could trigger seizures

### Code Quality

-   **Always use TypeScript** - no JavaScript files in React projects
-   Prefer explicit over implicit typing when it improves clarity
-   Use strict TypeScript configuration
-   Use meaningful variable and function names
-   Add JSDoc comments for complex logic
-   Handle loading and error states consistently
-   **Always validate props with TypeScript interfaces**
-   Use union types for component variants and states
-   Leverage TypeScript's utility types (Pick, Omit, Partial, etc.)

### Examples of Good Component Breakdown

❌ **Avoid - Monolithic Component:**

```jsx
const Dashboard = () => {
	// 300+ lines handling user data, charts, navigation, etc.
};
```

✅ **Prefer - Modular Components:**

```tsx
interface DashboardProps {
	userId: string;
}

const Dashboard = ({ userId }: DashboardProps) => {
	return (
		<Layout>
			<DashboardHeader userId={userId} />
			<DashboardStats userId={userId} />
			<DashboardCharts userId={userId} />
			<DashboardActions userId={userId} />
		</Layout>
	);
};
```

❌ **Avoid - Duplicate Components:**

```jsx
const RedButton = () => <button className="btn-red">
const BlueButton = () => <button className="btn-blue">
const GreenButton = () => <button className="btn-green">
```

✅ **Prefer - Configurable Component:**

```tsx
interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	'aria-label'?: string;
	'aria-describedby'?: string;
	type?: 'button' | 'submit' | 'reset';
}

const Button = ({
	variant = 'primary',
	size = 'md',
	type = 'button',
	children,
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	...props
}: ButtonProps) => (
	<button
		type={type}
		className={`btn btn-${variant} btn-${size}`}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedBy}
		{...props}
	>
		{children}
	</button>
);
```

## Summary

Always prioritize:

1. **Accessibility First** - WCAG 2.2 AAA compliance is mandatory
2. **Modularity** - Break large components into smaller ones
3. **Reusability** - Create configurable components instead of duplicates
4. **Type Safety** - Use TypeScript for all React code
5. **Maintainability** - Clear structure and naming
6. **Performance** - Efficient rendering and state management

## Accessibility Checklist for Every Component

-   [ ] Uses semantic HTML elements
-   [ ] Includes appropriate ARIA attributes
-   [ ] Supports keyboard navigation
-   [ ] Has sufficient color contrast (7:1 ratio for AAA)
-   [ ] Works with screen readers
-   [ ] Respects user motion preferences
-   [ ] Provides alternative text for images
-   [ ] Has proper focus management
-   [ ] Uses proper heading hierarchy
-   [ ] Includes skip links where needed
