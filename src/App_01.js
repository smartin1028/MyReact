// import logo from './logo.svg';
import './App.css';
import {Component, useMemo, useState} from "react";

// JSX는 JavaScript를 확장한 문법이다.
// JavaScript의 모든 기능이 포함되어 있다.
//
// function App() {
//   const [userName, setUserName] = useState("Alex");
//
//   const handleClickTyler = () => setUserName("Tyler");
//   const handleClickJulian = () => setUserName("Julian");
//
//
//   return (
//       <div>
//         <h1>Hello {userName}</h1>
//         <button onClick={handleClickTyler}>Tyler</button>
//         <button onClick={handleClickJulian}>Julian</button>
//       </div>
//   );
// }
const App = () => {
  var itemDataList = [
    {
      name: "CPU",
      price: "46984",
      quantity: 1
    },
    {
      name: "메인보드",
      price: "112053",
      quantity:1
    },
    {
      name: "메모리",
      price: "79608",
      quantity: 2,
    }
  ];

  const [items, setItems] = useState(itemDataList) ;


  const calcTotalPrice = (items) => {
    return items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    });
  }

  const totalPrice = useMemo(() => calcTotalPrice(items),[items]);
}

export default App;
