"use strict";

require("jsdom-global")();
require("canvas");
const tf = require("@tensorflow/tfjs");

const DEFAULT_MODEL_LOCATION =
  "https://raw.githubusercontent.com/MikeShi42/yolo-tiny-tfjs/master/model2.json";

const downloadModel = async (url = DEFAULT_MODEL_LOCATION) => {
  model = await tf.loadModel(url);
  return model;
};

downloadModel()
  .then(model => {
    const prediction = model.predict("./bike");
    console.log(prediction);
  })
  .catch(err => console.error(err));
