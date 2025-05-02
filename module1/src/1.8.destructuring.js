// object and array destructuring
// object destructuring
var user = {
    id: 345,
    name: {
        firstName: "Miftah",
        middleName: "Ul",
        lastName: "Jannat",
    },
    contactNo: "018873333",
    address: "Uganda",
};
var contactNo = user.contactNo, midName = user.name.middleName;
// array destructuring
var myFriends = ["John", "Ron", "Don", "Bon", "Monica", "Ayesha"];
var a = myFriends[0], b = myFriends[1];
console.log(a, b); // John, Ron
var bestFriend = myFriends[2];
console.log(bestFriend); //Don, if I want to skip the first two friends
var restFriends = myFriends.slice(3);
console.log(restFriends);
