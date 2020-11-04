const myCoolArray = [1,2,3,4,5,6]

const squaresArray = myCoolArray.map((element) => element * element)

console.log(squaresArray)


const students = [
    {
        id: 1,
        name: "roberto",
        codingExperience: 12,
        section: "G1"
    }, {
        id: 2,
        name: "ermal",
        codingExperience: 110,
        section: "G2"
    }, {
        id: 3,
        name: "evgeni",
        codingExperience: 20,
        section: "G1"
    }, {
        id: 4,
        name: "lidia",
        codingExperience: 5,
        section: "G2"
    }
]

const studentsIds = students.map((students) => student.id) //student.artist-name
console.log(studentsIds)

const g2Students = students.filter((student) => student.section === "G2")
//const g2Students = students.filter((student) => student.section === "G2").map((student) => student.name) to only grab names

console.log(g2Students)

