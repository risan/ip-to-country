const path = require("path");

const countryFlagEmoji = require("country-flag-emoji");
const isEmpty = require("@risan/is-empty");
const isPlainObj = require("@risan/is-plain-obj");
const maxmind = require("maxmind");

let dbReader = null;

const COUNTRY_DB_PATH = path.resolve(__dirname, "../data/country.mmdb");

/**
 * Load the database reader.
 *
 * @param {String} dbPath
 * @return {Promise}
 */
const loadDb = dbPath =>
  new Promise((resolve, reject) =>
    maxmind.open(dbPath, (err, reader) => {
      if (err) {
        reject(err);
      } else {
        resolve(reader);
      }
    })
  );

/**
 * Get database reaser.
 *
 * @param {String} dbPath
 * @return {Reader}
 */
const getDbReader = async (dbPath = COUNTRY_DB_PATH) => {
  if (dbReader) {
    return dbReader;
  }

  dbReader = await loadDb(dbPath);

  return dbReader;
};

/**
 * Get country for the given IP address.
 *
 * @param {String} ip
 * @return {Object|Undefined}
 */
const ipToCountry = async ip => {
  if (!maxmind.validate(ip)) {
    throw new Error("Invalid IP address.");
  }

  const reader = await getDbReader();

  const result = reader.get(ip);

  const { country, continent } = isPlainObj(result) ? result : {};

  if (isEmpty(country)) {
    return undefined;
  }

  const { iso_code: code, ...rest } = country;

  const flag = countryFlagEmoji.get(code);

  const flagEmoji = flag ? flag.emoji : null;

  return {
    code,
    name: country.names.en,
    flag_emoji: flagEmoji,
    ...rest,
    continent: {
      name: continent.names.en,
      ...continent
    }
  };
};

module.exports = ipToCountry;
