
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDRJ1yRCr_azky2Lq8YYVWqyrAljIz6U0I",
      authDomain: "redecorating-kwitter-cc3b1.firebaseapp.com",
      databaseURL: "https://redecorating-kwitter-cc3b1-default-rtdb.firebaseio.com",
      projectId: "redecorating-kwitter-cc3b1",
      storageBucket: "redecorating-kwitter-cc3b1.appspot.com",
      messagingSenderId: "1013385089837",
      appId: "1:1013385089837:web:8a82a50ff9743ed57179a4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
