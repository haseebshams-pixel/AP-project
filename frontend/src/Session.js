var UserProfile = (function() {
    var full_name = "";
    var isLoggedin="";
    var userId=0;

    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
    var getLoggedIn = function() {
      return isLoggedin;    // Or pull this from cookie/localStorage
    };
    var getId = function() {
      return userId;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;
      // Also set this in cookie/localStorage
    };
    var setLoggedIn = function(Log) {
      isLoggedin = Log;
      // Also set this in cookie/localStorage
    };
    var setID = function(id) {
      userId = id;
      // Also set this in cookie/localStorage
    };

  
    return {
      getName: getName,
      setName: setName,
      getId:getId,
      setID:setID,
      getLoggedIn:getLoggedIn,
      setLoggedIn:setLoggedIn
    }
  
  })();
  
  export default UserProfile;