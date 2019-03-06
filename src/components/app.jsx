import React, { Component } from 'react';
import Layout from '../hoc/layout/layout';
import {Content} from '../components/content/content';

class App extends Component {
  render() {
    return (
      <Layout>
          <Content />
      </Layout>
    );
  }
}

export default App;
