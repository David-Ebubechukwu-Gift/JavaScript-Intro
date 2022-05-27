// const fruits = ["mango", "pear", "banana"]
// fruits.pop("pear")
// fruits.push("orange")

// const studentsName = ["Joshua", "Daniel", "Famva"]
// const studentsAge = [15, 12, 10]
// const studentsScore = [98, 77, 94]
// const studentsGenetype = ["AA", "AS", "AA"]
// const studentsHeight = [11, 14,17]
// const newArr = studentsName.concat(studentsAge).concat(studentsScore).concat(studentsGenetype).concat(studentsHeight)

// const customerName = "Daniel"
// const businessName = "Graph Stores"
// const comodityPurchased = "Doughnut"

// // == or === or < or > or <= or >=


// const profile = `
// studentsName: ${studentsName}
// studentScores: ${studentsScore} 
// `
// // How to implement Value
// let a = 2
// a++

// // Control Flow Loops

// //for(let a = 9; a>4; a--){
//  //   console.log("One AC is not working ")
// //}
// const students = ["Joshua", "Esther", "Peter", "Obed"]
// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }
// conditionals
// // If or Else
// const age = 18
// if(age < 13){
//     console.log("You Are A Child")
// } else if(age < 18){
//     console.log("You are a Teenager")
// } else if(age >= 18){
//     console.log("YOU are an Adult")
// }
const raining = true;
const thereIsLigth = false;
// if("raining = false && thereIsLigth = true"){
//     console.log("Then we'll go to work")
// } else {
//     console.log("We'll stay at home")
// }
// const age = 18
// let numberOfEggs

// age>=18 ? numberOfEggs = 2 : numberOfEggs = 1
// console.log(numberOfEggs)
// Objects
// const person = {
//     name: "Abigail",
//     age: 23,
//     gender: "Female",
//     dob: "4th March",
//     state: "Rivers",
//     children: {
//         firstChild: "Dave",
//         secondChild: "Joy",
//         thirdChild: "Samuel",
//         fourthChild: {
//             first: "Daniel",
//             second: "Gift"
//         }
//     }
// }
// person.name = "David"
// person.gender = "Male"
// console.log(person)
const students = [
    {
        name: "Joshua",
        score: 23
    },
    {
        name: "Esther",
        score: 44,
        grades: [
            "fail",
            "pass",
            "excellent"
        ]
    },
    {
        name: "David",
        score: 75,
    }
]
console.log(students[1].grades[2])