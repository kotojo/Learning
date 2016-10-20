const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const { match } = ReactRouter
const App = require('./ClientApp')

match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry require.ensure error', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})
