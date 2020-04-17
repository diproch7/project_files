let ff= document.querySelectorAll("Test1");
console.log(ff.value);

// ff.addEventListener('click', (event) =>{
//   alert("hola");
//   console.log("hola");
// });

ff.forEach(btn => btn.addEventListener("click", (event) => {
  alert("hola");
  console.log("hola");
}));
