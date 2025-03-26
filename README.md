# FAQ Accordion Project

This project is a solution to the [FAQ Accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

In this project, users should be able to:

- Toggle the answer visibility when the question is clicked.
- Navigate between questions and toggle answers using keyboard navigation.
- View the interface's optimal layout based on screen size.
- See hover and focus states for interactive elements.

### Screenshot

![FAQ Accordion Screenshot](![alt text](image.png))

This is a preview of how the FAQ Accordion looks in different screen sizes.

### Links

- Solution URL: [Solution Link](https://github.com/MduduziNdlovu-dev/faq-accordion)
- Live Site URL: [Live Site Link](https://faq-accordion-two-dusky.vercel.app)

## My Process

### Built With

- React (JS library)
- Next.js (React framework)
- Material-UI (for styling components)
- CSS Flexbox and Grid for layout
- Mobile-first workflow
- Custom React hooks for interactivity

### What I Learned

This project allowed me to dive into building dynamic components in React. I gained a deeper understanding of:

- Implementing state management using React's `useState` for toggling answer visibility.
- Using MUI's `Box` and `Typography` for layout and typography management.
- Structuring and organizing components in a React-Next.js application for scalability.
- Applying responsive design principles to ensure a smooth experience on all devices (desktop, tablet, mobile).

#### Key Code Snippets

```jsx
// Toggling the display of answers based on the state
const [showAnswer, setShowAnswer] = useState(false);

<Button onClick={() => setShowAnswer(!showAnswer)}>
  {showAnswer ? "-" : "+"}
</Button>
```

```css
/* Styling for mobile-first responsiveness */
@media (max-width: 768px) {
  .faq-container {
    width: 100%;
    padding: 1rem;
  }
}
```

### Continued Development

For future improvements, I plan to focus on:

- Optimizing the performance of dynamic content rendering as the FAQ list grows.
- Implementing a smooth animation for answer toggles.
- Refining the keyboard navigation for a more seamless user experience.
- Enhancing accessibility with proper ARIA roles and descriptions for better screen reader support.

### Useful Resources

- [React Docs](https://reactjs.org/docs/getting-started.html) - An essential resource for understanding React's core concepts.
- [Material-UI Documentation](https://mui.com/) - A great guide for working with Material-UI components.
- [Frontend Mentor: FAQ Accordion Challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) - The original challenge that inspired this project.

## Acknowledgments

Special thanks to the Frontend Mentor community for providing such a great platform and project challenges. The inspiration for the design came from various similar accordion components used in web applications. I learned a lot from the feedback I received during the process!

