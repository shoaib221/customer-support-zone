Q & A 


1. JSX stands for Javascript eXtensible Markup Language. It is used to write html like code in javascript code instead of using createElement() function repeatedly. 


2. Props are input argument to a component which are passed from parent element to child child element. Props are unchangeable. On the other hand, state is  is declared inside a component. A component can update its state using setState or useState functions. State is used to store dynamic data which keeps changing. 


3. useState is a React Hook that lets you add state variables to functional components. Before hooks, state was only possible in class components. useState hook returns a variable to store data and a function to update it. The mother component of a hook renders each time when it is updated. 


4. There are various ways to share state between components - 

i. To share a state among multiple sibling components, the state is lifted up in its mother component. 

ii. Props are used to share state between a component and its child components. 

iii. Through context api a component can share its state with all its descendents.


5. Event handlers are used in React JSX elements to listen to the events. Some notable event handlers are onClick, onChange, onSubmit, onFocus etc. An event handler takes a function as argument which is executed upon that event. This function receives an argument called event which stores the information about that event. 



