// If the session.loggedIn value is false then the user will be redirected to the login page

const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        console.log('\nloggedIn is false');
        console.log('redirecting user to login page\n');
        res.redirect('/login');
    } else { next()};
};

module.exports = withAuth;