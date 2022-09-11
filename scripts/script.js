const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
function userNamefunction(confirmAction) {
  if (localStorage.getItem("user")) {
    window.alert(
      "Welcome Back" +
        " " +
        localStorage.getItem("user") +
        " " +
        "Dont Forget To check console"
    );
  } else {
    let enterUsr = window.prompt("Enter Your Name");
    let userName = [];
    userName.push(enterUsr);
    localStorage.setItem("user", enterUsr);
    window.alert(
      "Hello" +
        " " +
        localStorage.getItem("user") +
        " " +
        "Dont Forget To check console"
    );
  }
  const actions = confirmAction();
  function confirmAction() {
    let confirmAction = confirm("Do you want to delete LocalStorage?");
    if (confirmAction) {
      localStorage.clear();
      alert("Cleared LocalStorage");
    } else {
      alert("Action canceled");
    }
  }
  return actions;
}

hamburger.addEventListener("click", toggleMenu);

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("new");
  });
}

let accc = document.getElementsByClassName("acordion-2");
let x;

for (x = 0; x < accc.length; x++) {
  accc[x].addEventListener("click", function () {
    this.classList.toggle("new-1");
  });
}

var emailArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun() {
  event.preventDefault();

  regBox.style.visibility = "visible";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "hidden";

  regTab.style.backgroundColor = "rgb(12, 132, 189)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function loginTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
  forgetBox.style.visibility = "hidden";

  loginTab.style.backgroundColor = "rgb(12, 132, 189)";
  regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function forTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "visible";

  regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

function register() {
  event.preventDefault();

  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;
  var passwordRetype = document.getElementById("rrp").value;

  if (email == "") {
    alert("Email required.");
    return;
  } else if (password == "") {
    alert("Password required.");
    return;
  } else if (passwordRetype == "") {
    alert("Password required.");
    return;
  } else if (password != passwordRetype) {
    alert("Password don't match retype your Password.");
    return;
  } else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);

    alert(email + "  Thanks for registration. \nTry to login Now");

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("rrp").value = "";
  } else {
    alert(email + " is already register.");
    return;
  }
}
function login() {
  event.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  var i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    alert(email + " yor are login Now \n welcome to our website.");

    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    return;
  }
}
function forgot() {
  event.preventDefault();

  var email = document.getElementById("fe").value;

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  alert("email is send to your email check it in 24hr. \n Thanks");
  document.getElementById("fe").value = "";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
// slider
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const people = [
  { name: "Amy", gender: "female", age: "28" },
  { name: "James", gender: "male", age: 13 },
  { name: "Victor", gender: "male", age: null },
  { name: "David", gender: "male", age: 28 },
  { name: "Simon", gender: "male", age: undefined },
  { name: "Anna", gender: "female", age: 21 },
  { name: "Mike", gender: "male", age: 53 },
  { name: "Olivia", gender: "female", age: 22 },
  { name: "June", gender: "female", age: 7 },
  { name: "Oliver", gender: "male", age: 18 },
];
console.log("Visitors Today, Male : 6, Female : 4" + " " + "Total = 10");
console.log(people);
const filteredPeople = people.filter(
  (person) =>
    person.age !== undefined &&
    typeof person.age === "number" &&
    !isNaN(person.age) &&
    person.age > 18
);
console.log("Over 18 costumers. Most were Male Costumers.");
console.log(filteredPeople);
