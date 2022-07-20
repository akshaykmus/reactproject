import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/b.jpg";

function About() {
  return (
    <Card
      img={Image1}
      title="About Page"
      description="Welcome to the About Page! You can find about me!"
    />
  );
}

export default About;
