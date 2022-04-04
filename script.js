// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle=>{
//     toggle.addEventListener('click',()=>{
//         toggle.parentNode.classList.toggle('active');
//     })
// })

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// const everyone = document.querySelectorAll(".one");
// everyone.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("active");
//   });
// });
