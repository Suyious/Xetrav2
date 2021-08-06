import React from "react";

function Sidebar({ Open, children, setOpen}) {
  return (
    <div className="wrapper">
      {Open && <div className="ClickToExit" onClick={()=>setOpen(!Open)}/>}
      <div className={`blur ${Open? "blur_show":"blur_hide"}`}></div>
      <div className={`sidebar ${Open? "sidebar_show":"sidebar_hide"}`}>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
