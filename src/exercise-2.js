const exercise2 = (countries) => {
  const countriesMap = {};
  const langMap = {};
  countries.forEach(({ country, languages }) => {
    languages.map((language) => {
      if (!langMap[language]) langMap[language] = [];
      langMap[language].push(country);
    });
    countriesMap[country] = languages;
  });

  return {
    numberOfContries: Object.keys(countriesMap).length,
    mostLangsDE: mostLangsDE(countriesMap, langMap),
    mostLangs: mostLangs(countries),
    mostCommonLanguage: mostCommonLang(langMap),
  };
};

const mostLangsDE = (countriesMap, langMap) => {
  const countriesWithLang = langMap['de'];

  const { country } = countriesWithLang.reduce(
    (max, country) => {
      const count = countriesMap[country].length;
      return count > max.count ? { country, count } : max;
    },
    { country: undefined, count: 0 }
  );

  return { country, languages: countriesMap[country] };
};

const mostLangs = (countries) => {
  const { country, languages } = countries.reduce(
    (max, curr) => {
      const count = curr.languages.length;
      return count > max.languages.length ? curr : max;
    },
    { country: undefined, languages: [] }
  );

  return { country, languages };
};

const mostCommonLang = (langMap) => {
  const { language, countries } = Object.entries(langMap).reduce(
    (max, [language, countries]) => {
      const count = countries.length;
      return count > max.countries.length ? { language, countries } : max;
    },
    { language: '', countries: [] }
  );

  return { language, countries };
};

module.exports = exercise2;
