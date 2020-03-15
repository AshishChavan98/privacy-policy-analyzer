import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "../css/react-tabs.css";
//component imports

import Collection from "./DashboardComponents/Collection";
import Cookies from "./DashboardComponents/Cookies";
import DataRetention from "./DashboardComponents/DataRetention";
import Security from "./DashboardComponents/Security";
import SpecificAudiences from "./DashboardComponents/SpecificAudiences";
import ThirdParty from "./DashboardComponents/ThirdParty";
import YourChoices from "./DashboardComponents/YourChoices";
import PolicyChange from "./DashboardComponents/PolicyChange";

export default function Dashboard() {
  return (
    <div>
      <div className="container-fluid content-part">
        <Tabs>
          <div className="row">
            <div className="col-sm-3">
              <div className="left-part">
                <div className="sidebar">
                  <TabList>
                    <Tab>
                      <div>
                        <span className="favcon collection"></span> Collection
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <span className="favcon sharing"></span>3rd party
                        Sharing
                      </div>
                    </Tab>
                    <Tab>
                      <div className="active">
                        <span className="favcon choice"></span>Your Choices
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <span className="favcon security"></span>Security
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <span className="favcon retention"></span>Data Retention
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <span className="favcon audience"></span>Specific
                        Audiences
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <span className="favcon cookie"></span>Cookies
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <span className="favcon policy"></span>Policy Change
                      </div>
                    </Tab>
                  </TabList>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="right-part">
                <TabPanel>
                  <Collection />
                </TabPanel>
                <TabPanel>
                  <ThirdParty />
                </TabPanel>
                <TabPanel>
                  <YourChoices />
                </TabPanel>
                <TabPanel>
                  <Security />
                </TabPanel>
                <TabPanel>
                  <DataRetention />
                </TabPanel>
                <TabPanel>
                  <SpecificAudiences />
                </TabPanel>
                <TabPanel>
                  <Cookies />
                </TabPanel>
                <TabPanel>
                  <PolicyChange />
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
