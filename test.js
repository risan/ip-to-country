const ipToCountry = require("./src");

(async () => {
  try {
    const result = await ipToCountry("119.252.160.0");

    console.log(result);
  } catch(error) {
    console.error(error.message);
  }
})();
