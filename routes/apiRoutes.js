const Workout = require('../models/workout.js');

module.exports = app => {
  app.get('/api/workouts', async (req, res) => {
    try {
      const workouts = await Workout.find({});
      res.json(workouts);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.get('/api/workouts/range', async (req, res) => {
    try {
      const data = await Workout.find({});
      res.json(data);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.put('/api/workouts/:id', async ({ params, body }, res) => {
    try {
      const updatedWorkout = await Workout.findByIdAndUpdate(
        params.id,
        {
          $push: { excercises: body },
        },
        { new: true, runValidators: true }
      );
      res.json(updatedWorkout);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.post('/api/workouts', async (req, res) => {
    try {
      const newWorkout = await Workout.create({});
      res.json(newWorkout);
    } catch (err) {
      res.status(500).end();
    }
  });
  // app.get("/api/workouts", (req, res) => {
  //   Workout.find()
  //     .then((dbWorkout) => {
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  // app.post("/api/workouts", (req, res) => {
  //   const data = req.body;
  //   Workout.create({})
  //     .then((dbWorkout) => {
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });
};