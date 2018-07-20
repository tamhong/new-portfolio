  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3NGWAG0wm0Q5oGo-C3c_XFyzT_SmkmcA",
    authDomain: "portfolio-messages-47fea.firebaseapp.com",
    databaseURL: "https://portfolio-messages-47fea.firebaseio.com",
    projectId: "portfolio-messages-47fea",
    storageBucket: "portfolio-messages-47fea.appspot.com",
    messagingSenderId: "706489837175"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit").on("click", function (event) {
      event.preventDefault();

      var name = $("#name").val().trim();
      var email = $("#email").val().trim();
      var message = $("#message").val().trim();

      var newMessage = {
          name: name,
          email: email,
          message: message
      }

      database.ref().push(newMessage);

      console.log(newMessage.name);
      console.log(newMessage.email);
      console.log(newMessage.message);

      $("#name").val("");
      $("#email").val("");
      $("#message").val("");

      $("#messaging").prepend("<center>Thanks for your message!</center>")

  })
