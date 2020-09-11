exports.checkAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
      return next();
    }else {
      res.redirect("/register");
    }
  };
  
exports.checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }
    next();
};

exports.showDashBoard = (req, res, next) =>  {
    if(req.user.role ==1 || req.user.role ==2){
        next()
    }else{
        return res.send("No puedes acceder");
    }
}

exports.showUsers = (req, res, next) =>  {
    if(req.user.role ==2){
        next()
    }else{
        return res.send("No puedes acceder");
    }
}