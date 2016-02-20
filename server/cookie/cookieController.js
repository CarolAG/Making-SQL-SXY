var cookieController = {};

cookieController.setSSIDCookie = function(req, res, next){
  res.cookie('ssid', 1, {httpOnly: true});
  res.next();
};







module.exports = cookieController;
