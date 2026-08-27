import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API = "http://localhost:5000/notes";

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await axios.get(API);
    setNotes(res.data);
  };

  const handleSubmit = async () => {
    if (title === "" || description === "") {
      alert("Please fill all fields");
      return;
    }

    if (editId === null) {
      await axios.post(API, {
        title,
        description,
      });
    } else {
      await axios.put(`${API}/${editId}`, {
        title,
        description,
      });
      setEditId(null);
    }

    setTitle("");
    setDescription("");
    getNotes();
  };

  const editNote = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEditId(note.id);
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API}/${id}`);
    getNotes();
  };

  return (
    <div className="container">
      <h1>Create Notes</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={handleSubmit}>
          {editId ? "Update Note" : "Add Note"}
        </button>
      </div>

      <div className="notes">
        {notes.map((note) => (
          <div className="card" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>

            <button
              className="edit"
              onClick={() => editNote(note)}
            >
              Edit
            </button>

            <button
              className="delete"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;