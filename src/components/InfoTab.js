import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Dashboard from "./Dashboard2";
import SiteInfo from "./SiteInfo";
import ReadabilityScore from "./ReadabilityScore";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "../css/infoTab.css";
export default function InfoTab() {
  return (
    <div>
      <SiteInfo />

      <div className="infotab">
        <Tabs>
          <TabList>
            <Tab>
              <AssignmentIcon className="break-line" />
              Analysis<div className="dash-below"></div>
            </Tab>
            <Tab>
              <MenuBookIcon className="break-line" />
              Readability Score<div className="dash-below"></div>
            </Tab>
          </TabList>

          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <ReadabilityScore />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
