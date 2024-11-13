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

window.alert("Hello user");

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

// Set content and attributes for the new elements
indexh2.textContent = "Welcome to the Travel Blog"; // Set the text for the header
indexP2.textContent = "Ipsum"; // Set the text for the second paragraph
indexImg.src = "travel.jpg"; // Set the image source
indexImg.alt = "Travel Blog logo"; // Set the alternative text for the image
indexHeader.className = "header"; // Assign a class to the header div
indexContent.className = "content"; // Assign a class to the content div

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

// Select the main element first
let main = document.querySelector("main");

// Then you can update the innerHTML as intended
let footer1 = document.querySelector("footer");

let footerHtml = `<div class="header">
    <h2>Some Heading</h2>
  </div>
  <div class="content">
    <p><img src="./img/logo.png" alt="Company logo" /> Lorem.</p>
    <p>Ipsum.</p>
  </div>`;

// Update the innerHTML of the selected main element
main.innerHTML = footerHtml;

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
Element.prototype.setHTML = function (htmlString) {
  // Set the innerHTML of the element to the provided HTML string
  this.innerHTML = htmlString;
};

let one = document.querySelector(".one");
let getHtml = info
  .map((item) => {
    let str = `<p data-re="${item.id}">${item.txt}</p>`;
    return str;
  })
  .join("");
one.setHTML(getHtml);

//version two
// use the innerHTML property to append a string that includes HTMLL

let two = document.querySelector(".two");
let getHtml2 = info
  .map((item) => {
    let str2 = `<p data-ref="${item.id}">${item.txt}</p>`;
    return str2;
  })
  .join("");
two.innerHTML = html2;

//version three
//use the DOMParser parseFromString method to convert a string to an HTML document
// and then append the document's body property value
let three = document.querySelector(".three");
let html3 = info
  .map((item) => {
    return `<p data-ref="${item.id}">${item.txt}</p>`;
  })
  .join("");
let parser = new DOMParser();
let doc = parser.parseFromString(html3, "text/html");
three.append(doc.body);

//version four
// use createElement followed by append to create an array of HTML elements
// then use Element.append( ...theArray ) with the spread operator to append the array of Elements
let four = document.querySelector(".four");
let html4 = info.map((item) => {
  {
    let p = document.createElement("p");
    p.append(item.txt);
    p.setAttribute("data-ref", item.id);
    return p;
  }
});
four.append(...html4);

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


*/
