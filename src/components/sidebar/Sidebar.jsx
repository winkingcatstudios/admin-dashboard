import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Report,
  WorkOutline,
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  PersonalVideoOutlined,
  PersonAddOutlined,
  GroupOutlined,
  VideoCallOutlined,
  VideoLibraryOutlined,
  FormatListBulletedOutlined,
  PlaylistAddOutlined,
  ListAltOutlined
} from "@material-ui/icons";

import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/videos" className="link">
              <li className="sidebarListItem">
                <PersonalVideoOutlined className="sidebarIcon" />
                Videos
              </li>
            </Link>
            <Link to="/lists" className="link">
            <li className="sidebarListItem">
              <FormatListBulletedOutlined className="sidebarIcon" />
              Lists
            </li>
            </Link>
            {/* <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <GroupOutlined className="sidebarIcon" />
                User List
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <PersonAddOutlined className="sidebarIcon" />
                New User
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Videos</h3>
          <ul className="sidebarList">
            <Link to="/videos" className="link">
              <li className="sidebarListItem">
                <VideoLibraryOutlined className="sidebarIcon" />
                Video List
              </li>
            </Link>
            <Link to="/newVideo" className="link">
              <li className="sidebarListItem">
                <VideoCallOutlined className="sidebarIcon" />
                New Video
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Lists</h3>
          <ul className="sidebarList">
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <ListAltOutlined className="sidebarIcon" />
                Lists List
              </li>
            </Link>
            <Link to="/newList" className="link">
              <li className="sidebarListItem">
                <PlaylistAddOutlined className="sidebarIcon" />
                New List
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
