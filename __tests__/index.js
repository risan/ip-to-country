/* global expect:false, test:false */
const ipToCountry = require("../src");

test("it throws error if ip is invalid", async () => {
  expect.assertions(1);

  try {
    await ipToCountry("foo");
  } catch (error) {
    expect(error.message).toMatch(/invalid ip/i);
  }
});

test("it can get country from ip address", async () => {
  const result = await ipToCountry("1.0.0.0");

  expect(result).toMatchObject({
    code: "AU",
    name: "Australia",
    flag_emoji: "🇦🇺",
    geoname_id: 2077456
  });

  expect(result).toHaveProperty("names.en", "Australia");
  expect(result).toHaveProperty("continent.name", "Oceania");
});
