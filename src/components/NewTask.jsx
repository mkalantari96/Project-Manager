import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">
          Empty Input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forget to enter a text for task
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className=" w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add task
        </button>
      </div>
    </>
  );
}
