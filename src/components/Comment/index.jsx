import { useEffect, useState } from "react";
import api from "../../apis";
import CommentBody from "../CommentBody";
const Comment = ({ videoId }) => {
  const [commentList, setCommentList] = useState({
    data: [],
    nextPageToken: null,
  });
  const fetchCommentList = async () => {
    const response = await api.get(
      `commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoId}${commentList.nextPageToken ? `&pageToken=${commentList.nextPageToken}` : ""}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    );

    setCommentList((prev) => {
      return {
        data: [...prev.data, ...response.data.items],
        nextPageToken: response.data.nextPageToken,
      };
    }); // cho 1 hàm callback để truy xuất lại vào state trước đó (previous state)
    // reference
  };
  useEffect(() => {
    fetchCommentList();
  }, []);
  return (
    <div>
      <h3 className="text-lg font-bold">Comments</h3>
      <div className="flex flex-col gap-2">
        {commentList.data.length > 0 &&
          commentList.data.map((item) => {
            return <CommentBody key={item.id} commentData={item} />;
          })}
      </div>
      <div className="flex items-center justify-center">
        <button className="p-2" onClick={() => fetchCommentList()}>
          Load more ...
        </button>
      </div>
    </div>
  );
};
export default Comment;
