import React from 'react'
import './dashboard.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Dashboard() {
  return (
    <div className='dashboard'>
            {/* <div className="navbar">
                <Navbar/>
            </div> */}
        <div className="container">
            <div className="left">
                {/* sidebar */}
                <Sidebar/>
            </div>
            <div className="right">
                <div className="top">
                    {/* se1 */}
                    <h1>dhfdsf</h1>
                </div>
                <div className="bottom">
                    {/* se2 */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard