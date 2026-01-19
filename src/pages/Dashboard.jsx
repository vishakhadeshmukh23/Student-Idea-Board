import { useNavigate } from "react-router-dom";
import IdeaCard from "../components/IdeaCard";

const Dashboard = ({ ideas, setIdeas }) => {
  const navigate = useNavigate();

  const likeIdea = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };

  const deleteIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const editIdea = (idea) => {
    navigate("/add", { state: idea });
  };

  const addComment = (id, text) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id
          ? {
              ...idea,
              comments: [...(idea.comments || []), text],
            }
          : idea
      )
    );
  };

  if (ideas.length === 0) {
    return <p className="empty">No ideas yet. Be the first one to add!</p>;
  }

  return (
    <div className="dashboard">
      {ideas.map((idea) => (
        <IdeaCard
          key={idea.id}
          idea={idea}
          onLike={likeIdea}
          onDelete={deleteIdea}
          onEdit={editIdea}
          onComment={addComment}   
        />
      ))}
    </div>
  );
};

export default Dashboard;
