import React from 'react'
import Header_Logo from './Header_Logo'
import Header_Search_Bar from './Header_Search_Bar'

export default function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center" >
      <Header_Logo />
      <Header_Search_Bar />
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-bell" />
                  <span className="badge bg-primary badge-number">4</span>
                </a>{/* End Notification Icon */}
                
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning" />
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-x-circle text-danger" />
                    <div>
                      <h4>Atque rerum nesciunt</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-check-circle text-success" />
                    <div>
                      <h4>Sit rerum fuga</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-info-circle text-primary" />
                    <div>
                      <h4>Dicta reprehenderit</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>
                </ul>{/* End Notification Dropdown Items */}
            </li>
        </ul>
      </nav>
      
    </header > 
  )
}
