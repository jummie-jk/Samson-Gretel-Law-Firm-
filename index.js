
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

const toggleNav = document.getElementById('toggleNav');
const navContainer = document.getElementById('navContainer');
const navLinks = navContainer.getElementsByTagName('a');

toggleNav.addEventListener('click', () => {
  navContainer.classList.toggle('active');
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    navContainer.classList.remove('active');
  });
}

