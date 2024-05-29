import React from 'react'
import CustomNav from '../components/CustomNav'
import HomeSliders from '../components/home/HomeSliders'
import WatchTypes from '../components/home/watchTypes'
import Brands from '../components/home/Brands'


// import CustomNav from '../components/CustomNav'

const Home = () => {
  return (
    <div>
      <CustomNav />
      {/* <!--? slider Area Start --> */}
      <HomeSliders />
      {/* <!-- slider Area End--> */}
      {/*  */}
      {/* Watch types */}
      <WatchTypes />
      {/* <!--? Gallery Area Start --> */}
      <Brands/>
      {/* <!-- Gallery Area End --> */}
    </div>
  )
}

export default Home