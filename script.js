// const bookform = document.getElementById('submit');
// bookform.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission
//   alert('Thank you for booking a test drive! We will contact you soon.');
//   bookform.reset(); // Reset the form fields
// });

 const btn = document.getElementById('test-drive-btn');
  btn.addEventListener('click', () => {
    window.location.href = 'test-drive-form.html';
  });

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "nav-links") {
    x.className += " responsive";
    document.querySelector(".icon").innerHTML=`<i class="fa-solid fa-xmark" style="color: #ff0000;"></i>`;
  } else {
    x.className = "nav-links";
    document.querySelector(".icon").innerHTML=`<i class="fa fa-bars"></i>`;
  }
}

const h1 = document.getElementById('main-heading');
const q7 = document.getElementById('q7');
const testDriveBtn  = document.getElementById('test-drive-btn');
q7.style.fontSize = '1.8em';
q7.style.transition = 'font-size 0.3s ease';
  gsap.from("h1", { duration: 2,  y:-70 ,opacity: 0, ease: "power2.out" });
  gsap.from("#test-drive-btn", { duration: 2,  y:70 ,opacity: 1, ease: "power2.out", delay: 0.5 });