import { useEffect, useState } from "react";
import api from "../../apis";
import CommentCard from "../CommentCard";
const Comment = ({ videoId }) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [commentList, setCommentList] = useState({
    comments: [],
    nextPageToken: null,
  });
  const fetchComments = async () => {
    const response = await api.get(
      `commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}${
        commentList.nextPageToken
          ? `&pageToken=${commentList.nextPageToken}`
          : ""
      }&key=${API_KEY}`
    );
    console.log(response.data);

    setCommentList((prev) => ({
      comments: [...prev.comments, ...response.data.items],
      nextPageToken: response.data.nextPageToken,
    }));
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div>
      <h3 className="text-lg font-bold">Comments</h3>
      {commentList.comments.length > 0 &&
        commentList.comments.map((comment) => {
          return <CommentCard key={comment.id} commentData={comment} />;
        })}
      <button className="w-full p-2" onClick={() => fetchComments()}>
        Load more
      </button>
    </div>
  );
};

export default Comment;
