import { useState } from "react";

export default function Navbar() {
  let [width, setWidth] = useState(innerWidth);

  window.onresize = () => {
    setWidth(innerWidth);
  };

  if (width > 965) {
    return (
      <div className="navbar">
        <h1 className="title-nav">UNIPRO STAGE IX</h1>
        <nav>
          <a>Home</a>
          <a>Sejarah</a>
          <a>Our Teams</a>
          <a>Sponsorship</a>
          <a>Media Partner</a>
        </nav>
        <button className="title-btn">Coming soon</button>
      </div>
    );
  } else {
    return <></>;
  }
}
