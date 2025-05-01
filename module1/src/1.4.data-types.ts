// basic data types

// string
let firstName: string = "Mezba";

// number
let roll: number = 134;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let d: number;

// d = "abc"; //error

d = 123;

// non-primitive = array, tuple, object
// array
let friends: string[] = ["monica", "rachel"];
friends.push("s");
console.log(friends);

let rolls: number[] = [1, 2, 3];

// tuple => array => order => type of values
let coordinates: [number, number] = [1, 3];

let ageName: [number, string, boolean] = [12, "Mr.X", true];

// ageName[0] = 'abc' error
