describe "Geolocation ::", ->

  it "call geolocation without arguments", (done) ->
    parrot.geolocation.position (position, err) ->
      console.log err
      console.log position
      done()
