// function reveal() {
//     var reveals = document.querySelectorAll(".boxss")
// }
// for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 550;
//   }
//   if (elementTop < windowHeight - elementVisible) {
//     reveals[i].classList.add("active");
//   } else {
//     reveals[i].classList.remove("active");
//   }
//   window.addEventListener("scroll", reveal);

// // To check the scroll position on page load
// reveal();
let word=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for (let i=0; i<=word.length; i++){
if (i===4){
var a=word[i];
}
if (i===8){
var b=word[i];
}
if (i===11){
var c=word[i];
}
if (i===14){
var d=word[i];
}
if (i===20){
var e=word[i];
}
if (i===21){
var f=word[i];
}
}
console.log((b+" "+c+d+f+a+" "+e))


const counter = document.querySelectorAll(".counter")
const speed = 400 

counter.forEach((counter) =>{
    const updateCounter = () =>{
        const target = + counter.getAttribute("data-target")
        const count = + counter.innerText

        const increment= target/speed
        if(count<target){
            counter.innerHTML = Math.floor(count+increment)
            setTimeout(updateCounter,5)
        }
        else{
            counter.innerText=target
        }
    }
    updateCounter()
}
)
