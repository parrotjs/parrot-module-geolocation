# parrot-module-geolocation <a href="http://bower.io/search/?q=parrot-module-geolocation"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Dependency status](http://img.shields.io/david/parrotjs/parrot-module-geolocation.svg?style=flat)](https://david-dm.org/parrotjs/parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/parrot-module-geolocation.svg?style=flat)](https://david-dm.org/parrotjs/parrotjs#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Using geolocation with guarantees to obtain a good approximation.

## Browser Compatibility

[![browser support](https://ci.testling.com/parrotjs/parrot-module-geolocation.png)](https://ci.testling.com/parrotjs/parrot-module-geolocation)

## Install

```bash
bower install parrot-module-geolocation --save
```

## Get Started

For use browser `geolocation` feature we will use `parrot.geolocation` namespace.



## Documentation

### parrot.geolocation

#### .position([Object], &lt;Function&gt;)

Use this method to get your current position and it receives:

* Optional [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
* A `callback` with the result (`Position` or `Error`).

The `Position` that would be returns is a merge object between [`Position`](https://developer.mozilla.org/en-US/docs/Web/API/Position) and [`Coordinates`](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) where the `null` values have been removed.

Default options are:

```coffee
enableHighAccuracy : true # precision first
maximumAge         : 0    # not cache
timeout            : 600  # 10s timeout
```

Example of use:

```coffee
parrot.geolocation.position (position, err) ->
  return error if err?
  position
  # => {accuracy:848, latitude:37, longitude:-1,  timestamp:1418986533158}
```

#### .watch([Object], &lt;Function&gt;, &lt;Function&gt;)

It registers a method handler that will be called when the position changed.

The arguments are:

* Optional [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
* `success` handler. It receives `Position` Object.
* `error` jhandler. It receives `PositionError` Object.

Default options are:

```coffee
enableHighAccuracy : false # not necessary precision
timeout            : 600   # 10s timeout
maximumAge         : 0     # not cache
```

This method returns a `uid` that you need to store for clear the handler later.

#### .clear(&lt;Integer&gt;)

It  simply clear a method handler. You need to provide the `uid` for do the operation.

## License

MIT © ParrotJS
