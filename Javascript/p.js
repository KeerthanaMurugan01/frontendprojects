var a=10
var b=20
var c=a+b
console.log(c)
//function
function oppo()
{
    console.log("My phone name is oppo")
}
function iphone()
{
    console.log("My phone name is iphone")
}
oppo()
iphone()
//exercise
var x=20
var y=20
var z=x+y
function add()
{
    console.log(z)
}
add()
function samsung()
{
    console.log("samsung")
}
samsung()
var factor="kamal"
var fplayer="Dhoni"
var fmovie="vikram"
function favourite()
{
    console.log("Favourite actor:"+factor)
    console.log("favourite player:"+fplayer)
    console.log("favourite movie:"+fmovie)
}
favourite()
//parameters NaN=not a number
function add(c,d)
{
    console.log(c+d)
}
add(10,20)

function area(length,breath)
{
    var a=length*breath
    console.log("Area is:"+a) 
}
area(20,10)
//return
function add(e,f)
{
    return(e+f)
}
var tot=add(10,40)
console.log(tot)
//string
function myname()
{
    return "keerthu"
}
var m=myname()
console.log(m)
//conditional statement-syntax
if(true)
{
    console.log("its true")
}
else 
{
    console.log("false")
}
/*did you finish your homework
if yes,"print great job" or "finish your homework before playing"*/
var finishhomework=true
if(false)
{
    console.log("great job")
}
else{
    console.log("Finish your homework before playing")
}
//logical nand-&&,not,nor
console.log(true&&false&&false)
console.log(true||false||false)
console.log(!true)
/*What is the season of the year
if summer then print "have fun in the sun"
if autumn then print "admire the colourful leaves"
if winter then print "Bundle up and stay warm"*/
var season="winter"
if(season=="summer")
{
    console.log("have fun in the sun")
}
if(season=="autumn")
{
    console.log("admire the colourful leaves")
}
if(season=="winter")
{
    console.log("Bundle up and stay warm")
}
/*what is the score in the game
if score is less than 50 print "you need to improve"
if score is inbetween 50 and 70 print "Good job!"
if score is greater than 70 print"excellent performance"*/
var score=500
if(score<=50)
{
    console.log("you need to improve")
}
else if(50<score && score<=70)
{
    console.log("Good job!")
}
else if(score>70)
{
    console.log("excellent performance")
}
/*is the number is even or odd
if the number is even ,print "it is the even number"
if the number is odd ,print "it is the odd number"*/
var number=39
if(number%2==0)
{
    console.log("it is the even number")
}
else
{
    console.log("it is the odd number")
}
/*is the character is the vowel or consonant
if the character is a,e,i,o,u,then print "it is a vowel"
if the character is consonant,then print "it is a consonant"*/
var ch="Z"
if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u")
{
    console.log("it is a vowel")
}
else if(ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U")
{
    console.log("it is a vowel")
}
else{
    console.log("it is a consonant")
}
/*for loop
for(count that start,condition,iteration)*/
for(count=1;count<=10;count=count+1)
{
    console.log("hari")
}
//print all the numbers from 1 to 10 using for loop
for(i=1;i<=10;i=i+1)
{
    console.log(i)
}
//print all the numbers from 1 to 10,but increment by 2 using for loop
for(n=1;n<=10;n=n+2)
{
    console.log(n)
}
//print numbers from 1 to 10 ,in reverse order
for(m=10;m>=1;m=m-1)
{
    console.log(m)  
}
//print even numbers from 1 to 10 
for(j=0;j<=10;j+=2)
{
    console.log(j)
}
//print 2 tables
for(start=1;start<=10;start=start+1)
{
    console.log(start+"x2="+start*2)
}






