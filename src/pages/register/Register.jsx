import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
