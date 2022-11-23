import images from "../../../Importer/Importer";
interface ChatCommentType {
  username: string;
  date: string;
  comment: string;
  liked: boolean;
  className?:string;
}
const ChatComments = (props: ChatCommentType) => {
  if (props.liked) {
    return (
      <div className={`bg-dark p-7 container ${props.className}`}>
        <div className="flex flex-row pb-7 bg-dark">
          <img src={images["Profiles/profile_1.png"]} alt="" />
          <div className="flex flex-col pr-5 justify-center ">
            <p className="head-comment-name">{props.username}</p>
            <p className="head-comment-date">{props.date}</p>
          </div>
        </div>
        <div>
          <p className="light-post-txt">{props.comment}</p>
        </div>
        <div className="flex flex-row-reverse">
          <img
            src={images["Icons/FillHeart.svg"]}
            alt="like icon"
            className="pr-6"
          />
          <img src={images["Icons/Reply.svg"]} alt="reply icon" className=""/>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`bg-grey p-7 bg-dark ${props.className}`}>
        <div className="flex flex-row pb-7">
          <img src={images["Profiles/profile_1.png"]} alt="" />
          <div className="flex flex-col pr-5 justify-center ">
            <p className="head-comment-name">{props.username}</p>
            <p className="head-comment-date">{props.date}</p>
          </div>
        </div>
        <div>
          <p className="light-post-txt">{props.comment}</p>
        </div>
        <div className="flex flex-row-reverse">
          <img
            src={images["Icons/NullHeart.svg"]}
            alt="like icon"
            className="pr-6"
          />
          <img src={images["Icons/Reply.svg"]} alt="reply icon" />
        </div>
      </div>
    );
  }
};

export default ChatComments;
