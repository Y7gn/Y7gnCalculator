
screen = document.getElementsByClassName("screen")[0];
deleteNow = document.getElementsByClassName("delete")[0];
numbers= document.getElementsByClassName("number");
plus= document.getElementsByClassName("plus")[0];
minus= document.getElementsByClassName("minus")[0];
multiply= document.getElementsByClassName("multiply")[0];
divide= document.getElementsByClassName("divide")[0];
clearnow= document.getElementsByClassName("clear")[0];
equal= document.getElementsByClassName("equal")[0];
rnd= document.getElementsByClassName("rnd")[0];
points= document.getElementsByClassName("points")[0];
square= document.getElementsByClassName("square")[0];

console.log(numbers)
console.log(numbers)

// function bigNum() {
    
// };
var num=0;
var array = [];
var result=0;
var noOP = 0;
you_can_enter_number=true;
for(let i = 0; i <= numbers.length-1; i++){
    numbers[i].addEventListener("click",function(){
        // minus.className = "btn operation minus";
        // multiply.className = "btn operation multiply";
        // divide.className = "btn operation divide";
        // plus.className = "btn operation plus";
        
        console.log(you_can_enter_number);
            if(you_can_enter_number==false){
                console.log("cleared");
                clearInterval();
                screen.innerHTML = 0;
                result = 0;
                array = [];
                num=00;
                sessionStorage.clear()
                localStorage.clear();
                you_can_enter_number=true;

            }else{
                equal.className=="btn number equal";
            num += numbers[i].innerHTML.toString();
            screen.innerHTML = Number(num);
            // arr.length = 0
            }
        }
    )
}

plus.onclick= function(){
    console.log(+num);
    array.push(+num);
    console.log(array);
    num=0;
    minus.className = "btn operation minus";
    multiply.className = "btn operation multiply";
    divide.className = "btn operation divide";
    if(plus.className=="btn operation plus active"){
        plus.className == "btn operation plus active"
    }else{
        plus.className += " active";
    }
    you_can_enter_number=true;

}
divide.onclick= function(){
    console.log(+num);
    array.push(+num);
    console.log(array);
    num=0;
    plus.className = "btn operation plus";
    minus.className = "btn operation minus";
    multiply.className = "btn operation multiply";
    if(divide.className=="btn operation divide active"){
        divide.className == "btn operation divide active";
    }else{
        divide.className += " active";
    }
    you_can_enter_number=true;

    
}
multiply.onclick= function(){
    console.log(+num);
    array.push(+num);
    console.log(array);
    num=0;
    plus.className = "btn operation plus";
    minus.className = "btn operation minus";
    divide.className = "btn operation divide";
    if(multiply.className=="btn operation multiply active"){
        multiply.className == "btn operation multiply active";
    }else{
        multiply.className += " active";
    }
    you_can_enter_number=true;

}
minus.onclick= function(){
    console.log(+num);
    array.push(+num);
    console.log(array);
    num=0;
    plus.className = "btn operation plus";
    multiply.className = "btn operation multiply";
    divide.className = "btn operation divide";
    if(minus.className=="btn operation minus active"){
        minus.className == "btn operation minus active";
    }else{
        minus.className += " active";
    } 
    you_can_enter_number=true;

}
rnd.onclick= function(){
    num = roundUpNearest10(+num)
    console.log(+num);
    // console.log(num)
    // console.log(Math.round(+num));

    array.push(+num);
    screen.innerHTML = +num;
    console.log(array);
} 
square.onclick= function(){
    num *= num;
    console.log(+num);
    // console.log(num)
    // console.log(Math.round(+num));

    array.push(+num);
    screen.innerHTML = +num;
    console.log(array);
} 
deleteNow.onclick= function(){
    console.log(num);
    num = num.slice(num.length-1)
    console.log(+num);
    // console.log(num)
    // console.log(Math.round(+num));

    // array.push(+num);
    screen.innerHTML = +num;
    console.log(array);
} 

clearnow.onclick = function ClearNow(){
    console.log("cleared");
    clearInterval();
    screen.innerHTML = 0;
    result = 0;
    array = [];
    num=0;
    sessionStorage.clear()
    localStorage.clear()
}
equal.onclick = function(){
    if(+result==0){
        result = array[0];
        // result++;
    }

    console.log("the number you wanna add is " + num);
    array.push(+num);
    console.log(array);

    //do last operation
    if(plus.className === "btn operation plus active"){
        result += array[array.length-1];
        // screen.innerHTML = result;
        console.log(result);
    }else if(minus.className === "btn operation minus active"){
        result -= array[array.length-1];
        // screen.innerHTML = result;
    }else if(multiply.className === "btn operation multiply active"){
        result *= array[array.length-1];
    // screen.innerHTML = result;
    }else if(divide.className === "btn operation divide active"){
        // result =+
        result /= array[array.length-1];
        // screen.innerHTML = result;
    }else{
        console.log("error");
    }
    screen.innerHTML = result;
    console.log(result);
    num=0;
    noOP++;
    if(equal.className=="btn number equal active"){
        equal.className == "btn number equal active";
    }else{
        equal.className += " active";
    } 
    you_can_enter_number=false;
    
}

function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
}


