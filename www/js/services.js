angular.module('cyberchats.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ariel Villarreal C',
    picture: 'https://pbs.twimg.com/profile_images/1001601612/005_bigger.jpg',
    lasMessage: {
      text: 'Camninado entre codigos',
      timestamp: moment().subtract(1, 'horas') 
    }    
  },
   {
    id: 1,
    name: 'Jesus Andres V',
    picture: 'https://pbs.twimg.com/profile_images/1001601612/CdxLMoHH_400x400.png',
    lasMessage: {
      text: 'Hola soy yo',
      timestamp: moment().subtract(2, 'horas') 
    }    
  },
   {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Lisa  Collins',
     picture: 'https://pbs.twimg.com/profile_images/5876060332220B2561/c53lkbrz.jpg',
    lasMessage: {
      text: 'En medio del puente',
      timestamp: moment().subtract(1, 'dia') 
    }    
  },
   {
    id: 4,
    name: 'Mike Harrington',
     picture: 'https://pbs.twimg.com/profile_images/1001601612/CdxLMoHH_400x400.png',
    lasMessage: {
      text: 'jajaj no te creo',
      timestamp: moment().subtract(4, 'dias') 
    }    
  }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
