// examining the document object

/*
let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.charactetrset;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'))
})

console.log(val)

*/

// DOM SELECTORS :
/*
// 1.FOR SINGLE ELEMENT:-

//document.getElementById()
console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// change styling
document.getElementById('task-title').style.background = "#333";
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '15px';

// change content
document.getElementById('task-title').textContent = 'task list';
document.getElementById('task-title').innerText = 'my name';
document.getElementById('task-title').innerHTML = "<span style= 'color:red'>Task List</span>";
// we can do all of the above things by assigning it to a variable.

const taskTitle = document.getElementById('task-title');

taskTitle.className = 'title';

// DOCUMENT.QUERYSELECTOR()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color ="red";
document.querySelector('ul li').style.color = "blue";

// selecting pseudo selector:

document.querySelector('li:last-child').style.color = "red";

document.querySelector('li:nth-child(3)').style.textContent = 'hello';

document.querySelector('li:nth-child(even)').style.background = '#ccc'; //only fetches the 1st odd or even
*/

// DOM SELECTOR FOR MULTIPLE ELEMENTS
/*
//document.getElementsByClassName -- it fetch the element globally

const items = document.getElementsByClassName('collection-item');

console.log(items);

console.log(items[0]);

items[0].style.color = 'red';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems);


// document.getElementsByTagName

const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis);
console.log(lis[0]);
lis[0].style.color='red';
lis[3].textContent = 'hello';

// convert HTML collection into array:

list = Array.from(lis);
// list.reverse();
list.forEach(function(li,index){
    console.log(li.className);
    li.textContent =`${index} : Hello`;
});

console.log(list);

// Node list: we do not have to convert it in the array.

const liitems = document.querySelectorAll('ul.collection li.collection-item');

liitems.forEach(function(item,index){
    item.textContent = `${index}: Hello`;
})

console.log(liitems);

// odd and even case:
const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function(li,index){
    li.style.background = '#ccc';
});

for(let i = 0;i<liOdd.length;i++){
    liOdd[i].style.background = '#f4f4f4';
}
*/

// TRAVERSING THE DOM:
/*
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


val = list;
val = listItem;

// get childNode:- it gives node list includes textNodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// get children element nodes:- gives HTML list not node list.
val = list.children;
val = list.children[1].textContent = 'hello';// children element we gonna use the most.

// children of childern:
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// first child
val = list.firstChild;

console.log(val);
*/


