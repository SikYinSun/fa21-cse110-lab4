1. It will print out 3 because they are only 3 element in the array and "i" it type of "var" which can be use outside the scope.
2. It will print out 150 because 300 * 0.5 = 150 and the "discountedPrice" is a variable of "var" which can be use outside the scope.
3. It will print out 150 because the "finalPrice" is a variable of "var" which can be use outside the scope.
4. The function will return an array with [50, 100, 150 ]. It is because the function initialize an empty array, and inside the for loop, "finalPrice" of each price push to the "discounted" array, and the loop runs for 3 time, so at the end the array contains 3 elements.
5. It will print out ReferenceError: "i" is not defined at discountPrices becacuse "i" is "let" type which cannot be use outside the scope(for loop).
6. It will print out ReferenceError: "discountedPrice" is not defined at discountPrices because "discountedPrice" is "let" type which cannot be use outside the scope(for loop).
7. It will print out 150 because the variable of "finalPrice" and the line which trying to access "finalPrice" is in the same scope, so it will print out the last calculated element.
8. The function will return an array with [50, 100, 150 ]. It is because the function initialize an empty array, and inside the for loop, "finalPrice" of each price push to the "discounted" array, and the loop runs for 3 time, so at the end the array contains 3 elements. And the keyword "return" will return the value when it get called.
9. It will print out ReferenceError: "i" is not defined at discountPrices. It is because "i" is declare in the for loop and line 11 is outside the for loop which is outside the scope and "i" is type of "const" which cannot access outside the scope. 
10. It will print out 3 because the array length is 3 and the variable "length" is in the same scope with line 12 which will not have any problem to access it although the type is "const".
11. The function will return an array with [50, 100, 150 ]. It is because the function initialize an empty array, and inside the for loop, "discountedPrice" of each price push to the "discounted" array, and the loop runs for 3 time, so at the end the array contains 3 elements. And the keyword "return" will return the value when it get called.
 12.
    A) student.name
    B) student["Grad Year"]
    C) student.greeting()
    D) student["Favorite Teacher"].name
    E) student.courseLoad[0]
 13.
    A) 32, it convert the number 2 to string 2 and concatenate the string 3 and string 2.
    B) 1, it convert the string 3 to number 3 and minus 2. 
    C) 3, it convert null to 0, so it become 3 + 0 = 3.
    D) 3null, it convert null to a string which become "null" and concatenate string 3 and string null.
    E) 4, it convert "true" to number 1, so it becomes 3 + 1.
    F) 0, it convert "false" to number 0, and null is nothing so 0 + nothing is equal to 0.
    G) 3undefined, it convert "underfined" to string and concatenate string 3 and string undefined.
    H) NaN, since underfined is not a number.
 14.
    A) true, it convert string 2 to number 2, and 2 is larger than 1.
    B) false, when compare string, the string start compare at the beginning. And 1 is not larger than 2, so it return false
    C) true, it convert string 2 to number 2, and 2 is equal to 2.
    D) false, it is because === checks the equality without type conversion.
    E) false, it convert true to number 1, and 1 is not equal to 2.
    F) true, it convert Boolean(2) to true, and now they have the same type, which return true.
15. == is just for regular equality check, it compare value. === is strict equality, it will check the equality without type conversion.
16. inside the javascript file
17. The result will be [ 2, 4, 6 ]. There are 2 parameters when the function call. One is the array and one is the function which is doSomething. When in get into the "modifyArray", the array named "array" and the function named "callback"(doSomething). Inside the function, it create a new array. In follow by a for loop which loop through the array length, inside the for loop, the array try to push a new value that using the "callback" function to get it. The "callback" function contains a parameter array[i], and inside the doSomething funciton, it just multiply the value by 2 and then return a value. After the "callback" returned a value it will push to the array. 
18. inside the javascript file
19. 1 4 3 2
  
