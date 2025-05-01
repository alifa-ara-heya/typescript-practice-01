// reference type object

const user: {
  school: "RPI"; //literal type
  //   another way is to use readOnly
  readonly country: string;
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Sakib",
  school: "RPI", //you cannot change the string
  //   middleName: "Akbar",
  lastName: "Shahriar",
  isMarried: true,
  country: "Bangladesh",
};

user.middleName = "Ujjal";
// user.country = 'USA' //error
