"use client"; 
import React from 'react'
import SectionHeading from "./section-header";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import{ experiencesData } from "@/lib/data";

export default function Experience() {
  return <section id="experience" >
    <SectionHeading> My Experience</SectionHeading>
    <VerticalTimeline>   
        {experiencesData.map((item, index) => (  
        <React.Fragment key={index}>
          <VerticalTimelineElement>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-base">{item.description}</p>
            <p className="text-sm">{item.date}</p>
          </VerticalTimelineElement>
        </React.Fragment>
        ))
        }
    </VerticalTimeline>
  </section>
}
