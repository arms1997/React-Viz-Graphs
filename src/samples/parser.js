const moment = require("moment");

const parser = (data) => {
  const newData = { ...data["Time Series (5min)"] };

  const parsedData = [];
  let i = 0;
  for (const key in newData) {
    i++;
    const data = { x: i, y: newData[key]["4. close"] };
    parsedData.push(data);
  }

  return parsedData;
};

const xAxisParser = (index, data) => {
  const newData = { ...data };

  const dates = Object.keys(newData["Time Series (5min)"]).reverse();

  const momentObj = moment(dates[index]).toObject();

  return `${momentObj.hours}:${momentObj.minutes}`;
};

module.exports = {
  parser,
  xAxisParser,
};
