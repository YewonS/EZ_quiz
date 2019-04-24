import React, { Component } from 'react';
import axios from 'axios';
import Category from './category';

class Categories extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/categories').then(response => {
      this.setState({ categories: response.data });
    });
  }

  render() {
    return (
      <div>
        <h4>Categories</h4>
        <ul className='list-group'>
          {this.state.categories.map(category => (
            <Category key={category.id} name={category.category_name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
