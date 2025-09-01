## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Ans:** The **getElementById** is a straight forward method to select the elements with specific ID in the DOM. There is always one unique ID in the DOM And The **getElementsByClassName()** method returns a collection of an element's child elements with the specified class name.
**The querySelector()** method returns the first element that matches a specified CSS selectors in the document. On the other hand the **querySelectorAll()** method return all the matches CSS Selectors. **getElementById() and querySelector()** both return a single element, while **querySelectorAll() and getElementByClassName()** return multiple.

## 2. How do you create and insert a new element into the DOM?
**Ans:** creating and inserting a new elements into the DOM is to first create them using the document.**createElement()** method, and then insert them into an element using the **append() or prepend()** methods.

## 3. What is Event Bubbling and how does it work?
**Ans:** Event bubbling is defined as the method by which allows a single event listener on a parent element to handle events for multiple child elements, making event management more efficient.
If an event handler is set for the element, the event handler is triggered. Then the event **bubbles up** to the elements parent. If an event handler is set for the parent, this event handler is triggered. The event continues to bubble, until it reaches the top.

## 4. What is Event Delegation in JavaScript? Why is it useful?
**Ans:** Event delegation is a powerful method for efficiently working with events in the DOM. It is especially useful when managing a large number of elements or dynamically creating new ones. It is more useful because of simplifies event handling, improves performance, and enhances the flexibility of our codes.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
**Ans:** The **preventDefault()** method is used to stops the default browsers behaviour and The **stopPropagation()** method is used to prevents the event from propagating the DOM.The **preventDefault()** method prevents the browser from executing the default action. The **stopPropagation()** method is use to stop the bubbling of an event to parent elements.







