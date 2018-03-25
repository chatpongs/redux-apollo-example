import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const client = new ApolloClient({
  uri: "https://nxzm8mn7k7.lp.gql.zone/graphql"
});

const initialState = [
  {
    title: 'My first blog',
    author: 'Chatpong Suteesuksatporn'
  }
]

const reducer = (state = initialState, action) => {
  return state;
}
const store = createStore(reducer);

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>,
  document.getElementById('root')
);
