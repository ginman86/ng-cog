var mongo = require('mongodb'),
    Client = mongo.MongoClient,
    database;

//var server = new Server('localhost', 27017, {auto_reconnect: true});

Client.connect("mongodb://localhost:27017/cogdb", function(err, db) {
  console.log("Connected to cogdb");
  database = db;
});

function ProgramProvider() {
  this.database = database;

  this.db = function() {
    if (this.database === null || this.database === undefined) {
      setTimeout(this.db, 500);
    }
    return this.database;
  }
};

ProgramProvider.prototype.getCollection = function(callback) {
  this.db().collection('programs', function(error, program_collection) {
    if (error) callback(error);
    else callback(null, program_collection);
  });
};

ProgramProvider.prototype.getAllPrograms = function(callback) {
  this.getCollection(function(err, program_collection) {
    program_collection.find().toArray(function(err, items) {
      callback(err, items);
    });
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
  });
}

exports.ProgramProvider = ProgramProvider;