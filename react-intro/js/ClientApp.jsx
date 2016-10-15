const ReactDOM = require('react-dom')
const React = require('react')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
