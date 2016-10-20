const React = require('react')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const Details = require('./Details')
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux
const ReactRouter = require('react-router')
const { Router, Route, browserHistory, IndexRoute } = ReactRouter

const myRoutes = (props) => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
}

App.Routes = myRoutes

module.exports = App
