/*jshint newcap: false */
/*global describe, it, before */
'use strict';
var expect = require('expect.js'),
    React = require('react'),
    BodyBackgroundColor = require('../');

describe('BodyBackgroundColor', function () {
  before(function () {
    BodyBackgroundColor.canUseDOM = false;
  });

  it('has a displayName', function () {
    var el = React.createElement(BodyBackgroundColor);
    expect(el.type.displayName).to.be.a('string');
    expect(el.type.displayName).not.to.be.empty();
  });

  it('hides itself from the DOM', function () {
    var Component = React.createClass({
      render: function () {
        return React.createElement(BodyBackgroundColor, {backgroundColor: '#aabbcc'},
          React.createElement('div', null, 'hello')
        );
      }
    });
    var markup = React.renderToStaticMarkup(React.createElement(Component));
    expect(markup).to.equal('<div>hello</div>');
  });

  it('throws an error if it has multiple children', function (done) {
    var Component = React.createClass({
      render: function () {
        return React.createElement(BodyBackgroundColor, {backgroundColor: '#aabbcc'},
          React.createElement('div', null, 'hello'),
          React.createElement('div', null, 'world')
        );
      }
    });
    expect(function () {
      React.renderToStaticMarkup(React.createElement(Component));
    }).to.throwException(function (e) {
      expect(e.message).to.match(/^Invariant Violation:/);
      done();
    });
  });
});

describe('BodyBackgroundColor.rewind', function () {
  it('clears the mounted instances', function () {
    BodyBackgroundColor.rewind();
    React.renderToStaticMarkup(
      React.createElement(BodyBackgroundColor, {backgroundColor: '#aabbcc'})
    );
    expect(BodyBackgroundColor.peek()).to.equal('#aabbcc');
    BodyBackgroundColor.rewind();
    expect(BodyBackgroundColor.peek()).to.equal(undefined);
  });
});
