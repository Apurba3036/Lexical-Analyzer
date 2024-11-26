# 📖 Lexical Analyzer

A **Lexical Analyzer** is the first phase of a compiler that scans the source code and breaks it into meaningful sequences called **tokens**. It identifies keywords, operators, identifiers, numbers, and other syntactical elements of a programming language. This project implements a simple lexical analyzer using **HTML**, **JavaScript**, and **Bootstrap**, providing a clean and user-friendly interface to visualize the analysis process.

---

## Website Live : [https://lexical-analyzer-assignment.netlify.app/](https://lexical-analyzer-assignment.netlify.app/)

## 🚀 Project Features

- **Flexible Input**:  
  - Write code directly in a text area.
  - Upload `.txt` files containing source code.

- **Token Categorization**:  
  - Recognizes and categorizes:
    - Keywords
    - Identifiers
    - Numbers
    - Operators
    - Punctuators

- **Error Detection**:  
  - Highlights invalid identifiers with descriptive error messages.

- **Responsive Design**:  
  - Designed with **Bootstrap** for a sleek and adaptable interface.

---

## 🛠️ How It Works

### 1️⃣ Input Methods
- **Text Area**: Type or paste the source code.
- **File Upload**: Upload a file containing code to analyze.

### 2️⃣ Execution Process
- **"Execute" Button**: Processes the input to generate tokens.
- **"Reset" Button**: Clears the input and output fields.

### 3️⃣ Token Output
- The terminal-like output area displays:
  - Tokens with their categories.
  - Errors for invalid identifiers.

---

## 💡 Utility Functions


1. Define a function to check if a character is a punctuator.
2. Define a function to check if a string is an operator.
3. Define a function to check if a string is a keyword.
4. Define a function to validate if a string is a number.
5. Define a function to validate if a string is a valid identifier.
---


## 💡 Token Analysis
1. Initialize `left` and `right` pointers for string traversal.
2. Loop through the input string:
   a. If the character is not a punctuator, move the `right` pointer.
   b. When a punctuator is found:
      i. Extract the substring between `left` and `right`.
      ii. Classify the substring as a keyword, identifier, number, or operator.
      iii. Append the result to the token list.
   c. Move the `left` pointer to match the `right` pointer and continue.
3. Repeat until the string is fully analyzed.

# File Upload Handling
1. Use a file reader to read the uploaded file as text.
2. Populate the input text area with the file content.


## 📂 File Structure



1. Define a function to check if a character is a punctuator.
2. Define a function to check if a string is an operator.
3. Define a function to check if a string is a keyword.
4. Define a function to validate if a string is a number.
5. Define a function to validate if a string is a valid identifier.
---


## 💡 Utility Functions
1. Initialize `left` and `right` pointers for string traversal.
2. Loop through the input string:
   a. If the character is not a punctuator, move the `right` pointer.
   b. When a punctuator is found:
      i. Extract the substring between `left` and `right`.
      ii. Classify the substring as a keyword, identifier, number, or operator.
      iii. Append the result to the token list.
   c. Move the `left` pointer to match the `right` pointer and continue.
3. Repeat until the string is fully analyzed.

# File Upload Handling
1. Use a file reader to read the uploaded file as text.
2. Populate the input text area with the file content.


## 📂 File Structure

.
├── 📄 index.html          # Main HTML file containing the UI structure
├── 🎨 style.css           # Custom styling with Bootstrap enhancements
├── 🖋️ lex.js              # JavaScript logic for lexical analysis
└── 📂 assets              # Folder for additional assets like icons or images

## Output

```bash

int --> <Token , KW>  
main --> <Token , id>  
() --> <Token , Op>  
{ --> <Token , Op>  
int --> <Token , KW>  
x --> <Token , id>  
= --> <Token , Op>  
10 --> <Token , num>  
; --> <Token , Op>  
cout --> <Token , id>  
<< --> <Token , Op>  
"Hello, World!" --> <Token , id>  
} --> <Token , Op>  
```

### 🧑‍💻 Developed By
Nazmus Sakib Apurba
Department of Computer Science and Engineering, IUBAT
