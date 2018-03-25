import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
        {
          !this.props.data.loading ? this.props.data.hello : 'Loading...'
        }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { blogs: state };
}
const query = gql`
{
  hello
}
`;

export default compose(
  graphql(query),
  connect(mapStateToProps),
)(App);
