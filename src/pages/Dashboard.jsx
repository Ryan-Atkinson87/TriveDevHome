import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Dashboard = () => {
  return (
    <div className="content-area">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-people fs-1 text-primary mb-3"></i>
              <h5 className="card-title">Users</h5>
              <h2 className="text-primary">1,234</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-graph-up fs-1 text-success mb-3"></i>
              <h5 className="card-title">Revenue</h5>
              <h2 className="text-success">$45,678</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-cart fs-1 text-warning mb-3"></i>
              <h5 className="card-title">Orders</h5>
              <h2 className="text-warning">892</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-star fs-1 text-info mb-3"></i>
              <h5 className="card-title">Reviews</h5>
              <h2 className="text-info">4.8</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <div className="d-flex gap-2 flex-wrap">
                <Link to="/analytics" className="btn btn-primary">
                  <i className="bi bi-bar-chart me-2"></i>View Analytics
                </Link>
                <Link to="/projects" className="btn btn-success">
                  <i className="bi bi-plus-circle me-2"></i>New Project
                </Link>
                <Link to="/team" className="btn btn-info">
                  <i className="bi bi-people me-2"></i>Manage Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard