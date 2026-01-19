import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AddIdea = ({ ideas, setIdeas }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.description || "");
  const [tags, setTags] = useState(state ? state.tags.join(",") : "");

  const submit = (e) => {
    e.preventDefault();

    if (state) {
      setIdeas(
        ideas.map((idea) =>
          idea.id === state.id
            ? { ...idea, title, description: desc, tags: tags.split(",") }
            : idea,
        ),
      );
    } else {
      setIdeas([
        ...ideas,
        {
          id: Date.now(),
          title,
          description: desc,
          tags: tags.split(","),
          likes: 0,
        },
      ]);
    }

    navigate("/dashboard");
  };

  return (
    <form className="form-card" onSubmit={submit}>
      <h2>{state ? "Edit Idea" : "Add New Idea"}</h2>

      <input
        placeholder="Idea Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button type="submit">{state ? "Update" : "Submit"}</button>
    </form>
  );
};

export default AddIdea;
