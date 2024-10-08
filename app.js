//             // CHAPTER 6-9     
                 
//                     // 31.Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your
// // browser:


// var num = 10;
// document.write("<h1>Results</h1><br>the value of a is:"+num)
// ++num
// document.write("<br> the value of ++a is:"+num)
// document.write("<br>  now the value of a is:"+num)
// num++
// document.write("<br> the value of a++ is:"+num)
// document.write("<br> now the value of a is:"+num)
// --num
// document.write("<br> now the value of --a is:"+num)
// document.write("<br> now the value of a is:"+num)
// num--
// document.write("<br> the value of a-- is:"+num)
// document.write("<br> now the value of a is:"+num)










// // 32. What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;

// var a=2,b=1;

// document.write(--a)
// document.write(`<br>${--a - --b}`)
// document.write(`<br>${--a - --b + ++b}`)
// document.write(`<br>${--a - --b + ++b + b--}`)
// var Results=    --a - --b + ++b +b--;


// document.write(`<br> a is  ${a}
// <br> b is  ${b}
// <br> results is ${Results}`)









// // 33.Write a program that takes input a name from user &
// // greet the user.


// var username = prompt("please enter your name")
// alert("welcome"+username)











// // 34.Write a program to take input a number from user &
// // display it’s multiplication table on your browser.If user
// // does not enter a new number, multiplication table of 5
// // should be displayed by default.


// var num = +prompt("please enter any number",5)
// document.write(`${num} x 1 = ${num*1}
// <br>${num} x 1 = ${num*2}
// <br>${num} x 1 = ${num*3}
// <br>${num} x 1 = ${num*4}
// <br>${num} x 1 = ${num*5}
// <br>${num} x 1 = ${num*6}
// <br>${num} x 1 = ${num*7}
// <br>${num} x 1 = ${num*8}
// <br>${num} x 1 = ${num*9}
// <br>${num} x 1 = ${num*10}`)










// // 35.
// // a) Take three subjects name from user and store them in 3
// // different variables.
// //     b) Total marks for each subject is 100, store it in another
// // variable.
// //     c) Take obtained marks for first subject from user and
// // stored it in different variable.
// //     ALERTS | JAVASCRIPT
// // Page 3 of 3
// // d) Take obtained marks for remaining 2 subjects from user
// // and store them in variables.
// //     e) Now calculate total marks and percentage and show the
// // result in browser like this.(Hint: user table)



// var subject1 = prompt("write the subject")
// var subject2 = prompt("write the subject")
// var subject3 = prompt("write the subject")

// var obtainedmarks1 = +prompt("obtained marks of "+ subject1)
// var obtainedmarks2 = +prompt("obtained marks of "+ subject2)
// var obtainedmarks3 = +prompt("obtained marks of "+ subject3)

// var totalmarks = 100
// var totalresults = obtainedmarks1+obtainedmarks2+obtainedmarks3
// var gtotalmarks = totalmarks*3
// document.write(`
// <table>
// <tr>
// <td><h1>Subject<h1></td>
// <td><h1>Total Marks<h1></td>
// <td><h1>Obtained Marks<h1></td>
// <td><h1>Percentage<h1></td>
// </tr>
// <tr>
// <td>${subject1}</td>
// <td>${totalmarks}</td>
// <td>${obtainedmarks1}</td>
// <td>${(obtainedmarks1/totalmarks)*100}%</td>
// </tr>
// <tr>
// <td>${subject2}</td>
// <td>${totalmarks}</td>
// <td>${obtainedmarks2}</td>
// <td>${(obtainedmarks2/totalmarks)*100}%</td>
// </tr>
// <tr>
// <td>${subject3}</td>
// <td>${totalmarks}</td>
// <td>${obtainedmarks3}</td>
// <td>${(obtainedmarks3/totalmarks)*100}%</td>
// </tr>
// <tr>
// <td></td>
// <td>${gtotalmarks}</td>
// <td>${totalresults}</td>
// <td>${(totalresults/gtotalmarks)*100}%</td>

// </table>
// `)


                    //  CHAPTER 9-11

                    
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var cityname = prompt("write the city name")

if(cityname==="karachi"){
    document.write("welcome to city of lights")}

    






// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


var gender = prompt("please write your gender")

if(gender=="male"){
    document.write("hello sir")
}
else{
    document.write("hello madam")
}








// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:



var trafficlight = prompt("please write the traffic color")

if(trafficlight=="red"
){
    document.write("stop")
    }
    else if(trafficlight=="yellow"){
        document.write("get ready")
        }
        else{
            document.write("go")
            }











// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”


var fuel = +prompt("write the remaining fuel in car")

if(fuel <=0.25){
    document.write("please refill the fuel in your car ")
}
else{
    document.write("fuel is enough")
}








// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:



var obtndmrks1 = +prompt("write the obtained marks of subject 1")
var obtndmrks2 = +prompt("write the obtained marks of subject 2")
var obtndmrks3 = +prompt("write the obtained marks of subject 3")
var totalmarks = 100*3
var totalobtndmarks = obtndmrks1+obtndmrks2+obtndmrks3
var percentage = (totalobtndmarks/totalmarks)*100
var grade = ""
remarks = ""
if(percentage >=80){
    grade +="A+";
    remarks+="Excelent"
    if(percentage >=70){
        grade +="A";
    remarks+="Excelent"}
    }
    else if(percentage >=60){
        grade +="B";
        remarks+="good"}
        else if(percentage >=50){
            grade +="C";
            remarks+="more hardwork needed"}
            else if(percentage >=40){
                grade +="D";
                remarks+="improvent needed"
                }
                else{
                    grade +="F"
                    }
                    document.write(`<h1>Marksheet</h1><br>Total marks: ${totalmarks}
                    <br> Marks Obtained: ${totalobtndmarks}
                    <br> Percentage: ${percentage}% 
                    <br> Grade: ${grade}
                <br> Remarks: ${remarks}`)






// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var secretnum = 2;
var guessnum = +prompt("Guess the secret number from 1 to  10");

if (guessnum===secretnum){
    alert("Bingo correct answer")
}
else if(guessnum>secretnum){
    alert("Too high")
    }
    else if(guessnum===3){
        alert("Too close")
    }
    else if(guessnum===1){
        alert("Too close")
    }
    else{
        alert("not the same number")
        }





// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


var num = +prompt("write the number which is divisible by 3 ")

if (num % 3 === 0){
    alert("yes the number is divisible by 3")
}
else{
    alert("no the number is not divisible by 3")
}





// 9. Write a program that checks whether the given input is an
// even number or an odd number.



var num = +prompt("write any number")

if(num % 2==0){
    alert ("the number is even")
}
else{
    alert("the number is odd")
}










// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



var temp = +prompt("write the temprature")
if(temp > 40){
    alert("it's too hot outside")
    }
    else if (temp>30){
        alert("the weather today is normal")
    }
    else if (temp>20){
        alert("today's weather is cool")
    }
    else if(temp>10){
        alert("it's too cold outside")
    }
    





// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var num1 = +prompt("write the first num")
var operation = prompt("write the operation")
var num2 = +prompt("write the 2nd num")

if(operation==="+"){
    alert(num1+num2)
}
else if(operation==="-"){
    alert(num1-num2)
    }
    else if(operation==="*"){
        alert(num1*num2)
        }
        else if (operation==="%"){
            alert(num1%num2)
        }





