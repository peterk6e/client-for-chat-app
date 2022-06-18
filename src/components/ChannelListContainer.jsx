import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import OfficeIcon from "../assets/office.png";
import LogoutIcon from "../assets/logout.png";

const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={OfficeIcon} alt="office" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="logout" width="30" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Pager</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
      </div>
    </>
  );
};

export default ChannelListContainer;
