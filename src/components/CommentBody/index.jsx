import { ThumbsUp } from "lucide-react";

const CommentBody = ({ commentData }) => {
  console.log(commentData);
  const avatar =
    commentData.snippet.topLevelComment.snippet.authorProfileImageUrl;
  const name = commentData.snippet.topLevelComment.snippet.authorDisplayName;
  const textDisplay = commentData.snippet.topLevelComment.snippet.textDisplay;
  const likeCount = commentData.snippet.topLevelComment.snippet.likeCount;
  return (
    <div className="flex items-center gap-2">
      <div>
        <img className="w-8 h-8 rounded-full" src={avatar} />
      </div>
      <div>
        <p>{name}</p>
        <p>{textDisplay}</p>
        <div className="flex items-center gap-1">
          <ThumbsUp size={16} />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentBody;
