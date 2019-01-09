'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this.addOne = _this.addOne.bind(_this);
		_this.removeOne = _this.removeOne.bind(_this);
		_this.reset = _this.reset.bind(_this);

		_this.state = {
			count: 0
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var stringCount = localStorage.getItem('count');
			var count = parseInt(stringCount, 10);

			if (!isNaN(count)) {
				this.setState(function () {
					return { count: count };
				});
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options !== this.state.count) {
				localStorage.setItem('count', this.state.count);
			}
		}
	}, {
		key: 'addOne',
		value: function addOne() {
			this.setState(function (prevState) {
				// It's just changing these specific properties of state, not overriding the whole state object.
				return {
					count: prevState.count + 1
				};
			});
		}
	}, {
		key: 'removeOne',
		value: function removeOne() {
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.setState({
				count: 0
			});
			// this.setState((prevState) => {
			// 	// It's just changing these specific properties of state, not overriding the whole state object.
			// 	return {
			// 		count: prevState.count + 1
			// 	};
			// });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Count: ',
					this.state.count
				),
				React.createElement(
					'button',
					{ onClick: this.addOne },
					'+1'
				),
				React.createElement(
					'button',
					{ onClick: this.removeOne },
					'-1'
				),
				React.createElement(
					'button',
					{ onClick: this.reset },
					'reset'
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

// Counter.defaultProps = {
// 	count: 100
// };


ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };

// const subtractOne = () => {
// 	count--;
// 	renderCounterApp();
// };

// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 	<div>
// 		<h1>Count: {count} </h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={subtractOne}>-1</button>
// 		<button onClick={reset}>Reset</button>
// 	</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
