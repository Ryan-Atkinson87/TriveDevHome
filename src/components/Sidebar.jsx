import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, isMobile, onClose }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: "bi-speedometer2" },
    { path: "/analytics", label: "Analytics", icon: "bi-bar-chart" },
    { path: "/projects", label: "Projects", icon: "bi-folder" },
    { path: "/team", label: "Team", icon: "bi-people" },
    { path: "/messages", label: "Messages", icon: "bi-chat-dots" },
    { path: "/settings", label: "Settings", icon: "bi-gear" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={`sidebar ${
        !isOpen || (isMobile && !isOpen) ? "collapsed" : ""
      } ${isMobile && isOpen ? "show" : ""}`}
    >
      <div className="sidebar-header">
        <Link to="/" className="sidebar-brand">
          <i className="bi bi-lightning-charge me-2"></i>
          ViteApp
        </Link>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              onClick={onClose}
            >
              <i className={item.icon}></i>
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar