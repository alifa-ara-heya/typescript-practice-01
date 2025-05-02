{
  // ternary operator || optional chaining || nullish coalescing

  const age: number = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  //   nullish coalescing operator
  //   null/ undefined = decision making
  const isAuthenticated = null;
  const isAuthenticatedUndefined = undefined;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticatedUndefined ?? "Guest";
  console.log({ result1 }); //{ result1: 'Guest' }
  console.log({ result2 }); // { result1: 'Guest' }

  //   nullish coalescing and ternary operator are not the same, ?? nullish operator is only used when I need to check something based on null or undefined

  // optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      permanentAddress?: string;
      presentAddress: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Somewhere in the earth",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
}
