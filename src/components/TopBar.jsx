import { Link, useLocation } from 'react-router-dom';
import '../styles/TopBar.css';

const TopBar = ({ onToggleSidebar, sidebarOpen, isMobile }) => {
  const location = useLocation();

  const getPageTitle = () => {
    const titles = {
      "/": "Home",
      "/analytics": "Analytics",
      "/projects": "Projects",
      "/team": "Team",
      "/messages": "Messages",
      "/settings": "Settings",
    };
    return titles[location.pathname] || "Dashboard";
  };

  return (
    <div className="top-bar">
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i
            className={`bi ${sidebarOpen && !isMobile ? "bi-chevron-left" : "bi-list"}`}
          ></i>
        </button>
        <h4 className="mb-0">{getPageTitle()}</h4>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-primary btn-sm me-2">
            <i className="bi bi-bell"></i>
          </button>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-person-circle"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Logout clicked");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar