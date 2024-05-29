import React from 'react'
import CustomNav from '../components/CustomNav'
import HomeSliders from '../components/home/HomeSliders'


// import CustomNav from '../components/CustomNav'

const Home = () => {
  return (
    <div>
      <CustomNav />
      {/* <!--? slider Area Start --> */}
      <HomeSliders />
      {/* <!-- slider Area End--> */}


    </div>
  )
}

export default Home