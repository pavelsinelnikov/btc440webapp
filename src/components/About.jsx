import React from "react";
import Content from "./Content";

const About = () => {
  return (
    <div className="App">
      <main>
        <Content
          title="About Me"
          content="I love designing and creating webpages. This webpage was made with: React and Bootstrap"
        />
      </main>
    </div>
  );
};

export default About;
