# Answers
##### First question:
 Which method is used to add an element to the beginning of an array?
  
- The unshit() method.
##### Second question:
Which event is triggered when a user clicks on an HTML element?
 
 - onclick event.
 ##### Third question:
 Which CSS property is used to change the background color of an element?
 
 - background-color property.
 ##### Fouth question:
  Which method creates a new array by applying a function to each element of an existing array?

  - map() method.
  ##### Fifth question: 
  What attribute must be added to an `<input>` element to make it a required field?

  - required attribute.
  ##### sixth question: 
  Which part of the CSS box model affects the space between the content and the border?

  - padding.
##### seventh question:
Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers.

```javascript
const arrNum = [1, 5, 2, 4, 3, 19, 20, 15];
let newArr = 0;

const sumOfNumbers = (a) => {
for(let i = 0; i < a.length; i++){
    newArr += a[i]
}
console.log(newArr)
}
sumOfNumbers(arrNum);
```
##### Eighth question:
Create a button in HTML that, when clicked, changes the text of a `<p>` element to "Hello, World!".
```html
<p id="greating"></p>

<script>
document.getElementById("greating").innerHTML = "Hello, World!"
</script>
```
##### ninth question:
Write CSS to center a `<div>` both vertically and horizontally within the page.
```css
div{
   
}
```
##### Tenth question:
Create an input field in HTML that logs the current value to the console whenever the user types.

```html
<input type="text" id="username">
<button onclick="handleClick()">Submit</button>

<script>
const handleClick = () => {
    const userName = document.getElementById("username").value;
    console.log("User Name :", userName)
}

</script>

```