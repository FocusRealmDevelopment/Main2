// import React from "react";
import styles from "./sidepanel.module.css";
import "../../styles/global.css";
import SideIconContainer from "../sideIconConatiner/SideIconContainer";
import { MdHomeFilled } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { FaBrain } from 'react-icons/fa';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { IoMdHelpCircle, IoMdLogOut } from "react-icons/io";
// import { logoutAdmin } from "../../actions/adminAction";
// import { useDispatch, useSelector } from "react-redux"
// import { useAlert } from "react-alert";

// import { useNavigate , useLocation} from "react-router-dom";


const SidePanel = () => {

  // const navigate=useNavigate();
  // const dispatch=useDispatch()
  // const alert = useAlert();

  // const handleLogout = () => {
  //   dispatch(logoutAdmin());
  //   alert.success("Logout Successfully");
  // };

  return (
    <div className={`${styles.body}`} style={{ backgroundColor: "white" }}>
      <div
        className={`${styles.pictureContainer}`}
        style={{ backgroundColor: "white" }}
      >
        <div className={`${styles.pictureDiv}`}></div>
      </div>
      <div
        className={`${styles.studentDetailsContainer} mt-14 text-center`}
        style={{ backgroundColor: "white" }}
      >
        <h1 className={`text-2xl poppins-semibold mb-2`}>Patrick Dash R</h1>
        <div
          className={`w-2/5 mx-auto p-2 poppins-regular rounded-3xl mb-2 text-xs bg-[#b5e5ff]`}
        >
          8 Grade
        </div>
        <div
          className={`poppins-regular text-[12px] text-[#666666] ${styles.schoolName}`}
        >
          Horizon Public School, Manali
        </div>
      </div>
      <div
        className={`${styles.iconContainer} flex flex-col gap-[10x] items-center w-full mt-10`}
      >
        <SideIconContainer Icon={MdHomeFilled} iconName={"Home"} path={"/"} />
        <SideIconContainer
          Icon={RiTaskFill}
          iconName={"Tasks"}
          path={"/task"}
        />
        <SideIconContainer
          Icon={FaRegCalendar}
          iconName={"Calendar"}
          path={"/calendar"}
        />
        <SideIconContainer
          Icon={FaBrain}
          iconName={"Focus Session"}
          path={"/focusSession"}
        />
        <SideIconContainer
          Icon={MdAssignment}
          iconName={"Forum"}
          path={"/forum"}
        />
        <SideIconContainer
          Icon={AutoStoriesIcon}
          iconName={"Homeworks"}
          path={"/homework"}
        />
        <SideIconContainer
          Icon={IoMdHelpCircle}
          iconName={"Help"}
          path={"/help"}
        />
        {/* <SideIconContainer
          Icon={IoMdLogOut}
          iconName={"Logout"}
          onClick={handleLogout}
        /> */}
      </div>
    </div>
  );
};

export default SidePanel;
