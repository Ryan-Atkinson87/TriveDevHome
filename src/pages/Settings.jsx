import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Settings = () => {
  return (
    <div className="content-area">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Application Settings</h5>
              <p className="card-text">
                Configure your application preferences and account settings.
              </p>

              <div className="mb-4">
                <h6>Notifications</h6>
                <div className="form-check form-switch mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notifications"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="notifications">
                    Enable Push Notifications
                  </label>
                </div>
                <div className="form-check form-switch mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emailNotifications"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="emailNotifications"
                  >
                    Email Notifications
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h6>Appearance</h6>
                <div className="form-check form-switch mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkMode"
                  />
                  <label className="form-check-label" htmlFor="darkMode">
                    Dark Mode
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h6>Language</h6>
                <select className="form-select" style={{ maxWidth: "200px" }}>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <button className="btn btn-primary me-2">Save Changes</button>
              <button className="btn btn-outline-secondary">
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 export default Settings