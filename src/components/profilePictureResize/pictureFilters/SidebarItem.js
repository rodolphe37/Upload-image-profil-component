import React from "react";

function SidebarItem({ icon, active, handleClick }) {
  return (
    <div className="sidebar">
      <button
        className={`sidebar__sidebarItem ${active ? "active" : ""}`}
        onClick={handleClick}
      >
        {icon}
      </button>
    </div>
  );
}

export default SidebarItem;
