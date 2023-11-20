const { User } = require("../models");

module.exports = {
    createUser: async function (req, res) {
        try {
            console.log("running createUser from userController");
            const { username, password } = req.body;
            const newUser = await User.create({
                username: username,
                password: password,
            });
            return res.status(200).json(newUser);
        } catch (error) {
            console.error(error);
        }
    },
    loginUser: async function (req, res) {
        try {
            console.log("running loginUser from userController");
            const { username, password } = req.body;
            const user = await User.findOne({
                where: { username: username },
            });
            if (!user) {
                return res.status(400).json({ message: "Incorrect username" });
            }
            const validPassword = await user.checkPassword(password);
            if (!validPassword) {
                return res.status(400).json({ message: "Incorrect password" });
            }
            req.session.save(() => {
                req.session.user_id = user.id;
                req.session.username = user.username;
                req.session.loggedIn = true;
                return res
                    .status(200)
                    .json({ user: user, message: "You are now logged in!" });
            });
        } catch (error) {
            console.error(error);
        }
    },
    logoutUser: async function (req, res) {
        try {
            console.log("running logoutUser from userController");
            if (req.session.loggedIn) {
                req.session.destroy(() => {
                    res.status(204).end();
                });
            } else {
                res.status(404).end();
            }
        } catch (error) {
            console.error(error);
        }
    },
};
