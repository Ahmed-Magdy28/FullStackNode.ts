#!/usr/bin/node
const addMeMaybe = require('./102-add_me_maybe.cjs').addMeMaybe;
addMeMaybe(4, function (nb) {
  console.log('New value: ' + nb);
});