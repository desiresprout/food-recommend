const express = require("express");
const axios = require("axios");
const router = express.Router();
const weatherCode = require("../lib/weatherCode");
const recommendFoods = require("../lib/foods");

router.get("/address/:longitude/:latitude", async (req, res) => {
  try {
    const addressResponse = await axios.get(
      process.env.KAKAO_DEVELOPER_ENDPOINT,
      {
        headers: {
          Authorization: process.env.KAKAO_DEVELOPER_KEY,
        },
        params: { x: req.params.longitude, y: req.params.latitude },
      }
    );

    const totalCount = addressResponse.data.meta["total_count"];

    if (totalCount === 0) {
      res.status(200).send({ count: totalCount });
      return;
    }

    const weatherResponse = await axios.get(process.env.WEATHERSTACK_ENDPOINT, {
      params: {
        access_key: process.env.WEATHERSTACK_ACCESSKEY,
        query: `${req.params.latitude},${req.params.longitude}`,
      },
    });

    const { current } = weatherResponse.data;
    const { weather_code, temperature } = current;

    const { weather, keyword } = weatherCode.find(
      v => v.weatherCode === weather_code
    );

    const { foods } = recommendFoods.find(v => v.keyword === keyword);

    const {
      region_1depth_name,
      region_2depth_name,
      region_3depth_name,
    } = addressResponse.data.documents[0].address;

    const address = [
      region_1depth_name,
      region_2depth_name,
      region_3depth_name,
    ].join(" ");

    res.status(200).send({
      totalCount,
      address,
      foodsInfo: foods,
      keyword,
    });
  } catch (e) {
    res.status(500).send({ errorMessage: "server error" });
  }
});

module.exports = router;
