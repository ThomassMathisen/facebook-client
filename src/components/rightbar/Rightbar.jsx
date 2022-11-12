import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" alt="" src={`${PF}gift.png`} />
          <span className="birthdayText">
            <b>Jane Fonda</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" alt="" src={`${PF}ad.png`} />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 
                ? "Single" 
                : user.relationship === 2 
                ? "Married" 
                :  "-"
              }
              </span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingImg"
              alt=""
              src={`${PF}person/2.jpeg`}
            />
            <span className="rightbarFollowingName">John Ayers</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingImg"
              alt=""
              src={`${PF}person/1.jpeg`}
            />
            <span className="rightbarFollowingName">Jane Ayers</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingImg"
              alt=""
              src={`${PF}person/5.jpeg`}
            />
            <span className="rightbarFollowingName">Rita Hayworth</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingImg"
              alt=""
              src={`${PF}person/8.jpeg`}
            />
            <span className="rightbarFollowingName">Frank Sinatra</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingImg"
              alt=""
              src={`${PF}person/10.jpeg`}
            />
            <span className="rightbarFollowingName">Chucky Cheese</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingImg"
              alt=""
              src={`${PF}person/9.jpeg`}
            />
            <span className="rightbarFollowingName">Gal Gadot</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}