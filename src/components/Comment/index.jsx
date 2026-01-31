import { useEffect, useState } from "react";
import api from "../../apis";
import CommentBody from "../CommentBody";
const Comment = ({ videoId }) => {
  const [commentList, setCommentList] = useState([]);
  const fetchCommentList = async () => {
    const response = await api.get(
      `commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    );
    setCommentList(response.data.items);
  };
  useEffect(() => {
    fetchCommentList();
  }, []);
  return (
    <div>
      <h3 className="text-lg font-bold">Comments</h3>
      <div className="flex flex-col gap-2">
        {commentList.length > 0 &&
          commentList.map((item) => {
            return <CommentBody key={item.id} commentData={item} />;
          })}
      </div>
    </div>
  );
};

export default Comment;
