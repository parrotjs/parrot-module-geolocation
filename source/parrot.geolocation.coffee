'use strict'

do ->

  ## -- Private ---------------------------------------------------------------

  _geolocation = navigator.geolocation

  _deleteNullFromObject = (objt) ->
    delete objt[key] for key, value of objt when not value?
    objt

  _mergePositionObject = (position) ->
    objt = position.coords
    objt.timestamp = position.timestamp
    objt

  _createPositionObject = (objt) ->
    objt = _mergePositionObject objt
    objt = _deleteNullFromObject objt
    objt

  _watchPosition = (options, success, err) ->
    unless options?
      options =
        enableHighAccuracy : false # not necessary precision
        timeout            : 600   # 10s timeout
        maximumAge         : 0     # not cache

    _geolocation.watchPosition ((position) ->
      success _createPositionObject position
      ), err, options

  _positionPromise = (options) ->
    unless options?
      options =
        enableHighAccuracy : true # precision first
        maximumAge         : 0    # not cache
        timeout            : 600  # 10s timeout

    new Promise((resolve, reject) ->
      _geolocation.getCurrentPosition ((position) ->
        resolve _createPositionObject position
      ), ((err) ->
        reject Error err.message
      ), options
    )

  ## -- Public ----------------------------------------------------------------

  parrot.geolocation =
    clear    : (uid) -> _geolocation.clearWatch uid
    position : (options, cb) ->
      if typeof arguments[0] is 'function'
        cb = options
        options = null
      _positionPromise(options).then ((position) ->
        cb(position, null)
      ), (err) -> cb(null, err)

    watch    : (options, success, err) -> _watchPosition options, success, err
