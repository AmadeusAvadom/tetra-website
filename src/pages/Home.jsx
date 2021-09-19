import React from 'react'
import { Banner } from '../components/Banner'
import Footer from '../components/Footer'
import Four from '../components/Four'
import { One } from '../components/One'
import Three from '../components/Three'
import { Two } from '../components/Two'
import "../styles/main.css"
export const Home = () => {
    return (
        <div>
            <Banner/>
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Footer/>
        </div>
    )
}
