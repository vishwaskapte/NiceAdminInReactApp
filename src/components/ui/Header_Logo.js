import React, { Component } from 'react'

export default class Header_Logo extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-between">
        <a href="index" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt />
          <span className="d-none d-lg-block">NiceAdmin</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" />
      </div>
    )
  }
}
