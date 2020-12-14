import Cat from './models/Cat.js'
import Dog from './models/Dog.js'
import PetStore from './models/PetStore.js'

let mittens = new Cat('Mittens', 3, 'Orange')
let mrSnibbley = new Cat('Mr. Snibbley', 102, 'Black')

let snoopy = new Dog("Snoopy", 50, "Dog Food")
let kujo = new Dog("Kujo", 12, "Humans")

let petStore = new PetStore()

// petStore.cats.push(mittens)
// petStore.cats.push(mrSnibbley)
petStore.cats = [...petStore.cats, mittens, mrSnibbley]
petStore.dogs = [...petStore.dogs, snoopy, kujo]


window.petStore = petStore
