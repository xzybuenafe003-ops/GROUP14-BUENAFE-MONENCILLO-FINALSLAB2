// Initial array of students
let students = [
  "John Ryan Monencillo",
  "Xzy Buenafe",
  "Janine Berdin",
  "Albert Einstein",
  "Ryzza Mae Show",
];

// Function to show the class list and total
function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    const item = document.createElement("li");
    item.textContent = students[i];
    list.appendChild(item);
  }

  document.getElementById("totalStudents").textContent =
    "Total Students: " + students.length;
}

// Calls the function to display the initial list of students
displayStudents();

// addStudent() 
function addStudent() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  const result = document.getElementById("resultBox");

  // Check if the inputbox is empty
  if (name === ""){
    result.textContent = "Enter a student name first.";
    return;
  }

  // Check if the inputbox has numbers or symbols.
  if (!/^[A-Za-zÑñ .'-]+$/.test(name)){
    result.textContent = "Use only letters. Numbers and symbols are not valid.";
    return;
  }

  // Add to the end of the array
  students.push(name);

  // Refresh the class list and total
  displayStudents();

  // Show a message on the chalkboard and clear the input
  result.textContent = name + " was added to the class list.";
  input.value = ""; // Clearing the inputbox after clicking the button
}


// removeLastStudent()
function removeLastStudent(){
  const result = document.getElementById("resultBox");

   // Check if the class list is empty
  if (students.length === 0){
    result.textContent = "There are no students to remove."
    return;
  }

  // Remove the last student in the class list
  const remove = students.pop();

  displayStudents();

  result.textContent = remove + " was remove to the class list.";
}

// findStudent()
function findStudent(){
  const result = document.getElementById("resultBox");
  const input = document.getElementById("indexInput");
  const index = input.value.trim();

  if (index === ""){
    result.textContent = "Enter an index number first.";
    return;
  }

   if (students.length === 0){
    result.textContent = "There are no students to be searched."
    return;
  }

  // Check if the index is greater than the last student in the list
  if (index > students.length - 1){
    result.textContent = "No student has been found at index " + index + ".";
    return;
  }

  // Searching the students based on index
  const found = students.at(index);

  result.textContent = found + " is in the list.";
  input.value = "";

}

// joinStudents()
function joinStudents() {
  const result = document.getElementById("resultBox");
  const separator = document.getElementById("separatorInput").value;

  if (students.length === 0) {
    result.textContent = "There are no students to join.";
    return;
  }

  result.textContent = students.join(separator);
}

// convertToString()
function convertToString() {
  const result = document.getElementById("resultBox");

  if (students.length === 0) {
    result.textContent = "There are no students to convert.";
    return;
  }

  result.textContent = students.toString();
}
