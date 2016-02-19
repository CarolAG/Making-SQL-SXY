var sessionController = {};

sessionController.isLoggedIn = function(req, res, next){
  console.log(res.headers.cookie);
  res.redirect('permission');
};

module.exports = sessionController;
