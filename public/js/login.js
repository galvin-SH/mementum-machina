// listen for form submit and then log in user if the credentials are valid

document
    .getElementById("#signInForm")
    .addEventListener("submit", loginFormHandler);

const loginFormHandler = async (event) => {
    event.preventDefault();

    // get user info
    const username = document.getElementById("#username").value;
    const password = document.getElementById("#password").value;
    console.log(username, password);

    // log in user
    const response = await fetch("/api/users/login", {
        method: "put",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        // if successful, redirect to dashboard page
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
};
