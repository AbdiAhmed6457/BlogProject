import React from 'react'
import { Sidebar } from 'flowbite-react'
import {HiUser, HiArrowSmRight} from 'react-icons/hi'

export default function DashSidebar() {
  return (
   <Sidebar>
     <Sidebar.Items>
        <Sidebar.Group>
            <Sidebar.Item active icon={HiUser} label={"User"} labelColor = 'dark'>
                Profile
            </Sidebar.Item>

            <Sidebar.Item active icon={HiArrowSmRight} label={"User"} >
                Sign Out
            </Sidebar.Item>
        </Sidebar.Group>
     </Sidebar.Items>
   </Sidebar>
  )
}
