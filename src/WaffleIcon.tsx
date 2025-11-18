import React from "react";

export interface WaffleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

const WaffleIcon = React.forwardRef<SVGSVGElement, WaffleIconProps>(
  ({ size = 24, className = "", strokeWidth = 0.1, ...rest }, ref) => {

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...rest}
      >
        <circle cx="3" cy="3" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="3" cy="12" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="3" cy="21" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="11.8" cy="3" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="11.8" cy="12" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="11.8" cy="21" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="20.6001" cy="3" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="20.6001" cy="12" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
        <circle cx="20.6001" cy="21" r="2.95" fill="white" stroke="black" strokeWidth={strokeWidth}/>
      </svg>
    );
  }
);

WaffleIcon.displayName = "WaffleIcon";

export default WaffleIcon;
