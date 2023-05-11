import React from "react";
import "./SideBar.css";

type mydata = {
  data: {
    id: number;
    Name: string;
  }[];
};

const SideBar = ({ data }: mydata) => {
  console.log(data);
  return (
    <div className="Side-Menu">
      {data.map((item) => (
        <div key={item.id}>{item.Name}</div>
      ))}
    </div>
  );
};

export default SideBar;
