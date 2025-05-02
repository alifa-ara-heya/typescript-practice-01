// object and array destructuring

// object destructuring
const user = {
  id: 345,
  name: {
    firstName: "Miftah",
    middleName: "Ul",
    lastName: "Jannat",
  },
  contactNo: "018873333",
  address: "Uganda",
};

const {
  contactNo,
  name: { middleName: midName }, //name alias
} = user;

// array destructuring

const myFriends = ["John", "Ron", "Don", "Bon", "Monica", "Ayesha"];

const [a, b] = myFriends;
console.log(a, b); // John Ron

const [, , bestFriend] = myFriends;
console.log(bestFriend); //Don, if I want to skip the first two friends

const [, , , ...restFriends] = myFriends;
console.log(restFriends); //[ 'Bon', 'Monica', 'Ayesha' ], this is called rest operator
