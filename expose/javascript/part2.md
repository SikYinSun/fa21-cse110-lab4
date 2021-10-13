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
  -A
