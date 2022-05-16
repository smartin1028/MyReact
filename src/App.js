// import logo from './logo.svg';
import './App.css';
import {Component, useMemo, useState} from "react";

const calcTotalPrice = (items) => {
  // return items.reduce(function (sum, item) {
  //   console.log(sum)
  //   console.log(sum + item.price * item.quantity)
  //   return sum + item.price * item.quantity;
  // },0);
  // return items.reduce((sum, item) =>
  //     {
  //       return sum + item.price * item.quantity;
  //     }
  //     ,0);
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0 );

}
const App = () => {

  const [username, setUsername] = useState("ldw");

  const itemDataList = [
    {
      name: "CPU",
      price: 46984,
      quantity: 1
    },
    {
      name: "메인보드",
      price: 112053,
      quantity: 1
    },
    {
      name: "메모리",
      price: 79608,
      quantity: 2,
    }
  ];

  const [items, setItems] = useState(itemDataList) ;
  const totalPrice = useMemo(() => calcTotalPrice(items),[items]);


  const handleClickTyler = () => {
    console.log("handleClickTyler");
    setUsername("Tyler");
    // this.setState({userName: "Tyler"});
  }
  const handleClickJulian = () => {
    console.log("handleClickJulian");
    setUsername("Julian");
    // this.setState({userName: "Julian"});
  }

  return (
      <div>
        <h1>Hello {username}</h1>
        <h1>{totalPrice}</h1>
        <button onClick={handleClickTyler}>Tyler</button>
        <button onClick={handleClickJulian}>Julian</button>
      </div>
  )
}

export default App;
