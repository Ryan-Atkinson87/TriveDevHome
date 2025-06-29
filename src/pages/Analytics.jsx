import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Analytics = () => {
  return (
    <div className="content-area">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Performance Metrics</h5>
              <p className="card-text">
                Detailed analytics and performance data will be displayed here.
              </p>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Sales Performance</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">User Engagement</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: "60%" }}
                    >
                      60%
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Customer Satisfaction</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "45%" }}
                    >
                      45%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics