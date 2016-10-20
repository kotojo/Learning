webpackJsonp([2],{

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ShowCard = __webpack_require__(263);
	var Header = __webpack_require__(264);
	var Store = __webpack_require__(238);
	var connector = Store.connector;

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search() {
	    _classCallCheck(this, Search);

	    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	  }

	  _createClass(Search, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(Header, { showSearch: true }),
	        React.createElement(
	          'div',
	          { className: 'shows' },
	          this.props.shows.filter(function (show) {
	            return (show.title + ' ' + show.description).toUpperCase().indexOf(_this2.props.searchTerm.toUpperCase()) >= 0;
	          }).map(function (show, index) {
	            return React.createElement(ShowCard, _extends({}, show, { key: index, id: index }));
	          })
	        )
	      );
	    }
	  }]);

	  return Search;
	}(React.Component);

	Search.propTypes = {
	  searchTerm: React.PropTypes.string,
	  shows: React.PropTypes.arrayOf(React.PropTypes.object)
	};

	module.exports = connector(Search);

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(172);
	var Link = ReactRouter.Link;


	var ShowCard = function ShowCard(props) {
	  return React.createElement(
	    Link,
	    { to: '/details/' + props.id },
	    React.createElement(
	      'div',
	      { className: 'show-card' },
	      React.createElement('img', { src: './public/img/posters/' + props.poster, className: 'show-card-img' }),
	      React.createElement(
	        'div',
	        { className: 'show-card-text' },
	        React.createElement(
	          'h3',
	          { className: 'show-card-title' },
	          props.title
	        ),
	        React.createElement(
	          'h4',
	          { className: 'show-card-year' },
	          '(',
	          props.year,
	          ')'
	        ),
	        React.createElement(
	          'p',
	          { className: 'show-card-description' },
	          props.description
	        )
	      )
	    )
	  );
	};

	ShowCard.propTypes = {
	  year: React.PropTypes.string.isRequired,
	  poster: React.PropTypes.string.isRequired,
	  description: React.PropTypes.string.isRequired,
	  title: React.PropTypes.string.isRequired,
	  id: React.PropTypes.number.isRequired
	};

	module.exports = ShowCard;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(172);
	var Store = __webpack_require__(238);
	var connector = Store.connector;
	var Link = ReactRouter.Link;

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	    _this.handleSearchTermChange = _this.handleSearchTermChange.bind(_this);
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'handleSearchTermChange',
	    value: function handleSearchTermChange(e) {
	      this.props.setSearchTerm(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var utilSpace = void 0;
	      if (this.props.showSearch) {
	        utilSpace = React.createElement('input', { type: 'text', className: 'search-input', placeholder: 'Search', value: this.props.searchTerm, onChange: this.handleSearchTermChange });
	      } else {
	        utilSpace = React.createElement(
	          'h2',
	          { className: 'header-back' },
	          React.createElement(
	            Link,
	            { to: '/search' },
	            'Back'
	          )
	        );
	      }
	      return React.createElement(
	        'header',
	        { className: 'header' },
	        React.createElement(
	          'h1',
	          { className: 'brand' },
	          React.createElement(
	            Link,
	            { to: '/', className: 'brand-link' },
	            'kvids'
	          )
	        ),
	        utilSpace
	      );
	    }
	  }]);

	  return Header;
	}(React.Component);

	Header.propTypes = {
	  setSearchTerm: React.PropTypes.func,
	  showSearch: React.PropTypes.bool,
	  searchTerm: React.PropTypes.string
	};

	module.exports = connector(Header);

/***/ }

});