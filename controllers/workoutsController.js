const express = require("express");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Workouts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {

        // const returnedData = {...dbModel}
        // returnedData.DaysArray = [];
        
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Sunday,
        //     "name": "Sunday"
        //   }
        // })
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Monday,
        //     "name": "Monday"
        //   }
        // })
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Tuesday,
        //     "name": "Tuesday"
        //   }
        // })
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Wednesday,
        //     "name": "Wednesday"
        //   }
        // })
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Thursday,
        //     "name": "Thursday"
        //   }
        // })
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Friday,
        //     "name": "Friday"
        //   }
        // })
        // returnedData.DaysArray.push({
        //   value:{
        //     "isActive": dbModel.Saturday,
        //     "name": "Saturday"
        //   }
        // })

        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Workouts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Workouts
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workouts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Workouts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

