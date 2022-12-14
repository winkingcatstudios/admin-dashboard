import React from "react";

import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Unused Widget Space</h3>
      {/* <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Sample User</span>
            </td>
            <td className="widgetLgDate">Jan 1 1970</td>
            <td className="widgetLgAmount">$0</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Sample User</span>
            </td>
            <td className="widgetLgDate">Jan 1 1970</td>
            <td className="widgetLgAmount">$0</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Sample User</span>
            </td>
            <td className="widgetLgDate">Jan 1 1970</td>
            <td className="widgetLgAmount">$0</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Sample User</span>
            </td>
            <td className="widgetLgDate">Jan 1 1970</td>
            <td className="widgetLgAmount">$0</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
