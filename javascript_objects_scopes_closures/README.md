# JavaScript - Objects, Scopes and Closures

## Learning Objectives

- Why JavaScript programming is amazing
- How to create an object in JavaScript
- What ```this``` means
- What ```undefined``` means
- Why the variable type and scope is important
- What is a closure
- What is a prototype
- How to inherit an object from another

## Requirements

- Recommended editor: Visual studio code
- All files are interpreted on Ubuntu 20.04 LTS using node (version 14.x)
- All your files end with a new line
- All codes are semistandard compliant. Rules of Standard + semicolons on top.
- The length of files are tested using wc
- var is not used


## File Descriptions

- 0-rectangle.js - empty class Rectangle that defines a rectangle:
    - You must use the class notation for defining your class
- 1-rectangle.js - Write a class Rectangle that defines a rectangle:
    - You must use the class notation for defining your class
    - The constructor must take 2 arguments w and h
    - Initialize the instance attribute width with the value of w
    - Initialize the instance attribute height with the value of h
- 2-rectangle.js - class Rectangle that defines a rectangle:
    - You must use the class notation for defining your class
    - The constructor must take 2 arguments w and h
    - Initialize the instance attribute width with the value of w
    - Initialize the instance attribute height with the value of h
    - If w or h is equal to 0 or not a positive integer, create an empty object
- 3-rectangle.js - Write a class Rectangle that defines a rectangle:
    - You must use the class notation for defining your class
    - The constructor must take 2 arguments: w and h
    - Initialize the instance attribute width with the value of w
    - Initialize the instance attribute height with the value of h
    - If w or h is equal to 0 or not a positive integer, create an empty object
    - Create an instance method called print() that prints the rectangle using the character X
- 4-rectangle.js - Write a class Rectangle that defines a rectangle:
    - You must use the class notation for defining your class
    - The constructor must take 2 arguments: w and h
    - Initialize the instance attribute width with the value of w
    - Initialize the instance attribute height with the value of h
    - If w or h is equal to 0 or not a positive integer, create an empty object
    - Create an instance method called print() that prints the rectangle using the character X
    - Create an instance method called rotate() that exchanges the width and the height of the rectangle
    - Create an instance method called double() that multiples the width and the height of the rectangle by 2
- 5-square.js - Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:
    - You must use the class notation for defining your class and extends
    - The constructor must take 1 argument: size
    - The constructor of Rectangle must be called (by using super())
- 6-square.js - Write a class Square that defines a square and inherits from Square of 5-square.js:
    - You must use the class notation for defining your class and extends
    - Create an instance method called charPrint(c) that prints the rectangle using the character c
    - If c is undefined, use the character X