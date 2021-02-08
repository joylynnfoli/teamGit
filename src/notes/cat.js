// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     growl(){
//         console.log(this.name + " has growled")
//     }
// }

const Animal = (name) => {
    return {
        name: name,
        growl: () => {console.log(name)}
    }
}

my_animal = Animal("booboo")
my_animal.growl()
console.log(my_animal)


// class Cat extends Animal{
//     constructor(name, owner){
//         super(name)
//         this.owner = owner
//     }
// }

// const bear = new Animal("yogi")
// const cat = new Cat("felix", "nobody")

// console.log(bear)
// bear.growl()
// console.log(cat)
