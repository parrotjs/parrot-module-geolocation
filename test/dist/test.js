(function() {
  describe("Geolocation ::", function() {
    return it("call geolocation without arguments", function(done) {
      return parrot.geolocation.position(function(position, err) {
        console.log("error ::");
        console.log(err);
        console.log("position ::");
        console.log(position);
        return done();
      });
    });
  });

}).call(this);
