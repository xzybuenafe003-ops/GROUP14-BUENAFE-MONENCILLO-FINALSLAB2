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

//Mga gagawan pa ng function
// // addStudent()
// // removeLastStudent()
// findStudent()
// joinStudents()
// convertToString()
