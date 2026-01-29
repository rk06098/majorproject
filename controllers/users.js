const User = require("../models/user");


module.exports.renderSignupForm= (req, res) => {
  res.render("users/signup.ejs");
}

module.exports.renderLoginForm=  (req, res) => {
  res.render("users/login.ejs");
}

module.exports.login=  (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    res.redirect(res.locals.redirectUrl || "/listings");
  }

module.exports.signup= async (req, res, next) => {
    const { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    // auto login after signup
    req.login(registeredUser, (err) => {
      if (err) return next(err);

      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  }

  module.exports.logout= (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
}