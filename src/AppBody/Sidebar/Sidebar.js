import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";
import {
  LocalHospitalOutlined,
  EmojiFlagsOutlined,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        title="Sujan"
      />
      <SidebarRow title="Covid-19 Info Center" Icon={LocalHospitalOutlined} />
      <SidebarRow title="Pages" Icon={EmojiFlagsOutlined} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow title="Messenger" Icon={Chat} />
      <SidebarRow title="Market Place" Icon={Storefront} />
      <SidebarRow title="Videos" Icon={VideoLibrary} />
      <SidebarRow title="More" Icon={ExpandMoreOutlined} />
    </div>
  );
}
