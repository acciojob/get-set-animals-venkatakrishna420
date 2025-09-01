//complete this code
class Animal {
	constructor(spices){
	this._spices=spices
	}
	get species(){
		return this._spices
	}
	makeSound(){
		console.log(`The ${this._spices} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound();
// Expected Output: The Siamese makes a sound

myCat.purr();
// Expected Output: purr

// Creating an instance of Dog
const myDog = new Dog("Golden Retriever");
myDog.makeSound();
// Expected Output: The Golden Retriever makes a sound

myDog.bark();
// Expected Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
