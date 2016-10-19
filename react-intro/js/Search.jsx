const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const Store = require('./Store')
const { connector } = Store

class Search extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show, index) => (
              <ShowCard {...show} key={index} id={index} />
            ))}
        </div>
      </div>
    )
  }
}

Search.PropTypes = {
  searchTerm: React.PropTypes.string,
  route: React.PropTypes.shape({
    shows: React.PropTypes.arrayOf(React.PropTypes.object)
  })
}

module.exports = connector(Search)
