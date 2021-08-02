import React from "react";
import "./Sidebar.css";

function SidebarRow({ Icon, title, selected }) {
  return (
    <div className={`sidebar-row ${selected && "row-on-click-active"}`}>
      <Icon className="sidebar-icon" />
      <h2 className="sidebar-title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
