# IP to Country

[![Build Status](https://flat.badgen.net/travis/risan/ip-to-country)](https://travis-ci.org/risan/ip-to-country)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/ip-to-country)](https://codeclimate.com/github/risan/ip-to-country)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/ip-to-country)](https://codeclimate.com/github/risan/ip-to-country)
[![Latest Stable Version](https://flat.badgen.net/npm/v/@risan/ip-to-country)](https://www.npmjs.com/package/@risan/ip-to-country)
[![Node Version](https://flat.badgen.net/npm/node/@risan/ip-to-country)](https://www.npmjs.com/package/@risan/ip-to-country)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/@risan/ip-to-country)](https://github.com/risan/ip-to-country/blob/master/LICENSE)

Get country from IP address using [MaxMind](https://www.maxmind.com) GeoLite2 binary database.

## Install

```bash
$ npm install @risan/ip-to-country

# Or if you use Yarn
$ yarn add @risan/ip-to-country
```

## Quick Start

```js
const ipToCountry = require("@risan/ip-to-country");

(async () => {
  try {
    const result = ipToCountry("123.45.6.7");

    if (result) {
      console.log(result);
    } else {
      console.log("IP address not found.");
    }
  } catch(error) {
    console.error(error.message);
  }
})();
```

## API

```js
ipToCountry(ip)
```

### Parameters

* `ip` (`String`): The IP address to lookup.

### Returns

It returns a `Promise` which when resolved contains `undefined` or an `Object`. `undefined` means the given IP address is not found in the database. Here's an example of the resolved country object:

```js
{
  code: "ID",
  name: "Indonesia",
  flag_emoji: "🇮🇩",
  geoname_id: 1643084,
  names: {
    de: "Indonesien",
    en: "Indonesia",
    es: "Indonesia",
    fr: "Indonésie",
    ja: "インドネシア共和国",
    "pt-BR": "Indonésia",
    ru: "Индонезия",
    "zh-CN": "印度尼西亚"
  },
  continent: {
    name: "Asia",
    code: "AS",
    geoname_id: 6255147,
    names: {
      de: "Asien",
      en: "Asia",
      es: "Asia",
      fr: "Asie",
      ja: "アジア",
      "pt-BR": "Ásia",
      ru: "Азия",
      "zh-CN": "亚洲"
    }
  }
}
```

* `code`: Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
* `name`: The country name.
* `flag_emoji`: The country flag emoji.
* `geoname_id`: The [GeoNames](https://www.geonames.org) id.
* `names`: The country name in various language.
* `continent`: The continent data.

## License

CC-BY-SA 4.0 · [Risan Bagja Pradana](https://bagja.net)

> This product includes GeoLite2 data created by MaxMind, available from
[https://www.maxmind.com](http://www.maxmind.com). GeoLite2 Database and Contents Copyright (c) 2018 MaxMind, Inc.

> The MaxMind GeoLite2 database incorporates [GeoNames](https://www.geonames.org) geographical data, which is made available under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/).
