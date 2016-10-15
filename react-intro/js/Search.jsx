const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show, index) => (
        <ShowCard {...show} key={index} id={index} />
      ))}
    </div>
  </div>
)

module.exports = Search
