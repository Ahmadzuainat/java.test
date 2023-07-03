//تلوين عناصر ال html
// window.onload=function(){
//     document.querySelector("h1").style.color="Blue"
// }
// document.guerySelector("h1").style.color="red"
// document.querySelector("p").style.backgroundColor="red"
// document.write("my nam is ahmad")
// window.alert("wep for Ahmad")
// document.write("how are you today")

// *******************************************

//عمليات حسابي
// console.log(+"5"+5)
// console.log(Number("3")+7)
// console.log(parseInt("4 ahmad"))
// console.log(parseInt(5.5))
// console.log(parseFloat(5.5))
// window.onload=function(){
//     document.querySelector("h1").style.color="red"
//         document.querySelector("h1").style.backgroundColor="pink"
//         document.querySelector("p").style.backgroundColor="red"
// }

//************************************************************* */
//حدف و اضافة عناصر arry
// let names=["Ahmad","Abd al rhman","mohmad","yaman","lole"]
// names.push=("jamal")
// names.unshift("kamal")
// names.shift()           //بتمسح العاناصر من البداية
// names.pop()             //بتمسح العناصر من النهاية
//names.splice(1,1,'smole')           //حدف العناصر الي بدك ياها
// console.log(names.slice(1,5))      //عمل اري وهمي و الحدف منها 
//console.log(names.indexOf("Ahmad"/*start */))   //sherch abou A in arry
//console.log(names.includes("Ahmad")/**start**/)  //sherch about A in arry but true or folse  
//console.log(names.reverse())                          // to reverce a arry 
//console.log(names.sort())                                                       // to sort  a arry of A to Z or 1 t0 &
//console.log(names)
// let arry1=["Ahmad","yousef","mazen"]
// let arry2=[,"zaed","mostfa"]
//arry1+=arry2                                       // this proplem is string not arry
// console.log(arry1.concat(arry2))                                //this nice is arry
// console.log(arry1.join("-"))                          //تغير شكل الفاصلة يس تنحسب string
// console.log(arry1)

//************************************* */

// let askemail=prompt("entar your email");
// let email="zaine@gmail.com";
// console.log(askemail.toLowerCase.trim()==email)
//toLowerCase and toUppercase //tow cabtal ans smool for chick to email
//trim                          //for spice to cikh to email

// // ******************************
// ege=prompt("wath you ege ? ")
// ege>18?
//   document.write("you are biger ")     //if
//   :ege<18
//    document.write("you are smool ");

//************************************** */


// let Ahmad=prompt("tell me what the proplem : ");
// switch (Ahmad) {
//     case "A":
//         document.write("afsell")
//         break;
//     case "B":                                       //switch
//         document.write("a rjea rkbo ")
//         break;
//         default:
//             document.write("fuck you ")
//         break;
// }

//******************************************************************************************  **/


// let arry0=["AHmad "," yousef "," lole "," polip "," volp "]
// for (let i = 0; i < arry0.length; i++) {                            //for lop 
//     document.write(arry0[i])
// }


// let user = ["bob ","non ","dod ",123 , "cok" , " for "]
// for (let i = 0 ; i<user.length ; i++){
//     if (typeof user[i]=="number") 
//     {
//           continue;    
//     }
    // if (user[i]=="cok")                       //continue and break
//     {
//       break;    
//     }
//     console.log(user[i])

// }

// *****************************************************************


// let i =0 
// while (i<5) 
// {
//     document.write("fuck you \n m ")
//     i++
// }
/**                                               */ //do while and whil loop
// let c=0
// do{
//     document.write("<h2>haloo</h2>");
//     c++
// }while(c<3)

/**********************************************************************************************/

// function wow (s) 
// {
//     for (let i = 0; i < s ; i++) {
//         document.write("<h3>A</h3>")      
//     }
// }
// wow(5)


// function A(...number){

//     console.log(number)
// }
// A(8,8,8,8,8,8)


/*******************************************************************************************/

// let car={
//  tital:"BMW",
//  color:"Black"
//  ,model:"2023"
//  ,sile:2200
//  haloo:function () {
    // return"haloo"                                                 //object
//  }
// };
// console.log(car)
// console.log(car.model)
// console.log(car.function)
/**                                            **/
// let user1={
//     name:'<NAME>',
//     age :19,
//     city:'Islamabad',
//     country:'Pakistan',
//     phone_no:0780487793
    // function haloo()                                        //object creat 
//     // {
//     //    return `haloo ${user1.name}`;
//     // }
// }

// let user2=Object.create(user1);
// user2.age=12
// console.log(user2.age)

/**                                              **/

// let a1={
//     Number1:1
// }

// let a2={
//     Number2:2
// }
                                                               // assign object
// let a3={
//     Number3:3
// }


// let a4=Object.assign(a1,a2,a3,{Number4:4});
// a4.Number1=12
// a4.rr=100
// console.log(a4)

/**        *******      *****************************************************                                                 **/


//<h1 id="head">BEBE WWE bulid this hous</h1>
//head.innerHTML="TEXT"        //text!=BEBe....  //hapter1                 كورس جافا سكريبت #48 | sellect elements by javascript
//document.getElementById("head")
//console.log(   document.getElementById("head")   )

//let head =document.getElementById("head")
//head.style.color="red"
//head.innerHTML="TEXT"        //text!=BEBe....
//console.log("head")
//class*************************
//let Class = document.getElementsByClassName("Class")[0] ;
//let Clas = document.getElementsByClassName("Class")[1]                                                                          // to drive a class Bous not bou or bo    كورس جافا سكريبت #48 | sellect elements by javascript
//document.getElementsByClassName("class")
//Class.style.color="brown"
//Clas.style.color="pink"
// Class.innerHTML="TEXT"  
//console.log("Class")
//console.log("Clas")

//*********************************************************************************************************************************************** */

//كورس جافا سكريبت #49 | اضافة وتعديل خصائص العنصر attribute
//let img = document.getElementById("img")
//console.log(img)          //.alt or . scr or .hasAttributes()                //49

//***************************************************************************** */

//let scond = document.getElementById("scond")
//console.log(scond)  //id scond
//console.log(scond.previousSibling)       //هيك جابلك الي وراء على طول مش ال id 
//console.log(scond.previousElementSibling) //btroh ala al first 
//console.log(scond.nextElementSibling)     //btroh ala al three                                   //51
//console.log(scond.parentElement)          //div kolo

// ********************************************************************************************* //

//let cont = document.getElementById("content")
//console.log(cont)
//cont.innerText="HI beb"             //عشان تضيف نص 
//cont.style.backgroundColor="red"
//cont.style.borderRadius= "2px"      //حجم المستطي
//cont.style.color="BLue"                                         //52
//cont.style.fontSize="3em"           //وزن الخط
//cont.style.borderLeft="12px solid blue"         //الخط الجانبي 

/***********************************************************************************/
//انشاء العناصر
//let container= document.createElement("div")
//let head = document.createElement("h1")
//اضافة محتوئ
//let content= document.createTextNode("haloo word")
//head.appendChild(container)                                 //53
//اضافة العنصر في المكان المراد
//container.appendChild(head)
//container.appendChild(img)
//document.body.appendChild(container)
//console.log(container)


/************************************************************/

// function back() {
//     document.body.style.backgroundColor="red"
// }

// let clicki=document.getElementById("clicki")


// clicki.onclick=function l() {                                    //55
//     document.body.style.backgroundColor="pink"
// }


// clicki.onclick=>l() {
//     document.body.style.backgroundColor="pink"
// }

//part2
// let btn =document.getElementById("btn")

// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor="red"
// })

// btn.addEventListener('click',function(){
//     document.style.Color ="red"
// })


// btn.addEventListener('click',function(){
//     document.style.backgroundColor="Black"
// })


/*******************************************************************************************************************/

// let btn = document.getElementById("click")
// btn.onclick=function(){
//     console.log("click")
// }

/*************************************************************************************/

// let after = document.getElementById("after")
// let befor= document.getElementById("befor")
// let apeend = document.getElementById("apeend")
// let content = document.getElementById("content")
// let   contorel = document.getElementById("contorel")

// console.log(apeend)
// console.log(after)
// console.log(befor)
// console.log(content)
// console.log(contorel)

// contorel.style.backgroundColor="red"
// contorel.style.height="40px"

// after.onclick=function(){                                //58
//     contorel.after(content)
// }

// befor.onclick=function(){
//     contorel.before(content)
// }

// apeend.onclick=function(){
//     contorel.append(content)
// }

/*********************************************************************/
   
// document.getElementById("opien")
    // // let opein = document.getElementById("opien")
    // console.log(opien)

    // document.getElementById("close")
    // // let close = document.getElementById("close")
    // console.log(close)

    // document.getElementsByClassName("contriler")
    // let contriler = document.getElementsByClassName("contriler")
    // console.log(contriler)

/************************************************88888*/

// let btnopen=document.getElementById("opien")
// let btnclose=document.getElementById("close")
// let contriler = document.querySelector(".contriler")

// btnclose.onclick = function () {
//     contriler.classList.add('hide')
//     this.classList.add('hide')                         60 
//     btnopen.classList.remove('hide')
// }

// btnopen.onclick = function()  {
// this.classList.add('hide')
// btnclose.classList.remove('hide')
// contriler.classList.remove('hide')
// }

/**************************************************************************************/



