const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = () => (
  <div>
    <MyTitle title='Props are great' color='rebeccapurple' />
    <MyTitle title='I am so good at this game!' color='mediumaquamarine' />
    <MyTitle title='King Kong aint got anything on me!' color='peru' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
