//---------- 9/25/17 ----------

// var txt = 'Hello Monday';
// //console.log(txt[0]);
// for (var i = 0; i < txt.length; i++) {
//     console.log(txt[i]);
// }

// var name = 'Gerson Castillo';
// console.log(name.length);

// var str = '';
// var num = 10;
// for (var i = 0; i < num; i++) {
//     str += i + ', ';
// }

// str += i;

// console.log(str)


// function listNum(num){
//     for (var row = 1; row <= num; row++){
//         var rowNumbers = '';
//         for (var n = 1; n <= row; n++){
//             if (n < row) {
//                 rowNumbers += n + ', ';
//             } else {
//                 rowNumbers += n;
//             }

//        }
//        console.log(row + ': ' + rowNumbers);
//     }
// }
// listNum(10)

// //----- Teacher solution -----
// var str = ''
// var num = 10

// for (var i = 1; i <= num; i++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += i;
//     console.log(i + ' ' + str);
// }


// function countDown(num){
//     for (var row = 1; row <= num; row++){
//         if (row === 1 || row === 4 || row === 7) {
//             var rowNumbers = '';
//             for (var n = row; n >= 0; n--){
//                 if (n > 0) {
//                     rowNumbers += n + ', ';
//                 } else {
//                     rowNumbers += 'BLAST OFF!';
//                 }

//             }
//             console.log(row + ': ' + rowNumbers);
//         }
//     }
// }
// countDown(10);

// var name = 'Andrew';


//Get the middle character
// if (name.length % 2 === 1) {
//     console.log(name[Math.floor(name.length / 2)]);
// } else {
//     console.log(name.substring(name.length / 2 - 1, name.length / 2 + 1));
//}

// //Peter
// var name = 'peter';
// name = name.replace(name[0], name[0].toUpperCase())
// console.log(name);

// // PETER
// var name = 'peter';
// name = name.replace(name, name.toUpperCase())
// console.log(name);

// //PeTEr
// var name = 'peter';
// name = name.toLowerCase();
// name = name.replace(name[0], name[0].toUpperCase())
// name = name[name.length - 2].slice() + name[name.length - 2].toUpperCase()
// console.log(name);


// function verbing(str) {
//     if (str.length > 2) {
//         if (str[str.length - 3] === 'i'
//          && str[str.length - 2] === 'n'
//          && str[str.length - 1] === 'g') {
//              return str += 'ly';
//         } else {
//              return str += 'ing';
//         }
//     } return str;
// }

// console.log(verbing('test'));


// function mixUp(str1, str2) {
//     var str1_2ndLetter = str1[1];
//     var str2_2ndLetter = str2[1];
//     str1 = str1.slice(0, 1) + str2_2ndLetter + str1.slice(2);
//     str2 = str2.slice(0, 1) + str1_2ndLetter + str2.slice(2);
//     return str1 + ' ' + str2;
// }

// console.log(mixUp('dog', 'dinner'));

// function capitalLast (str) {
//     return str.slice(0, str.length - 1) 
//          + str[str.length - 1].toUpperCase();
// }
// console.log(capitalLast('Example'));

//Bobby Flay
// var fullName = 'GORDON RAMSEY';
// fullName = fullName.toLowerCase();
// fullName = fullName.split(' ');
// fullName = fullName[0].replace(fullName[0][0], fullName[0][0].toUpperCase()) + ' '
//          + fullName[1].replace(fullName[1][0], fullName[1][0].toUpperCase());

// console.log(fullName);

// function capName(fullName) {
//     fullName = fullName.toLowerCase();
//     fullName = fullName.split(' ');
//     var processedName = '';
//     for (var iName = 0; iName < fullName.length; iName++) {
//         processedName += fullName[iName].replace(fullName[iName][0], fullName[iName][0].toUpperCase());
//         if (iName != fullName.length - 1) {
//             processedName += ' ';
//         }
//     }
//     return processedName;
// }
// console.log(capName('barack hussein obama'));

// function nameCase(name) {
//     var theRest = name.toLowerCase();
//     var space = theRest.indexOf(' ');
//     var result = '';
//     while(space !== -1) {
//         var part1 = theRest.slice(0, space + 1); // 'Barack'
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//     }
//     result += theRest[0].toUpperCase() + theRest.slice(1);
//     return result;
// }
// console.log(nameCase('barack hussein obama'))

// function nameCase(name) {
//     var result = name[0].toUpperCase();
//     for (var i = 1; i < name.length; i++) {
//         if (name[i - 1] === " ") {
//             result += name[i].toUpperCase();
//         } else {
//             result += name[i].toLowerCase();
//         }
//     }
//     return result;
// }

// function XO(str) {
//     var xCount = 0;
//     var oCount = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === 'x') {
//             xCount++;
//         } else if (str[i].toLowerCase() === 'o') {
//             oCount++;
//         }
//     }
//     return xCount === oCount;
// }

// console.log(XO('XooXox'));

// function countVowels(str) {
//     var vowelCount = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === 'a' ||
//             str[i].toLowerCase() === 'e' ||
//             str[i].toLowerCase() === 'i' ||
//             str[i].toLowerCase() === 'o' ||
//             str[i].toLowerCase() === 'u') {

//                 vowelCount++;
//             }
//     }
//     return vowelCount;
// }

// console.log(countVowels('The quick brown fox jumped over the lazy dog.'));

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     while (str[0] === str[str.length - 1] && str.length > 1) {
//         str = str.slice(1, str.length -1);
//     }
//     if (str[0] === str[str.length - 1]) {
//         return true;

//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome('Racecar'));

// function mySubString(str, start, end) {
//     if (start > str.length) {
//         start = str.length - 1;
//     } else if (end > str.length || typeOf(end) === 'undefined') {
//         end = str.length - 1;
//     }
//     return str.slice(start, end);
// }

// console.log(mySubString('giraffe', 100));

// function myIncludes(str, letter) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(myIncludes('Awesome', 'w'));

// function makeTriangle(num) {
//     var triangle = '';
//     for (var row = 1; row <= num; row++) {
//         for (var hash = 1; hash <= row; hash++) {
//             triangle += '#';
//         }
//         triangle += '\n'
//     }
//     return triangle;
// }

// console.log(makeTriangle(10));

//---------- Tue 9/26/17 ----------

// function isPalindrome(word) {
//     var forward = word;
//     var reverse = '';
    
//     while (word.length >= 1) {
//         reverse += word[word.length - 1];
//         word = word.slice(0, word.length -1)
//     }
//     if (reverse === forward) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome('racecar'));

// function isPalindrome(word) {
//     var forward = word;
//     var reverse = '';
    
//     while (word.length >= 1) {
//         reverse += word[word.length - 1];
//         word = word.slice(0, word.length -1)
//     }
//     if (reverse === forward) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome('racecar'));

// var fruit = 0;
// var vegetable = 1;
// var meat = 2;
// var fish = 3;
// var side = 4;
// var drink = 5;


// var food = [['apple', 'banana', 'grape', 'strawberry', 'dragonfruit'], 
//             ['corn', 'celery', 'broccoli', 'spinach', 'beats'], 
//             ['chicken', 'pork', 'beef', 'duck', 'venison'], 
//             ['salmon', 'tuna', 'herring', 'bass', 'sardines'],
//             ['mashed potatoes', 'rice', 'mac & cheese', 'fries', 'noodles'],
//             ['lemonade', 'soda', 'water', 'juice']];

// console.log(food[fruit][Math.floor(Math.random() * 5)]);
// console.log(food[vegetable][Math.floor(Math.random() * 5)]);
// console.log(food[Math.floor(Math.random() * 2) + 2][Math.floor(Math.random() * 5)]);
// console.log(food[side][Math.floor(Math.random() * 5)]);
// console.log(food[drink][Math.floor(Math.random() * 4)]);

// function longestArr(arr1, arr2) {
//     if (arr1.length.length > arr2.length) {
//         return arr1;
//     } else if (arr1.length < arr2.length) {
//         return arr2;
//     } else {
//         return null;
//     }
// }

// console.log(longestArr(['pizza', 'french fries', 'soda'], ['basketball', 'football', 'soccer', 'baseball']));

// function middleElement(arr) {
//     if (arr.length % 2 === 1) {
//         return arr[Math.floor(arr.length/2)]
//     } else {
//         return 'Oops, there\'s no middle...'
//     }
// }

// console.log(middleElement([1, 2, 3, 4, 5, 6, 7, 8]));

// function sumArray(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([5, 10, 20]));

// function rangeWithStep(min, max, step) {
//     var arr = [];
//     if (typeof(step) != 'number') {
//         step = 1;
//     }
//     for (var i = min; i <= max; i += step) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log (rangeWithStep(2, 20, 3));

// function doubleTrouble(arr) {
//     newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
//     return newArr;
// }

// console.log (doubleTrouble([3, 4, 10, 15]));

// function arrayInsert(a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//         a1.splice(where + i, 0, a2[i])
//     }
// }

// function addTwoElements (arr, element1, element2) {
//     arr.push(element1);
//     arr.push(element2);

//     return arr;
// }

// console.log(addTwoElements([0, 1, 2, 3, 4, 5], 10, 12));

// function removeLastTwo(arr) {
//     arr.pop();
//     arr.pop();
//     return arr;
// }

// console.log(removeLastTwo([0, 1, 2, 3, 4, 5]));

// function everyThird(arr) {
//     var output = [];
//     for (var i = 2; i < arr.length; i += 3) {
//         output.push(arr[i]);
//     }
//     return output;
// }

// console.log(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));

// function lastToFront (arr) {
//     var last = arr.pop();
//     arr.unshift(last);
//     return arr;
// }

// console.log(lastToFront([0, 1, 2, 3, 4, 5]));

// var digits ='0123456789ABCDEFGHIJKL'

// function numToBase(num, base) {
//     console.assert(base <= digits.length, 'Base is too big')
//     if (num === 0) {
//         return '0';
//     }
//     var number = num
//     var result = []
//     while (number >= 1) {
//         result.unshift(hexDigits[number % base])
//         number = Math.floor(number / base)
//     }
//     return result.join('')
//   }
//   console.log(numToBase(64, 10));


// //code from yesterday
// function toBinary (num){
//     var number = num; 
//     var result = [];

//     while(number >= 1){
//         result.unshift(number % 2);
//         number = Math.floor(number/2);
//     }
//     return result;
// }

// console.log(toBinary(13));

// toBinary = (num)=>{
//     return num.toString(2)
// }
// console.log(toBinary(27));

// function binarytoDecimal(num) {
//     var ans = 0;
//     var a = num.toString();
//     for (var i = 0; i < a.length; i++) {
//      if (a[i] == '1')
//       ans += Math.pow(2, a.length - 1 - i);
//     }
//     return ans;
// }

// console.log(binarytoDecimal(11011));

//---------- Thu 9/28/17 ----------
//'c4q'[1] ==> '4';

//[1, 2, 3][2] ==> 3;

//key value pair together is called property
// in line below, quantity is key, 56 is value
// var o = {quantity: 56, name:'Gala'};

// //both lines below are equivalent
// console.log(o['quantity']);
// console.log(o.quantity);

// var apple1 = {quantity: 56, name: 'Gala'};
// var apple2 = {quantity: 99, name: 'Granny Smith'};
// var apple3 = {quantity: 1,  name: 'Pink Delicious'};
// var apples = [{quantity: 56, name: 'Gala'},
//               {quantity: 99, name: 'Granny Smith'},
//               {quantity: 1,  name: 'Pink Delicious'}];

// // function howManyApples(a1, a2, a3) {
// //     var total = a1.quantity + a2.quantity + a3.quantity;
// //     return total;
// // }

// function howManyApples(a) {
//     var total = 0;

//     return total;
// }

// console.log('Number of apples:', howManyApples(apple1, apple2, apple3));

//room reservations -------------------

// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     }
// ];
// //make the string exactly as long as "length"
// function padTo(str, len) {
//     if (str.length === len) {
//         return str;
//     } else if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         var spacesNeeded = len - str.length;
//         for (var i = 0; i < spacesNeeded; i++) {
//             str += ' ';
//             return str
//         }
//         /*
//             while (str.length < len) {
//                 str+= ' '; 
//             }
//             return str;
//         */
//     }
// }

// function padLeft(str, len) {
//     while (str.length < len) {
//         str = ' ' + str;
//     }
//     return str;
// }
// function whatsAvailable(rooms) {
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved) {
//             continue;
//         }
//         console.log(padTo(rooms[i].location, 14), padLeft(rooms[i].price, 2));
//     }
// }

// function showDetails(room) {
//     console.log('Location:', room.locations);
//     console.log('Price', room.price);
//     console.log('Max. Occupancy', room.maxOccupants);
//     console.log('Amenities:', bulletPoints(room.amenities));
// }

// function bulletPoints(list) {
//     return list + ':', '\n - ' + list.join('\n - ');
// }

// function reserve(which) {
//     rooms[which].reserved = true;
// }
// whatsAvailable(rooms);
// console.log('----------')
// var selected = 2;
// showDetails(rooms[selected]);
//room reservations----------------------
// Exercises objects Q1
// var recipe =  {
//     name: 'Pepporoni Pizza',
//     servings: 2,
//     ingredients: ['cheese', 'bread', 'tomato sauce', 'pepporoni']
// };

// function logIngredients (recipe) {
//     console.log('Name: ' + recipe.name);
//     console.log('Servings: ' + recipe.servings);
//     console.log('Ingredients:');
//     // for (var key in recipe) {
//     //     console.log(key);
//     // }
//     for (var i = 0; i < recipe.ingredients.length; i++) {
//         console.log(recipe.ingredients[i]);
//     }
// }

// logIngredients(recipe);


/* // Nick's code
    var recipe = {
    name: 'Mole', 
    servings: '2',
    ingredients:['cinnamon', 'cumin', 'cocoa'] }
    
    function logRecipe(object){
    for(var key in object) {
    if(key === 'ingredients'){
    console.log(key + ':')
    for(var i= 0; i < object[key].length; i++) {
    console.log(object[key][i])
    }
    } else {
    console.log(key + ': ' + object[key])
    }
    }
    }
    
    logRecipe(recipe)
*/

/* // Exercises objects Q2

    var recipe =  {
        name: 'Pepporoni Pizza',
        servings: 2,
        ingredients: ['cheese', 'bread', 'tomato sauce', 'pepporoni'],
    };

    function prettyLog (recipe) {
        recipe.ingredients = recipe.ingredients.join(' > ');

        console.log('Name:', recipe.name);
        console.log('Servings:', recipe.servings);
        console.log('Ingredients:', recipe.ingredients);
    }

    prettyLog(recipe);
*/

//for mutable things === tests if variables point to the same object
/* //Q5 & Q6
    var favBook = {
        title: 'Enders Game',
        author: 'Orson Scott Card',
        year: 1985,
        genre: 'Sci-fi',
        isAudioBook: true
    }

    function getProps(object) {
        var result = [];

        for (key in object) {
            result.push(key);
        }
        return result;
    }

    console.log(getProps(favBook));

    function getObjLength(object) {
        var result = 0;

        for (key in object) {
            result += 1
        }
        return result;
    }

    console.log(getObjLength(favBook))
*/

// var movies = [{
//     title: 'The Dark Knight',
//     director: 'Christopher Nolan',
//     isWatched: true
// }, {
//     title: 'Slumdog Millionaire',
//     director: 'Danny Boyle',
//     isWatched: true
// }, {
//     title: 'Life of Pi',
//     director: 'Ang Lee',
//     isWatched: false
// }, {
//     title: 'Interstellar',
//     director: 'Christopher Nolan',
//     isWatched: true
// }]

// function displayMovies(array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].isWatched) {
//             console.log('You already watched', array[i].title, 'directed by', array[i].director);
//         } else {
//             console.log('You need to watch', array[i].title, 'directed by', array[i].director);
//         }
//     }
// }

// displayMovies(movies);

// var task1 = {
//     description: 'Clean room',
//     completed: false
// }

// var task2 = {
//     description: 'Buy groceries',
//     completed: true
// }

// var todos = [task1, task2];

// function addToDo(desc) {
//     todos.push({
//         descreption: desc,
//         completed: false
//     });
// }

// function showToDos() {
//     for (var i = 0; i < todos.length; i++) {
//         console.log('Task: ' + todos[i].description, '\nCompleted: ' + todos[i].completed + '\n') ;
//     }
// }

// function completeToDo(index) {
//     todos[index].completed = true;
// }
// addToDo('Buy a boat');
// completeToDo(0);
// showToDos();

// function forceAllNum () {

// }

// function makeVowelsHyphens (s) {
//     var result = '';
//     if (typeof(s) != 'string') {
//         return undefined;
//     } else {
//         for (var i = 0; i < s.length; i++) {
//             if (s[i] === 'a' ||
//                 s[i] === 'e' ||
//                 s[i] === 'i' ||
//                 s[i] === 'o' ||
//                 s[i] === 'u') {
//                     result += '-'
//                 } else {
//                     result += s[i];
//                 }
//         }
//     }
//     return result;
// }

// console.log(makeVowelsHyphens('Tuesday is my favorite day'));


// function hasPropertyGeneric (bigO, littleP) {
//     for (key in bigO) {
//         if (key === littleP) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 }, 'tacos'));

// function convertVowelsGeneric (str, sub) {
//     var result = '';
//     if (typeof(str) !== 'string' || typeof(sub) !== 'string') {
//         return undefined; 
//     } for (var i = 0; i < str.length; i++) {
//         if (str[i] === 'a' ||
//             str[i] === 'e' ||
//             str[i] === 'i' ||
//             str[i] === 'o' ||
//             str[i] === 'u') {
//             result += sub
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(convertVowelsGeneric('tuesday is my favorite day', '*'));

// var vowels = 'aeiou';
// console.log(vowels.includes('This is a test'));


// convertVowels = (str)=>{
//     return str.replace(/[aeiou]/gi,'-')
// }
// console.log(convertVowels("today is my favorite day"));

// function hasPropertyTacos (loljk) {
//     for (var key in loljk) {
//         if (key === 'tacos') {
//             return true;
//         } else {
//             continue;
//         }
//     }
//     return false
// }

// console.log(hasPropertyTacos({ name: 'Cody', tacos: 'so many tacos' }));

// function forceAllNum (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) === 'number') {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }

// console.log(forceAllNum([1, 2, 'mountain dew']));

// function isAllNum (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) !== 'number') {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isAllNum([1, 2, 3, 4, 5]));
// console.log(isAllNum([1, 2, 'mountain dew']));

// function addOnlyNumbers (foo, bar) {
//     if (typeof(foo) === 'number' && typeof(bar) === 'number') {
//         return foo + bar;
//     } else {
//         return NaN;
//     }
// }

// console.log(addOnlyNumbers('fidget spinner', 22));

// function and(x, y) {
//     if (x === true && y === true) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(and('happy string', []));

/* //Greg's Code
    hasPropertyTacos = (loljk) => {
        //correction ```if (loljk.tacos !== undefined)```
        if (loljk.tacos) {
            return true
        }
        return false
    }
    hasPropertyTacos('i am not even an object')
    hasPropertyTacos({ name: 'Cody', tacos: 'so many tacos' })
*/

// function hasPropertyGeneric (bigO, littleP) {
//     for (key in bigO) {
//         if (key === littleP) {
//             return true;
//         }
//     }
//     return false;
// }
    
//  console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 }, 'tacos'));

//-------this week
// function add1(num) {
//     return num + 1;
// }

// function add2(num) {
//     return add1(add1(num));
// }

// function add3(num) {
//     return add1(add2(num));
// }

// function add4(num) {
//     return add1(add3(num));
// }

// function add5(num) {
//     return add1(add4(num));
// }

// function add6(num) {
//     return add1(add5(num));
// }

// function double(num) {
//     return num * 2;
// }

// function square (num) {
//     return num * num;
// }

// function doubleSquare (num) {
//     return square(double(num));
// }

// console.log(doubleSquare(2))

// function classyGreeting (firstName, lastName) {
//     return 'Welcome ' + firstName + ' ' + lastName;
// }

// function yell (str) {
//     return str.toUpperCase()
// }

// function yellClassyGreeting (firsName, lastName) {
//     return yell(classyGreeting(firsName, lastName));
// }
// console.log(yellClassyGreeting('Gerson', 'Castillo'));


/* Question 6
function removeDupes (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var dupe = i + 1; dupe < arr.length; dupe++) {
            if (arr[i] === arr[dupe]) {
                arr.splice(dupe, 1);
                removeDupes(arr);
            }
        }
    }
    return arr;
}

function concatAndRemoveDupes (arr1, arr2) {
    arr1 = removeDupes(arr1);
    arr1.push(undefined);
    arr2 = removeDupes(arr2);
    return arr1 + arr2;
}
var array1 = [0, 1, 2, 3, 0, 0 , 2, 1, 4, 3, 5, 4, 4, 5, 2, 1]
var array2 = [6, 7, 6, 7, 8, 6 ,6 ,7 ,8, 9, 10, 8, 8, 9, 9, 9]
console.log(concatAndRemoveDupes(array1, array2));
*/

//callback functions
// var forEachElement = function (arr, initialValue, callback) {
//     var v = initialValue;
//     for (var i = 0; i < arr.length; i++) {
//         v = callback(arr[i], v)
//     }
//     return v;
// }

// var add = function (a, b) {
//     return a + b;
// }

// forEachElement([1, 2, 3, 4, 5], 0, add);

/* Q1
    //Create a function logEachElem that takes an array as an argument, and uses 
    //the forEachElm method (below) to log each element of the array.

    function forEachElem(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }

    // My answer below----
    function forEachElem(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }

    function logEachElem (arr) {
        forEachElem (arr, console.log);

    }

    arr = [0, 1, 2, 3, 4, 5];

    logEachElem(arr);
    end of Q1
*/

 /* //Q2
    Create a function logArrTypes that uses the forEachElem method to 
    log each array element followed by its type. For example:

    var mixedArr = [1, 'cat', true]
    logArrTypes(mixedArr)
    // will log: 
    // 1 is a number
    // 'cat' is a string
    // true is a boolean

    function forEachElem(arr, callback){
        for (var i = 0; i < arr.length; i++) {
            callback(arr[i])
        }
    }
    //My answer below
*/

// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// }
// function logType(arg) {
//     console.log(arg + ' is a ' + typeof(arg));
// }
// function logArrTypes(arr) {
//     forEachElem(arr, logType);
// }

// logArrTypes([15, 'Hello', true, ['Sandwhich', 'Fries', 'Soda'], {tile: 'The Hunger Games'}]);

// var sec = 1;
// function logSec() {
//     console.log(sec);
//     sec += 1;
// }
// setInterval(logSec, 1000);

/**
function conservativeSpender(balance)  {
    return balance > 100
}
  
  function liberalSpender(balance) {
    return balance > 10
}
  
  function horribleSaver (balance) {
    return balance > 0
}

function shouldIBuyThis (balance, callback) {
    if (callback(balance)) {
        return 'Sure! I\'ve got the money!';
    } else {
        return 'Nope! Gotta keep my savings up!';
    }
}


// console.log(shouldIBuyThis(25, conservativeSpender));
// */

// /**
//  * @function smartherShouldIBuyThis
//  * @param {number} balance {money left in account}
//  * @param {number} price {price of item}
//  * @param {function} callback {}
//  */
// function smarterShouldIBuyThis (balance, price, callback) {
//     if (callback(balance - price)) {
//         return 'Sure! I\'ve got the money!';
//     } else {
//         return 'Nope! Gotta keep my savings up!';
//     }
// }

// console.log(smarterShouldIBuyThis(1000, 950, liberalSpender));

// function map(arr, func) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         result.push(add4(arr[i]));
//     }
//     return result;
// }
// function add4(num) {
//     return num + 4;
// }

// function sort (arr) {
//     return arr.sort()
// }

// function middleElement (arr) {
//     newArr = [];
//     if (arr.length % 2 === 0) {
//         newArr.push(arr[arr.length/2 - 1]);
//         newArr.push(arr[arr.length/2]);
//         return newArr
//     }
//     else {
//         newArr.push(arr[Math.floor(arr.length/2)])
//         return newArr;
//     }
// }

// function median (arr) {
//     arr = sort(arr);
//     arr = middleElement(arr);
//     if (arr.length === 2) {
//         return (arr[0] + arr[1]) / 2;
//     } else {
//         return arr[0];
//     }
// }
// var array = [9, 2, 5, 3, 7, 6, 8, 1, 4];

// console.log(median(array));

// var readline = require('readline');
// var rl = readline.createInterface({ 
//     input: process.stdin, 
//     output: process.stdout 
// })


// var sum = 0
// rl.on('line', function(input) {
//     var num = Number(input)
//     if (!isNaN(num)) {
//         sum += num;
//         console.log('your total is: ' + sum) 
//     } else {
//         console.log('Please enter a number');
//     }
// })


var readline = require('readline');
var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
})


rl.on('line', function(input) {
    var sum = 0;
    var arr = input.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += arr[i];
        }
    }
    console.log(sum);
})

