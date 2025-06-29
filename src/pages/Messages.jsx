import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Messages = () => {
  return (
    <div className="content-area">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Messages</h5>
              <p className="card-text">
                View and manage your messages and notifications.
              </p>
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                You have 3 unread messages
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Message Thread</h6>
            </div>
            <div
              className="card-body"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <div className="d-flex mb-3">
                <div
                  className="bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                  }}
                >
                  <i className="bi bi-person-fill text-white"></i>
                </div>
                <div className="flex-grow-1">
                  <div className="bg-light p-3 rounded">
                    <strong>Team Lead:</strong> Great work on the latest project
                    milestone!
                  </div>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-end">
                <div className="flex-grow-1 text-end">
                  <div className="bg-primary text-white p-3 rounded">
                    Thank you! Ready for the next phase.
                  </div>
                  <small className="text-muted">1 hour ago</small>
                </div>
                <div
                  className="bg-secondary rounded-circle ms-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                  }}
                >
                  <i className="bi bi-person-fill text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages