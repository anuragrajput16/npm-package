import React, { useState, useRef, useEffect } from "react";
import WaffleGrid, { WaffleGridProps, WaffleItem } from "./WaffleGrid";
import "./styles.css";
import WaffleIcon from "./WaffleIcon";

const DropWorksWaffeMenu: React.FC<WaffleGridProps> = ({
  rows = 3,
  cols = 3,
  gap = 8,
  tileSize = 85,
  waffleData = [], // default OK because prop is now optional
  className = "",
  style = {},
}) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const popRef = useRef(null);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popRef.current &&
        !popRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="app-container">
      <div className="waffle-btn-container" ref={btnRef}>
        <div className="waffle-btn" onClick={() => setOpen(!open)}>
          <WaffleIcon />
        </div>

        {open && (
          <div className="waffle-popup" ref={popRef} >
            <div className="waffle-container">

            <WaffleGrid rows={rows} cols={cols} gap={gap} tileSize={tileSize} waffleData={waffleData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropWorksWaffeMenu;
