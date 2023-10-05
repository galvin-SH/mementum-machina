// If the home button is clicked, then the current view will be replaced with the homepage view
document.querySelector('#home')
    .addEventListener('click',
        function () { document.location.replace('/') });

// If the dashboard button is clicked, then the current view will be replaced with the dashboard view
document.querySelector('#dashboard')
    .addEventListener('click',
        function () { document.location.replace('/dashboard') });

// If the login button is clicked, then the current view will be replaced with the login view
document.querySelector('#login')
    .addEventListener('click',
        function () { document.location.replace('/login') });