function helloworld() {
    //output the text to a selected element
    document.getElementById("output-text").textContent = "hello, world!";
}
// add an event listener to for the button to perform a function
document.getElementById("greeting").addEventListener("click", helloworld);