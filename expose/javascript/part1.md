1. 20 is printed by line 9.
2. 20 is printed by line 13.
3. Var shouldn't be used because its a function scope. Meaning that it's accessible anywhere within the function which can lead to confliction errors due to naming/scoping.
4. 20 is printed by line 9 for let.
5. An ReferenceError: result is not defined is thrown at line 13 since let is a block scope meaning it only exists whithin that section of if.
6. The code returns an error due to the 7th line trying to reassing the value of result, which we established as a constant. Meaning we can't change it's value.
7. There is still an error due to what was previously discussed in 6.
