/*********Quest. 1 *****/
var inp = prompt("Enter any keyboard input");
if(inp.charCodeAt() >= 65  && inp.charCodeAt() <=90){
    alert("you've entered upper case letter")
}
else if(inp.charCodeAt() >= 97  && inp.charCodeAt() <=122){
    alert("you've entered lower case letter")
}
else{
    alert("you've entered a number")
}


/**********Quest. 2 *******/
var num1 = prompt("Enter first number")
var num2 = prompt("Enter second number")

if(num1>num2){
    alert(num1+"is larger")
}
    else if(num1===num2){
        alert("both numbers are equal")
    }
else{
        alert(num2+"is larger")
    }
    
    
    /*********Quest. 3 *****/
    var inp = prompt("Enter any number");
    if(inp > 0){
        alert("you've entered a positive number")
    }
    else if(inp<0){
        alert("you've entered a negative number")
    }
    else{
        alert("you've entered zero")
    }
    

    /*********Quest. 4 *****/
    var inp = prompt("Enter any alphabet");
    if(inp === 'a' || inp === 'e' || inp === 'i' || inp === 'o' || inp === 'u' || inp === 'A' || inp === 'E' || inp === 'I' || inp === 'O' || inp === 'U'){
        alert("you've entered a vowel")
    }
    else{
        alert("you've entered consonant")
    }

    /***********Quest. 6 **********/
    var greeting; 
    var hour = 13; 
    if (hour < 18) { 
        greeting = "Good day"; 
    }
        else{
        greeting = "Good evening"; }