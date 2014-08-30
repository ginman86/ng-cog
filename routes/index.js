var express = require('express');
var router = express.Router();
var ProgramProvider = require('../providers/ProgramProvider.js').ProgramProvider;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/viewPrograms', function(req, res) {
  var pp = new ProgramProvider();

  pp.getAllPrograms(function(err, programs) {
    console.log("err, progs", err, programs);
    res.send("Some programs were found");
  });
});

/* GET home page. */
router.get('/seed', function(req, res) {
  var pp = new ProgramProvider();

  setTimeout(function() {
    pp.save([
    { name: "Program 1",
      id: 1,
      blocks: [
        {
          block:  1,
          mode:   "study"
        },

        {
          block:  1,
          mode:   "test"
        },

        {
          block:  1,
          mode:   "study"
        },

        {
          block:  1,
          mode:   "test"
        },

        {
          block:  1,
          mode:   "study"
        },

        {
          block:  1,
          mode:   "test"
        },

        //Condition 2 Rote

        {
          block:  2,
          mode:   "study"
        },

        {
          block:  2,
          mode:   "study"
        },

        {
          block:  2,
          mode:   "study"
        },

        {
          block:  2,
          mode:   "study"
        },

        {
          block:  2,
          mode:   "study"
        },

        {
          block:  2,
          mode:   "study"
        }
      ]
    },
    { name: "Day 2",
      id: 2,
      blocks:
      [
        {
          block:  1,
          mode:   "test"
        },

        {
          block:  2,
          mode:   "test"
        },

        {
          block:  3,
          mode:   "test"
        }
      ]
    }],
    function(error, programs) {
      if (error) console.log(error);
      else console.log("Successful save");
    });

    res.send("Seeded");
  }, 5000);
});


module.exports = router;
