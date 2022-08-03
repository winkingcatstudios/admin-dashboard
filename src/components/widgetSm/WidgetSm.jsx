import React from "react";
import { Visibility } from "@material-ui/icons";

import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmallListItem">
          <img
            src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dan Kercher</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dan Kercher</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dan Kercher</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dan Kercher</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dan Kercher</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
