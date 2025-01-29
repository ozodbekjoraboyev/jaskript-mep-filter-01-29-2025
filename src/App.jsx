import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //! 1 misol
  // const users = [
  //   { name: "Ali", age: 17 },
  //   { name: "Bobur", age: 22 },
  //   { name: "Sardor", age: 15 },
  //   { name: "Madina", age: 25 },
  // ];
  // const filtr = users.filter((item) => item.age > 18);
  // console.log(filtr);
  //! 2 misol
  //   const users = [
  //     { name: "Ali", age: 20 },
  //     { name: "Bobur", age: 22 },
  //     { name: "Sardor", age: 25 },
  //   ];
  // const newArr =  users.map((item) => item.name)
  // console.log(newArr);

  //! 3 misol
  // const products = [
  //   { name: "Telefon", price: 1200000 },
  //   { name: "Noutbuk", price: 5000000 },
  //   { name: "Dazmol", price: 400000 },
  //   { name: "Sovutgich", price: 2500000 },
  // ];
  // const produkt = products.filter((item)=>{
  //   return item.price > 500000
  // })
  // console.log(produkt);
  //! 4 misol
  // const students = [
  //   { name: "Ali", grade: 4 },
  //   { name: "Bobur", grade: 3 },
  //   { name: "Madina", grade: 5 },
  // ];
  // console.log(students);
  // const stats = students.map((item) => item.grade + 1);
  // console.log(stats);

  //! 5 misol
  // const names = ["ali", "bobur", "madina", "sardor"];
  // console.log(names);
  // const sum = names.map((item) => item.toUpperCase());
  // console.log(sum);

  //! 6 misol
  // const products = [
  //   { name: "Telefon", price: 1200000 },
  //   { name: "Noutbuk", price: 5000000 },
  //   { name: "Dazmol", price: 400000 }
  // ];
  // const sum =  products.map((item)=>item.price * 0.9)
  // console.log(sum);
  
  //! 7 misol
  //   const users = [
  //     { name: "Ali", age: 20 },
  //     { name: "Bobur", age: 22 },
  //     { name: "Anvar", age: 25 },
  //     { name: "Madina", age: 18 },
  //   ];
  //   const map = users.filter((item)=>{
  //  return   item.name.includes("A")
  //   })
  //   console.log(map);
  //! 8 misol
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const number = numbers.filter(num => num % 2 !== 0)
  //   console.log(number);
  //! 9 misol

  // const workers = [
  //   { name: "Ali", salary: 2000000 },
  //   { name: "Madina", salary: 4000000 },
  //   { name: "Sardor", salary: 2500000 },
  // ];
  // const ishchi = workers.map((workers) => ({
  //   ...workers,
  //   positon: workers.salary < 3000000 ? "qulvacha" : "ishchi"
  // }));
  // console.log(ishchi);

  //! 10 misol

  // const products = [
  //   { name: "Telefon", price: 1200000 },
  //   { name: "Noutbuk", price: 5000000 },
  //   { name: "Dazmol", price: 400000 },
  //   { name: "Sovutgich", price: 2500000 }
  // ];
  // const updatedProducts = products.map(product => ({
  //   ...product,
  //   newPrice: product.price > 500000 ? product.price * 0.85 : "chegirma yo'q"
  // }));

  // console.log(updatedProducts);
}

export default App;
