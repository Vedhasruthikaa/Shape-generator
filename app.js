var numberInShape=1;
var oldValue=0;

//to select the generate button and store in button variable
let button=document.getElementById("button");
//for the action after the button is clicked
button.onclick=()=>{
    //to selsect number box
    let n=document.getElementById("number").value;
    //to select the shape
    let circle=document.getElementById("circle");
    let square=document.getElementById("square");
    let rectangle=document.getElementById("rectangle");

    //to selesct the area where the shape is displayed
    let box=document.getElementById("box");

    //logic
    let j;
    n=Number(oldValue)+Number(n);
    for(j=numberInShape;j<=n;j++){
        var shape=document.createElement("div");//whenever it is called it creates a div
        shape.innerHTML+=numberInShape;
        if(square.checked)
            shape.classList.add("square");//adds the css style to js
        else if(circle.checked)
            shape.classList.add("circle");
        else if(rectangle.checked)
            shape.classList.add("rectangle");
        else
           document.write("Invalid Input");
        box.appendChild(shape);
        numberInShape++;
        oldValue = document.getElementById("box").lastElementChild.innerHTML;
    }
}
