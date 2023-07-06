const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const interest = document.getElementById("interestInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    const nameValue = name.value
    const emailValue = email.value
    const interestValue = interest.value
    formValidation(nameValue, emailValue, interestValue)
})

function formValidation(name, email, interest) {
    if (name == "" || email == "" || interest == "") {
        alert("Data tidak boleh kosong")
    } else {
        alert("Berhasil")
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}