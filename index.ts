//* variable declaration methods
//var let const

//datatypes
//null
let b: null;
//boolean
let c: boolean;
//number
let d: number;
//undefined
let e: undefined;
//string
let a: string;

//*special types
//? any
let f: any;
f = "any type";
// f = 12;
console.log(f.toUpperCase());

//? unknown
let g: unknown;
g = "unknown type";
g = 199;

if (typeof g === "string") {
  console.log(g.toUpperCase());
}

//?void
//? never

//!type inference

// let a = 12;
//a = "";

//!type annotation

// let g:string;
g = "";
//  g = 12;

//*array
let numbers: number[] = [12, 4, 56];
numbers.push(23);
console.log(numbers);

let strings: string[] = ["a"];

//*tuple
//id, name, age,email,password => [id,name,age,email,passeord] => [number,string,number,string]

let userTuple: [number, string, number, string, string] = [
  1,
  "john",
  23,
  "ahsdhf@gmail",
  "fhd",
];

//users:
let users: [number, string, number, string, string][] = [
  [1, "john", 23, "ahsdhf@gmail", "fhd"],
  [2, "john", 23, "ahsdhf@gmail", "fhd"],
  [3, "john", 23, "ahsdhf@gmail", "fhd"],
  [4, "john", 23, "ahsdhf@gmail", "fhd"],
];
console.log(users);

//*object
//! type alias

//!type literal

//!function

//!class

//! interface

//!generic types
