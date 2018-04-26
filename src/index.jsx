import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

import App from './components/App';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';

import './index.less';

class Index extends React.Component {
  render() {
    return (
      <div className="body">
        <Link to="/s1" style={{ top: '40%','margin-left': '50%',left: '-60px',position: 'absolute' }}>》》》点我拍照《《《</Link>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="s1" component={Stage1} />
      <Route path="s2/:screenshotId" component={Stage2} />
    </Route>
  </Router>
, document.getElementById('example'));
