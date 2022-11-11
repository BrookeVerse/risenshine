import "./LogIn.scss";

const LogIn = () => {
  return (
    <div className="LogIn">
      <h2>Welcome!</h2>
      <form className="logIn__form">
        <div className="LogIn__content">
          <input type="text" placeholder="UserName" className="LogIn__userName"/>
          <input type="text" placeholder="Password" className="LogIn__password"/>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
