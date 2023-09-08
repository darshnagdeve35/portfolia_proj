import { useState } from "react";
import "./../TodoList.css";

function TodoList() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  function setItemValue(event) {
    setItem(event.target.value);
  }

  function addListItem() {
    if (item.trim() !== "") {
      setListItem([...listItem, item]);
      setItem("");
      setCheckedItems([...checkedItems, false]);
    }
  }

  function crossOut(index) {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  }

  return (
    <div className="todo-container">
      <form className="todo-form">
        <label className="todo-label">Add Items</label>
        <input
          type="text"
          className="todo-input"
          placeholder="Type task"
          onChange={setItemValue}
          value={item}
        />
        <button type="button" className="todo-button" onClick={addListItem}>
          Submit
        </button>

        <ul className="todo-list">
          {listItem.map((itemText, index) => (
            <div className="list-item" key={index}>
              <input
                type="checkbox"
                className={checkedItems[index] ? "checked" : ""}
                checked={checkedItems[index]}
                onChange={() => crossOut(index)}
              />
              <label
                className={checkedItems[index] ? "checked" : "notChecked"}
                onClick={() => crossOut(index)}
              >
                {itemText}
              </label>
            </div>
          ))}
        </ul>
      </form>

      <br />
      <br />
    </div>
  );
}

export default TodoList;
