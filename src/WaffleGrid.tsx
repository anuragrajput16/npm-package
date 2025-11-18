import React from "react";
import "./styles.css";

export interface WaffleItem {
  link: string;
  icon: string;
  openIn: "_blank" | "_self";
  iconName: string;
}

export interface WaffleGridProps {
  rows?: number;
  cols?: number;
  waffleData?: WaffleItem[]; // <-- optional now
  gap?: number | string;
  tileSize?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * WaffleGrid — A simple customizable grid component
 */
const WaffleGrid: React.FC<WaffleGridProps> = ({
  rows = 3,
  cols = 3,
  gap = 8,
  tileSize = 85,
  waffleData = [], // default OK because prop is now optional
  className = "",
  style = {},
}) => {
  const count = rows * cols;

  // Always safe
  const cells = Array.from({ length: count }, (_, i) => waffleData[i] ?? null);

  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${
      typeof tileSize === "number" ? `${tileSize}px` : tileSize
    })`,
    gridTemplateRows: `repeat(${rows}, ${
      typeof tileSize === "number" ? `${tileSize}px` : tileSize
    })`,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    alignItems: "center",
    justifyItems: "center",
    ...style,
  };

  return (
    <div className={`waffle-grid ${className}`} style={containerStyle} role="grid">
      {cells.map((cell, idx) => (
        
        <div
          key={idx}
          role="gridcell"
          className="waffle-tile"
          style={{ width: "100%", height: "100%" }}
        >
        <a href={cell.link} target={cell.openIn} className="tile-link">
          <div className="tile">
            <div className="tile-icon">
              <img src={cell.icon} alt="url"  className="tile-icon"/></div>
            <div className="tile-label">{cell?.iconName ?? ""}</div>
          </div>
        </a>  
        </div>
      ))}
    </div>
  );
};

export default WaffleGrid;
