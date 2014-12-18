do ->
  ## -- Private ----------------------------------------------------------------

  _options =
    enableHighAccuracy : true
    timeout            : 0
    maximumAge         : Infinity

  _deleteNullValues = (objt) ->
    delete objt[key] for key, value of objt when not value?
    objt

  _geolocationPromise = ->
    new Promise((resolve, reject) ->
      navigator.geolocation.getCurrentPosition ((position) ->
        objt = position.coords
        objt.timestamp = position.timestamp
        objt = _deleteNullValues objt
        resolve(objt)
      ), ((err) ->
        reject Error err.message
      ), _options
    )

  ## -- Public -----------------------------------------------------------------

  parrot.geolocation = (cb, err)-> _geolocationPromise().then (cb), cb
