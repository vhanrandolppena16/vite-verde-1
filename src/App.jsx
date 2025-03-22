/*App.jsx*/

import React, { useState } from "react";
import Header from "../Front-End/Header";
import Sidebar from "../Front-End/Sidebar";
import HydroponicBackground from "../Content/Background"; // Import the new background component

function App() {
    const [navigationText, setNavigationText] = useState("Dashboard"); // Default text

    return (
        <div className="app-container">
            <Header navigationText={navigationText} />
            <div className="main-content">
                <Sidebar setNavigationText={setNavigationText} />
                <HydroponicBackground />
            </div>
        </div>
    );
}

export default App;
