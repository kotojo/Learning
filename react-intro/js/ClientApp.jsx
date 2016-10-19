const ReactDOM = require('react-dom')
const React = require('react')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const Details = require('./Details')
const data = require('../public/data')
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter


class App extends React.Component {
  constructor (props) {
    super(props)

    this.assignShow = this.assignShow.bind(this)
  }

  assignShow (nextState, replace) {
    const show = data.shows[nextState.params.id]
    if (!show) {
      return replace('/')
    }
    Object.assign(nextState.params, show)
    return nextState
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={data.shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'))
