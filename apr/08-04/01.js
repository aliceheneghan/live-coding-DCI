const stringToReverse = 'this is our teacher'

function reverseString(string) {

    const arrayOfString = string.split(' ') // split the initial string into an array

    console.log('initial string splitted:', arrayOfString)
    let result = [] // temp array to store results of reversing 

    for (let i = 0; i < arrayOfString.length; i++) {

        const word = arrayOfString[i].split('') // split each item of the already splitted array
        console.log('word is:', word)
        result.push( word.reverse())// add the splitted word into another array
        // const reversed = word.reverse()
        // console.log('word reversed is:', reversed)
    }


    // result array contains splitted words and reversed
    let finalString = '' // create a string to store the final result

    for ( let i = 0; i < result.length; i++) {
        
        finalString += result[i].join('') // join each item of the array 
        
        if (i < result.length) finalString += ' '
    }

    console.log('result:', finalString)
}

reverseString(stringToReverse)