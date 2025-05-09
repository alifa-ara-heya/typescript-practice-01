{
  // type guard or type narrowing

  type Alphaneumeric = string | number;

  const add = (
    // param1: string | number,
    param1: Alphaneumeric,
    param2: Alphaneumeric
  ): Alphaneumeric => {
    // return param1 + param2 //error
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 4);
  const result2 = add(2, "4");
  const result3 = add("4", "1");
  console.log(result1);
  console.log(result2);
  console.log(result3);
}
