var database = firebase.database();

function writeUserData(userId, name, job, username, password) {
    firebase.database().ref('users/' + userId).set({
      name: name,
      job: job,
      username: username,
      password: password
    });
}