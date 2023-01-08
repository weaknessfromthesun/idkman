import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      rizzing ur mother <i className="fas fa-heart"></i> forever and ever.{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/xiaoAllen1"
        aria-label="My GitHub"
      >
       by wika sun,
      </a>{" "}
      an avid anime and youtube watcher, plays phatom forces on roblox and 1.8.9 pvp on minecraft. call me anytime <i className="fas fa-minecraft"></i>
      <p>
        <small className="text-muted">
          {" "}
          this is not an open-source project. you can not fork it and make your own
          version.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
