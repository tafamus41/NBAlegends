import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div className="logoandtext">
      <p >
        <img src={logo} alt="" />
      </p>
      <h1 className="text-center">NBA Legends</h1>
      
    </div>
  );
};

export default Header;
