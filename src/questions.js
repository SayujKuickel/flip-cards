const questions = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "How do you create a component in React?",
    answer:
      "You can create a component in React by defining a JavaScript function or class that returns JSX.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript used in React to describe the UI.",
  },
  {
    id: 4,
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight representation of the actual DOM used for performance optimization.",
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props allow data to be passed from a parent component to a child component.",
  },
  {
    id: 6,
    question: "What is state in React?",
    answer: "State is a way to store and manage component-specific data.",
  },
  {
    id: 7,
    question: "What is a React component's lifecycle?",
    answer:
      "The component's lifecycle includes mounting, updating, and unmounting phases.",
  },
  {
    id: 8,
    question: "What is a controlled component?",
    answer: "A controlled component's value is controlled by React's state.",
  },
  {
    id: 9,
    question: "What is Redux in React?",
    answer:
      "Redux is a state management library for larger React applications.",
  },
  {
    id: 10,
    question: "What is a higher-order component (HOC) in React?",
    answer:
      "HOCs are functions that enhance or modify the behavior of React components.",
  },
  {
    id: 11,
    question: "What is React Router?",
    answer:
      "React Router is a library for handling routing in React applications.",
  },
  {
    id: 12,
    question: "What is the purpose of the key prop in React lists?",
    answer:
      "The key prop helps React identify and track individual list items efficiently.",
  },
  {
    id: 13,
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering is the practice of showing or hiding components based on conditions.",
  },
  {
    id: 14,
    question: "What is the significance of the useContext hook?",
    answer:
      "The useContext hook provides a way to access a context in functional components.",
  },
  {
    id: 15,
    question: "What is React Native?",
    answer:
      "React Native is a framework for building mobile applications using React.",
  },
  {
    id: 16,
    question: "What is a functional component in React?",
    answer:
      "Functional components are a simpler way to write components using functions.",
  },
  {
    id: 17,
    question: "What is the purpose of the useEffect hook?",
    answer:
      "The useEffect hook is used for handling side effects in functional components.",
  },
  {
    id: 18,
    question: "What is the difference between state and props?",
    answer:
      "State is used for managing component-specific data, while props are used for passing data between components.",
  },
  {
    id: 19,
    question: "What is the role of the ReactDOM.render() method?",
    answer:
      "ReactDOM.render() is used to render a React component into the DOM.",
  },
  {
    id: 20,
    question: "What are React keys, and why are they important?",
    answer:
      "React keys are used to help React identify and reconcile elements when rendering lists.",
  },
  {
    id: 21,
    question: "What is the purpose of the setState() method?",
    answer:
      "The setState() method is used to update the state of a React component.",
  },
  {
    id: 22,
    question: "What is a React fragment?",
    answer:
      "A React fragment is a way to group multiple elements without adding extra nodes to the DOM.",
  },
  {
    id: 23,
    question: "What is the role of the render method in a React component?",
    answer:
      "The render method is responsible for rendering the component's UI.",
  },
  {
    id: 24,
    question:
      "What are the differences between class components and functional components in React?",
    answer:
      "Class components use class syntax, while functional components use JavaScript functions.",
  },
  {
    id: 25,
    question: "What is the purpose of PropTypes in React?",
    answer:
      "PropTypes are used to specify the type of data that a component should receive via props.",
  },
  {
    id: 26,
    question: "What is React context?",
    answer:
      "React context is a way to share data between components without manually passing props.",
  },
  {
    id: 27,
    question: "What is event handling in React?",
    answer:
      "Event handling in React involves defining functions to respond to user interactions.",
  },
  {
    id: 28,
    question:
      "What is the difference between stateful and stateless components?",
    answer:
      "Stateful components can manage state, while stateless components do not.",
  },
  {
    id: 29,
    question: "How can you update the state of a component in React?",
    answer:
      "You can update the state using the setState() method or hooks like useState.",
  },
  {
    id: 30,
    question: "What is the significance of the shouldComponentUpdate() method?",
    answer:
      "shouldComponentUpdate() is used to optimize performance by controlling when a component should re-render.",
  },
  {
    id: 31,
    question: "What is the purpose of React DevTools?",
    answer:
      "React DevTools is a browser extension for inspecting and debugging React components.",
  },
  {
    id: 32,
    question: "How do you pass data from child to parent components in React?",
    answer:
      "You can pass data from child to parent components by passing callback functions as props.",
  },
  {
    id: 33,
    question: "What is the role of keys in React lists?",
    answer:
      "Keys help React identify which items have changed, been added, or removed when rendering lists.",
  },
  {
    id: 34,
    question: "What is a ref in React?",
    answer:
      "A ref is a way to access and interact with the DOM or React elements directly.",
  },
  {
    id: 35,
    question: "What is a React portal?",
    answer:
      "A React portal allows rendering a component's children into a different part of the DOM.",
  },
  {
    id: 36,
    question: "What are the benefits of using React for web development?",
    answer:
      "React provides a declarative and efficient way to build user interfaces.",
  },
  {
    id: 37,
    question:
      "What is the purpose of the dangerouslySetInnerHTML prop in React?",
    answer:
      "dangerouslySetInnerHTML is used to insert raw HTML content into a component, but it should be used with caution.",
  },
  {
    id: 38,
    question: "What is the significance of the key prop in React lists?",
    answer:
      "The key prop helps React identify and track individual list items efficiently.",
  },
  {
    id: 39,
    question: "What is PureComponent in React?",
    answer:
      "PureComponent is a class component that automatically performs a shallow comparison of state and props to optimize rendering.",
  },
  {
    id: 40,
    question: "What is the contextType property in React?",
    answer:
      "contextType is a property used in class components to access the context API.",
  },
  {
    id: 41,
    question: "What is a controlled component in React forms?",
    answer:
      "A controlled component is a form element whose value is controlled by the component's state.",
  },
  {
    id: 42,
    question: "What is the purpose of the componentDidCatch() method?",
    answer:
      "componentDidCatch() is used to handle errors that occur during rendering.",
  },
  {
    id: 43,
    question: "What are the benefits of using React hooks?",
    answer:
      "Hooks simplify state management and lifecycle handling in functional components.",
  },
  {
    id: 44,
    question: "What is the React Fiber reconciler?",
    answer:
      "React Fiber is a new reconciliation algorithm in React, designed for better performance and rendering control.",
  },
  {
    id: 45,
    question: "What is the significance of the useReducer hook in React?",
    answer:
      "useReducer is used to manage complex state logic in functional components.",
  },
  {
    id: 46,
    question: "What is the purpose of the Router component in React Router?",
    answer:
      "The Router component is used to define the routing configuration for a React application.",
  },
  {
    id: 47,
    question: "What is the significance of the useMemo hook in React?",
    answer:
      "useMemo is used to memoize the result of a computation to improve performance.",
  },
  {
    id: 48,
    question: "What is the purpose of the useRef hook in React?",
    answer:
      "useRef is used to create mutable references to DOM elements and values.",
  },
  {
    id: 49,
    question: "What is React suspense?",
    answer:
      "React suspense is a mechanism for handling async data fetching and code splitting.",
  },
  {
    id: 50,
    question: "What is server-side rendering (SSR) in React?",
    answer:
      "Server-side rendering is a technique that renders React components on the server, improving initial load times and SEO.",
  },
];

export default questions;
