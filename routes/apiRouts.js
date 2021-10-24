const router = require('express').Router();
const Workout = require('../model/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
      {
          $match: {}
      },
      {
          $addFields: {
            totalDuration:{$sum:"$exercises.duration"}
          }
      },
    ])
    .then((dbWorkout)=>res.json(dbWorkout))
    .catch((err)=> res.status(400).json(err))
  });

router.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
    .then((dbWorkout)=>res.json(dbWorkout))
    .catch((err)=> res.status(400).json(err))
  });


  router.put('/api/workouts/:id', (req, res) => {
    Workout.updateOne(req.body,{
      where:{
        _id: req.params.id,
      },
      $push:{
        exercises: req.body 
      },
    })
    .then((dbWorkout)=>res.json(dbWorkout))
  });

  router.get('/api/workouts/range', (req, res)=>{
      Workout.aggregate([
          {
            $addFields: {
              day: '$day',
              totalDuration: {
                $sum:'$exercises.duration',
              }
            }  
          }
      ])
      .then((dbWorkout)=>res.json(dbWorkout))
      .catch((err)=> res.status(400).json(err))              
  });
module.exports = router;