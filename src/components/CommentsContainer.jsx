import commentsData from "../utils/commentsData";
const Comment = (props) => {
  const { name, text, replies } = props.data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
      className="w-12 h-12"
        alt="user-icon"
        src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small_2x/user-icon-member-login-isolated-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold"> {name}</p>
        <p> {text}</p>
        <div className="pl-5 border ml-5">

             {replies.map((reply,index) => <Comment key={index} data={reply}/>)}

        </div>
       
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>

      {commentsData.map((commentData,index) => (
        <Comment key={index} data={commentData} />
      ))}
    </div>
  );
};

export default CommentsContainer;
