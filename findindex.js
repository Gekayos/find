// #1


const users = [
    { username: 'Kayondo'},
    { username: 'BigBrooklyn'},
    {username: 'Gekayos' }
  ];

  function findUserByUsername(arr, username) {
    return arr.find(function(user){
      return user.username === username;
    })
  }


  //    #2 

  const usernm = [
    {username: 'Dragon'},
    { username: 'Law'},
    { username: 'Akainu'}
  ];
  
  function removeUser( ua, username) {
    let foundIndex = ua.findIndex(function(user){
      return user.username === username;
    })
    if ( foundIndex === -1) return;
  
    return ua.splice( foundIndex,1)[0];
  }