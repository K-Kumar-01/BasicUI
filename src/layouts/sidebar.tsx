import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import * as SidebarStyles from "./styles/sidebar.module.scss";

type SidebarProps = {
  children?: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [sidebarWidth, setSidebarWidth] = useState<string>("20rem");
  const toggleRef = useRef<any>();
  const sidebarRef = useRef<any>();
  useEffect(() => {
    if (open) {
      toggleRef.current.style.left = sidebarWidth;
      sidebarRef.current.style.width = sidebarWidth;
      sidebarRef.current.style.padding = "1rem";
    } else {
      toggleRef.current.style.left = "0px";
      sidebarRef.current.style.width = "0px";
      sidebarRef.current.style.padding = "0px";
    }
  }, [open, sidebarWidth]);

  useLayoutEffect(() => {
    const updateSidebarSize = () => {
      if (window.innerWidth < 560) {
        setSidebarWidth("100%");
      } else {
        setSidebarWidth("20rem");
      }
    };
    window.addEventListener("resize", updateSidebarSize);
    return () => window.removeEventListener("resize", updateSidebarSize);
  }, []);

  return (
    <React.Fragment>
      <button
        className={SidebarStyles.toggler}
        onClick={() => setOpen(!open)}
        ref={toggleRef}
      >
        {open ? "<<" : ">>"}
      </button>
      <section className={SidebarStyles.sidebar} tabIndex={0} ref={sidebarRef}>
        {sidebarWidth === "100%" && (
          <div style={{ textAlign: "center" }}>
            <button
              className={SidebarStyles.closeBtn}
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
          </div>
        )}
        <div>Hello from Sidebar</div>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
