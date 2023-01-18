import React, { useState } from "react";
import style from "../styles/todo.module.css";
import todoimg from "../images/todo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  return (
    <div className={style.main}>
      <main>
        <div className={style.imagediv}>
          <figure>
            <img src={todoimg} alt="" />
            <figcaption style={{ textAlign: "center", color: "white" }}>
              <h3>Todo List</h3>
            </figcaption>
          </figure>
        </div>
        <div className={style.addItem}>
          <input
            name="name"
            type="text"
            placeholder="✍️ Add Items Here..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className={style.addBtn} onClick={addItem}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <h2
          style={{
            textAlign: "center",
            padding: "10px 0px 10px 0px",
            color: "white",
          }}
        >
          Todo List Items
        </h2>
        <div className={style.list}>
          {items?.map((elem, index) => (
            <div key={index} className={style.addedItem}>
              <span style={{ marginInline: "10px" }}>{elem}</span>

              <FontAwesomeIcon
                icon={faTrash}
                className={style.deleteBtn}
                onClick={() => deleteItem(index)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Todo;
