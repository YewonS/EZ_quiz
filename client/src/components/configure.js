import React, { Component } from 'react';

import Categories from './categories';
import Questions from './questions';

class Configure extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Categories />
          </div>
          <div className='col-8'>
            <Questions />
          </div>
        </div>
      </div>
    );
  }
}

export default Configure;
