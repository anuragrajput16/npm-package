import React, { useState, useRef, useEffect } from "react";

import "./dropWorksWaffeMenu.css";
import WaffleIcon from "./WaffleIcon";

const waffleData = [
  {
    menuId: 1,
    menuTitle: "",
    menuIcon: "http://uat-media.dropworks.app/studio/DropWorksSTUDIOlogoPurpleNoBackground1024X1024.png",
    link: "https://uat.dropworks.app/featured",
    openIn: "_self",
    subMenu: [
      {
        id: 1,
        iconUrl: "http://uat-media.dropworks.app/studio/LibraryCORRECT.png",
        label: "library",
        link: "https://uat.dropworks.app/library",
        openIn: "_self",
      },
      {
        id: 2,
        iconUrl: "http://uat-media.dropworks.app/studio/InviteCORRECT.png",
        label: "Invite",
        link: "https://uat.dropworks.app/invite",
        openIn: "_self",
      },
      {
        id: 3,
        iconUrl: "http://uat-media.dropworks.app/studio/CreateCORRECT.png",
        label: "Create",
        link: "https://uat.dropworks.app/create",
        openIn: "_self",
      },
    ],
  },
  {
    menuId: 2,
    menuTitle: "",
    menuIcon: "https://uat-media.dropworks.app/music-marketplace/DropWorksMUSICMARKETPLACElogoPurpleNoBackground1024X1024.png",
    link: "https://uat.dropworks.app/music-marketplace",
    openIn: "_self",
    subMenu: [
      {
        id: 1,
        iconUrl:"https://uat-media.dropworks.app/music-marketplace/MyOrdersCORRECT.png",
        label: "My Orders",
        link: "https://uat.dropworks.app/music-marketplace",
        openIn: "_self",
      },
      {
        id: 2,
        iconUrl:"https://uat-media.dropworks.app/music-marketplace/SellDropStocksCORRECT.png",
        label: "Sell DropStocks",
        link: "https://uat.dropworks.app/music-marketplace?q=3",
        openIn: "_self",
      },
      {
        id: 3,
        iconUrl: "https://uat-media.dropworks.app/music-marketplace/TransactionsCORRECT.png",
        label: "Transaction",
        link: "https://uat.dropworks.app/music-marketplace",
        openIn: "_self",
      },
      {
        id: 4,
        iconUrl: "https://uat-media.dropworks.app/music-marketplace/SpecialOffersCORRECT.png",
        label: "Special Offers",
        link: "https://uat.dropworks.app/music-marketplace",
        openIn: "_self",
      },
    ],
  },
  {
    menuId: 3,
    menuTitle: "",
    menuIcon: "https://uat-media.dropworks.app/club-chain/DropWorksClubChainlogoPurpleNoBackground1024X1024.png",
    link: "https://clubchain.dropworks.app",
    openIn: "_self",
    subMenu: [
      {
        id: 1,
        iconUrl:"https://uat-media.dropworks.app/club-chain/DailyTasksCORRECT.png",
        label: "Task",
        link: "https://clubchain.dropworks.app/tasks",
        openIn: "_self",
      },
      {
        id: 2,
        iconUrl:"https://uat-media.dropworks.app/club-chain/ClubsCORRECT.png",
        label: "Clubs",
        link: "https://clubchain.dropworks.app/clubs",
        openIn: "_self",
      },
      {
        id: 3,
        iconUrl:"https://uat-media.dropworks.app/club-chain/LeaderboardCORRECT.png",
        label: "Leaderboard",
        link: "https://clubchain.dropworks.app/leaderboard",
        openIn: "_self",
      },
      {
        id: 4,
        iconUrl:"https://uat-media.dropworks.app/club-chain/JackpotCORRECT.png",
        label: "jackpot",
        link: "https://clubchain.dropworks.app/jackpot",
        openIn: "_self",
      },
      {
        id: 5,
        iconUrl:"https://uat-media.dropworks.app/club-chain/ReferralsCORRECT.png",
        label: "Referral",
        link: "https://clubchain.dropworks.app/referral",
        openIn: "_self",
      },
      {
        id: 6,
        iconUrl:"https://uat-media.dropworks.app/club-chain/RulesCORRECT.png",
        label: "Rules",
        link: "https://clubchain.dropworks.app/rules",
        openIn: "_self",
      },
    ],
  },
  {
    menuId: 4,
    menuTitle: "",
    menuIcon: "https://uat-media.dropworks.app/dropto/DropWorksDROPTOSECTIONlogoPurpleNoBackground1024X1024.png",
    link: "https://dropto.dropworks.app",
    openIn: "_self",
    subMenu: [
      {
        id: 1,
        iconUrl: "https://uat-media.dropworks.app/dropto/PortfolioCORRECT.png",
        label: "Music-portfolio",
        link: "https://dropto.dropworks.app/music-portfolio",
        openIn: "_self",
      },
      {
        id: 2,
        iconUrl:"https://uat-media.dropworks.app/dropto/LPRewardCORRECT.png",
        label: "Lp-rewards",
        link: "https://dropto.dropworks.app/lp-rewards",
        openIn: "_self",
      },
      {
        id: 3,
        iconUrl:"https://uat-media.dropworks.app/dropto/VotingCORRECT.png",
        label: "Voting",
        link: "https://dropto.dropworks.app/voting",
        openIn: "_self",
      },
    ],
  },
];

const DropWorksWaffeMenu = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        popRef.current &&
        !popRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
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
          <div className="waffle-popup" ref={popRef}>
            <div className="waffle-container">
              <div className="waffle-menu">
                {waffleData.map((item, index) => (
                  <div key={index} className="menu-container">
                    <div className="menu-header">
                      <a
                        href={item.link}
                        target={item.openIn}
                        style={{
                          textDecoration: "none",
                          cursor: "default",
                          display: "inline-block",
                        }}
                      >
                        <img src={item.menuIcon} className="menu-icon" />
                      </a>
                      <a
                        href={item.link}
                        target={item.openIn}
                        style={{ textDecoration: "none", cursor: "default" }}
                      >
                        <span className="menu-title">{item.menuTitle}</span>
                      </a>
                    </div>

                    <div className="sub-menu-container">
                      {item.subMenu.map((sub, idx) => (
                        <div className="sub-menu-item" key={idx}>
                          <a
                            href={sub.link}
                            target={sub.openIn}
                            style={{
                              textDecoration: "none",
                              cursor: "default",
                              display: "inline-block",
                            }}
                          >
                            <img src={sub.iconUrl} className="sub-menu-icon" />
                          </a>{" "}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropWorksWaffeMenu;
