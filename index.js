const arrNum = [1, 5, 2, 4, 3, 10, 20, 15];
let newArr = 0;

const sumOfNumbers = (a) => {
for(let i = 0; i < a.length; i++){
    newArr += a[i]
}
console.log(newArr)
}
sumOfNumbers(arrNum);

const handleClick = () => {
    const userName = document.getElementById("username").value;
    console.log("User Name :", userName)
}
 document.getElementById("greating").innerHTML = "Hello, World!"