import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404! Page Not Found <Link to="/">Back to the Game</Link>
  </div>
);

export default NotFoundPage;