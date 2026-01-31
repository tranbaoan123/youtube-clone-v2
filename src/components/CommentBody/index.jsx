import CommentItem from "../CommentItem";

const CommentBody = ({ commentData }) => {
  console.log(commentData.replies);
  return (
    <div className="flex items-center gap-2">
      <CommentItem commentData={commentData} />
      {commentData?.replies?.comments.length > 0 &&
        commentData?.replies?.comments.map((comment) => {
          return <CommentItem key={comment.id} commentData={comment} />;
        })}
    </div>
  );
};

export default CommentBody;
