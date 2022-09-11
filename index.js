/*
 Write a function that determines if any of its arguments evaluates to true.
[true, false] => true
[1, 0, "string"] => false
*/

function tellIfTrue(){
    let isTrue = false
    Object.values(arguments).map(element => {
        element === true && (isTrue = true)
    })
    return isTrue
}
console.log(tellIfTrue(1,0, "string"))

//  Write a function that returns a list of even integers from 0 to n inclusive.
// n = 7 => [0, 2, 4, 6]

function returnsEven(n) {
    let arr = []
    for(let i = 0; i <= n; i++){
        i % 2 === 0 && arr.push(i) 
    }
    return arr
}

//console.log(returnsEven(7))

/*
 Write a function that counts how many times each item occurs in a list.
["egg", "egg", "soap", "soap", "soap"] => {"egg" => 2, "soap" => 3}
*/

const array = ["egg", "egg", "soap", "soap", "soap"]
function countItems(arr){
    let sumObj = {}
    for (const element of arr){
          sumObj[element] ? sumObj[element] += 1 : sumObj[element] = 1
    }
    return sumObj
}

//console.log(countItems(array))

/*
# Write a function that returns true if a student went to that college
alison = { college: :cambridge, year: 2008 } :cambridge => true
brian = { college: :oxford, year: 2005 } :cambridge => false
chris = { college: :cambridge, year: 2002 } :oxford => false
danni = { college: :cambridge, year: 2004 } :cambridge => true

*/ 
const danni = {
     college: "cambridge", 
     year: 2004
 }
function hasCollege(student, nameOfCollege){
    let isAtCollege = false
    student.college === nameOfCollege && (isAtCollege = true)
    return isAtCollege
}
//console.log(hasCollege(danni, "cambridge"))

/*
# Update that function to return true if a student attended college during set start and end date
alison = { college: :cambridge, year: 2008 } => false
brian = { college: :oxford, year: 2005 } => false
chris = { college: :cambridge, year: 2002 } => false
danni = { college: :cambridge, year: 2004 } => true

*/

const john = {
    college: "yale", 
    startYear: 2004,
    endYear: 2008
}
function hasCollegeAndYears(student, nameOfCollege, startYear, endYear){
    let isAtCollege = false
    if(student.college === nameOfCollege 
        && startYear === student.startYear
        && endYear === student.endYear
        ){
       isAtCollege = true
    }
   return isAtCollege
}
//console.log(hasCollegeAndYears(john, "yale", 2004, 2008))

/*
# Write a function that returns the integer value of a string argument
"2" => 2
"10.0" => 10
"hello 15" => 15
*/

function toInt(string){
    const replaced = string.replace(/[^0-9.]/g,'')
    const int = parseInt(replaced)
    return int
}
 //console.log(toInt("Hello 15"))