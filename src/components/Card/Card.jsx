import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {motion, AnimateSharedLayout } from "framer-motion";

import Chart from 'react-apexcharts'

import CloseIcon from '@mui/icons-material/Close';
import "./Card.css"
const Card = ( props)=>{


    const[expanded,setExpanded]=useState(false)


    return(
       <AnimateSharedLayout>
        {
            expanded?(
                 <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/> 
            ):
            <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
        }
       </AnimateSharedLayout>

    )
}



// compact card 
function CompactCard({param,setExpanded}){
    const Png=param.png;
    return(
        <motion.div className="CompactCard"
        style={{
            background:param.color.backGround,
            boxShadow:param.color.boxShadow
        }}
        layoutId="expandedCard"
        onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}'%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}


// expanded card
function ExpandedCard ({param,setExpanded}) {

    const data={
        options:{
            chart:{
                type:"area",
                height:"auto"
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35,
            },
            fill:{
                color:["#fff"],
                type:"gradient",
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                color:["white"],
            },
            tooltip:{
                x:{
                    format:'dd MMM yyyy HH:mm',
                },
            },
            grid:{
                show:true,
            },
            xaxis:{
                type:"datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                  ],
            },

        },
    };
    return(
        <motion.div className="ExpandedCard"
        style={{
            background:param.color.backGround,
            boxShadow:param.color.boxShadow
        }}
        layoutId="expandedCard"
        >
            <div style={{
                    alignSelf:'flex-end',cursor:'pointer',color:'white'
                }} className="close">
                <CloseIcon onClick={setExpanded} />
            </div>
            <span className="title">{param.title}</span>
            <div className="chartContainer">
               < Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span className="hour">Last 24 hours</span>

        </motion.div>
    )
}

export default Card