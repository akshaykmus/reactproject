import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/a.jpg";
function Home() {
  const data = [{ imagepath: Image1, pageName: "Home Page" }];

  const dataList = data.map((d) => (
    <Card
      img={d.imagepath}
      title={d.pageName}
      description="Hello there This is the Home Page and welcome on the Home Page"
    />
  ));
  return <div> {dataList} </div>;
}

export default Home;
