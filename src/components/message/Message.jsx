import "./message.css"

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img 
          className="messageImg"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p className="messageText">Hello there</p>
      </div>
      <div className="messageBottom">1 minute ago</div>
    </div>
  )
}
