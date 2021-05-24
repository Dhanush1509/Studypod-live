import React from 'react'
import Sidebar from '../components/layout/SideBar'
import Tab from '../components/layout/Tab'
import Search from "../components/layout/Search";
import TableHeader from "../components/layout/TableHeader"
const Home = () => {
    return (
        <>
        <Sidebar/>
        <Tab/>
        <Search/>
 <TableHeader/>
        </>
    )
}

export default Home
