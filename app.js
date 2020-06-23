//var nam1= prompt("first name");
//var nam2= prompt("last name");
//var fullname=["nam1,nam2"]
//alert("fullname")


//Task # 2
//var favoritemobilephone = prompt("write your favorite mobile");
//var b = favoritemobilephone.length
//document.write("my fav mobile is Samsung Galaxy:" + favoritemobilephone + "<br>" + "Length of character:" + b)


//Task # 3
//var letter = "Pakistani"
//document.write(letter + "<br>")
//var letter2 = letter.indexOf("n")
//document.write("index of n" + letter2)



//Task # 4
//var lett = "str:Hello World"
//document.write(lett + "<br>")
//var let2 = lett.lastIndexOf("l")
//document.write("last index of l:" + let2)


//Task # 5
//var let = "Pakistani"
//document.write(let + "<br>")
//var tt = let.indexOf("i")
//document.write("index of i:" + tt)


//Task # 6
//var str = "first name";
//var value = str.concat('last name'  , 'fullname');
//document.write(value);


//Task # 7
//var city = "City: Hyderabad";
//document.write(city + "<br>")
//var afterReplacement = city.replace("Hyder" , "Islamabad");
//document.write("afterReplacement:Islamabad")


//Task # 8
//var msg = "Ali and Sami are best friends.They play cricket and football together.";
//var newMsg = msg.replace(/and/g ,"&");
//document.write("Ali and Sami are best friends.They play cricket and football together"
//+ "<br>" + newMsg)


//Task # 9
//var str = "472";
//var num = parseInt(str)
//document.write("value:" + str + "<br>" + "typeof:" + str + "<br>" + "Value:" + num  + "<br>" + "Type: number")


//Task  # 10
//var userInput = prompt("Enter your book");
//userInput = userInput.toUpperCase();
//document.write(userInput)


//Task # 11
//var Userinput = prompt("Enter your word");
//var firstword = Userinput.slice(0 , 1);
//firstword = firstword.toUpperCase();
//var otherwords = Userinput.slice(1);
//otherwords =otherwords.toLowerCase();
//var titled = firstword + otherwords;
//document.write("Titled :" + titled )


//Task # 12
//var num = "36.45";
//var string = num.toString();
//document.write(string)

//Task # 13





//Task # 14
//var input = prompt("Welcome to freshy Bakery.What do you want sir/mam ?") 
//var ik = ["cake","apple pie","cookie","chips","patties"]; 
//if (input==="cake"){ 
   //document.write("Cake is available at Index 0 in our bakery" + "  " + "<br>" + "is not available in our bakery") 

//} 
//else if (input==="apple pie"){
 //document.write("apple pie is available at Index 1 in our bakery") 
//} 
//else if (input==="cookie" ,"Cookie", "COOKIE", "coOKIE"){ 
    //document.write("cookie ,Cookie,COOKIE, coOKIE  is available at Index 2 in our bakery") 
//} else if (input==="chips"){ 
   // document.write("chips is available at Index 3 in our bakery") 
//} 
//else if (input==="patties"){ 
    //document.write("patties is available at Index 4 in our bakery") 
//} 
//else { 
    //document.write("We are sorry"+" "+ input + "is not available in our bakery") 
//}


//Task # 16
//var uni = "University of Karachi";
//var un2 = uni.split('');
//for (var i= 0; i<un2.length;i ++){
    //document.write(un2[i], "<br>")
//}



//Task # 17
//var str = "Pakistani";
//var res = str.charAt(str.length-3);
//document.write("User input: (str) <br>")


//Task # 18 
//document.write("The quick brown fox jumps over the lazy dog" + "  " + "<br>" + "There are 2 occurence(s) of word 'the'")



//Chap # 26-30

//Task # 1
//console.log(3.45214);
//console.log(Math.round(3.45214));
//console.log(Math.floor(3.45214));
//console.log(Math.ceil(3.45214));



//Task # 2
//console.log(-2.673);
//console.log(Math.round(-2.673));
//console.log(Math.floor(-2.673));
//console.log(Math.ceil(-2.673));


//Task # 3
//document.write("The absolute  value of (-4) is:" + Math.abs (4));
//"<br>"
//document.write("The absolute  value of (5) is:" + Math.abs (5));


//Task # 5
//var headuser = prompt("Enter haeds username");
//var tailuser = prompt("Enter tails username");
//var toss = Math.random() * 2;
//var floor = Math.floor(toss)
//if(floor ===1){
    //alert("Heads  " + headuser + "win the toss")
//}else{
    //alert("Tails  " + tailuser + "win the toss")
//}


//Task # 4
//var dice = prompt("Enter dice username");
//var dice = prompt("Enter dice username");
//var dic= Math.random() * 4;
//var floor = Math.floor(dic)
//if(floor ===6){
    //alert("dice  " + dice + "random dice value")
//}else{
    //alert("dice  " + dice + "random dice value")
//}


// Task # 6
//var arr = [];
//while (arr.length < 8) {
    //var r = Math.floor(Math.random() * 100) + 1;
    //if(arr.indexOf(r) === -1) arr.push(r);


//Number between 1 and 100
//var random = Math.floor(Math.random() *100) - 1;

//console.log(random);


//Task # 7
//var s = prompt("Enter your weight in Kilograms");
//var t = parseFloat(s);
//var u = Math.random() *50.2;
//document.write(u + "Kilograms")



//Task # 8
//var num = prompt ("Enter a number Between 1 t0 10");
//var ran = Math.floor(Math.random();
//alert (ran + "If the user input equals the secret number, congratulate the user")




//Chap  # 31-34

//Task # 
//function renderTime(){
//var date = new Date();
//var year = date.getYear();
 //if (year < 1000){
    // year +=1900
    //}
//var day = date.getDay();
//var month = date.getMonth();
//var daym = date.getDay();
//var dayarray = new Array("Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday");
//var monthaaray = new Array ("Janyuary","February", "March" ,"April" , "May" , "June" , "July" , "August", "September" , "October" , "November" , "December");

//var currentTime = new Date();
//var h = currentTime.getHours();
//var m = currentTime.getMinutes();
//var s = currentTime.getSeconds();
    //if (h == 24){
       // h = 0;
    //}else if(h > 12){
       // h = h -0;
    //}


//if (h < 10){
     //h = "0" + h;
//}
//if (m < 10){
    //m = "0" + m;
//}
//if (s < 10){
     //s = "0" + s;
//}
//var myClock = document.getElementById("clockDisplay");
//myClock.textContent = "" + dayarray[day] + "   " +daym+ "  " + monthaaray[month] + "  " + year + " | "  +h+  ":" +m+ ":" +s;

//}


//Task  # 2
//function month() {
   //var monthName = ["Janyuary","February", "March" ,"April" , "May" , "June" , "July" , "August", "September" , "October" , "November" , "December"];
   //var currentDate = new Date();
   //var result = monthName[currentDate.getMonth()];
   //document.write(result);
//}
//month();



//Task # 3
//var day = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
//var date = new Date().getDay();
//if(day[date] === "Sunday" ||day[date] ==="Saturday"){
    //alert("Today is Sunday")
//}else{
    //alert("Today is Sun")
//}


//Task # 4
//var fun = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
//var f = new Date().getDay();
//if(fun[f] === "funday" ||fun[f] ==="funday"){
    //alert("Today is fun")
//}else{
    //alert("It's Sunday & Fun Day")
//}



//Task # 5
//var d = new Date();
//var da = d.getDay();
//if (d[da] === "b < 16"){
    //alert("First FIFteen DAy of the Month")
//}else{
    //alert("Last day of the month \n First FIFteen DAy of the Month")
//}



//Task # 6
//var minutes = new Date();
//var minMili = minutes.getTime();
//var minutesconvert = minMili/(1000*60*60)

//document.write("Current Date:" + minutes+ "<br>");
//document.write("Elapsed milliseconds since June 20 , 2020:" +minMili+ "<br>");
//document.write("Elapsed minutes since June 20, 2022:" +minutesconvert+ "<br>");




//Task # 7
//const dt = new Date();

//let hour = dt.getHours();

//let minutes = dt.getMinutes();

//let prepend = hour>=12? "PM" : "AM";

//console.log(prepend);




 //Task # 8
 //var LaterDate = new Date();
 //LaterDate.setFullYear(2020,11,31);
 //document.write(LaterDate)



 //Task # 12 
 //var now = new Date(); 
 
 //var oneYr = new Date(); 
 //oneYr.setYear(now.getYear() + 1); 
 //$("#yearFromNow").append(oneYr.toString()); 

 //var oneMonth = new Date(); 
 //oneMonth.setMonth(now.getMonth() + 1); 
 //$("#monthFromNow").append(oneMonth.toString());




 //Task # 13


 //var CurrentYear = 2018;
 //var BirthYear = 1994;
 //var YourAgeis= (CurrentYear - BirthYear)
 
 //document.write("<br<br> Current year:" + "   " + CurrentYear + "<br> Birth year:" + "  " + BirthYear 
 //+ "<br> Your Age is:" + "   " + YourAgeis) 
 

 //Chap # 35-38

 //Task # 1
 //let later_Date = new Date()
 //console.log(later_Date.toString())



 //Task # 2
 //var nam1= prompt("first name");
 //var nam2= prompt("last name");
 //var fullname=["nam1,nam2"]
 //alert("fullname")


 //Task # 3
 //var array = [1,2,3,4];

 //var sum = 
 //array.reduce(function(a, b){
     //return a + b;
//}, 0);

//document.write(sum);




//Task # 5
//function square(x) {
    //x = x * x;
//}
//var y = 8;
//square(y)
//document.write(y)
//console.log(y);


//Task # 6
//function factorial(n) {
  //let answer = 1;
  //if (n ==0 || n == 1){

//}else{
    //for(var i = n; i  >= 1; i--){
      // answer = answer * i;
    
   //}
     //return answer;
  //}
//}

//let n =4;
//answer = factorial(n)

//console.log("The factorial of " + n + "  is  "  + answer);



//Task # 7



 
 