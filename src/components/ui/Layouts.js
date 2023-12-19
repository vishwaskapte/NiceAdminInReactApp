import React, { Component } from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default class Layouts extends Component {
  render() {
    return (
      <div>
        <Header />
         <Aside />
        {/*<Outlet />
        <Footer /> */}
      </div>

    )
  }
}
