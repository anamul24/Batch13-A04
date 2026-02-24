
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  = getELementById() -> Select one element by ID.
  = getElementsByClassName() -> select multiple elements by class 
  = querySelector() -> select first matching element ( CSS selector )
  = querySelectorAll -> select all matching elements ( static NodeList)


## 2. How do you create and insert a new element into the DOM?

=> const div = document.createElement("div");
   div.textContant ="Hello";
   document.body.appendChild(div);


## 3. What is Event Bubbling? And how does it work?

  => Event start form the target element and moves up to its parent element.


## 4. What is Event Delegation in JavaScript? Why is it useful?

  => Adding one event listener to a parent instead of multiple children. useful for performance and dynamic elements.


## 5.What is the difference between preventDefault() and stopPropagation() methods?

   => preventDefault() -> stops browser default action.
   => stopPropagation() -> stops the event from bubbling to the parent. 

