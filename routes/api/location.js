const express = require('express');
const router = express.Router();
const Location = require('../../models/Location');
const { check, validationResult } = require('express-validator');

// route    POST api/location
// @desc    Create location
// @access  Public

router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let location = new Location({
        name: req.body.name
      });
      await location.save();
      location = await Location.find();
      res.json(location);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// Upadate
router.put(
  '/:location_id',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Location.findByIdAndUpdate(
        req.params.location_id,
        {
          $set: req.body
        },
        async (err, location) => {
          if (err) {
            return res.status(400).json({ msg: err.message });
          } else {
            location = await Location.find();
            res.json(location);
          }
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
// router.put('/:location_id', async (req, res) => {
//   let id = req.params.location_id;
//   var data = {
//     name: req.body.name
//   };

//   await Location.findByIdAndUpdate(id, data, (err, location) => {
//     if (err) throw err;
//     res.send('Successfully! location Updated- ' + location.name);
//   });
// });

// Delete
router.delete('/:location_id', async (req, res) => {
  console.log(req.params.location_id);
  let id = req.params.location_id;
  await Location.remove(
    {
      _id: id
    },
    err => {
      if (err) res.send(err);
      else res.send('Successfully! Location has been deleted');
    }
  );
});

//@route GET api/location
//@desc get all location
//@access Public
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
