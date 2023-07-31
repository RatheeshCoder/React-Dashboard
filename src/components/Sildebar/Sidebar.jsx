import React from "react";
import Logo from '../../imgs/logo.png'
import './Sidebar.css'

import ExitToAppIcon from '@mui/icons-material/ExitToApp';



import { SidebarData } from "../../Data/Data";
import { useState } from "react";

import { Link } from "react-router-dom";
  

const Sidebar = () =>{

    const [selected, setSelected] = useState(0)
    return(
        <div className="Sidebar" >
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>

            {/* menu */}

            <div className="menu">

                {SidebarData.map((item,index) =>{
                    return(
                        <div className={selected === index?'menuItem active':'menuItem'}
                        key={index}
                        onClick={()=>setSelected(index )} >
                            <Link to={item.path}>
                            <item.icon />

                            <span>
                                {item.heading}
                            </span>
                            </Link>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <ExitToAppIcon/>
                </div>

                
            </div>
        </div>

    )
}

export default Sidebar;