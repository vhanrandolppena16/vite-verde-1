import React, { useState } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DatasetIcon from "@mui/icons-material/Dataset";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./SidebarProto.css";

const Sidebar = ({ setNavigationText }) => {
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { text: "Dashboard", icon: <DashboardIcon /> },
        { text: "Analysis", icon: <AssessmentIcon /> },
        { text: "Dataset", icon: <DatasetIcon /> },
        { text: "Control", icon: <SettingsIcon /> },
        { text: "Logs", icon: <SettingsIcon /> },
        { text: "Account", icon: <AccountCircleIcon /> },
        { text: "About", icon: <InfoIcon /> },
        { text: "Live Stream", icon: <LiveTvIcon /> },
        { text: "Log Out", icon: <LogoutIcon /> }
    ];

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-header">
                <IconButton className="toggle-button" onClick={() => setCollapsed(!collapsed)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>

            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => setNavigationText(item.text)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            {!collapsed && <ListItemText primary={item.text} />}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Sidebar;
