import CommentBody from "../CommentBody";

const CommentCard = ({ commentData }) => {
  return (
    <div className="flex flex-col gap-2">
      <CommentBody commentData={commentData} />
      <div className="px-14 mb-2">
        {commentData.snippet.totalReplyCount > 0 &&
          commentData.replies.comments.map((item) => {
            return <CommentBody commentData={item} />;
          })}
      </div>
    </div>
  );
};

export default CommentCard;
