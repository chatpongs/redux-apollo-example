import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <div>
        {
          this.props.blogs.map((blog, index) =>
            <div key={index}>
              <div>Title: {blog.title}</div>
              <div>Author: {blog.author}</div>
            </div>
          )
        }
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { blogs: state };
}

export default connect(mapStateToProps)(App);
