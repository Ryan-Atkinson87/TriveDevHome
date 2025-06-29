import { Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({
  children,
  sidebarOpen,
  isMobile,
  onToggleSidebar,
  onCloseSidebar,
}) => {
  return (
    <div className="app">
      {/* Overlay for mobile */}
      <div
        className={`overlay ${isMobile && sidebarOpen ? "show" : ""}`}
        onClick={onCloseSidebar}
      ></div>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        isMobile={isMobile}
        onClose={onCloseSidebar}
      />

      {/* Main Content */}
      <div
        className={`main-content ${!sidebarOpen || isMobile ? "expanded" : ""}`}
      >
        <TopBar
          onToggleSidebar={onToggleSidebar}
          sidebarOpen={sidebarOpen}
          isMobile={isMobile}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
