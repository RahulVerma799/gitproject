## React Assignment

1. How can you implement shared functionality across a component tree?

To implement shared functionality across a component tree in React, you can use these approaches:

Lifting State Up: Move shared state to the closest common ancestor component and pass it down via props.
Context API: Create a context with React.createContext() and use a provider to make the state or functionality available throughout the component tree.
Custom Hooks: Define reusable logic in a custom hook and call it in any component that needs that functionality.
Higher-Order Components (HOC): Wrap components with a function that adds shared behavior or state.



2. Why is the `useState` hook appropriate for handling state in a complex component?

Simplicity: It provides a straightforward way to add state to functional components without needing a class.
Encapsulation: Each state variable is encapsulated within the component, making it easier to manage and understand.
Reactivity: useState automatically triggers re-renders when the state changes, ensuring the UI stays in sync with the state.
Flexibility: It supports multiple state variables and allows for direct manipulation, enhancing the component's flexibility and responsiveness.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
