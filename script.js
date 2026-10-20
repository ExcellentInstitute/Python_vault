// script.js

const templates = {
    basics: `# Basics & input()
print("Welcome to Excellent Institute!")
print("Location: 019, Teachers Colony, Surada\\n")

name = input("Enter student name: ")
course = input("Enter course (e.g., BCA, PGDCA, Python): ")

print(f"\\nHello, {name}!")
print(f"Good luck with your {course} studies!")`,

    loops: `# Loops & Comprehensions
print("--- For Loop ---")
for i in range(1, 6):
    print(f"Iteration: {i}")

print("\\n--- While Loop ---")
count = 5
while count > 0:
    print(f"Countdown: {count}")
    count -= 1

print("\\n--- List Comprehension ---")
# Quickly generate a list of squares
squares = [x**2 for x in range(1, 6)]
print(f"Squares from 1 to 5: {squares}")`,

    functions: `# Functions & Recursion
def greet_student(name, batch="2023-2026"):
    """Greets a student with their batch year."""
    print(f"Welcome {name}, Batch {batch}!")

def factorial(n):
    """Recursive function to calculate factorial."""
    if n == 1 or n == 0:
        return 1
    else:
        return n * factorial(n - 1)

greet_student("Pradeep")
print("\\nFactorial of 5 is:", factorial(5))`,

    oop: `# OOP Classes
class Institute:
    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.courses = []

    def add_course(self, course):
        self.courses.append(course)
        print(f"Added {course} to {self.name}")

    def show_details(self):
        print(f"\\n{self.name} ({self.location})")
        print("Available Courses:", ", ".join(self.courses))

# Create an object
my_institute = Institute("Excellent Institute", "Surada")
my_institute.add_course("Python")
my_institute.add_course("Java")
my_institute.show_details()`,

    numpy: `# NumPy Array & Matrix Operations
# Note: This works completely offline in your IDE!
import numpy as np

print("--- 1D Array ---")
arr = np.array([10, 20, 30, 40])
print("Array:", arr)
print("Multiplied by 2:", arr * 2)

print("\\n--- 2D Matrix ---")
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix)

print("\\n--- Matrix Transpose ---")
print(matrix.T)

print("\\n--- Matrix Shape ---")
print(f"Rows: {matrix.shape[0]}, Columns: {matrix.shape[1]}")`
};

function loadTemplate(key) {
    const code = templates[key];
    
    // Check if the Android WebView JavascriptInterface is available
    if (window.AndroidIDE && typeof window.AndroidIDE.loadCode === 'function') {
        // Send the code template directly to the Android Kotlin backend
        window.AndroidIDE.loadCode(code);
    } else {
        // Fallback for testing in a regular desktop/mobile browser
        alert("This feature injects code into the Excellent Institute Android App.\\n\\nCode Preview:\\n\\n" + code);
    }
}
