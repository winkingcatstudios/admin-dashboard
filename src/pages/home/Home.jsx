import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/stats",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmYxYjM5OGViNDIxMTEzYmQxY2QzZmEiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjAxNDYwNzUsImV4cCI6MTY2MDIzMjQ3NX0.g9IlhhJtsYYXKge5kQsEEjjPmapqTcSfkxecv5RK4Y0",
            },
          }
        );
        const statsList = response.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New Users": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
