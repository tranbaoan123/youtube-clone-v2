import { useEffect, useState } from "react";
import api from "../../apis";
import CommentBody from "../CommentBody";
import CommentCard from "../CommentCard";
const Comment = ({ videoId }) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [commentList, setCommentList] = useState([]);
  const fetchComments = async () => {
    const response = await api.get(
      `commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${API_KEY}`
    );
    setCommentList(response.data.items);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div>
      <h3 className="text-lg font-bold">Comments</h3>
      {commentList.length > 0 &&
        commentList.map((comment) => {
          return <CommentCard key={comment.id} commentData={comment} />;
        })}
      <button className="w-full p-2">Load more</button>
    </div>
  );
};

export default Comment;
