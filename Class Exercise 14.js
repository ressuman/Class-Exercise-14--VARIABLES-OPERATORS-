//ARITHMETRIC OPERATIONS


let mangoes=25
let oranges=14
let avocados=9
let strawberries=19
let pineapples=3
let apples=7
let grapes=32
let pears=23

//ADDITION
console.log(mangoes+avocados+pineapples+grapes)
console.log(oranges+strawberries+apples+pears)
console.log(mangoes+oranges+strawberries+pineapples+grapes+pears)
console.log(oranges+avocados+pineapples+apples+pears+mangoes)
console.log(mangoes+oranges+avocados+strawberries+pineapples+apples+grapes+pears)

//SUBTRACTION
console.log(mangoes-avocados-pineapples-grapes)
console.log(oranges-strawberries-apples-pears)
console.log(mangoes-oranges-strawberries-pineapples-grapes+pears)
console.log(oranges-avocados-pineapples-apples-pears-mangoes)
console.log(mangoes-oranges-avocados-strawberries-pineapples-apples-grapes-pears)

//MULTIPLICATION
console.log(mangoes*avocados*pineapples*grapes)
console.log(oranges*strawberries*apples*pears)
console.log(mangoes*oranges*strawberries*pineapples*grapes*pears)
console.log(oranges*avocados*pineapples*apples*pears*mangoes)
console.log(mangoes*oranges*avocados*strawberries*pineapples*apples*grapes*pears)

//DIVISION
console.log(mangoes/avocados/pineapples/grapes)
console.log(oranges/strawberries/apples/pears)
console.log(mangoes/oranges/strawberries/pineapples/grapes/pears)
console.log(oranges/avocados/pineapples/apples/pears/mangoes)
console.log(mangoes/oranges/avocados/strawberries/pineapples/apples/grapes/pears)

//BODMAS
console.log(mangoes+avocados-pineapples*grapes)
console.log(oranges/strawberries+apples-pears)
console.log(mangoes*oranges/strawberries+pineapples-grapes*pears)
console.log(oranges/avocados+pineapples-apples*pears/mangoes)
console.log(mangoes+oranges-avocados*strawberries/pineapples+apples-grapes*pears)

//MODULUS
console.log(mangoes%avocados%pineapples%grapes)
console.log(oranges%strawberries%apples%pears)
console.log(mangoes%oranges%strawberries%pineapples%grapes%pears)
console.log(oranges%avocados%pineapples%apples%pears%mangoes)
console.log(mangoes%oranges%avocados%strawberries%pineapples%apples%grapes%pears)

//PRE INCREMENT
console.log(+mangoes)
console.log(++oranges)
console.log(++avocados)
console.log(+strawberries)
console.log(++pineapples)

//POST INCREMENT
console.log(apples++)
console.log(grapes++)
console.log(pears++)
console.log(mangoes)
console.log(oranges++)

//PRE DECREMENT
console.log(--avocados)
console.log(--strawberries)
console.log(--pineapples)
console.log(-apples)
console.log(--grapes)

//POST DECREMENT
console.log(pears--)
console.log(mangoes--)
console.log(oranges--)
console.log(avocados--)
console.log(strawberries--)


//COMPARISON OPERATORS


//equal to(only value)
let hens=14
let cocks=24
let chicks=24
console.log(hens==cocks)
console.log(cocks==chicks)
console.log(chicks==hens)

let hen=14
let cock='24'
let chick="24"
console.log(hen==cock)
console.log(cock==chick)
console.log(chick==hen)

//identical(value and data type)
let goats=14
let cows='24'
let dogs=24.3
let fowls="24"
console.log(goats===cows)
console.log(cows===dogs)
console.log(dogs===goats)
console.log(cows===fowls)

//not equal to
let cow=15
let lions=4
let goat=4
console.log(cow!=lions)
console.log(cow!=goat)
console.log(lions!=goat)

//not identical
let lion='15'
let sheep=4
let tiger='4'
let cattle="15"
let donkey=19
console.log(lion!==sheep)
console.log(lion!==tiger)
console.log(lion!==cattle)
console.log(lion!==donkey)
console.log(sheep!==tiger)
console.log(sheep!==cattle)
console.log(sheep!==donkey)
console.log(cattle!==tiger)
console.log(donkey!==tiger)
console.log(cattle!==donkey)

//less than
let tigers=18
let donkeys=62
let mule=7
console.log(tigers<donkeys)
console.log(tigers<mule)
console.log(mule<donkeys)

//greater than
let horse=18
let horses=62
let mules=7
console.log(horses>horse)
console.log(horses>mules)
console.log(mules>horse)

//less than and equal to
let eagle=99
let eagles=44
let owl=10
let owls=99
console.log(owls<=owl) 
console.log(eagle<=owls)
console.log(owl<=owls)
console.log(eagles<=eagle)
console.log(eagle<=owl)
console.log(eagles<=owl)
console.log(eagles<=owls)

//greater than and equal to
let elephant=-13
let gorilla=26
let elephants=0
let gorillas=-13
console.log(elephant>=gorilla)
console.log(elephant>=elephants)
console.log(elephant>=gorillas)
console.log(gorilla>=elephants)
console.log(gorilla>=gorillas)
console.log(elephants>=gorillas)
console.log(gorillas>=elephant)


//LOGICAL OPERATORS

console.log(elephant == elephants && gorilla == gorillas)
console.log(elephant == elephants || gorilla == gorillas)
console.log(!true)


//STRING OPERATORS

console.log('Justice is '+ gorilla +' years old')
console.log('Justice is '+ gorillas +' years old')
console.log('Justice is '+ elephants +' year old')


//VARIABLES(CONSOLE.LOG)

var feature3="Built-in thermal protector."
console.log(feature3)

let feature6="AISI 304 fabricated shaft."
console.log(feature6)

const feature9="Protection class:IPX4."
console.log(feature9)

var maxHead=-110
console.log(maxHead)

let maxPower=-3000
console.log(maxPower)

const maxInlet=3000
console.log(maxInlet)

var minSuction=1.4
console.log(minSuction)

let minImmersion=-50.65
console.log(minImmersion)

const maxAC=9.23
console.log(maxAC)

var AC_DC=false
console.log(AC_DC)
