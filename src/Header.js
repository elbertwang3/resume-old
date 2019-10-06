import React from "react";

const Header = props => {
  const { name, phone, email, portfolio, twitter } = props.data;
  console.log(name);
  return (
    <div className="header">
      <div className="name">{name}</div>
      <div className="contact">
        {phone} ● {email} <br></br>
        {portfolio} ● {twitter}
      </div>
    </div>
  );
};

export default Header;
