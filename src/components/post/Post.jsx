import "./post.css"
import { MoreVert } from "@material-ui/icons";  
import { Users } from "../../dummyData";

export default function Post({post}) {

  return (
    <div children="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
                {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div> 
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" alt="" src={post.photo} />
        </div>
        <div className="postBottom">
          <div className="bottomLeft">
            <img className="likeIcon" alt="" src="assets/like.png" />
            <img className="likeIcon" alt="" src="assets/heart.png" />
            <span className="postLikeCounter">{post.like} Likes</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
            <span className="postShareText">{post.shares} Shares</span>
          </div>
        </div>
      </div>
    </div>
  )
}