import { Data } from "../models/data.model.js";
import countries from "i18n-iso-countries";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// ******************************************** Get all Data **********************************************
const getAllData = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    return res.status(200).json(new ApiResponse(200, allData));
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Region Data *******************************************
const getRegionData = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allRegion = Object.values(
      allData.reduce((a, { region }) => {
        let key = `${region}`;
        a[key] = a[key] || { region, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    // Total count of region
    let totalRegion = allRegion.reduce((sum, item) => sum + item.count, 0);

    // Filter out objects with an empty region
    let filteredData = allRegion.filter((obj) => obj.region !== "");

    // Find the object with the maximum count value
    let maxRegion = filteredData.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    let percentageRegion = (maxRegion.count * 100) / totalRegion;

    // console.log(allRegion, totalRegion, maxRegion, percentageRegion);

    return res.status(200).json(
      new ApiResponse(200, {
        region: maxRegion.region,
        count: maxRegion.count,
        percent: percentageRegion,
      }),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Relevance Data *******************************************
const getRelevance = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allRelevance = Object.values(
      allData.reduce((a, { relevance }) => {
        let key = `${relevance}`;
        a[key] = a[key] || { relevance, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    // Total count of region
    let totalRelevance = allRelevance.reduce(
      (sum, item) => sum + item.count,
      0,
    );

    // Filter out objects with an empty region
    let filteredData = allRelevance.filter((obj) => obj.relevance !== null);

    // Find the object with the maximum count value
    let maxRelevace = filteredData.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    let percentageRelevance = (maxRelevace.count * 100) / totalRelevance;

    // console.log(allRelevance, totalRelevance, maxRelevace, percentageRelevance);

    return res.status(200).json(
      new ApiResponse(200, {
        relevance: maxRelevace.relevance,
        count: maxRelevace.count,
        percent: percentageRelevance,
      }),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Pestle Data *******************************************
const getPestle = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allPestle = Object.values(
      allData.reduce((a, { pestle }) => {
        let key = `${pestle}`;
        a[key] = a[key] || { pestle, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    // Total count of region
    let totalPestle = allPestle.reduce((sum, item) => sum + item.count, 0);

    // Filter out objects with an empty region
    let filteredData = allPestle.filter((obj) => obj.pestle !== "");

    // Find the object with the maximum count value
    let maxPestle = filteredData.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    let percentagePestle = (maxPestle.count * 100) / totalPestle;

    // console.log(allPestle, totalPestle, maxPestle, percentagePestle);

    return res.status(200).json(
      new ApiResponse(200, {
        pestle: maxPestle.pestle,
        count: maxPestle.count,
        percent: percentagePestle,
      }),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Likelihood Data *******************************************
const getLikelihood = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allLikelihood = Object.values(
      allData.reduce((a, { likelihood }) => {
        let key = `${likelihood}`;
        a[key] = a[key] || { likelihood, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    // Total count of region
    let totalLikelihood = allLikelihood.reduce(
      (sum, item) => sum + item.count,
      0,
    );

    // Filter out objects with an empty region
    let filteredData = allLikelihood.filter((obj) => obj.likelihood !== null);

    // Find the object with the maximum count value
    let maxLikelihood = filteredData.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    let percentageLikelihood = (maxLikelihood.count * 100) / totalLikelihood;

    // console.log(allLikelihood, totalLikelihood, maxLikelihood, percentageLikelihood);

    return res.status(200).json(
      new ApiResponse(200, {
        likelihood: maxLikelihood.likelihood,
        count: maxLikelihood.count,
        percent: percentageLikelihood,
      }),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Topic Data *******************************************
const getTopic = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allTopic = Object.values(
      allData.reduce((a, { topic }) => {
        let key = `${topic}`;
        a[key] = a[key] || { topic, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    let filteredData = allTopic.filter((obj) => obj.topic !== "");

    // console.log(allTopic);

    return res.status(200).json(new ApiResponse(200, filteredData));
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Source Data *******************************************
const getSource = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allSource = Object.values(
      allData.reduce((a, { source }) => {
        let key = `${source}`;
        a[key] = a[key] || { source, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    allSource.sort((a, b) => a.count - b.count);

    // console.log(allSource.reverse());

    return res.status(200).json(new ApiResponse(200, allSource.reverse()));
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Country Data *******************************************
const getCountry = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allCountry = Object.values(
      allData.reduce((a, { country }) => {
        let key = `${country}`;
        a[key] = a[key] || { country, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );
    let filteredData = allCountry.filter((obj) => obj.country !== "");

    function getCountryAlpha3Code(countryName) {
      const countryCode = countries.getAlpha3Code(countryName, "en");
      return countryCode;
    }

    const transformedData = filteredData.map((item) => {
      return {
        // country: item.country,
        id: getCountryAlpha3Code(item.country) || item.country, // If country name not found, keep it as is
        value: item.count,
      };
    });

    // console.log(transformedData);
    return res.status(200).json(new ApiResponse(200, transformedData));
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Add Data *******************************************
const getAdded = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allAdded = Object.values(
      allData.reduce((a, { added }) => {
        let key = `${added}`;
        a[key] = a[key] || { added, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    // Total count of region
    let totalAdded = allAdded.reduce((sum, item) => sum + item.count, 0);

    // Filter out objects with an empty region
    let filteredData = allAdded.filter((obj) => obj.added !== "");

    // Find the object with the maximum count value
    let maxAdded = filteredData.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    let percentageAdded = (maxAdded.count * 100) / totalAdded;

    // console.log(allAdded, totalAdded, maxAdded, percentageAdded);

    return res.status(200).json(
      new ApiResponse(200, {
        add: maxAdded.added,
        count: maxAdded.count,
        percent: percentageAdded,
      }),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Intensity Data *******************************************
const getIntensity = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allIntensity = Object.values(
      allData.reduce((a, { intensity }) => {
        let key = `${intensity}`;
        a[key] = a[key] || { intensity, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    let filteredData = allIntensity.filter((obj) => obj.intensity !== null);

    // console.log(allIntensity);

    return res.status(200).json(new ApiResponse(200, filteredData));
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get published Data *******************************************
const getPublished = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allPublished = Object.values(
      allData.reduce((a, { published }) => {
        let key = `${published}`;
        a[key] = a[key] || { published, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );

    // Total count of region
    let totalPublished = allPublished.reduce(
      (sum, item) => sum + item.count,
      0,
    );

    // Filter out objects with an empty region
    let filteredData = allPublished.filter((obj) => obj.published !== "");

    // Find the object with the maximum count value
    let maxPublished = filteredData.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    let percentagePublished = (maxPublished.count * 100) / totalPublished;

    // console.log(
    //   allPublished,
    //   totalPublished,
    //   maxPublished,
    //   percentagePublished,
    // );

    return res.status(200).json(
      new ApiResponse(200, {
        topic: maxPublished.published,
        count: maxPublished.count,
        percent: percentagePublished,
      }),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

// ******************************************** Get Sector Data *******************************************
const getSector = asyncHandler(async (req, res) => {
  try {
    const allData = await Data.find({});
    let allSector = Object.values(
      allData.reduce((a, { sector }) => {
        let key = `${sector}`;
        a[key] = a[key] || { sector, count: 0 };
        a[key].count++;
        return a;
      }, {}),
    );
    let filteredData = allSector.filter((obj) => obj.sector !== "");

    const formattedData = filteredData.map(item => ({
      id: item.sector,
      label: item.sector,
      value: item.count
    }));

    // console.log(formattedData);

    return res.status(200).json(
      new ApiResponse(200, formattedData),
    );
  } catch (error) {
    throw new ApiError(500, "Server Error");
  }
});

export {
  getAllData,
  getRegionData,
  getRelevance,
  getPestle,
  getLikelihood,
  getTopic,
  getIntensity,
  getSource,
  getCountry,
  getAdded,
  getPublished,
  getSector,
};
