const ChatMessage = (props) => {
  const { name, msg } = props;

  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="https://www.creativefabrica.com/wp-content/uploads/2022/03/09/Woman-Icon-Teen-Profile-Graphics-26722130-1.jpg"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{msg}</span>
    </div>
  );
};

export default ChatMessage;
