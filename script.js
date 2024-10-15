//Task01
let value1=10;
let value2=5;

//Adding the value of 'value1' in to 'value2' using compound operator
console.log("Adding the value of 'value1' in to 'value2' using compound operator");
console.log("First Value is %d and Second Value is",value1, value2);
value1+=value2;
console.log("After addition, Value1 becomes: ",value1);
console.log("------------------");

//Decrementing a value of 'value2' through decrement operator
console.log("Decrementing a value of 'value2' through decrement operator");
console.log("Before Decrement" ,value2);
value2--;
console.log("After Decrement" ,value2);
console.log("------------------");

//Multiplication
console.log("Multiplication");
let num1=12;
let num2=3;
console.log("First number is %d and second number is",num1,num2);
let product=num1*num2;
console.log("Result is:",product);
console.log("------------------");

//Division
console.log("Division");
num1/=2;
console.log("After dividing First Number by 2, we get:",num1);
console.log("------------------");

//Modulus
console.log("Modulus");
let num3=24;
console.log("First value is %d and second is",num3,num1);
let modulus_result=num3%=num1;
console.log("Modulus is",modulus_result);
console.log("------------------");


//Task2

//Sorting array
let array=["Red","Yellow","Voilet","Purple","Indigo","Teal"]
console.log("Array before sorting",array);
//Calling function
array_function(array);

//Function body
function array_function (array){
array.sort();
console.log("Array after sorting",array);
}

//Pushing in array
array.push("Green");
console.log("Array after pushing a new value in it",array);


//Searching in Array
//Function body
searchArray(array);

function searchArray(array){

    let searching_value="Brown"
    //console.log("Searching for "+searching_value+ " in array...");
var search_result =array.includes(searching_value);

//Showing resluts
if(search_result==false){

    console.log("Value not found");
}else{
    let result_index=array.indexOf(searching_value);
    console.log("Value found at the index of",result_index);
}

}


//Task3
//Dom Manipulation
document.getElementById("mydiv").addEventListener("mouseover", function() {
    let init_div = document.getElementById("mydiv");
    init_div.style.backgroundColor = "red";
    init_div.innerText = "I am Red!";
});


document.getElementById("mydiv").addEventListener("mouseout", function() {
    let init_div = document.getElementById("mydiv");
    init_div.style.backgroundColor = "aqua";
    init_div.innerText = "I am Aqua!";
});


//Task 4
function input_validation(){
    let name=document.getElementById("namefield").value;
    let age=Number(document.getElementById("agefield").value);

    if(name==""){
        alert("Name cannot be empty!")
        return false;
    }

    if(isNaN(age)){
        alert("Age must be numeric value only!");
        return false;
        }
        
        alert("Submitted Successfully!")
        console.log(name);
        console.log(age);
}




