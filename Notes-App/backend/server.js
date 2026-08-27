const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Data
let notes = [
  {
    id: 1,
    title: "Shopping",
    description: "Buy Milk"
  },
  {
    id: 2,
    title: "Study",
    description: "Complete React Assignment"
  },
  {
    id: 3,
    title: "Workout",
    description: "Go for a run"
  }
];

// ======================
// GET All Notes
// ======================
app.get("/notes", (req, res) => {
  res.status(200).json(notes);
});

// ======================
// GET Single Note
// ======================
app.get("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  res.json(note);
});

// ======================
// CREATE Note
// ======================
app.post("/notes", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "Title and Description are required"
    });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    description
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note Added Successfully",
    note: newNote
  });
});

// ======================
// UPDATE Note
// ======================
app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const { title, description } = req.body;

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  notes[index] = {
    ...notes[index],
    title,
    description
  };

  res.json({
    message: "Note Updated Successfully",
    note: notes[index]
  });
});

// ======================
// DELETE Note
// ======================
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  notes.splice(index, 1);

  res.json({
    message: "Note Deleted Successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});