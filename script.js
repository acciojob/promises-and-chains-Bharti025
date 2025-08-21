//your JS code here. If const btn = document.getElementById("btn");
let ageInput = document.getElementById('age');
let nameInput = document.getElementById("name");

function check() {
    let age = parseInt(ageInput.value);
    let name = nameInput.value;

    if (!age || !name) {
        alert("Please enter valid details");
        return; // Exit the function if validation fails
    }

    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 18) {
                reject("Oh sorry " + name + ". You aren't old enough.");
            } else {
                resolve("Welcome, " + name + ". You can vote.");
            }
        }, 4000); // 4 seconds delay
    });

    agePromise
        .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));
}

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    check();
});

