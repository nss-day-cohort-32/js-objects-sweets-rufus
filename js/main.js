console.log("main.js");

const sweetspot = document.querySelector("#sweetstuff");
console.log("sweetspot", sweetspot);

//loop through the inventor for each item

//add an item to the ul

//show the new ul on the dom
function myFunction(name){
    console.log("name", name);
}

myFunction("brenda");

inventory.forEach(
    function(item, index){
    console.log("sweet item", index, item);
    sweetspot.innerHTML +=
    `<li class='fancy'>${index}
    <strong>${item.name}</strong>
    ${item.flavor}
    </li>`
})



const getFancy = document.querySelectorAll(".fancy");
console.log("getFancy", getFancy);

function howmanySweets(evt){
    console.log("this", this);
    console.log("event is", evt);
    console.log("howManySweets", inventory.length);
}

const totalSweets = function(){

}

const allSweets = () => {

}

const btnGetTotalAmounts = document.querySelector("#btn-getTotalSweets");
btnGetTotalAmounts.addEventListener("click", howmanySweets);






















