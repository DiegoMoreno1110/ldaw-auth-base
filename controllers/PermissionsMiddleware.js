exports.Authenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
      return next();
    }else {
      res.redirect("/register");
    }
  };
  


exports.acccessDashBoardUsers = (req, res, next) =>  {
    if(req.user.role ==1 || req.user.role ==2){
        next()
    }else{
        return res.send("No puedes acceder");
    }
}

exports.accessUsersList = (req, res, next) =>  {
    if(req.user.role ==2){
        next()
    }else{
        return res.send("No puedes acceder");
    }
}

exports.redirectLogin = (req, res, next) => {
    if(req.user.role == 1){
        return res.redirect('/dashboardUsers');
    }else if(req.user.role == 2){
        return res.redirect('/usersList');
    }
}