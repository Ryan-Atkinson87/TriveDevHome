import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Team = () => {
  return (
    <div className="content-area">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Team Management</h2>
        <button className="btn btn-primary">
          <i className="bi bi-person-plus me-2"></i>Add Team Member
        </button>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <div
                className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-person-fill text-white fs-4"></i>
              </div>
              <h5 className="card-title">John Doe</h5>
              <p className="card-text text-muted">Project Manager</p>
              <span className="badge bg-success">Active</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <div
                className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-person-fill text-white fs-4"></i>
              </div>
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text text-muted">Developer</p>
              <span className="badge bg-success">Active</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <div
                className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-person-fill text-white fs-4"></i>
              </div>
              <h5 className="card-title">Mike Johnson</h5>
              <p className="card-text text-muted">Designer</p>
              <span className="badge bg-warning">Away</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team