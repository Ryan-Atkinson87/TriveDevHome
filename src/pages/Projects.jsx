import { Link,useNavigate } from 'react-router-dom';
import '../styles/Layout.css';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="content-area">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Projects</h2>
        <button
          className="btn btn-primary"
          onClick={() => alert("New project functionality would go here")}
        >
          <i className="bi bi-plus-circle me-2"></i>New Project
        </button>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Website Redesign</h5>
              <p className="card-text">
                Complete overhaul of the company website with modern design
                principles and improved user experience.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge bg-primary">In Progress</span>
                <button className="btn btn-sm btn-outline-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mobile App</h5>
              <p className="card-text">
                Development of iOS and Android mobile applications with
                cross-platform functionality.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge bg-success">Completed</span>
                <button className="btn btn-sm btn-outline-success">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">API Integration</h5>
              <p className="card-text">
                Integration with third-party APIs for enhanced functionality and
                data synchronization.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge bg-warning">Planning</span>
                <button className="btn btn-sm btn-outline-warning">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects