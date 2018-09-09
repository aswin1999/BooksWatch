import React from "react";
import "../css/credits.css";
import { FaEnvelope, FaGithub } from "react-icons/lib/fa";

class Credits extends React.Component {
  constructor(props) {
    super(props);
    this.devs = [
      {
        name: "Aswin G",
        email: "aswinganesh666@gmail.com",
        sub: "Project Lead",
        githubID: "https://github.com/agzuniverse",
        avatar:
          "https://avatars1.githubusercontent.com/u/22353313?s=400&u=0e8dde806ccb9763ccfdcef69a3a90d45905bbd5&v=4",
        gitName: "agzuniverse"
      },
      {
        name: "Aswin M Prabhu",
        email: "aswinmprabhu@gmail.com",
        sub: "Front End",
        githubID: "https://github.com/aswinmprabhu",
        avatar: "https://avatars2.githubusercontent.com/u/31558262?s=400&v=4",
        gitName: "aswin1999"
      },
      {
        name: "Joyal A Johney",
        email: "joyalajohney@gmail.com",
        sub: "Front End",
        githubID: "https://github.com/JoyalAJohney",
        avatar: "https://avatars0.githubusercontent.com/u/31545426?s=460&v=4",
        gitName: "JoyalAJohney"
      },
      {
        name: "Vivek R",
        email: "123vivekr@gmail.com",
        sub: "Back End",
        githubID: "https://github.com/123vivekr",
        avatar:
          "https://avatars1.githubusercontent.com/u/28249428?s=400&u=4f56dd04a570ab942717ee378deff2fbdd4196c3&v=4",
        gitName: "123vivekr"
      }
    ];
  }

  userPic = dev => (
    <a key={`${dev.name}pic`} href={`#${dev.name}`}>
      <img id="credits-avatar" src={dev.avatar} alt={`${dev.name} pic`} />
    </a>
  );

  userDetails = dev => (
    <div id={dev.name} className="credits-desc">
      <span className="credits-name">{dev.name}</span>
      <font size="2">
        <center>{dev.sub}</center>
      </font>
      <span className="credit-sep" />
      <FaEnvelope key={dev.email} /> {dev.email}
      <br />
      <br />
      <FaGithub key={dev.githubID} />
      <a
        href={dev.githubID}
        rel="noopener noreferrer"
        target="_blank"
        style={{ color: "#2ecc71" }}
      >
        {dev.gitName}
      </a>
    </div>
  );

  render() {
    return (
      <div>
        <div className="bg" />
        <div className="bg2" />
        <div className="credit-container">
          <meta name="viewport" content="width=1024" />
          <a style={{ textDecoration: "none" }} href="/">
            <h2 id="credits-head">BooksWatch</h2>
          </a>
          <h1 id="credits-aboutus">The Developers</h1>
          <span className="credit-sep" />
          <div className="credit-devs">
            <center> {this.devs.map(dev => this.userPic(dev))} </center>
          </div>
          {this.devs.map(dev => this.userDetails(dev))}
        </div>
      </div>
    );
  }
}

export default Credits;
