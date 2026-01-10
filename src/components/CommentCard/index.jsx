import CommentBody from "../CommentBody";

const CommentCard = ({ commentData }) => {
  return (
    <div className="flex flex-col gap-2">
      <CommentBody commentData={commentData} />
      <div className="px-14 mb-2">
        {[...Array(2)].map((item) => {
          return <CommentBody commentData={commentData} />;
        })}
      </div>
    </div>
  );
};

export default CommentCard;
