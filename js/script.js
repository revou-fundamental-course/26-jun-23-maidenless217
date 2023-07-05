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