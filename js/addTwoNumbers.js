// a basic javascript function
function addTwoNumbers() {

    //retrive the values from the element as numbers
    let num1 = Number(document.getElementById("input-box1").value);
    let num2 = Number(document.getElementById("input-box2").value);

    let result = num1 + num2;

    //display the result          
    document.getElementById("output-box").value = result;
}