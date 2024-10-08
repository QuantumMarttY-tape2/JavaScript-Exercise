// Easy

// Q1

function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3,2))

// Q2

function hrtos(hour) {
    return hour * 3600
}

console.log(hrtos(2))

// Q3

function periRect(num1, num2) {
    return 2 * (num1 + num2)
}

console.log(periRect(3,2))

// Q4

function areaTri(num1, num2) {
    return num1 * num2 * 0.5
}

console.log(areaTri(3,2))

// Q5

function addString(string) {
    return string + 'blahblah'
}

console.log(addString('NO'))

// Q6

function sum100(num1, num2) {
    return num1 + num2 > 100
}

console.log(sum100(3,2))

// Q7

function lessoreq0(num) {
    return num <= 0
}

console.log(lessoreq0(3))

// Q8

function oppo(boolean) {
    return !boolean
}

console.log(oppo(true))

// Q9

function not0(num) {
    return num !== 0
}

console.log(not0(3))

// Q10

function remain(num1, num2) {
    return num1 % num2
}

console.log(remain(3,2))

// Q11

function isOdd(num) {
    return num % 2 === 1
}

console.log(isOdd(3))

// Q12

function booleaninteger(num) {
    return 1 - (num % 2) * 2
    // return num % 2 === 0 ? 1 : -1
    // return num % 2 ? 1 : -1
}

console.log(booleaninteger(3))

// Q13

function logged(str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED'
}

console.log(logged(3,2))

// Medium

// Q1

function filterOutFalsy(thing1, thing2) {
    return !thing1 ? thing1 : thing2
}

console.log(filterOutFalsy([true,'Dog'])) // The provided solution does not solve this case <--

// Q2

function arrLength(array) {
    return array.length
}

console.log(arrLength([1,2,3]))

// Q3

function lastElem(array) {
    return array[array.length - 1]
}

console.log(lastElem([1,2,3]))

// Q4

function arrSum(array) {
    let val = 0;
    for (let i = 0; i < array.length; ++i) {
        val += array[i]
    }

    if (val === 0) {
        return 'No values.'
    }

    return val
}

console.log(arrSum([1,2]))

// Q5

function progressiveSum(num) {
    return (1 + num) * num / 2
}

console.log(progressiveSum(10))

// Q6

function calcTime(num) {
    let ss = num % 60;
    let mm = (num - ss) / 60;

    if (ss < 10) {
        ss = '0' + ss
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    return mm + ':' + ss
}

console.log(calcTime(230))

// Q7

function getMax(array) {
    let max = array[0]
    for (let i = 1; i < array.length; ++i) {
        if (max < array[i]) {
            max = array[i]
        }
    }

    return max
}

console.log(getMax([1,2,3]))

// Q8

function reverseString(string) {
    // let reversedString = '';
    // Incrementing method
    // for (i = 0; i < string.length; ++i) {
    //     reversedString = string[i] + reversedString
    // }

    // Decrementing method
    // for (i = string.length - 1; i >= 0; --i) {
    //         reversedString += string[i]
    // }

    // Reverse property

    return string.split('').reverse().join('')
}

console.log(reverseString('Nope'))

// Q9

function convertToZeros(array) {
    // For loop
    // for (let i = 0; i < array.length; ++i) {
    //     array[i] = 0
    // }

    // array.fill
    // return new Array(array.length).fill(0)

    // array.map
    // return array.map(elem => {
    //     return 0
    // })

    return array.map(elem => 0)
}

console.log(convertToZeros([1,2,3]))

// Q10

function removeApples(array) {
    // For loop
    // newarr = [];
    // for (let i = 0; i < array.length; ++i) {
    //     if (array[i] !== 'Apple') {
    //         newarr.push(array[i])
    //     }
    // };

    // Array filter

    return array.filter(elem => elem !== 'Apple')
}

console.log(removeApples([1,2,'Apple']))

// Q11

function filterOutFalsy(array) {
    // For loop
    // let newarr = []
    // for (let i = 0; i < array.length; ++i) {
    //     if (array[i]) {
    //         newarr.push(array[i])
    //     }
    // }

    // Array filter
    return array.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

// Q12

function convertToBoolean(array) {
    // For loop
    // for (let i = 0; i < array.length; ++i) {
    //     array[i] = 0
    // }

    return array.map(elem => !!elem)
}

console.log(convertToBoolean(["", [], 0, null, undefined, "0"]))

// Hard

// Q1

function showRating(num) {
    let ratings = '';
    for (let i = 0; i < Math.floor(num); ++i) {
        ratings += '*';
        if (i !== Math.floor(num) - 1) {
            ratings += ' '
        }
    }
//  !Number.isInteger(rating)
    if (Math.floor(num) !== num && num < 1) {
        ratings += '.'
    }
    else if (Math.floor(num) !== num) {
        ratings += ' .'
    }

    return ratings
}

console.log(showRating(0.5))

// Q2

function sortLowToHigh(array) {
    return array.sort((a,b) => {
        return a - b
    })
}

console.log(sortLowToHigh([1,20,133,2000000,7]))

// Q3

function sortHighToLow(object) {
    return object.sort((a,b) => {
        return a.price - b.price
    })
}

console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}
]))

// Q4

// Promises

// Q5

// Website: https://jsonplaceholder.typicode.com/posts

async function postsByUser(uid) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json()

    const posts = result.filter(elem => elem.userId === uid)

    console.log(posts)
}

postsByUser(4)

// Q6

async function firstSixIncomplete(uid) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    const result = await promise.json()

    const posts = result.filter(elem => elem.userId === uid)

    const incomp = posts.filter(elem => elem.completed === false).slice(0, 6)

    console.log(incomp)
}

firstSixIncomplete(4)