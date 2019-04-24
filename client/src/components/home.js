import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='container d-flex justify-content-center'>
    <Link to='/quizzes' className='btn btn-large btn-success mx-3 mt-4'>
      Quizzes
    </Link>
    <Link to='/configure' className='btn btn-large btn-primary mx-3 mt-4'>
      Configure
    </Link>
  </div>
);

export default Home;
