var operator = "";
var val1 = "";
var val2 = "";
// var val3 = "";


function num(ok) {
    document.getElementById('type').value += ok
    if (operator != '') {
        val2 = Number(ok)
    }

}
function sign(ok1) {
    operator = ok1;
    val1 = Number(document.getElementById('type').value)
 
    b = val1[0,val1.length-1];
    
    if (b == ok1 ) {
       
        var c = document.getElementById('type').value
      
        document.getElementById('type').value += val1;
    
    }else{
    document.getElementById('type').value += ok1;

    }

 

}
function clr() {
    // console.log('hi');
    var a = document.getElementById('type').value
    var b = a.slice(0, a.length - 1)
    // console.log(b);

    document.getElementById('type').value = b
}
function del() {
    document.getElementById('type').value = ''
    document.getElementById('result').value = ''
}
function calc() {
    if (operator == "+") {

        if (result.value == "0") {
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            
            document.getElementById('result').value = val1 + parseInt(val2);
        } else {
        
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            document.getElementById('type').value = `${result.value} + ${val2}`;
            document.getElementById('result').value = Number(result.value) + parseInt(val2);
            
            
        }
        

    
    }
    else if (operator == "-") {
        if (result.value == "0") {
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            
            document.getElementById('result').value = val1 - parseInt(val2);
        } else {
        
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            document.getElementById('type').value = `${result.value} - ${val2}`;
            document.getElementById('result').value = Number(result.value) - parseInt(val2);
            
            
        }
    }
    else if (operator == "*") {
        if (result.value == "0") {
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            
            document.getElementById('result').value = val1 * parseInt(val2);
        } else {
        
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            document.getElementById('type').value = `${result.value} * ${val2}`;
            document.getElementById('result').value = Number(result.value) * parseInt(val2);
            
            
        }
    }
    else if (operator == "/") {
        if (result.value == "0") {
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            
            document.getElementById('result').value = val1 / parseInt(val2);
        } else {
        
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            document.getElementById('type').value = `${result.value} / ${val2}`;
            document.getElementById('result').value = Number(result.value) / parseInt(val2);
            
            
        }
    }
    else if (operator == "%") {
        if (result.value == "0") {
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            
            document.getElementById('result').value = val1 / parseInt(val2);
        } else {
        
            console.log(typeof(val1));
            val2 = Number(val2)
            console.log(typeof(val2));
            document.getElementById('type').value = `${result.value} / ${val2}`;
            document.getElementById('result').value = Number(result.value) / parseInt(val2);
            
            
        }0
    }
    else if (operator == "^") {
        document.getElementById('result').value = parseInt(val1) ^ parseInt(val2);
    }
}






























































// var ans ='';
// var operation='';
// var first='';
// var second='';
// // var third;


// function num(w) {
//     var num = document.getElementById('type').value += w
//     console.log (num)

// }

// function sign(y) {
//     var cal = document.getElementById('type').value += y
//     console.log (cal)


// }
// function del() {
//     var textbox1 = document.getElementById('type')
//     textbox = document.getElementById("result")
//     textbox1.value = ""
//     textbox.value = ""

// }
// function clear(){
//     var textbox1 = document.getElementById('type')
//     textbox = document.getElementById("result")
//     textbox1.value = ""
//     textbox.value = ""
//     console.log('textbox.value')


// }

// function calc() {
//     let valuefs = document.getElementById('type').value
//     // console.log('first')

//     if (valuefs.indexOf('+') > 0){
//         let mymy=valuefs.split('+');
//         first = Number(mymy[0])

//         second = Number(mymy[1])
//         // third = Number(mymy[2])
//         ans = first +  second ;
//         // document.getElementById("result").value
//         // document.getElementById('result').value=third

//     }

//     if (valuefs.indexOf('-') > 0){
//         let mymy = valuefs.split('-');
//         first = Number(mymy[0])


//         second = Number(mymy[1])
//         // console.log(second)
//         ans = first -  second;
//         console.log(ans)
//     }
//     document.getElementById("result").value = ans

//     if (valuefs.indexOf('*') > 0){
//         let mymy = valuefs.split('*');
//         first = Number(mymy[0])


//         second = Number(mymy[1])
//         // console.log(second)
//         ans = first * second;
//         console.log(ans)
//     }
//     document.getElementById("result").value = ans

//     if (valuefs.indexOf('÷') > 0){
//         let mymy = valuefs.split('÷');
//         first = Number(mymy[0])


//         second = Number(mymy[1])
//         // console.log(second)
//         ans = first  / second;
//         console.log(ans)
//     }
//     document.getElementById("result").value = ans

//     if (valuefs.indexOf('√') > 0){
//         let mymy = valuefs.split('√');
//         first = Number(mymy[0])


//         second = Number(mymy[1])
//         // console.log(second)
//         // ans = first  second;
//         console.log(ans)
//     }
//     document.getElementById("result").value = ans




// }

    // secondnumber = parseInt(document.getElementById("result").value);



    // if (operation == "+") {
    //     ans = firstnumber + secondnumber


    // }
    // else if (operation == "=") {
    //    ans = firstnumber-secondnumber;
    // }
    // document.getElementById("result").value = "";
    // // document.getElementById("result")= value.toString();


    // document.getElementById("result").value = ans  ;
    // console.log("worki")

    // return;

// equalTo()
// function equalTo(){
//     if(operators == "+"){  
//     sum = num + num
//     console.log(sum)
//     document.getElementById("result").value = sum
//     }
//     else{
//         document.getElementById("result").value;
//     }
// }

// function percent(){
//     var textbox = document.getElementById('type')
//     textbox.value += "%"
// }
// function sqrt(){
//     var textbox = document.getElementById('type')
//     textbox.value += "sqrt"
// }
// function square(){
//     var textbox = document.getElementById('type')
//     textbox.value += "^"
// }
// function reciprocal(){
//     var textbox = document.getElementById('type')
//     textbox.value += "1/(n)"
// }
// function clear(){
//     var textbox = document.getElementById('type')
//     textbox.value = "dd"
// }
// function del(){
//     var textbox = document.getElementById('type')
//     textbox.value = ""
// }
// function divide(){
//     var textbox = document.getElementById('type')
//     textbox.value += "÷"
// }
// function getvalue7(){
//     var textbox = document.getElementById('type')
//     textbox.value += "7"
// }
// function getvalue9(){
//     var textbox = document.getElementById('type')
//     textbox.value += "9"
// }
// function getvalue8(){
//     var textbox = document.getElementById('type')
//     textbox.value += "8"
// }
// function times(){
//     var textbox = document.getElementById('type')
//     textbox.value += "*"
// }
// function getvalue4(){
//     var textbox = document.getElementById('type')
//     textbox.value += "4"
// }
// function getvalue5(){
//     var textbox = document.getElementById('type')
//     textbox.value += "5"
// }
// function getvalue6(){
//     var textbox = document.getElementById('type')
//     textbox.value += "6"
// }
// function minus(){
//     var textbox = document.getElementById('type')
//     textbox.value += "-"
// }
// function getvalue1(){
//     var textbox = document.getElementById('type')
//     textbox.value += "1"
// }
// function getvalue2(){
//     var textbox = document.getElementById('type')
//     textbox.value += "2"
// }
// function getvalue3(){
//     var textbox = document.getElementById('type')
//     textbox.value += "3"
// }
// function plus (){
//     var textbox = document.getElementById('type')
//     textbox.value += "+"
// }
// function plusMinus (){
//     var textbox = document.getElementById('type')
//     textbox.value += "±"
// }
// function getvalue0 (){
//     var textbox = document.getElementById('type')
//     textbox.value += "0"
// }
// function decimal (){
//     var textbox = document.getElementById('type')
//     textbox.value += "."
// }
// function equal (){
//     var textbox = document.getElementById('type')
//     textbox.value += "="
// }
// alert('hello')
// var a;
// var b;
// var res;
// var ope;
// var signs = false

// function insert(w){
//   var cal =  document.getElementById('type').value += w
//    signs = false
// }
// function sign(z){
//   var com =  document.getElementById('type').value += z
//   if(signs ==false){
//     type.innerHTML +=sign.innerHTML
//     signs=true;
//   }
//   else{
//       return
//   }

// }
// function del(){
//         var textbox = document.getElementById('type')
//         textbox.value = ""
//  }


//  function equalTo(){
//      if(com =='+'){

//      console.log(display)

//      }
//      else if(com == '-'){
//          display = insert - insert;
//      }
//      else{
//          display = 'invalid'
//      }
//  }

//  function equalto(){
//      var display = document.getElementById('type').value
//      console.log(display)
//      var show = eval(display) 
//      console.log(show)
//      document.getElementById('type').value = show;
//  }




//   function equalto(){
//      b = parseInt(document.result.value);

//      if(ope =='+'){
//          res = a+b;
//      }
//      else if(ope =='-'){
//          res =a-b;
//      }
//      else if(ope =='*'){
//         res =a*b;
//     }
//     else if(ope =='/'){
//         res =a/b;
//     }
//      else{
//        res =NaN  
//      }
//      document.result.value = "";
//      document.result.value = res.tostring();
//      document.result.value = a + ope + b + '=' + res.tostring();
//      return;


//  }



// va ="+"
// num = parseInt ('b')

// var num;

// function paul(){
//     if(document.type.result.value == "0" || document.type.result.value == result){
//         document.type.result.value = "1";
//     }else if( document.type.result.value !="0"){
//         document.type.result.value = document.type.result.value +="1";
//     }
// }
// function tomi(){
//     if(document.type.result.value == 0){

//     }





































// function plus(y){
//     var opa = document.getElementById('type').value += y

//     var  result =" "
//     if (y =='+'){
//         result = x+x
//     }

//     else if (y =='-'){
//         result = x-x
//     }
//     else if (y =='÷'){
//         result = x/x
//     }
//     else if (y =='*'){
//         result = x*x
//     }
//     else{
//         result="invalid"
//     }
//     document.getElementById("demo").innerHTML= "Result: " + result;
// }
// function equal(z){
//     var result =  document.getElementById('type').value - z
//   }


