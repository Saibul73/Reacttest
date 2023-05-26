import React from "react";
import {
  Academics,
  Alumni,
  FrontOffice,
  StudentInformation,
  FeesCollection,
  OnlineCourse,
  MultiBranch,
  GmeetLIve,
  ZoomLive,
  BehaviourRecords,
  Income,
  Expenses,
  Examinations,
  Attendance,
  OnlineExaminations,
  FrontCms,
  Reports,
  SystemSetting,
} from "../menuItems";
import "./sidebar.scss";
import logo from "../../assets/images/open-book.png";
import { AiFillBank } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiAccountPinBoxLine} from "react-icons/ri";
import {CiMoneyBill} from "react-icons/ci"
import {BsFillFileEarmarkSlidesFill} from "react-icons/bs"
import {AiOutlineBranches} from "react-icons/ai"
import {SiGooglemeet} from "react-icons/si"
import {MdOutlineCollectionsBookmark} from "react-icons/md"
import {BiMoneyWithdraw} from "react-icons/bi"
import {AiFillCreditCard} from "react-icons/ai"
import {AiFillSchedule} from "react-icons/ai"
import {RiFilePaper2Line} from "react-icons/ri"
import {HiOutlineStatusOnline} from "react-icons/hi"
import {HiOutlineUserGroup} from "react-icons/hi"
import {HiOutlineAcademicCap} from "react-icons/hi"
import {BsPostage} from "react-icons/bs"
import {TbReportAnalytics} from "react-icons/tb"
import {FiSettings} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
import {FaCalendarAlt} from "react-icons/fa"
import {BsJournalCheck} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>
          SMART <br></br>SCHOOL
        </h2>
      </div>
      <div className="name"><p>Mother Sitara Academy</p></div>
      <div className="headicon">
         <AiOutlineSearch/>
         <FaCalendarAlt/>
         <BsJournalCheck/>
         <BsWhatsapp/>
      </div>
      <div className="menu">
        <div>
          <AiFillBank size={22} />
          <FrontOffice />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <RiAccountPinBoxLine size={22}/>
          <StudentInformation />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <CiMoneyBill size={22}/>
          <FeesCollection />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
         <BsFillFileEarmarkSlidesFill size={22}/>
          <OnlineCourse />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <AiOutlineBranches size={22}/>
          <MultiBranch />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <SiGooglemeet size={22}/>
          <GmeetLIve />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
        <SiGooglemeet size={22}/>
          <ZoomLive />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <MdOutlineCollectionsBookmark size={22}/>
          <BehaviourRecords />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <BiMoneyWithdraw size={22}/>
          <Income />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <AiFillCreditCard size={22}/>
          <Expenses />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <RiFilePaper2Line size={22}/>
          <Examinations />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <AiFillSchedule size={22}/>
          <Attendance />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
         <HiOutlineStatusOnline size={22}/>
          <OnlineExaminations />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
         <HiOutlineAcademicCap size={22}/>
          <Academics />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
          <BsPostage size={22}/>
          <FrontCms />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
         <HiOutlineUserGroup size={22} color="white"/>
          <Alumni />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
         <TbReportAnalytics size={22}/>
          <Reports />
          <RiArrowDropDownLine size={28} />
        </div>
        <div>
         <FiSettings size={22}/>
          <SystemSetting />
          <RiArrowDropDownLine size={28} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
