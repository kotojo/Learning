const ReactDOM = require('react-dom')
const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
