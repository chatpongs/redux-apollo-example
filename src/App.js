import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  render() {
    return (
        <div>
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
          <div>
            {
              !this.props.data.loading ? this.props.data.hello : 'Loading...'
            }
          </div>
          <div>
            <button onClick={() => {
              this.props.mutate().then(res => console.log(res.data));
            }}>Say Hello</button>
          </div>
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
const mutation = gql`
mutation {
  sayHello
}
`

export default compose(
  graphql(query),
  graphql(mutation),
  connect(mapStateToProps),
)(App);
