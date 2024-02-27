
// Regex made to detect if a character, number o symbol repeats. 
let regex = /(?=^[^]+$)(.)+.*\1.*/;


// function that takes an string as parameter and splits it at every whitespace and joins it to then match with the regex, 
// if it returns null then there's no match meaning the string is unique.

function isUnique(string){
    return  string.split(" ").join("").match(regex) === null? "Is unique" : "not unique"
}

// Other possible solution would be using 2 cycles
// the first cycle holds in i a values that represents an index in the string(a character)
// while the second cycle takes values that represent the following characters and compares both,
// if theres a match the string is not unique


function isUniqueCycle(string){

for(let i=0; i<string.length-1; i++){
    for(let j=i+1; j<string.length; j++){
        if(string[i]===string[j]){
            return "the string is not unique"
        }
    }

}
    return "the string is unique"
}
