// If the session.loggedIn value is false then the user will be redirected to the login page

const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        console.log('\nUser not logged in');
        console.log('Redirecting user to login page\n');
        res.redirect('/login');
    } else { next()};
};

module.exports = withAuth;