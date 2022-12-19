// document.addEventListener('contextmenu', event => event.preventDefault());
// const a = document.querySelector(".material-symbols-outlined");
// const b = document.querySelector(".nr");
// const c = document.querySelector(".rm");
// a.addEventListener('click', function() {
//   if (a.innerText === "menu") {
//     a.innerText = "close";
//   } else {
//     a.innerText = "menu";
//   }
//   b.classList.toggle("op");
//   c.classList.toggle("ft")
// });

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const r = document.querySelector(".crd");
const t = document.querySelector(".wlt");
btn1.addEventListener("click", function() {
  r.style.display = "flex";
  t.style.display = "none";
  btn1.classList.add("tpbt");
  btn2.classList.remove("tpbt");

});
btn2.addEventListener("click", function() {
  t.style.display = "flex";
  r.style.display = "none";
  btn1.classList.remove("tpbt");
  btn2.classList.add("tpbt");
});
const ty = document.querySelector(".clk");
const txn = document.querySelector(".txn");
ty.addEventListener('click', function(){
txn.style.display = "flex";
})
