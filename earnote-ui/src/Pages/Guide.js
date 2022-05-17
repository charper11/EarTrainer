import { Link } from 'react-router-dom';
import './Guide.css';

const Guide = () => {

    return (
        <div className="guide">
          <h2>Guide</h2>
          <h3>The Circle of Fifths</h3>
          <h3>Scale</h3>
          <h3>Triads</h3>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default Guide;