let Users = require('../models/Users');

exports.index = (req, res) => {
  res.render('homepage/index');
}

exports.dashboardUsers = (req, res) => {
  res.render('homepage/dashboardUsers');
}

exports.usersList = (req, res) => {

  Users.selectUsers().then((data) => {

    let users = data;

    res.render('homepage/usersList', {users: users});

  });
  //res.render('homepage/usersList');
}