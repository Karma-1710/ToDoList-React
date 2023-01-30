import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  //to keep track of the inputText that is being typed into the form
  const [inputText, setInputText] = React.useState("");

  //to keep track of the items that are being inserted into the form 
  const [items, setItems] = React.useState([]);


  //handleChange function sets the Inputtext to the new value that is enetered into the input form
  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }


  // addItems function takes the previous items that were added into the array and the new inputItem and returns the combined array

  function addItems(){
    setItems((prevItems) => {
      return [...prevItems, inputText];
    })
    setInputText("");
  }

  function deleteItem(id){
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index) =>{
          return index !== id;
        }
      )
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {handleChange} type="text" value = {inputText}/>
        <button onClick = {addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {
              items.map((item, index) => {
                return (<ToDoItem 
                key = {index}
                id = {index}
                text = {item}
                onChecked = {deleteItem}
                />)
              })
            }
        </ul>
      </div>
    </div>
  );
}
// NOTE: items.map is used to therefore to insert all the items from the items array using the map function 


export default App;
