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

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toogleDrawer = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      {/* <CssBaseline /> */}
      <div className={classes.toolbar}>
        <IconButton onClick={toogleDrawer} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      </div>
        <TabList>
         
            <Tab>
          
              <div className="block-ruby">
                  <span className="favcon collection"></span>
                Collection
              </div>
            </Tab>

          <Tab>
            <div className="block-ruby">
              <span className="favcon sharing"></span>3rd party Sharing
            </div>
          </Tab>
          <Tab>
            <div className="block-ruby">
              <span className="favcon choice"></span>Purpose Sent
            </div>
          </Tab>
          <Tab>
            <div className="block-ruby">
              <span className="favcon security"></span>Security
            </div>
          </Tab>
          <Tab>
            <div className="block-ruby">
              <span className="favcon retention"></span>Contact Sent
            </div>
          </Tab>
          <Tab>
            <div className="block-ruby">
              <span className="favcon audience"></span>Way of collection
            </div>
          </Tab>
          <Tab>
            <div className="block-ruby">
              <span className="favcon cookie"></span>Cookies
            </div>
          </Tab>
          <Tab>
            <div className="block-ruby">
              <span className="favcon policy"></span>Others
            </div>
          </Tab>
        </TabList>
    </div>
  );
  return (
    <div>
      <div className="container-fluid content-part">
        <Tabs>
          <div className="row">
            <div className="col-sm-3 col-xs-3">
              <div className="left-part">
                <div className="sidebar">
                  <Hidden smUp implementation="css">
                    <Drawer
                      variant="permanent"
                      className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                      })}
                      classes={{
                        paper: clsx({
                          [classes.drawerOpen]: open,
                          [classes.drawerClose]: !open
                        })
                      }}
                    >
                      {drawer}
                    </Drawer>
                  </Hidden>
                  <Hidden xsDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper
                      }}
                      variant="permanent"
                      open
                    >
                      {drawer}
                    </Drawer>
                  </Hidden>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-xs-9">
              <div className="right-part">
                <TabPanel>
                  <Collection label={"collectionway_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <ThirdParty /> */}
                  <Collection label={"thirdparty_infoshare_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <YourChoices /> */}
                  <Collection label={"purpose_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <Security /> */}
                  <Collection label={"security_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <DataRetention /> */}
                  <Collection label={"contact_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <SpecificAudiences /> */}
                  <Collection label={"collectionway_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <Cookies /> */}
                  <Collection label={"cookies_sent"} />
                </TabPanel>
                <TabPanel>
                  {/* <PolicyChange /> */}
                  <Collection label={"others"} />
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginLeft:"0px",
  },

  hide: {
    display: "none"
  },
  drawer: {
    height:'600px',
    position:'relative',
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    color:'#fff',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerOpen: {
    position:'relative',
    backgroundColor:'#7659ff',
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaper: {
    width: drawerWidth,
    position:'relative',
    backgroundColor:'transparent',
    color:'inherit',
    borderRight:'inherit'
  },
  drawerClose: {
    position:'relative',
    backgroundColor:'#7659ff',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
