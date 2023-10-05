import React from 'react'
import SectionHeader from './section-header'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
   <section>
    <SectionHeader> Projects </SectionHeader>
    <div>
      {
        projectsData.map((project, index)=> (
            <Project key={index} />
        ))
      }
    </div>
   </section>
  )
}

function Project() {
 return <div></div>
}