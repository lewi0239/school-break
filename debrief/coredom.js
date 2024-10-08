/*
Document Object Model (DOM):
When the browser reads an HTML file, it creates an Object model representing all the content
on the page. It builds a tree structure that helps it know which elements are nested
inside each other, which elements are parents, and which are children.

This is a visual representation of how a browser sees the page. You can think of each indent as the start of a new branch in the DOM tree. Inside the HTML object, there are two children - head and body. Inside the head are two more children - title and link. Title has a child, which is #text. The link element has no children. Inside body > header > h1, there are two children - img and #text. The img and the #text are siblings:

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

I need to be able to visualize every page in this manner. Understand that when you are searching for things or altering things, you will be working with parents, children, and siblings.

One of the things that sets Node.js and JavaScript in the browser apart is the DOM. Node.js does NOT have access to the DOM.

The DOM is NOT part of core JavaScript.

The DOM is an add-on that browsers get as part of the window object.
*/

let h1 = document.querySelector("h1");
if (h1) {
  console.log(h1.textContent);
}

let getMyCarID = 123;

function displayId(getMyCarID) {
  let p = document.createElement("p");
  p.textContent = `${getMyCarID}`;
  document.body.appendChild(p);
}

displayId(getMyCarID);

function displayFiles() {
  let myFileArray = [
    {
      fileName: "2024-revenue",
      size: "24kbs",
      token: 1,
      department: "finance",
    },
    {
      fileName: "2020-marketing",
      size: "1mb",
      token: 2,
      department: "marketing",
    },
    {
      fileName: "2023-it-security-plan",
      size: "50mb",
      token: 3,
      department: "IT",
    },
  ];

  let fileListElement = document.createElement("ul");

  // Corrected block to ensure proper creation and appending
  myFileArray.forEach((file) => {
    let appendClass = document.createElement("li"); // Ensure the <li> is correctly created

    // Set the content of the <li>
    appendClass.textContent = `File: ${file.fileName}, Size: ${file.size}, Department: ${file.department}`;

    // Append the list item to the unordered list
    fileListElement.appendChild(appendClass);

    // Log that the item was successfully appended
    console.log(`Appended ${file.fileName} to the DOM.`);
  });

  // Append the file list element to the body (or any other container)
  document.body.appendChild(fileListElement);

  console.log("All items have been appended to the DOM.");
}

displayFiles(); // Make sure the function is called

let groceriesList = [
  "apples",
  "milk",
  "protein",
  "chicken",
  "cheese",
  "bread",
  "coffee",
  "sushi",
];

let getTodoList = document.querySelector("#todoList");

groceriesList.forEach((item) => {
  let groceryItem = document.createElement("div");
  groceryItem.textContent = item;

  getTodoList.appendChild(groceryItem);

  console.log(`Appended ${item} to the DOM`);
});
document.body.appendChild(getTodoList);

let movieTimes = [
  {
    movie_Title: "Star Wars",
    show_times: [1800, 1900, 2130, 2215],
    theater: "Kanata",
    total_seats: 100,
    seats_left: 50,
  },
  {
    movie_Title: "Katana One",
    show_times: [1300, 1910, 2145, 2315],
    theater: "WestBoro",
    total_seats: 60,
    seats_left: 50,
  },
  {
    movie_Title: "Toy Story",
    show_times: [1415, 1800, 2300],
    theater: "StittsVille",
    total_seats: 100,
    seats_left: 80,
  },
];

// Create the unordered list element
let movieTimesNode = document.createElement("ul");

// Iterate over each movie and append the details to the list
movieTimes.forEach((movie) => {
  let movieTimesNodes = document.createElement("li");

  // Calculate capacity dynamically
  let capacity = (movie.seats_left / movie.total_seats) * 100;

  // Set the text content of each list item
  movieTimesNodes.textContent = `Movie Name: ${
    movie.movie_Title
  }, Show Times: ${movie.show_times.join(", ")}, Seats Left: ${
    movie.seats_left
  }, Capacity: ${capacity.toFixed(2)}%`;

  // Append the list item to the unordered list
  movieTimesNode.appendChild(movieTimesNodes);
});

// Append the unordered list to the document body
document.body.appendChild(movieTimesNode);

class Employee {
  constructor(employeeID, firstName, lastName, startDate) {
    this.employeeID = employeeID; // Assign to this
    this.firstName = firstName;
    this.lastName = lastName;
    this.startDate = startDate;
  }

  // Example method to get employee details
  getDetails() {
    return `${this.firstName} ${this.lastName}, Employee ID: ${this.employeeID}, started on ${this.startDate}.`;
  }
}

const mark = new Employee(999, "Mark", "Jay", "April 20 2016");
const steve = new Employee(636, "Steve", "Lee", "January 13 2019");

console.log(mark.getDetails());
console.log(steve.getDetails());
