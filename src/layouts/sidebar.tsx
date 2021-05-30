import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import * as SidebarStyles from "./styles/sidebar.module.scss";

type SidebarProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  children,
  defaultOpen = true,
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [sidebarWidth, setSidebarWidth] = useState<string>("20rem");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
      if (toggleRef.current !== null) {
        toggleRef.current.style.left = sidebarWidth;
      }
      if (sidebarRef.current !== null) {
        sidebarRef.current.style.width = sidebarWidth;
        sidebarRef.current.style.padding = "1rem";
      }
    } else {
      if (toggleRef.current !== null) {
        toggleRef.current.style.left = "0px";
      }
      if (sidebarRef.current !== null) {
        sidebarRef.current.style.width = "0px";
        sidebarRef.current.style.padding = "0px";
      }
    }
  }, [open, sidebarWidth]);

  useLayoutEffect(() => {
    const updateSidebarSize = () => {
      if (window.innerWidth <= 560) {
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
        {children ? children : <div>Hello from Sidebar</div>}
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
