import React, { Component, Suspense } from 'react';
import Layout from '../hoc/layout/layout';
import {Content} from '../components/content/content';

class App extends Component {
  render() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <Content />
            </Layout>
        </Suspense>
    );
  }
}

export default App;
