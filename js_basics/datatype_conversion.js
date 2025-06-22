let r= "roshani212"
console.log(typeof let)// just for experiment let keyword ka hi type puchh liya // ye undefiend dega output 
console.log(typeof r)// string dega 
console.log(typeof (r))// string dega ye bs likhne ka trika h 

//type change
let r1= "55"
console.log(typeof r1)// string type h 
let valuenumber=Number(r1) // r1 ko Syring se number me change kr rhe h 
console.log(valuenumber)// 55 print hoga
console.log(typeof(valuenumber))// number type print hoga 


let r2= "roshani212"
let valuenumber2=Number(r2)// r2 ko number me change kr rhe qki string and integer dono h esliye experiment krnah 
console.log(typeof(valuenumber2))
console.log(valuenumber2) //NaN  ye output hoga qki ye string ko number type me to convert kr dega but values mix h to Nan dega 

let r3= null 
let valuenumber3=Boolean(r3)//object into boolean Conversion
console.log((valuenumber3)) // null value convert hoke false degi and 1 convert hoke true degi and 0 boolean me convert hoke false degi 

let r4= 234
let valuenumber4=String(r4)//Numeric into string Conversion 
console.log(typeof(valuenumber4)) //string
console.log((valuenumber4))// 234
