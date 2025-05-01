1. 3 will be printed out to the console because var i is updated in the for loop 3 times. Specifically incremented by 1.
2. 150 will be printed out because 300*0.5 = 150;
3. 150 will be the final price because its set to equal the rounded discounted price.
4. This function will return an array filled with 50,100,150. This is because each final price before updated to the next price will be pushed to the end of the discounted array.
5. An ReferenceError is thrown: ReferenceError: i is not defined due to i only existing in the for loop block.
6.  Anoter ReferenceError is thrown due to discountedPrice being block based.
7.  150 is returned. This is because the let function was created out of the for block and is a local block variable in the discountPrices function 
8. 50, 100, 150 is returned. This is due to the same reason of finalPrice.
9. It will cause an error because i only exists in the for loop. Meaning it can't be refrenced outside of it.
10. An refrence error will be thrown because we don't actually have a length variable. If we had logged, the finalPrice, we would've gotten what we wanted.
11. It returns the discounted array prices 50,100,150. This is because we aren't refrencing any let variables out of their block or changing any const vairables (the push function is only inserting elements into the discounted array and not changing the discounted variable itself, i.e discounted= 10,20,30 isnt the same as discounted.push val) , allowing for the code to run smoothly.
12. student.name, student["Grad Year"], student.greeting(), student["Favorite Teacher"].name, student.courseLoad[0].
13.
32 this is because js will conduct string concatenation instead of addition due to '3' turning 2 into a string.
1 JS attempts to convert the string into a number if its subtracted from a number. resulting in 1.
3 This is due to null not being anything, resulting in 3.
4 This is because when a boolean is used with a number, its converted into a number, with truth being 1 and false being 0. Resulting 1+3=4.
0 This is because when using + with different types type coercion occurs resulting false and null becoming 0. 
3undefined Since '3' is a string, this results in string concatenation with +, concatenating 3 and undefined being coerced into a string. 
NaN  AKA not a number occurs because with - the types are attempting to be coerced into a number, with 3 being valid whereas undefined doesn't have a numerical value, resulting in NaN
14. true because js type coersion, '2' becomes a number 2, false because 2 is lexographically greater than 1, resulting it being false that its less than '12', true because == will perform type coercion, making it so 2 becomes '2' resulting in true, false because === performs a strict check, involving value and type, and since its comparing a num and string it will result in false, false because true would be 1 and 1 doesn't equal 2, true because when setting 2 as a Boolean, any value that isnt 0, -0, or NaN is truth, resulting in the comparison being true. 
15. == simply checks equivalence and will type coerce a value to match the value its compared too. whereas === will strictly compare the two values as is, with no type coercion.
