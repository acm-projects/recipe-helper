/*jshint newcap: false */
/*global global, describe, it, afterEach, before, after */
'use strict';
var expect = require('expect.js'),
    React = require('react'),
    BodyBackgroundColor = require('../');

describe('BodyBackgroundColor (in a browser)', function () {
  afterEach(function () {
    React.unmountComponentAtNode(global.document.body);
  });
  before(function () {
    // Prepare the globals React expects in a browser
    global.window = require('global/window');
    global.document = require('global/document');
    global.window.document = document;
    global.window.location = {};
    global.window.navigator = {userAgent: 'Chrome'};
    console.debug = console.log;
    BodyBackgroundColor.canUseDOM = true;
  });
  after(function () {
    delete global.window;
    delete global.document;
    delete console.debug;
  });

  it('changes the document body backgroundcolor on mount', function (done) {
    var backgroundColor = '#aabbcc';
    var Component = React.createClass({
      componentDidMount: function () {
        expect(global.document.body.style.backgroundColor).to.equal(backgroundColor);
        done();
      },
      render: function () {
        return React.createElement(BodyBackgroundColor, {backgroundColor: backgroundColor});
      }
    });
    React.render(React.createElement(Component), global.document.body);
  });
});
