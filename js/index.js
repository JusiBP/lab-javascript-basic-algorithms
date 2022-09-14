console.log ("i'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Josep";
console.log ("The driver's name is " + hacker1);

let hacker2 = "Pep";
console.log ("The Navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}


// Iteration 3: Loops
let hackerName = ""
for (let i = 0 ; i<hacker1.length ; i++) {
    hackerName = hackerName + hacker1[i]
    
}

let hackerNameUpper = hackerName.toUpperCase()

console.log(hackerName)
console.log(hackerNameUpper)

let hackerNameUpperSpaces = ""
for (let i = 0 ; i<hackerNameUpper.length ; i++) {
    hackerNameUpperSpaces = hackerNameUpperSpaces + " " + hackerNameUpper[i]
    
}

console.log(hackerNameUpperSpaces)

//-------------------------------------

let hackerNameReverse = ""
for (let i = hacker2.length - 1 ; i>=0 ; i--) {
    hackerNameReverse = hackerNameReverse + hacker2[i]; 
}

console.log(hackerNameReverse)


// -------------------------------------

// Driver
hacker1 = "Josep" 
// Navigator
hacker2 = "Pep"

if (hacker1 == hacker2){
    console.log("What?! You both have the same name?")
}

for ( let i = 0 ; i<hacker1.length ; i++){
    if (hacker1[i]<hacker2[i]){
        console.log("The driver's name goes first.")
        break;
    }
    else if (hacker1[i]>hacker2[i]) {
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
}

