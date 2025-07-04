import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="content-area">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Projects</h2>
        {/*         <button
          className="btn btn-primary"
          onClick={() => alert("New project functionality would go here")}
        >
          <i className="bi bi-plus-circle me-2"></i>New Project
        </button> */}
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Digital Dashboard</h5>
              <p className="card-text">
                Developing a factory digital dashboard to monitor part flow and
                identify bottlenecks across production lines.
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
              <h5 className="card-title">TriveDev Web App</h5>
              <p className="card-text">
                A web app created to showcase the range of skills I've developed
                throughout my software development journey.
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
              <h5 className="card-title">Red Robot</h5>
              <p className="card-text">
                A wheeled robot powered by a Raspberry Pi, designed to
                demonstrate robotics concepts and Python programming.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge bg-primary">Planning</span>
                <button className="btn btn-sm btn-outline-primary">
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

export default Projects;
