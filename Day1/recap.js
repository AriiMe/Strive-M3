/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
let a = 3;
let b = 3;
let sum = a + b;
function sumOfTwo() {

    if (a === b) {
        return sum * 3;
    } else
        return sum;
};



/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkTheNumba(a, b) {
    const sum = a + b;
    if ( sum === 50 || a === 50 || b === 50) {
      return true;
    } else {
      return false;
    }
  }
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removeChar(string, remove) {
    let newArray = string.split("");
    newArray.splice([remove], 1);
    return newArray.join("");
  }

  function removeCharacter (str, num){
      //let str1 = str.substr(0,num)
      //let str2 = str.substr(num)
      console.log(str.substr(0,num -1).concat(str.substr(num)))
  }

  removeCharacter('Hello', 2);
/*
4)
 Create a function to find the largest of three given integers.
*/
let largestArray = [1, 2, 3,];
let largest= 0;

function findLargestOfThree(){
    for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=largestArray[i];
    }
}

}







/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/



function between(x, y, min, max) {
    x >= min && x <= max;
    y >= min && y <= max;
  }
  
  if (between(x, 40, 60)) {
    
  }else(between(y, 70, 100))
      return;
  


/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

function createStringCopiesXTimes(string, numberOfTimes) {
    let stringArray = [];
  
    for (let i = 0; i < numberOfTimes; i++) {
      stringArray.push(string);
    }
  
    return stringArray.join("");
  }

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function displayName(s){
    if(s === "Los"){
        return s + "Angeles";
    }else if(s === "New"){
        return s + "York";
    }else{
        return " ";
    }
}

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

let arrayeet=[1, 2, 3];
let sumOfArray=0;

function arraySum(){
    for(let i=0; i<arrayeet.length; i++){
        sumOfArray+=arrayeet[i];
    }
    return sumOfArray;
}




/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

 let arrayidk = [3, 2, 4, 7, 8 , 9, 46, 4554];

 function arrayNotContain(arrayidk) {
    return ((arrayidk[0] !== 1 || arrayidk[1]!==1) || (arrayidk[0] !== 3 || arrayidk[1] !== 3)) 

    /*
    const contains = function (nums){
        if (nums/indexOf(1)) != -1 || nums.indexOf(3) == -1{
            return true
        } else {
            return false 
        }
    }
     */
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/
function findOneOrThreeReverse(array) {
    for (let i = 0; i < array.length; i++) {
      if (findOneOrThreeReverse === false) {
        return findOneOrThreeReverse;
      } else {
        if (array[i] === 1 || array[i] === 3) {
          findOneOrThreeReverse = false;
        } else {
          findOneOrThreeReverse = true;
        }
      }
    }
    return findOneOrThreeReverse;
  }

/*
11)
Create a function to find the longest string from a given array of strings.
*/

function findTheLongest(stringOfArrays) {
    for (let i = 0; i < stringOfArrays.length; i++) {
      if (stringOfArrays[i].length > findTheLongest.length) {
        findTheLongest = stringOfArrays[i];
      }
    }
    return findTheLongest;
  }

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
    function findAngleType(numOfDegrees) {
  if (numOfDegrees > 0 && numOfDegrees < 90) {
    findAngleType = "Acute Angle";
  } else if (numOfDegrees === 90) {
    findAngleType = "Right Angle";
  } else if (numOfDegrees > 90 && numOfDegrees < 180) {
    findAngleType = "Obtuse Angle";
  } else if (numOfDegrees === 180) {
    findAngleType = "Straight Angle";
  } else {
    findAngleType = "Angle was more than 180 degrees";
  }
  return findAngleType;
}

/*
13)
Create a function to find the index of the greatest element of a given array of integers
14)

*/

const isPositiveAndNegative=(num1, num2)=>{

    return num1<0 && num2>0 || num1>0 && num2<0 ? true : false;
       
}
/*
Create a function to get the largest even number from an array of integers.
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function checkForFiddy(idk1, idk2) {
    if (idk1 === 50 || idk2 === 50 || idk1 + idk2 === 50) {
      return true;
    }  else {
      return false;
    }
  }

/*
16)Create a function to check from two given integers, whether one is positive and another one is negative.
*/
 function positiveOrNegative(x, y){
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}  

/*

17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function createString(firstChar, lastChar){
    
    
    if (str.lenght<3){
        return str.toUpperCase()
        }
        return str = str.concat((str.slice(0,4).toLowerCase()), (str.slice(4)).toUpperCase)
    
}


/*
18)
*/

const sumOfTwo = (a,b) => {
    let sum = a+b
    if(sum >= 50 && sum<= 80){
        return 65
    }else{
        return 80
    }
}

/*
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
function factors(numb) {
    let str ='';
    if(numb % 3===0 ){
         str = str + 'Diego';
    }if (numb % 5===0 ){
        str = str + 'Riccardo';

    }if (numb % 7===0 ){
        str = str + 'stefano';

    }
    if(str.length===0){
        return String(numb);

    }
    return str;



}
console.log('#19',factors(15))


/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const acronym = (phrase) =>{
    out = []
    phrase.split(" ").forEach((element)=>{
        out.push(element.toUpperCase()[0])
    })
    return out.join("")
}
 console.log(acronym("British Brodcasting Corporation"))

/*
let first = 1;
let next = 1;

for(i=1; i<10; i++){
let fibo = firts + next;


}




 fibonacci(4)   .--------> 2 + 1 = 3
      |          /               |
      '--> fibonacci(3) + fibonacci(2)
            |    ^           
            |    '----------- 2 = 1 + 1 <----------.
1st step -> |                     ^                |
            |                     |                |
            '---->  fibonacci(2) -' + fibonacci(1)-'

            */