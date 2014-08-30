var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});

ProgramProvider = function(host, port) {
  this.db = new Db('cogdb', server);
  this.db.open(function(err, db) {
    if (!err) {
      console.log("Connected to cogdb.");
    }
  });
};

ProgramProvider.prototype.getCollection = function(callback) {
  this.db.collection('programs', function(error, program_collection) {
    if (error) callback(error);
    else callback(null, program_collection);
  });
};

ProgramProvider.prototype.save = function(programs, callback) {
  this.getCollection(function(error, program_collection) {
    var program;

    if (error) callback(error);
    else {
      if (typeof(programs.length)=="undefined")
        programs = [programs];

      for (var i = 0; i < programs.length; i++) {
        program = programs[i];
        program.created_on = new Date();
      }

      program_collection.insert(programs, function() {
        callback(null, programs);
      });
    }
  }
}

exports.ProgramProvider = ProgramProvider;