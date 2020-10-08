console.log("Hello Exercises!");

//Write a function that concatenates two arrays by using spread operator.
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6]; 
const concatArrays = (arr1, arr2) => [...arr1,...arr2]
console.log(concatArrays(arr1, arr2));

//Write a function that concatenates two objects by using spread operator.
const user = {
    id: 123,
    name: 'Titi Testescu'
}
const additionalinfo = {
    address: "champs elysees",
    zip: 75008
}
const concatObj = (user, additionalinfo) => { return {...user, ...additionalinfo} }
console.log(concatObj(user, additionalinfo));

//Write a JavaScript program to reverse the order of the characters in the string.
let str = "apples";
const reverseStr = str => [...str].reverse().join('');
console.log(reverseStr(str));

//Write a lambda function that takes two aguments, one specifying a name and the second one specifying a course name, and displays "Hello, [name] ! Welcome to the first class of the course [courseName]".
const name = 'Cristina';
const course = 'React Training';
const hello = (name, course) => `"Hello, ${name} ! Welcome to the first class of the course ${course}`
console.log(hello(name, course));

//Write a function called getFruits that accepts three arguments and displays a text like: Fruits: Lime, Orange and Kiwi. 
//Call the function and provide its arguments by spreading the values of an already defined array.
fruits = ["Lime", "Orange", "Kiwi"];
const getFruits = (first, second, third) => `Fruits: ${first}, ${second} and ${third}`
console.log(getFruits(...fruits));

//Write a JavaScript program to capitalize the first letter of every word in a string. Words are delimited by space.
const sentence = "anna has apples";
const capitalize = sentence => sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
console.log(capitalize(sentence));

//Write a JavaScript program to create an object composed of the properties the given function returns falsey for. 
//The function is invoked with two arguments: (value, key)
const falsey = (obj, fnc) => Object.keys(obj)
                                .filter(k => fnc(obj[k], k))
                                .reduce((acc, k) => ((acc[k] = obj[k]), acc), {}); //flatten

console.log(falsey(user, v => v  == 123));

//Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) === false.
const falsey2 = (predicate, arr3) => arr3.filter(x => !predicate(x));
console.log(falsey2(x => x > 5, [1,3,5,7,9]));

//Write a JavaScript program to redirect to a specified URL
const redirect = url => window.location.assign(url);
redirect("http://ceva/com");
//Write a JavaScript program to chunk an array into smaller arrays of a specified size.
const chunkArray = (arr, chunk) => arr.length ? [arr.slice(0, chunk), ...chunkArray(arr.slice(chunk), chunk)] : [];
console.log(chunkArray([1,2,3,4,5,6,7], 2));
//Write a JavaScript program to get the first key that satisfies the provided testing function. Otherwise return undefined.
const obj = {
    user1: { name: 'User1', access: true },
    user2: { name: 'User2', access: false }
}
const hasAccess = (obj, filterQuery) => Object.keys(obj).find(key => filterQuery(obj[key], key, obj));
console.log(hasAccess(obj, user => user['access']));

//Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.
//name1=value1;name2=value2
var allCookies = headerStr => headerStr.split(";").map(element => element.split("="))
                                .reduce((obj, arr) => { obj[arr[0]] = arr[1]; return obj; }, {});
console.log(allCookies("name1=value1;name2=value2"));

//https://jsonplaceholder.typicode.com/posts  returns a JSON-formatted response containing a list of blog posts. 
//Make use of fetch API in order to call this endpoint and dynamically create an HTML list which is then appended 
//to the body of the DOM. The list should display the title and content of each post.

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
            let postsh = document.createElement("DIV");
            data.forEach((user) => {
                const { userId, id, title, body} = user
                console.log(body);
                    let posts=document.createElement('ul'); 
                    posts.innerHtml =`
                        <li> Title : ${title}</li>
                        <li> Content : ${body} </li>                         
                      `;
                      postsh.appendChild(posts);
                    });
                });