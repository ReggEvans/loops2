// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(arr) {
    var sqArray = []
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        num *= num
        sqArray.push(num)
    }
    return sqArray
}

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.

var nicer = function(sentence) {
    var newArray = sentence.split(" ")
    var nicerArray = []
    for (var i = 0; i < newArray.length; i++) {
        var words = newArray[i]
        if (words != "heck" && words != "dang" && words != "crappy" && words != "darn") {
            nicerArray.push(words)
        }
    }
    var niceSentence = nicerArray.join(" ")
    return niceSentence
}

// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 

var capitalize = function (str) {
  return str.substring(0, 1).toUpperCase() + str.slice(1)
};


var capitalizeAll = function(sentence) {
    var splitSentence = sentence.split(" ")
    var capitalArray = []
    for (var i = 0; i < splitSentence.length; i++) {
        var words = splitSentence[i]
        capitalArray.push(capitalize(words))
	}
    var capSentence = capitalArray.join(" ")
	return capSentence
}


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var properSentences = function(sentence) {
    var splitSentence = sentence.split(". ")
    var capitalArray = []
    for (var i = 0; i < splitSentence.length; i++) {
        var words = splitSentence[i]
        capitalArray.push(capitalize(words))
	}
    var capSentence = capitalArray.join(". ")
	return capSentence
}


// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function(str) {
    var newWord = ""
    newWord = str.substring(0, str.length/2) + "fun" + str.substring(str.length/2)
    return newWord
    
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 

var split = function(sen, del) {
    var newArr = []
    var word = ''
    for (var i = 0; i < sen.length; i++) {
        if (sen[i] !== del) {
            word += sen[i]
        }
        else {
        	newArr.push(word)
            word = ''
        }
    }
    newArr.push(word)
	return newArr
}

// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.

var pipeline = function(startVal, func1, func2) {
    var result = (func2(func1(startVal)))
    return result
}

