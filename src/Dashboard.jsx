import React from "react";
import "./Dashboard.css";
import Trend from "./Trend.jsx";
import { Returns } from './components/Returns'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Trend />  
      <Returns /> 
    </div>
  );
};

export default Dashboard;


