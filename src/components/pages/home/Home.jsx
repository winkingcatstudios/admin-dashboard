import React from "react";

import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      <div className="homeWidgets"></div>
    </div>
  );
}
