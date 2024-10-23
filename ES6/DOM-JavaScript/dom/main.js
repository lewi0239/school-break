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

let main = document.querySelector("footer");

let footerHtml = `<div class="header">
    <h2>Some Heading</h2>
  </div>
  <div class="content">
    <p><img src="./img/logo.png" alt="Company logo" /> Lorem.</p>
    <p>Ipsum.</p>
  </div>`;

main.innerHTML = myhtml;
//alternative
main.setHTML(myhtml);

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
