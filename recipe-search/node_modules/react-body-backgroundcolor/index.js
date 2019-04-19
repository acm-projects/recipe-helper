'use strict';

var React = require('react'),
  withSideEffect = require('react-side-effect'),
  PropTypes = require('prop-types'),
  createClass = require('create-react-class');

function reducePropsToState(propsList) {
  return propsList
    .map(function(props) {
      return props.backgroundColor;
    })
    .filter(function(value, index, self) {
      return self.indexOf(value) === index;
    })
    .join(' ');
}

function handleStateChangeOnClient(stringBackgroundColor) {
  document.body.style.backgroundColor = stringBackgroundColor || '';
}

var DocumentTitle = createClass({
  propTypes: {
    backgroundColor: PropTypes.string.isRequired,
  },

  render: function render() {
    if (this.props.children) {
      return React.Children.only(this.props.children);
    } else {
      return null;
    }
  },
});

module.exports = withSideEffect(reducePropsToState, handleStateChangeOnClient)(
  DocumentTitle,
);
