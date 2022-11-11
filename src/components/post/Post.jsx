import "./post.css"
import { MoreVert } from "@material-ui/icons";  

const Post = () => {
  return (
    <div children="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
              className="postProfileImg"
              src="assets/person/5.jpeg"
              alt=""
            />
            <span className="postUsername">
                Jack Doe
            </span>
            <span className="postDate">10 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is a post</span>
          <img className="postImg" alt="" src="/assets/post/1.jpeg" />
        </div>
        <div className="postBottom">
          <div className="bottomLeft">
            <img className="likeIcon" alt="" src="assets/like.png" />
            <img className="likeIcon" alt="" src="assets/heart.png" />
            <span className="postLikeCounter">10 Likes</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">5 Comments</span>
            <span className="postShareText">5 Shares</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post