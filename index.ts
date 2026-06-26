//* variable declaration methods
//? var , let, const

//* datatypes
//? string
let a: string;
//? number
let b: number;
//? boolean
let c: boolean;
//? null
let d: null;
//? undefined
let e: undefined;

//* special types
//? any
let f: any;
f = "any type";
// f = 12;

console.log(f.toUpperCase());
//? unknown
let g: unknown;
g = "unknown type";
// g = 199;

if (typeof g === "string") {
  console.log(g.toUpperCase());
}

//? void
//? never

//! type inference

// let a = 12;

// a = "";

//! type Annotation
let h: string;

h = "";
// h = 12;

//* array
let numbers: number[] = [12, 4, 56, 45, 6];
// numbers.push("1");
numbers.push(23);

let strings: string[] = ["a"];

//* tuple
//id , name , email , age , password  => [id, name , email , age , password]  => [number , string , string , number , string]

// let userTuple: [number, string, string, number, string] = [
//   1,
//   "john",
//   "john@gmail.com",
//   24,
//   "123454",
// ];

// // users:

// let users: [number, string, string, number, string][] = [
//   [1, "john", "john@gmail.com", 24, "123454"],
//   [2, "john", "john@gmail.com", 24, "123454"],
//   [3, "john", "john@gmail.com", 24, "123454"],
//   [4, "john", "john@gmail.com", 24, "123454"],
//   [5, "john", "john@gmail.com", 24, "123454"],
//   [6, "john", "john@gmail.com", 24, "123454"],
//   [7, "john", "john@gmail.com", 24, "123454"],
//   [8, "john", "john@gmail.com", 24, "123454"],
// ];

//* object

// let product: {
//  readonly _id: number;
//   name: string;
//   description?: string;
//   price: number;
// } = {
//   _id: 1,
//   name: "product",
//   description: "product",
//   price: 1200,
// };

//! type alias

type TProduct = {
  readonly _id: number;
  name: string;
  description?: string; //! optional field
  price: number;
};

let product: TProduct = {
  _id: 1,
  name: "product",
  description: "product",
  price: 1200,
};

let product2: TProduct = {
  _id: 2,
  // description: "",
  name: "",
  price: 1234,
};

product.name = "";
// product._id = 23; //! Cannot assign to '_id' because it is a read-only property.

type TUserRow = [number, string, string, number, string];

let userTuple: TUserRow = [1, "john", "john@gmail.com", 24, "123454"];

// users:

let users: TUserRow[] = [
  [1, "john", "john@gmail.com", 24, "123454"],
  [2, "john", "john@gmail.com", 24, "123454"],
  [3, "john", "john@gmail.com", 24, "123454"],
  [4, "john", "john@gmail.com", 24, "123454"],
  [5, "john", "john@gmail.com", 24, "123454"],
  [6, "john", "john@gmail.com", 24, "123454"],
  [7, "john", "john@gmail.com", 24, "123454"],
  [8, "john", "john@gmail.com", 24, "123454"],
];

//{name:string,email:string}
type TU = { name: string; email: string };
let userArr: TU[] = [
  { email: "", name: "" },
  { email: "", name: "" },
  { email: "", name: "" },
  { email: "", name: "" },
];
//* union   |
type ID = number | string;
let id: ID = 1;
id = "";

// id = true;
let userId: ID = "1";

//* intersection &
type A = {
  a: string;
};

type B = {
  b: string;
};

let aObj: A = {
  a: "",
};
// type C = A & B;
type C = A & {
  c: string;
};

let cObj: C = {
  a: "",
  c: "",
};
// let cObj: A & B = {
//   a: "",
//   b: "",
// };
let dObj: A | B = {
  a: "",
  b: "",
};

//! type literal
// error  , success ,fail

type TStatus = "error" | "success" | "fail" | "amir";

let responseStatus: TStatus = "error";
responseStatus = "fail";
responseStatus = "success";
responseStatus = "amir";

type TGreet = (x: string) => void;

//! function
const greet: TGreet = (name) => {
  console.log("Hello ", name);
};

// const greet = (name: string):void => {
//   console.log("Hello ", name);
// };

greet("John");
// greet(["John"]); //! Argument of type 'string[]' is not assignable to parameter of type 'string'
// greet(123); //!Argument of type 'number' is not assignable to parameter of type 'string'

const add = (a: number, b: number): number => {
  // console.log(a + b);
  return a + b;
};

//! class

//! interface
interface IUser {
  readonly _id: string | number;
  name: string;
  email: string;
  password: string;
  phone?: string;
}

interface IUser2 extends IUser {
  age: number;
}

let user: IUser = {
  _id: "1",
  email: "",
  name: "",
  password: "",
};

// declaration merge

//! generic type
interface IBox<T> {
  value: T;
}

let stringBox: IBox<string> = {
  value: "box",
};

let numberBox: IBox<number> = {
  value: 12,
};

let Box: IBox<{ x: number; y: number }> = {
  value: {
    x: 12,
    y: 23,
  },
};

let Box1: IBox<{ x: number; y: string }> = {
  value: {
    x: 12,
    y: "23",
  },
};

let Box3: IBox<(x: number) => number> = {
  value: (a: number) => {
    return a;
  },
};

let Box2: IBox<number[]> = {
  value: [1, 2],
};