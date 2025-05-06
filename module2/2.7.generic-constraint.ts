{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  //   or
  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";

  const user = {
    name: "rahim",
    age: 23,
    address: "ctg",
  };

  const car = {
    model: "Toyota",
    year: 2022,
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getPropertyValue(car, "year");
}
