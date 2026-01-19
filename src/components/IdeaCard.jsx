import { useState } from "react";

const IdeaCard = ({ idea, onLike, onComment, onEdit, onDelete }) => {
  const [showComment, setShowComment] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleComment = () => {
    if (commentText.trim() === "") return;

    onComment(idea.id, commentText);
    setCommentText("");
    setShowComment(false);
  };

  return (
    <div className="idea-card">
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>

      <div className="tags">
        {idea.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>

      <div className="actions">
        <button onClick={() => onLike(idea.id)}>👍 {idea.likes}</button>

        <button onClick={() => setShowComment(!showComment)}>
          💬 Comment
        </button>

        <button onClick={() => onEdit(idea)}>✏️ Edit</button>

        <button onClick={() => onDelete(idea.id)}>🗑 Delete</button>
      </div>

      {showComment && (
        <div className="comment-box">
          <input
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleComment}>Post</button>
        </div>
      )}

      {idea.comments?.map((c, i) => (
        <p key={i} className="comment">💬 {c}</p>
      ))}
    </div>
  );
};

export default IdeaCard;
