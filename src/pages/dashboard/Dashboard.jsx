import React from "react";
import "./dashboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { Box } from "@mui/material";
import StatBox from "../../components/StatBox";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { BarChart } from "../../components/BarChart";
import  halfpie from '../../assets/images/download.png'

function Dashboard() {
  const colors = '#db587f';
  return (
    <div className="dashboard">
      <div className="container">
        <div className="left">
          {/* sidebar */}
          <Sidebar />
        </div>
        <div className="right">
          <div className="top">
            {/* se1 */}
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="140px"
              gap="20px"
            >
              {/* ROW 1 */}
              <Box
                gridColumn="span 3"
                backgroundColor="transparent"
                color="#db587f"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="7/73"
                  subtitle="Fees Pending"
                  progress="0.75"
                  icon={
                    <CurrencyExchangeOutlinedIcon
                      sx={{ color: "#db587f", fontSize: "26px" }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor="transparent"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="3/11"
                  subtitle="Converted Leads"
                  progress="0.50"
                  icon={
                    <PointOfSaleIcon
                      sx={{ color: "#db587f", fontSize: "26px" }}
                    />
                  }
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor='transparent'
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="0/7"
                  subtitle="Staff Present"
                  progress="0.30"
                  icon={<PersonAddIcon sx={{ color:'#db587f', fontSize: "26px" }} />}
                />
              </Box>
              <Box
                gridColumn="span 3"
                backgroundColor='transparent'
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title="17/51"
                  subtitle="Student Present"
                  progress="0.80"
                  icon={<TrafficIcon sx={{ color: '#db587f', fontSize: "26px" }} />}
                />
              </Box>
            </Box>
          </div>
          <div className="bottom">{/* se2 */}
              <div>
                <BarChart/>
                </div>
                <div>
                  <p>Income May 2023</p>
                  <img src={halfpie} alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
