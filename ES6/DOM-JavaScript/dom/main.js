/* 
Multiple Files and Scope
If you add multiple JavaScript files to the same HTML file they will, by default, all be able to see each other's code. If you declare a variable or function in one of the files then the other file will be aware of them. All the code from each of the files will be loaded into the same global scope.

The exception to this is if you are using ES Modules. This is a fairly new feature added in the last few years. You can add type="module" to your initial JavaScript file <script> tag, and then it will be able to import other files as modules. Each JavaScript file module will have it's own scope.

We will be talking about modules later in the semester as our code becomes more complex.

*/

/* 

Document Object Model
When the browser reads an HTML file it creates an Object model representing all the content on the page. It builds a tree structure that helps it to know which elements are nested inside each other, which elements are parents and which are children.

This is a visual representation of how a browser sees the page. You can think of each indent as the start of a new branch in the DOM tree. Inside the html object, there are two children - head and body. Inside the head are two more children - title and link. title has a child, which is #text. The link element has no children. Inside body > header > h1 there are two children - img and #text. The img and the #text are siblings.

doctype
html
  head
    title
      #text
    link
  body
    header
      h1
        img
        #text
    nav
      a
        #text
      a
        #text
      a
        #text
    main
      h2
        #text
      p
        #text
    footer
      p
        #text

*/

/* 
You need to be able to visualize every page in this manner. Understand when you are searching for things or altering things that you will be working with parents, children, and siblings.

One of the things that sets NodeJS and JavaScript in the browser apart is the DOM. NodeJS does NOT have access to the DOM.

The DOM is NOT part of core JavaScript.

The DOM is an add-on that browsers get as part of the window object.

Everything you do in the browser, which is not part of core JavaScript, exists inside the window object. Because of this, You can write window as the first step in accessing an Object in the DOM OR you can omit it.


*/

// window.alert("Hello user");

/* 
Nodes and Elements
Each item in the DOM diagram represents a Node. There are several types of nodes, including ElementNode, TextNode, DocumentFragment, and Comment. Each has its own properties and methods, with some working across all types, while others are specific to Element nodes or Text nodes.
*/

/* 
Attributes
DOM elements can have attributes, which are accessible and modifiable in JavaScript. Attributes such as "id" in HTML correspond to properties like `id` in JavaScript. Some attributes use different property names in JavaScript, such as `className` for the `class` attribute because "class" is a reserved keyword. Custom attributes prefixed with `data-` are accessible via the `dataset` property.
*/

/* 
The Document Object
The `document` object is part of the `window` object and provides methods and properties for interacting with HTML and CSS using JavaScript.
*/

// Example: Selecting an element and logging its text content
let title = document.querySelector("h1");
if (title) {
  console.log(title.textContent);
}

/* 
TextNodes vs. ElementNodes
Nodes in the DOM can be TextNodes or ElementNodes. Methods and properties can behave differently depending on the node type. For example, an element like `<div>` is an ElementNode, but the text within it is a TextNode.
*/

// Selecting elements using different methods
let p = document.querySelector("p"); // Selects the first <p> element
let ps = document.querySelectorAll("p"); // Selects all <p> elements and returns a NodeList

/* 
querySelector vs. querySelectorAll
- `querySelector` returns the first matching element.
- `querySelectorAll` returns a NodeList of all matching elements, which can be looped through.
*/

let element = document.querySelector("cssSelector"); // Returns a single element node
let nodes = document.querySelectorAll("cssSelector"); // Returns a NodeList of elements
let element2 = document.getElementById("id"); // Returns a single element node by ID

// Selecting an element using a class selector
let anchor = document.querySelector(".main"); // Selects the first element with the class "main"

// Selecting an element by ID
let foot = document.getElementById("footer"); // Selects the element with the ID "footer"

// Example: Selecting all paragraphs inside an element with ID "main"
let paragraphs = document.querySelectorAll("main p");

// Looping through NodeList using forEach to update text content
paragraphs.forEach((p, index) => {
  p.textContent = `Paragraph ${index} updated by the forEach loop`;
});

/* 
Methods for Getting Elements:
- `getElementsByTagName()` and `getElementsByClassName()` can also retrieve lists of elements, but they are used less frequently now in favor of `querySelector` and `querySelectorAll`.
*/

/* 
Parent, Child, and Sibling Relationships
- `someElement.parentElement`: Gets the parent of `someElement`.
- `someElement.childNodes`: Returns all child nodes, including text.
- `someElement.children`: Returns only child elements.
- `someElement.nextElementSibling` / `previousElementSibling`: Gets the next/previous sibling element.
*/

/* 
Adding HTML to the Page:
- Use `document.createElement()` and `document.createTextNode()` to create elements and text nodes.
- Methods like `append()` or `appendChild()` can insert these into the DOM.
*/

// Creating new elements and text nodes
let pNode = document.createElement("p");
let pNodeText = document.createTextNode(
  "This text was dynamically created with JavaScript"
);

// Example: Adding new content to the DOM
let indexMain = document.querySelector("main");
let indexHeader = document.createElement("div");
let indexContent = document.createElement("div");
let indexh2 = document.createElement("h2");
let indexP = document.createElement("p");
let indexP2 = document.createElement("p");
let indexImg = document.createElement("img");

// // Set content and attributes for the new elements
// indexh2.textContent = "Welcome to the Travel Blog"; // Set the text for the header
// indexP2.textContent = "Ipsum"; // Set the text for the second paragraph
// indexImg.src = "travel.jpg"; // Set the image source
// indexImg.alt = "Travel Blog logo"; // Set the alternative text for the image
// indexHeader.className = "header"; // Assign a class to the header div
// indexContent.className = "content"; // Assign a class to the content div

// Create a text node and append it to a paragraph
let lorem = document.createTextNode("Lorem");
indexP.append(indexImg, lorem); // Add the image and text node to the first paragraph
indexContent.append(indexP, indexP2); // Add paragraphs to the content div
indexHeader.append(indexh2); // Add the header to the header div

/* 
Note:
- Always check that elements exist before appending, as shown above, to avoid errors.
- Setting an element's `alt` attribute for images is good practice for accessibility.
- When creating elements dynamically, keep your code organized to maintain readability.
*/

/*
The HTML String Approach
The HTML String approach is the alternative to creating elements. Instead we are writing out the whole string and then asking the browser to do the work of parsing all the elements and appending them at the same time.
Here is the String approach for the same content.
*/

// // Select the main element first
// let main = document.querySelector("main");

// // Then you can update the innerHTML as intended
// let footer1 = document.querySelector("footer");

// let footerHtml = `<div class="header">
//     <h2>Some Heading</h2>
//   </div>
//   <div class="content">
//     <p><img src="./img/logo.png" alt="Company logo" /> Lorem.</p>
//     <p>Ipsum.</p>
//   </div>`;

// // Update the innerHTML of the selected main element
// main.innerHTML = footerHtml;

/* 
It is important to note that this approach is going to replace any content that is already inside of <main> and not just append it to the existing content.

*/

/* 
Updating and Removing HTML
Manipulating HTML can be done quite easily once you understand the parent-child-sibling relationship between Nodes and the difference between Element nodes and Text nodes.
Once you have found the ElementNode you need, then you can start to manipulate the content.
*/

/*let content = document.querySelector("p.first");
//find the first paragraph with the class "first".
content.textContent = "The new paragraph content";
//change the text inside the paragraph
let main = document.querySelector("main");
//find the main element
let p = document.createElement("p");
//create a new paragraph
p.textContent = "A new paragraph for the page";
//add some text inside the paragraph
main.appendChild(p);
//add the newly created paragraph as the last child of the main element
*/

/* 
It is important to note that both the append and the appendChild methods always inject the new child element or child textnode as the LAST child. It will always be added at the bottom of the parent element

*/

/* 
If you want to inject your new textnode or element in a location other than the last position, then you need to use the insertBefore(), insertAfter(), insertAdjacentElement(), insertAdjacentText(), or insertAdjacentHTML() methods. The insert before and after methods want a reference element as well as the child node to insert before or after. The insertAdjacent methods want a reference element plus one of four reference positions. Take this HTML as an example:

*/

/* 

<h2>Some heading</h2>
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
<p>Some more text</p>

If the <ul> is my reference element, I can inject my new element in one of the four positions:

before the <ul> starts beforebegin
after the <ul> starts but before the first <li> afterbegin
after the last <li> but still inside the <ul> beforeend
after the <ul> ends but before the <p> afterend
The four strings used as the position values are bolded in the list above.

referenceElement.insertAdjacentElement(position, childElement); //insert Element
referenceElement.insertAdjacentText(position, childTextNode); //insert textNode
referenceElement.insertAdjacentHTML(position, HTMLString); //parse string and insert

*/

/*
Side Effects of Appending:
It is worth noting, when you create an element with createElement or reference and element with querySelector or the other methods, then that element still exists whether it is just in memory or on the page.

let p = document.createElement('p'); //exists in memory
p.textContent = 'I exist!'; //p is still in memory only
let header = document.querySelector('header'); // exists on the page
let main = document.querySelector('main'); // exists on the page
let footer = document.querySelector('footer'); // exists on the page

When you call the append or appendChild or remove or removeChild methods you are actually MOVING the element. You are moving it from memory to the page, from the page to memory, OR from one location in the page to another.



header.append(p); //moved p from memory to inside header on page
main.append(p); //moved p from inside header to inside main
footer.append(p); //moved p from inside main to inside footer
footer.removeChild(p); //moved p from inside footer on page to in memoryheader.append(p); //moved p from memory to inside header on page
main.append(p); //moved p from inside header to inside main
footer.append(p); //moved p from inside main to inside footer
footer.removeChild(p); //moved p from inside footer on page to in memory

let copy1 = p.cloneNode(true); //creates a copy of p and includes anything it contained
let copy2 = p.cloneNode(true); //creates a copy of p and includes anything it contained
now we have p, copy1, and copy2 as three separate elements


Removing Content:
If you want to remove HTML that already exists we have a few options.

1. With the innerHTML property or the textContent property you can set the content of any element to an empty String.
let div = document.querySelector('div'); //find the first div on the page
let p = div.querySelector('p'); //find the first paragraph inside div

p.textContent = ''; //set the text inside the paragraph to empty
div.innerHTML = ''; //remove all html and text inside div. could also use .setHTML()


2. Using the remove() or removeChild() methods.

p.remove(); //will remove the paragraph from whatever its parent is.
div.remove(); //will remove div and everything it contains
p.parentElement.removeChild(p); //refer to the parent of the p and use removeChild to target what will be removed
div.removeChild(p); //remove the paragraph from it's parent div


Node Properties:
In the list below there are a series of property pairs. The first properties will return a NodeList or a single Node. Remember that Nodes can be element nodes, text nodes, or comments.

The second property will return a list of Element Nodes or a single Element Node.

node.childNodes v node.children
node.firstChild v. node.firstElementChild
node.lastChild v. node.lastElementChild
node.nextSibling v. node.nextElementSibling
node.previousSibling v. node.previousElementSibling
node.parentNode v. node.parentElement

These last three node properties return a single piece of information about the node.

node.nodeName; //returns the tagname, if an element node
node.nodeType; //returns the integer referencing the type of node. Eg: 1=element, 3=text
node.nodeValue; //returns the string inside a text node

Node Methods:


parentNode.appendChild(newNode); //add a new child node inside the parent
parentNode.removeChild(childNode); //remove the child from the parent
node.replaceChild(newNode); //replace one node with a new one
parentNode.contains(node); //checks if the node is a descendant of the parent
node.hasChildNodes(); //returns a boolean indicating if the node has child nodes
node.hasAttributes(); //returns a boolean if the node has attributes
parentNode.insertBefore(newNode, referenceNode); //inserts a new node into the DOM
immediately before the reference node
*/

/* 
Element Properties:
Here is a list of common properties that map to attributes in the HTML as well as some methods that you could use to manipulate the CSS classes assigned to an element.

let c = element.className; //get or set the value of the class attribute
one string with all the class names

let list = element.classList; //get the list of css classnames assigned to the element (a DOMTokenList)
element.classList.add(className); //add a new css class to the list
element.classList.remove(className); //remove a single css class from the list
element.classList.replace(oldClassName, newClassName);
element.classList.contains();
element.classList.toggle(className); //remove if exists, add if it doesn't exist

let nm = element.tagName; //retrieve the HTML element's tag name eg: P, LI, A, DIV

element.href = 'http://www.example.com';
element.src = 'http://www.example.com/photo.jpg';
element.id = 'bob';
element.title = 'mouseover text';
element.alt = 'alternate description for image'; //accessibility matters
element.style = 'display:none;'; // create an inline style. Not recommended.

Element Attributes:


There are a few specific methods for working with HTML attributes:

let main = document.querySelector('main'); //first main element on page
let img = document.querySelector('img'); //first image element on page
let mi = main.querySelector('main img'); //first image element inside main

mi.setAttribute('src', 'http://www.example.com/photo.jpg'); //set the image's src attribute
let title = mi.getAttribute('title'); //retrieve the value of the title attribute
let hasAlt = mi.hasAttribute('alt'); //boolean indicating if the img has an alt attribute
mi.removeAttribute('href'); //remove the href attribute if it exists


Dataset Properties:

Having the ability to create your own custom attributes can be a very useful tool and allow you to store things like product reference ids in the HTML. To address this need, HTML5 standardized an approach to inventing custom attributes - called dataset properties.

You are allowed to create your own HTML attributes in the HTML or through JavaScript as long as their name starts with data-. Here is an example of what the HTML would look like.




*/

let priceTag = document.createElement("p");
priceTag.setAttribute("data-price", "4.20");
priceTag.setAttribute("data-id", "a57dd55d7d8d");
priceTag.setAttribute("data-link", "http://abc.io/product");
document.body.append(priceTag);

/* 
It should be noted that ALL dataset property values are strings. If you want to store a numeric or boolean value in a data-set property, that is fine, but you will have convert the value to number or boolean after extracting it.

*/

/* 

Document Fragments:

A documentFragment is similar to an HTML element in that it can contain other HTML Elements and text nodes. The difference is that they only really exist in memory. They do not appear on the page.

We can use them to transport HTML from memory to the webpage.

Think of the HTML that you want to add to your page as a bunch of sand. The documentFragment is a bucket used to hold the HTML and carry it to the page. When you get to the page, the HTML is dumped out of the bucket on to the page.

*/

let df = new DocumentFragment();
let dfAlt = document.createDocumentFragment();

let stockName = document.createElement("h2");
let stockBackground = document.createElement("p");
stockName.className = "stockName";
stockBackground.className = "stockBackground";
stockBackground.textContent =
  "Started in 1999, we did business... guess what we still do business";

stockName.textContent = "ABC-Corp";
df.append(stockName, stockBackground); //now the h2 and paragraph are inside the document fragment

document.body.append(df);
//now the h2 and paragraph are on the page
//but the document fragment is still only in memory
//the h2 and paragraph were transfer from memory to the body element.

/* 
Dynamic HTML Best Practices:
When you are dynamically creating content for your webpages, you will frequently be looping through an Array of Objects to get the content. Each of the objects will have properties with the same property names. You will take the values of those properties and inject them into the HTML that you are creating.

**DANGER**

Reduce the Number of Inserts Every time you insert new Elements into the webpage you are forcing the browser to repaint the page. It has to rebuild the page.

Imagine if you had a list of 150 song titles that you wanted to add to the page. Each title will be wrapped in a <li>. Seems simple enough, but if you loop through your array and call append() 150 times, then you are forcing the browser to rebuild the page 150 times.

Don't do this.

Call append once, after creating your content in memory.


*/

//Let's say that this is your data which you will use to create the new HTML.

let info = [
  { id: "a6f7", txt: "Told ya" },
  { id: "b5f7", txt: "Not real data" },
  { id: "c2f7", txt: "But it looks like it" },
  { id: "a1f4", txt: "And works like it" },
  { id: "a6ee", txt: "So we will use it" },
];

/* 

Now, use the Array map method to loop through the Objects and build an HTML String.

When the String is fully built, call one of the methods or properties to inject the content once.

*/

// Define the setHTML method on the Element prototype
// Element.prototype.setHTML = function (htmlString) {
//   // Set the innerHTML of the element to the provided HTML string
//   this.innerHTML = htmlString;
// };

// let one = document.querySelector(".one");
// let getHtml = info
//   .map((item) => {
//     let str = `<p data-re="${item.id}">${item.txt}</p>`;
//     return str;
//   })
//   .join("");
// one.setHTML(getHtml);

//version two
// use the innerHTML property to append a string that includes HTMLL

// let two = document.querySelector(".two");
// let getHtml2 = info
//   .map((item) => {
//     let str2 = `<p data-ref="${item.id}">${item.txt}</p>`;
//     return str2;
//   })
//   .join("");
// two.innerHTML = html2;

//version three
//use the DOMParser parseFromString method to convert a string to an HTML document
// and then append the document's body property value
// let three = document.querySelector(".three");
// let html3 = info
//   .map((item) => {
//     return `<p data-ref="${item.id}">${item.txt}</p>`;
//   })
//   .join("");
// let parser = new DOMParser();
// let doc = parser.parseFromString(html3, "text/html");
// three.append(doc.body);

//version four
// use createElement followed by append to create an array of HTML elements
// then use Element.append( ...theArray ) with the spread operator to append the array of Elements
// let four = document.querySelector(".four");
// let html4 = info.map((item) => {
//   {
//     let p = document.createElement("p");
//     p.append(item.txt);
//     p.setAttribute("data-ref", item.id);
//     return p;
//   }
// });
// four.append(...html4);

/* 
The same process can be done using the createElement method and wrapping everything inside a documentFragment. The documentFragment holds all the new HTML in memory and is used to transport all the new HTML to the page. Once the new HTML has been loaded in the page, the documentFragment removes itself and leaves behind the new HTML.

*/

/* 

DOM style, className, classList
If you want to dynamically style your web page content there are three properties that belong to every Element Node.

style
className
classList
The style property lets you set the value of any single CSS property on any Element. Inside the style property is a list of every CSS property name. However, the names are slightly different. Any CSS property name that includes a hyphen, like background-color, will be written as a single camel-case name - backgroundColor.

Every value is a string and needs quotation marks.

let elem = document.querySelector('p'); //get the first paragraph
elem.style.border = '1px solid red';
elem.style.backgroundColor = 'khaki';

The className property lets you set the contents of the HTML attribute class="". We can't use class as an HTML attribute from within JavaScript, because class is a reserved keyword.

let elem = document.querySelector('p'); //get the first paragraph
elem.className = 'big red content';

The classList property is a DOMTokenList, which is similar to an Array of all the values inside the HTML class="" attribute. The classList property has a series of methods that we can call to manage and update the list of values.

let elem = document.querySelector('p'); //get the first paragraph
elem.classList.add('active'); // add the class `active` to the HTML
elem.classList.remove('active'); // remove the class `active` to the HTML
elem.classList.toggle('active'); // add the class `active` to the HTML if it doesn't exist, remove if it does.
elem.classList.contains('active'); // check IF the class `active` is assigned to the element
elem.classList.replace('active', 'inactive'); // replace the class `active` with the class 'inactive'

*/

/* 
Side Effects of Appending
It is worth noting, when you create an element with createElement or reference and element with querySelector or the other methods, then that element still exists whether it is just in memory or on the page.

let p = document.createElement('p'); //exists in memory
p.textContent = 'I exist!'; //p is still in memory only
let header = document.querySelector('header'); // exists on the page
let main = document.querySelector('main'); // exists on the page
let footer = document.querySelector('footer'); // exists on the page


header.append(p); //moved p from memory to inside header on page
main.append(p); //moved p from inside header to inside main
footer.append(p); //moved p from inside main to inside footer
footer.removeChild(p); //moved p from inside footer on page to in memory

The above code sample does NOT create three copies of the paragraph.

If you did want to create copies of the paragraph then you could use the cloneNode method.

let copy1 = p.cloneNode(true); //creates a copy of p and includes anything it contained
let copy2 = p.cloneNode(true); //creates a copy of p and includes anything it contained
now we have p, copy1, and copy2 as three separate elements

*/

/* 
Removing Content
If you want to remove HTML that already exists we have a few options.

With the innerHTML property or the textContent property you can set the content of any element to an empty String.


let div = document.querySelector('div'); //find the first div on the page
let p = div.querySelector('p'); //find the first paragraph inside div

p.textContent = ''; //set the text inside the paragraph to empty
div.innerHTML = ''; //remove all html and text inside div. could also use .setHTML()

Using the remove() or removeChild() methods.


p.remove(); //will remove the paragraph from whatever its parent is.
div.remove(); //will remove div and everything it contains
p.parentElement.removeChild(p); //refer to the parent of the p and use removeChild to target what will be removed
div.removeChild(p); //remove the paragraph from it's parent div


*/

/* 

Node Properties
In the list below there are a series of property pairs. The first properties will return a NodeList or a single Node. Remember that Nodes can be element nodes, text nodes, or comments.

The second property will return a list of Element Nodes or a single Element Node.

node.childNodes v node.children
node.firstChild v. node.firstElementChild
node.lastChild v. node.lastElementChild
node.nextSibling v. node.nextElementSibling
node.previousSibling v. node.previousElementSibling
node.parentNode v. node.parentElement

These last three node properties return a single piece of information about the node.

node.nodeName; //returns the tagname, if an element node
node.nodeType; //returns the integer referencing the type of node. Eg: 1=element, 3=text
node.nodeValue; //returns the string inside a text node

*/

//side brain dump

let nodeExampleBox = document.createElement("div");
nodeExampleBox.style.width = "200px";
nodeExampleBox.style.height = "100px";
nodeExampleBox.style.border = "1px solid black"; // Initial border style

// Change border color on mouseover
nodeExampleBox.addEventListener("mouseover", () => {
  nodeExampleBox.style.border = "3px solid red"; // Hover effect border
});

// Reset to original border on mouseout
nodeExampleBox.addEventListener("mouseout", () => {
  nodeExampleBox.style.border = "1px solid black"; // Reset back to initial style
});

document.body.appendChild(nodeExampleBox);

let cubeone = document.createElement("div");
cubeone.style.border = "1rem solid white";
document.body.appendChild(cubeone);

let cubetwo = document.createElement("div");
cubetwo.style.border = "1rem solid white";
document.body.appendChild(cubetwo);

let cubethree = document.createElement("div");
cubethree.style.border = "1rem solid white";
document.body.appendChild(cubethree);

let getAllCubes = document.querySelectorAll("div");

getAllCubes.forEach((cube) => {
  cube.addEventListener("click", (e) => {
    getAllCubes.forEach((cube) => {
      cube.style.width = "100px";
      cube.style.height = "100px";
      cube.style.margin = "10px";
      cube.style.backgroundColor = "lightblue";
    });
  });
});

let text1 = document.createElement("p");
let text2 = document.createElement("p");
let text3 = document.createElement("p");

let getAllMyText = [text1, text2, text3];

getAllMyText.forEach((p) => {
  p.textContent = "some text in a p";
  p.style.color = "red";
  document.body.appendChild(p);
});

function testFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log("Test fetch data:", data);

      //textcontent method:
      // // Create <h1> for the title and <p> for the body
      // let objTitle = document.createElement("h1");
      // let objBody = document.createElement("p");

      // // Set the text content of the elements
      // objTitle.textContent = data.title;
      // objBody.textContent = data.body;

      // // Append the elements to the document body
      // document.body.appendChild(objTitle);
      // document.body.appendChild(objBody);

      //InnerHTML:
      let lorem = document.createElement("div");

      let objHTML = `
<h1>${data.title}</h1>
<p>${data.body}</p>

`;

      lorem.innerHTML = objHTML;

      document.body.appendChild(lorem);
    })
    .catch((err) => {
      console.error(`Fetch error: ${err}`);
    });
}

testFetch();

let gearName = "Ski boots";

//create parent elements
let floatingMenu = document.createElement("div");

//create chidlren elements
let subMenuContent = document.createElement("p");
let closeFloatingMenu = document.createElement("button");

//write to elements
closeFloatingMenu.textContent = "X";
subMenuContent.textContent = `${gearName}`;

//style elements
floatingMenu.style.border = "0.2rem solid black";
floatingMenu.style.display = "flex";
floatingMenu.style.justifyContent = "space-between";
floatingMenu.style.alignItems = "center";
floatingMenu.style.padding = "1rem";
floatingMenu.style.width = "1rem";
closeFloatingMenu.style.color = "red";
closeFloatingMenu.style.width = "200px";

closeFloatingMenu.addEventListener("click", (e) => {
  //toggle visibility by setting none or block
  if (closeFloatingMenu.style.display === "none") {
    closeFloatingMenu.style.display === "block";
  } else {
    closeFloatingMenu.style.display === "none";
  }
});

//append elements
floatingMenu.append(closeFloatingMenu, subMenuContent);
document.body.appendChild(floatingMenu);

/* Handling Events*/

/* 
Events
In JavaScript, an event is something that happens to an object.

Objects have property values, which are values that can be used to describe an object. Property values can be things like size, speed, colour, name, id, etc. String.prototype.length is an example of what are generally referred to as a property.

Objects have methods, which are functions that belong to the object that make something happen. It could be something that the Object can do or something that the object does to another Object. Methods are also properties but are just called methods. Array.prototype.sort() is an example of a method. You can usually tell the difference between them in your code by the parentheses that appear after the name of the method. Properties don't have parentheses.

Events are things that happen to an object. A webpage loads. An anchor tag is clicked. A form is submitted. load, click, and submit are all examples of events.

*/

//on Pointer and Touch Events

/* Adding and Removing Events
All HTML DOM Element Nodes have a built-in addEventListener method. The standard way to add an event to a DOM element is like this:*/

let masthead = document.querySelector(".masthead");
masthead.textContent = "Title for ev example";
// document.body.append(masthead);

masthead.addEventListener("click", doSomething);

function doSomething(e) {
  let target = e.target;
  target.classList.add("higlight");
}

let countsBox = document.createElement("p");
document.body.append(countsBox);

let counter = 0;
countsBox.textContent = `This number will increase, presently at: ${counter}`;

countsBox.addEventListener("click", () => {
  counter++;
  countsBox.textContent = `This number will increase, presently at: ${counter}`;
});

let tenbox = document.querySelector("#ten");
let tenCounter = 10;
tenbox.addEventListener("click", (e) => {
  e.preventDefault();
  tenCounter *= 10;
  console.log(`Counter Value for tens: ${tenCounter}`);
});

let myMovies = [
  {
    title: "First Movie Name",
    Genre: "Action",
    length: 120,
  },
  {
    title: "First Movie Name",
    Genre: "Action",
    length: 120,
  },
];

myMovies.forEach((index) => {
  let movieTitle = document.createElement("h1");
  let movieGenre = document.createElement("p");
  let movieLength = document.createElement("p");

  movieTitle.textContent = `index.title`;
  movieGenre.textContent = `Genre: ${index.Genre}`;
  movieLength.textContent = `Movie Length: ${index.length}`;

  document.body.append(movieTitle, movieGenre, movieLength);
});

for (let movie in myMovies) {
  console.log(`${myMovies[movie].Genre}`);
}

let actionMovies = myMovies.filter(
  (action) => action.Genre.toLowerCase() === "action"
);

let getMovieLengthLessThan120 = myMovies.sort((i) => i.length <= 120);

//(let i = 0; i <= 100; i++)
//(let i = x; x <=100; i++)
//(let i = 100; i >=0; i--)

/* Callback Functions:

Callback Functions
A callback function is just a regular function, like any function that you have written so far. What makes a function into a callback function is simply how you use it.

When you pass a function reference to a second function so that it can be called, from inside the second function, after the rest of the second function code is complete, then the function reference being passed in is called a callback function

*/

function myCallBack() {
  console.log(`this is the callback`);
}

function countToTen(cb) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  cb();
}

countToTen(myCallBack);

/* 

Higher Order Functions:
Functions in JavaScript are called first-class objects because they can be passed around just like any other variable. We can pass a function reference to another function, like we do for callback functions. We can also return a function from a function.


*/

function f1() {
  console.log("this is function f1");
  return function () {
    console.log(`this is an anonymous function`);
  };
  return 42;
}

const f2 = f1();

let num = f2();

console.log(num);

// Recursive Functions:

function it() {
  it();
}

it();

/*  
This and Context
The keyword this can be a confusing one in JavaScript. It is typically a reference to the object that made a function run.

For the purposes of this discussion we will limit the use of this to functions triggered by event listeners.

*/

let btn1 = document.getElementById("myButton");
let btn2 = document.querySelector(".btn");
let btn3 = document.querySelector("#otherButton");

btn1.addEventListener("click", makeNoisy);
btn2.addEventListener("click", makeNoisy);
btn3.addEventListener("click", makeNoisy);

function makeNoisy(ev) {
  this.style.backgroundImage = "url(./img/noisy-pattern.png)";
}

/* 
Prototypes
Every type of Object has a prototype. A prototype is a special kind of an object that contains all the methods that will be shared by all Objects of that type.

You will hear a lot about prototype and class over the next few semesters. They are two different approaches to designing and architect software. The problem is that in your early days of programming they can seem like almost the same thing.

We will try to help you understand the differences here in simple practical terms that will let you write better JavaScript with fewer unexpected errors.

A Class is a blueprint for building objects. It is not an object itself, just the plans for building a certain kind of object. Classes inherit properties and methods from parent classes. When you create (instantiate) an object from a class, the object will be given copies all the properties and methods from it's class blueprint as well as copies of all the properties and methods from all the ancestor parent classes. So, when you call an Object's method, the method actually exists inside the Object.

A prototype is an example Object. It is an Object. Think of it as the first one built. In JavaScript, when we create an Object a constructor function is used to build the object. That function has a prototype object. We can put any methods that we want to share with all the objects built with that constructor into that prototype object. We can still link our objects to parent ones but we don't copy the methods, instead, we just link to the parent's prototype. There is a chain of prototype type objects. When we create (instantiate) our Object, it doesn't need copies of all the methods and parent methods. If we call an Object's method and the method does not exist inside our Object, then JavaScript will look up the prototype chain for the method and delegate (borrow) the method to run.

JavaScript has something called the prototype chain, which is how inheritance works in JavaScript. Each one of the Object prototypes will have a connection to the prototype object belonging to it's parent object. At the top of the chain is the prototype of the Object object.

As an example, look at the toString() method. When you create an Array (opens new window), there is no method in Array called valueof. However, you can write the following and no error occurs.

*/

let letters = new Array("a", "b", "c", "d", "e");

/* 
9.1 Promises:

A Promise, as the name implies is something that Promises a return value. We just don't know when we will get the reply. It could be fulfilled or it could fail to be fulfilled. Either way you will get an answer.

A Promise that is fulfilled and returns what we want is called resolved.

A Promise that is not fulfilled is called rejected.

The syntax for a Promise is just like thee fetch method. (That is because a fetch IS a Promise.). when you call fetch() you are actually given a Promise object which eventually will give you a response object and call the first then method or it fails and calls the catch method.

*/

let promiseExample = new Promise(function (resolve, reject) {
  resolve("booya");
});
promiseExample
  .then(function (str) {
    console.log(str);
  })
  .catch(function (err) {});

let delay = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "hello");
});

delay.then(function (response) {
  console.log(response);
});

delay.catch(function (err) {});

console.log("wait for it...");

/* 
The then and catch can be added to the variable holding the Promise separately, or they can be chained together with the catch at the end of the chain.
*/

/* 
then() and catch() and finally():
When you create a Promise object you can chain onto it one or more then() methods. At the very end of the then() chain, you can put a catch() method.

*/

// You ended here: https://mad9014.github.io/W2024/modules/browser-js/week9/promises/#then-and-catch-and-finally on Dec 4 2024

new Promise((resolve, reject) => {
  console.log("fn one");
  resolve();
})
  .then(() => {
    console.log("fn two");
  })
  .then(() => {
    console.log("fn three");
  })
  .catch(() => {
    console.log("Something went wrong");
  });

let promiseTest = new Promise();

/* 


Just like the Promise object itself needs a function and that function will resolve or reject, each of the then() method calls plus the catch() method call needs a function.

If the function inside a then() method runs with no errors, then its return value gets passed along to the next then() method in the chain. The first return value becomes an argument for the second then(), and so on.

If ANY of the functions inside ANY of the then() methods throws an error, then the Error object will be immediately passed to the catch() method and the function inside the catch will run using the Error as its argument.


resolve() and reject():
It is possible to create a Promise that resolves or rejects immediately. However, since Promises are asynchronous it means that the current stack finishes first. The then() method, which reads the value from the resolved or rejected promise is called asynchronously.

The Promise.resolve() method returns a Promise object that has been resolved.

The Promise.reject() method returns a Promise object that has been rejected.


*/

let myGoodValue = 42;
let myBadValue = new Error("bad stuff");

let good = Promise.resolve(myGoodValue);
let bad = Promise.reject(myBadValue);

/* 
Promise.all() and allSettled():
If you have multiple asynchronous tasks to accomplish and you want to wrap them together as a Promise you can do that. As an example - you want to fetch remote data from 4 sources or you want to open 4 files from the filesystem. Either of those things take an unknown amount of time and depend on factors that are out of your control.

We can use Promise.all() or Promise.allSettled() to achieve this. Both of these methods take an Array of Promise objects and then return an Array of results to your then() method.

The difference between them is that allSettled() will call the then() when every one of the Promises has a result. You don't know if the results are all resolved, all rejected, or a mixture. With all() the then() method gets called only if all the promises in the Array were resolved. As soon as one of the Promises in the Array is rejected, the catch gets called.

So, it is a question of how many results do you need. If you ask for four things to work but are ok with only two or three actually working, then go ahead and use all.

If your app needs all four to have been successful, then use allSettled.


*/

let p1 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (Math.round(num)) {
    resolve(num);
  } else {
    reject(num);
  }
});

let p2 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (Math.round(num)) {
    resolve(num);
  } else {
    reject(num);
  }
});

//test the promise.allSettled method
Promise.allSettled([p1, p2])
  .then((results) => {
    console.log(results[(0, results[1])]);
  })
  .catch((err) => {
    //forst failure triggers this
  });

/* 
  
  Promise.race() and any():
Promise.race() and Promise.any() are very similar. They are both race conditions. They are both looking for a first Promise to be completed. They both need an array of promises to be passed in.

The difference is that race is looking for the first one to complete, regardless whether it is resolve or reject, and any is looking for the first successful result. The any approach will only run the catch if all of the promises in the array are rejected.
  
  */

/* 

let p1 = new Promise((resolve, reject) => {
  reject(1);
});
let p2 = new Promise((resolve, reject) => {
  resolve(2);
});
race gives us the first result back... good or bad
Promise.race([p1, p2])
  .then((response) => {
    console.log('First one back was successful');
  })
  .catch((err) => {
    console.log('First one back was rejected');
  });

any only runs the catch if all the promises failed
Promise.any([p1, p2])
  .then((response) => {
    console.log('First successful result is back');
  })
  .catch((err) => {
    console.log('no successful results');
  });


*/

/* 
Error Handling with Promises
When you have a Promise followed by chain of then methods an error could occur at any point in that chain of methods. If it does, then the error will be passed to the catch at the end of the chain.

Best Practice

You should always put a catch at the end of your promise chain.

In NodeJS, not doing this will cause an error.

*/

// 9.2 Asynchronous Code

/* 

Async vs Sync
Almost all the code that we have written to this point has been synchronous code. That means that you write the code in the order that you expect it to run. The first line of code inside your function will run and complete before the second line of code.

However, there is also Asynchronous code in JavaScript. Promises are an example of this.

When you write code that will take an unknown amount of time to complete but you don't want your App to freeze and do nothing until that one task is complete, then you need to use Async tasks.

JavaScript has a mechanism known as the event loop. When you pass a list of commands to the event loop, it will keep running each of those commands in order until it gets to the end of your list. This list is known as the main stack. JavaScript keeps trying to run commands as long as there is something on the main stack.

However, sometimes there is a command that would stop the event loop from getting to the next command. It gets blocked from going to the next command in the stack. These types of commands are things that take a long time to complete, like talking to a database, or the file system, or a network request for a file, or a timer that needs to wait before running.

There are specific tasks that are going to take too long and they get put into a secondary area so they can wait for their result. These tasks are known as asynchronous.

If the code stays on the main stack and insists on being run before the event loop moves on to the next item then it is called synchronous.



*/

/* 

The JavaScript Loop
The JavaScript engines, like Chrome's V8, use a single thread to process all your code. It builds a stack of commands to run, in the order that you have written them. As long as each command belongs to the CORE JavaScript then it gets added to the main run stack.

When something that belongs to the Web APIs is encountered it gets added to a secondary list of tasks. Each time the main stack is finished then the JavaScript engine turns it attention to the secondary list of tasks and will try to run those.

The video below does a great job explaining all the parts of this process. It is about 25 minutes so give yourself some time to watch it.

You don't need this information to do any of the assignments this semester. However, it will help you to avoid errors in your code and to better understand how your code will be interpreted by the JavaScript engine. This will lead to you writing much better code in the long run.


The main stack is all the code that runs on the event loop. JavaScript wants to run all the commands in the main execution context before it does anything with the tasks or microtasks.

The UI render tasks are the one exception to leaving the event loop. The browser can decide to exit the loop and run updates (calculate and paint) for the UI. UI render tasks are mainly automatic things like updating the interface based on a CSS transition or animation. However, you can create code that runs during this phase with requestAnimationFrame().

If you create a task and inside that task you create another task, the second one will not run until the first task is completed and the event loop has looped around again.

If you create a microtask and inside that you create another microtask, then the browser will also run the subsequent microtask(s) before returning to the event loop.


Timers
In JavaScript we can set timers to call a function at some point in the future.

We use the setTimeout() or setInterval functions and pass them a callback function plus a minimum time delay to use (written in milliseconds). We say minimum time delay because the main stack could still have code in it that is being run. The function from the timeout has to wait for that other code to finish before it can be called.

*/

function timeTest() {
  console.log(`fn is running..`);
}
function timeTestTwo() {
  console.log(`Hello, user`);
}
//function timeTestThree(timeTest, 1000){};

//function timeTestThree1(timeTestTwo, 1000){}; //Dean gets passed to timeTestTwo as the argument

/* 

Timeouts
When you want to run a function after a specific time delay then setTimeout is the built-in function to accomplish this.

*/

/* 

Intervals
When you want to run something repeatedly after a set time, for example, once every ten seconds, then setInterval is the function to call.

Timers running on intervals can be stopped if you call the clearInterval( ) method. Just make sure that you keep a reference to the interval.


*/

/* 

Recursive Timeouts
Another way to approach timed intervals is with a recursive call to the setTimeout function. Inside the function that runs following your setTimeout, you make another call to the same function. The process repeats itself.

The difference with the recursive calls is that it allows us to change the amount of time between the calls or stop it after any call.

We can use this method to create ever shorter time spans between callbacks or random times between callbacks.


*/

/* 

Async - Await
One of the features added in ES6 was async and await. The combination of these keywords lets us use asynchronous features like fetch inside a function but write the code in a synchronous style.

Start by making a function into an async one.

*/

//Give a functon the ability to pause a d wait for a promise:

async function f9() {
  //this function declaration can now pause and wait for a promise to complete
}

let f10 = async function () {
  //this function expression can pause and wait for a promise to complete
};

let res = async () => {
  //this arrow function can also pause and wait
};

//Then you can use the await keyword as many times as you want. Each one is capable of pausing the function to wait for an async result from a promise.

/* 
Intervals
When you want to run something repeatedly after a set time, for example, once every ten seconds, then setInterval is the function to call.

Timers running on intervals can be stopped if you call the clearInterval( ) method. Just make sure that you keep a reference to the interval.

*/

let intervalId = setInterval(myFunc, 3000);

clearInterval(intervalId);

/* 

Recursive Timeouts:
Another way to approach timed intervals is with a recursive call to the setTimeout function. Inside the function that runs following your setTimeout, you make another call to the same function. The process repeats itself.

The difference with the recursive calls is that it allows us to change the amount of time between the calls or stop it after any call.

We can use this method to create ever shorter time spans between callbacks or random times between callbacks.


*/

/* 

Async - Await
One of the features added in ES6 was async and await. The combination of these keywords lets us use asynchronous features like fetch inside a function but write the code in a synchronous style.

Start by making a function into an async one.


Then you can use the await keyword as many times as you want. Each one is capable of pausing the function to wait for an async result from a promise

*/

//10.1 Fetch and AJAX

/* 

AJAX:
**old way**
AJAX stands for Asynchronous Javascript And Xml.

In the late nineties, it was not possible to download new data and apply that to the current webpage. If you wanted updated results you had to refresh the whole page.

What we will be discussing over the new few weeks is the process of how to make requests from webpages for new data or new files from a remote webserver.

It is with JavaScript that we will be requesting the new content and then injecting it into your pages.

*/
//XMLHttpRequest
//The original way to make requests to a remote server to have files sent was an object called XMLHttpRequest.

/* 


//9.2 Asynchronous Code:

/* 
  
Async vs Sync:

Almost all the code that we have written to this point has been synchronous code. That means that you write the code in the order that you expect it to run. The first line of code inside your function will run and complete before the second line of code.

However, there is also Asynchronous code in JavaScript. Promises are an example of this.

When you write code that will take an unknown amount of time to complete but you don't want your App to freeze and do nothing until that one task is complete, then you need to use Async tasks.

JavaScript has a mechanism known as the event loop. When you pass a list of commands to the event loop, it will keep running each of those commands in order until it gets to the end of your list. This list is known as the main stack. JavaScript keeps trying to run commands as long as there is something on the main stack.

However, sometimes there is a command that would stop the event loop from getting to the next command. It gets blocked from going to the next command in the stack. These types of commands are things that take a long time to complete, like talking to a database, or the file system, or a network request for a file, or a timer that needs to wait before running.

There are specific tasks that are going to take too long and they get put into a secondary area so they can wait for their result. These tasks are known as asynchronous.

If the code stays on the main stack and insists on being run before the event loop moves on to the next item then it is called synchronous.


*/

/* 

The JavaScript Loop
The JavaScript engines, like Chrome's V8, use a single thread to process all your code. It builds a stack of commands to run, in the order that you have written them. As long as each command belongs to the CORE JavaScript then it gets added to the main run stack.

When something that belongs to the Web APIs is encountered it gets added to a secondary list of tasks. Each time the main stack is finished then the JavaScript engine turns it attention to the secondary list of tasks and will try to run those.

The video below does a great job explaining all the parts of this process. It is about 25 minutes so give yourself some time to watch it.

You don't need this information to do any of the assignments this semester. However, it will help you to avoid errors in your code and to better understand how your code will be interpreted by the JavaScript engine. This will lead to you writing much better code in the long run.

/*
Fetch
The new method that replaces XMLHttpRequest. The good news here is that if you are already familiar with the syntax for Promises then you already know most of the syntax for fetch.

*/

let url = `https://www.example.com/api/`;

fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);

    return reponse.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`You are facing this ${err}`);
  });

/*

When we send a request to a webserver it can be for ANY type of file - html, xml, json, css, js, png, jpg, avi, mpg, mp3, or anything else. When you make the request you should be aware of what kind of file will be send back.

In the example above we used request.json() to extract the JSON data from the response. If we were getting some other kind of text file, like CSS, HTML, or XML then we should use response.text(). If we were getting a binary file like an image or audio file then we would use response.blob() to get the binary data. Blob stands for Binary Large OBject.

Regardless of whether you are using fetch or XMLHttpRequest to get the file from the server we are working with the same technology. We are making an HTTP Request, which contains headers and, potentially, a body. The request is sent to a web server over the internet and then we get back an HTTP Response, which contains headers and has a body.

Think of making Request like mailing a letter to someone.

The headers are the things that get written on the outside of the envelope.
The body is the contents inside the envelope.
Once the letter is sealed and addressed you stick it in a mail box. The postal service will take your letter, interpret what you wrote on the envelope and figure out how to get your letter to the correct address.
The street address and city and province help you understand where you are sending your letter.
The postal code is what the postal service actually uses to figure our how to route your letter.
You don't need to understand how the letter gets to the other address.
The envelope should have a return address on the outside of the envelope so that a response can be sent back to you.


*/

/* 

JSON
JSON - JavaScript Object Notation is the most popular format for sending data between clients and servers. It is called JSON because it uses a JavaScript-compatible syntax for encoding the information inside the file.

Official JSON website(opens new window)

However, it is NOT JavaScript. It is just a text file with a single long string. For this exact reason, we cannot save things like functions or DOM elements inside of JSON files. We can only save String, Number, Boolean, and null (Primitive values) plus Array literals and Object literals.

The JSON file format is used by localStorage and sessionStorage to hold data in the browser. More on this next week.

The primary differences between a JS object and a JSON object are:

All object keys must be wrapped in double quotes.
All string values must be wrapped in double quotes.
No trailing commas are allowed after array or object values.
No comments are allowed in the file.
No variable declarations.


*/

//JavaScript Object:

let obj = {
  name: "Brodie",
  id: 123,
  active: true,
  courses: ["course 1", "course 2", "course 3"],
};

//JSON:

/*
{
"name": "Brodie",
"id": 123,
"active": true,
"courses": ["course 1", "course 2", "course 3"]
}

Notice all the double quotes around all the string values. No quotes around the number or boolean values.



*/

//XML

/*
XML - eXtensible Markup Language, created in 1998, was the first file format that was used for client-side web development for the transfer of data between clients and servers. As the name suggests, it is a MarkUp language. Angle brackets < > are used to wrap the tag names which are used to label and describe the information in the file.

The most important rule for writing XML files is Human Readable.

This one rule meant that XML rapidly became a very popular format with the thousands of new developers who started working in web development in the late 90s and early 2000s. The format was adopted by nearly all major software providers and is still widely used today.

An example of the widespread support for XML was the Microsoft adoption of it as a wrapper for all their MS Office files in Office 2007. With this release file formats changed from .doc to .docx and .xls to .xslx and so on. The name change reflected that XML had become a core part of the file format. A .docx file is really just a .doc file, wrapped inside of an XML file and then zipped. All the new features for MS Word have been added via the XML portion of the file.

JSON overtook XML as the most popular web development format during the last decade because it was Developer Readable and because the file size was noticeably smaller than XML.

Here is the same data as above, as an XML file.

<?xml version="1.0" encoding="utf-8" xmlns="https://com.algonquincollege/student">
<student>
  <name>Joanne</name>
  <id>123</id>
  <active>true</active>
  <courses>
    <course>HRT100</course>
    <course>HRT200</course>
    <course>HRT300</course>
  </courses>
</student>


*/

/* 


Request Objects
When you make a fetch call, very often you are only providing a URL to the method. However, the fetch method will actually create a new Request() object on your behalf, using all the default values plus your URL.

If you need to you can create your own Request object


*/

let request = new Request();
//fetch also accepts a Request object instead of a URL object or URL string.
fetch(request)
  .then((response) => {})
  .then((body) => {})
  .catch(console.warn);

/* 
  
Body Objects
The Body object is the container for any file or large block of data being transferred between a client and a server. Both the Response and the Request objects have a body property that is used to access the Body object.

MDN reference for the body property of the Response object(opens new window)

The body property can contain one of the following data types:

Blob (opens new window)- for binary files like images
BufferSource (opens new window)- like an array of data but binary
FormData (opens new window)- generally used for the information from a form
ReadableStream (opens new window)- large chunk of text or numerical data
URLSearchParams (opens new window)- Query String formatted string
USVString (opens new window)- an encoded string
json(), text(), and blob() Methods
When a Response comes back to the browser, to either your main script or a service worker, the most common datatypes that we receive are:

a json file
a text file (CSS, XML, or HTML)
an image (Blob)
Because of that, there are three specific methods that we can use to extract the contents of those files, from the body of the Response. We use the Response.json() method to convert the contents of the JSON file into a JavaScript Object. We use the Response.text() method to read the contents of the CSS, XML, or HTML file into a string. We use the Response.blob() method to extract the binary data from a binary file (like an image) into a Blob object.

All three of the methods are asynchronous and return a Promise. So, we use them inside a then() method and return the Promise that they create. That way it gets passed to the next then() in the chain. The next then() will receive the Object, String, or Binary content from the method.
  
  */

fetch(request)
  .then((response) => {
    //only the first return actually runs
    return response.text();
    return response.blob();
    return response.json();
  })
  .then((body) => {
    //body is the formatted contents returned from one of those methods
  });

//If we want to use the Blob as the source for an image element on our page then we need to use the URL.createObjectURL() method.

document.getElementById("dynamicImage").src = URL.createObjectURL(blob);

/* 

It is worth noting that there is also a formData() method that will extract the text from the body as if it were a FormData object. Also, you have an arrayBuffer() method available to use if you want the file contents as an ArrayBuffer instead of a Blob.

A Response object can only be used for one purpose - providing content to the webpage or saving it to the Cache API. If you need multiple copies of a response object you can use the clone() method to create that copy.

Header Objects
Inside your HTTP Request and HTTP Response, the Head holds the meta information about the request or response. What address is it being sent from, what address it is being sent to, whether it is encrypted, what type of file is contained in the body, the file size of the body, the encoding type, if it is compressed, cookies, what is the expiry date of the response, and much more. All the values in the Head are called Headers.

The QueryString is one of the Headers. It is a string that contains a series of name value pairs. There is an = sign between each name and value. And there is an & ampersand between each of the pairs. The values in the QueryString need to be URL encoded to avoid causing issues with other programs, through special characters, who mi

*/
//you ended here: https://mad9014.github.io/W2024/modules/browser-js/week10/ajax/#body-objects
const BASEURL = "http://somedomain.com";
//a global variable that holds the base url for your API

let endpoint = "/api/people/23?api-key=8768374823";
let url = new URL(endpoint, BASEURL);
//first we have a url object to pass to a Request or fetch call.

let str = url.toString();
//here we have a String built from the url object

let req = new Request(url);
// OR
req = new Request(str);
//here we have a Request object with the url inside it

fetch(url).then((resp) => {
  //we can pass a url directly to fetch
  console.log("fetch with url", resp.status);
});

fetch(req).then((resp) => {
  //we can pass the request object that was given a url or string
  console.log("fetch with url in request", resp.status);
});

fetch(str).then((resp) => {
  //we can pass the string to the fetch
  console.log("fetch with url as string", resp.status);
});

/* 

The URL property of a Request or Location object, just like the URL object itself has a bunch of properties that you can access to directly read the different parts of a URL. (Otherwise you would have to parse the string yourself.)

hash is the part that begins with #.
host is a hostname with a port (if specified).
hostname is the host without the port.
href is the entire url string with all the parts.
origin includes the scheme, domain, and port.
pathname is the path and filename starting with /.
port is the port number part of the url. Eg: 80 or 5500.
protocol is the scheme, like http:, ftp:, https:, blob:, or file:.
search is the querystring for the url and is either an empty string or includes the ? at the start.
searchParams is a read-only SearchParams object with the elements in the querystring.


*/

/* 

FormData Objects
The FormData object is a great way to bundle an entire HTML form, including any hidden input elements, into a format that can be set as the value for a Request body.


*/

let myForm = document.createElement("form");

let fd = new FormData(myForm);

//2 lines of code and your entire form is bundled and ready to be uploaded.

/* 

URLSearchParams
The URLSearchParams object is the object that can be used to hold or build a QueryString. It can also be used as an alternative to FormData when bundling data to upload to the server. It can be used as part of the URL, in the headers, or in the body.

MDN reference for URLSearchParams(opens new window)

It is named as URLSearchParams because it represents the value held in the search property of the Location object, which is the top-level object that holds all the information about the webpage's url, hash, protocol, port, domain, path, etc.

MDN Location reference(opens new window)

It works much the same way as a Headers or FormData object do.

*/

let searchTerm = new URLSearchParams();
searchTerm.set("key", "value");
searchTerm.set("name", "brodie");
searchTerm.has("key");
searchTerm.get("name");
searchTerm.sort();
searchTerm.forEach((val, key) => console.log(key, val));
searchTerm.delete("key");
searchTerm.toString();

/* 

There is also an append method that works like set but will allow for duplicate entries with the same key.

It is an iterable object, which means it can be used in a for...of loop.

When you want to add a URLSearchParams string to the URL or to the body, use the toString method. Remember to add the ? in front of it if you are using it as part of the URL.

*/

/* 
USVString:

A USVString is a Unicode Scalar Value String. Basically it is a string designed for efficient text processing. It uses UTF-16 instead of UTF-8 for the holding of string values. This means that code-points that need 16-bit values to be represented can be saved as a single character. Chinese characters and Emojis both fall into this category. JavaScript will internally handle the conversion between UTF-8 strings and UTF-16 strings when you use the USVString.

When you see that a USVString is being used for an API, you can just think of it as a string that is encoded to work well in fetch calls and URLs.

Fetch All Together:

Now that you know all the parts of an HTTP Request, you can build your own Request object and pass it to a fetch call.

The following example shows how to combine all the different parts into a Request object that gets passed to the fetch method. Only one value is being appended or added to the Headers, FormData, or URLSearchParms object for brevity's sake.


let head = new Headers(); //`append` what you need
head.append('x-custom-header', 'Memento');

let fd = new FormData(); //`append` what you need
fd.append('name', 'value');

let search = new URLSearchParams(); //`set` what you need
search.set('api-key', 'some-value');

let baseURL = `https://www.example.com`;
let relativePath = `./api/endpoint`;
let url = new URL(`${relativePath}?${search}`, baseURL);
 or new URL(path+querystring, baseurl).toString();
call the toString method to create the DOMString to pass to the Request object

let req = new Request(url, {
  headers: head,
  method: 'POST',
  mode: 'cors',
  body: fd,
});

fetch(req)
  .then((response) => {
    response to the fetch
  })
  .then()
  .catch();


*/

//10.2 Remote APIs

/* 



Fetch

So, now that you are aware of all the parts of the world of fetch, let's start to use the fetch() method and talk to some real APIs.

There are a few ways that the initial fetch method call can be made depending on how much information you need to pass and what needs to be customized.


1. send a string to the fetch method
let urlString = 'http://www.example.com/api';
fetch(urlString);
uses GET as the default method. No extra headers set. No data being sent to the server

2. send a URL object to the fetch method
let url = new URL();
fetch(url);
same as version 1

3. send a Request Object that contains the url
let req = new Request(url);
Request object can also have an options param with data and headers and non-GET method
fetch(req);

If you are only requesting to receive data from a web server (a GET request), and the server does not need an API key or any authorization headers, and no data is being uploaded then any of these can be used.

It is only if you start to upload data or customize headers that you need to add a Headers object or define the body contents.

*/
//fetch chain:

const urlReddit = `https://www.reddit.com/r/Miata/.json`;

fetch(urlReddit)
  .then((response) => {
    if (!response.ok) throw new Error("data request failed");
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/* 

Github REST API
Github Public Repo REST APIs(opens new window)

Github has a number of public APIs that we can use to fetch information about Repositories or Users or more. You can make a fetch call to a url like https://api.github.com/users/prof3ssorSt3v3/repos to get a JSON file with a list of the all the repos for Steve Griffith's Github account. The URL https://api.github.com/users/maddprof1/repos returns a JSON file with a list of all the repos for Tony Davidson.

So, as long as you know the username, you can get a list of all that person's public repos.

Try loading either of those URLs into the browser and look at the JSON results that are displayed.

Github also provides their own JavaScript library called Octokit (opens new window), which can be used to make calls to the Github APIs.

With the Octokit library, instead of calling fetch, you would import the library, create an Octokit object and then call the request() method, with the desired endpoint URL.

import { Octokit } from 'https://cdn.skypack.dev/octokit';
import the Octokit function
then create an instance of the Octokit object
const octokit = new Octokit({}); //the {} object allows for passing in of options

octokit
  .request('GET /repos/{owner}/{repo}', {
    owner: 'octocat', //will become the {owner} part of the url
    repo: 'Spoon-Knife', //will become the {repo} part of the url
    sort: 'updated',
  })
  .then((response) => {
    console.log(response.status); //status code
    console.log(response.data); //same as the data object you get in fetch from response.json()
  });

*/

//11.1 Fetch

//ended here https://mad9014.github.io/W2024/modules/browser-js/week11/fetch-data/#more-apis

// 12/11/2024
