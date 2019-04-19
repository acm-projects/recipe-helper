React Body Backgroundcolor
====================

Provides a declarative way to specify `document.body.style.backgroundcolor` in a single-page app.
This component can be used on server side as well.

Built with [React Side Effect](https://github.com/gaearon/react-side-effect).

====================

## Installation

```
npm install --save react-body-backgroundcolor
```

Dependencies: React >= 0.13.0

## Features

* Does not emit DOM, not even a `<noscript>`;
* Like a normal React compoment, can use its parent's `props` and `state`;
* Can be defined in many places throughout the application;
* Works just as well with isomorphic apps.

## Example

```jsx
class SomeComponent {
  render() {
    return (
      <BodyBackgroundColor backgroundColor='#FF00FF'>
        <h1>Home, sweet home.</h1>
      </BodyBackgroundColor>
    );
  }
}
```

## Server Usage

If you use it on server, call `BodyBackgroundColor.rewind()` **after rendering components to string** to retrieve the color. You can then embed this color into HTML page template.

Because this component keeps track of mounted instances, **you have to make sure to call `rewind` on server**, or you'll get a memory leak.
