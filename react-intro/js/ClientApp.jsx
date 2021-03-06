const React = require('react')
const Layout = require('./Layout')
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux
const ReactRouter = require('react-router')
const { Router, browserHistory } = ReactRouter

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router routes={rootRoute} history={browserHistory} />
      </Provider>
    )
  }
}

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
