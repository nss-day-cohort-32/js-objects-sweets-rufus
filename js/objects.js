console.log("objects.js");

const rufusTheDog = {
    age: 4,                 // Property
    species: "Dalmatian",   // Property
    contentsOfStomach: [],
    eat: function (item) {
        this.contentsOfStomach.push(item)
    },
    puke: function () {
        console.log("this.contents", this.contentsOfStomach.length);
        this.contentsOfStomach = [];
    },
    bark: function (something) {     // Method
        window.alert(`Rufus barks '"WOOF!" at the ${something}`);
    }
}


// rufusTheDog.bark("mailman");
// rufusTheDog.bark("leaf");

rufusTheDog.eat("cupcake");
rufusTheDog.eat("pizza");
rufusTheDog.eat("bunny");
rufusTheDog.puke();






