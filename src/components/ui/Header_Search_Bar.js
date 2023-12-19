import React from 'react'

export default function Header_Search_Bar() {
  return (
      <div className="search-bar">
          <div className="search-form d-flex align-items-center" >
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i className="bi bi-search" /></button>
          </div>
      </div>
  )
}
