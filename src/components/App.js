
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [cartItems, setcartItems] = useState([]);
  const [item, setItem] = useState({ name: "", price: "" });
  function removeItem(idx) {
    cartItems.splice(idx,1);
    setcartItems([...cartItems])
  }

  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <label htmlFor="itemName">Item Name:</label>
      <input type="text" id="itemName" onChange={(e)=> setItem({...item,name:e.target.value})} />

      <label htmlFor="itemPrice">Item Price:</label>
      <input type="number" id="itemPrice" onChange={(e)=> setItem({...item,price:e.target.value})}/>

      <button onClick={()=>setcartItems([...cartItems,item])}>Add Items</button>

      <div className="child">
        <h1>Child Component</h1>
        <ul className="child">
          {
            cartItems.map((obj, i) => {
              return (
                <li key={i} className="child ">
                  {obj.name} - ${obj.price}<button onClick={()=>removeItem(i)}>Remove</button>
                </li>
              )
            })
          }
        </ul>
      </div>


    </div>
  )
}

export default App
