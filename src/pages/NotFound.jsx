import { Link,useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="content-area">
      <div className="error-page">
        <div>
          <h1 className="display-1 text-muted">404</h1>
          <h2>Page Not Found</h2>
          <p className="lead">The page you're looking for doesn't exist.</p>
          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              <i className="bi bi-house me-2"></i>Go Home
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate(-1)}
            >
              <i className="bi bi-arrow-left me-2"></i>Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound