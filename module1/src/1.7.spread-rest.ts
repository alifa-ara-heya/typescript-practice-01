{
  // spread operator, rest operator and destructuring
  // used curly braces to avoid error caused by same name variables in other files. curly braces create its own scope

  const poorUser = "123";

  const bros1: string[] = ["mir", "firoz", "sakib"];
  const bros2: string[] = ["meem", "firoza", "sakiba"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "mezba",
    redux: "mir",
    dbms: "mizan",
  };

  const mentors2 = {
    prisma: "firoz",
    next: "tanmoy",
    cloud: "nahid",
  };

  //spread operator

  const mentorList = {
    ...bros1,
    ...bros2,
  };

  //rest operator
  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`hi ${friend1} ${friend2} ${friend3}`);
  };

  greetFriends("Abul", "kabul", "babul");

  //but if i want to add more friends, each time I have to declare the type. To eliminate this problem, we will use rest operators. Rest operators combine elements and make a new array.

  const greetFriendsRest = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
}
