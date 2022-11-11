import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" alt="" src="assets/gift.png" />
          <span className="birthdayText">
            <b>Jane Fonda</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" alt="" src="assets/ad.png" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar