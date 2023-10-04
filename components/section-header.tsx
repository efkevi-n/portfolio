import React, { Children } from 'react'

type SectionHeaderprops = {
  children: React.ReactNode;
}


export default function SectionHeader({
  children }: SectionHeaderprops ) {
  return <h2 className=" text-3xl font-medium capitalize mb-8">
   {children}
   </h2>
  
}
