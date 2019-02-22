import React from "react";
import Content from "./Content";

const About = () => {
  return (
    <div className="App">
      <main>
        <Content
          title="About Me"
          content="I love designing and creating webpages. This webpage was made with: React and Bootstrap. This website is fully responsive. Try viewing it on your phone!"
        />
      </main>
    </div>
  );
};

export default About;
