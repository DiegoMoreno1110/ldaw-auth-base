exports.index = (req, res) => {
  res.render('homepage/index');
}

exports.dashboardUsers = (req, res) => {
  res.render('homepage/dashboardUsers');
}

exports.usersList = (req, res) => {
  res.render('homepage/usersList');
}