import React from 'react';

const ResolveSearchInput = (location) => {
  // RegExp to match either zip or city name
  const regexZip = new RegExp(
    /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/
  );
  const regexCity = new RegExp(
    /^([a-zA-Z\u0080-\u024F]+(?:(. )|-| |'))*[a-zA-Z\u0080-\u024F]*$/
  );

  // Remove spaces from input
  let temp = location
    .replace(/(\s+$|^\s+)/g, '') //remove any spaces before and after
    //   .replace(/(,\s+)/g, ",")
    //   .replace(/(\s+,)/g, ",")
    .replace(/\s+/g, '%20'); // replaces spaces with plus

  let locationForApi;
  if (temp !== '') {
    if (regexZip.test(temp)) {
      locationForApi = `name=${temp}`;
    } else if (regexCity.test(temp)) {
      locationForApi = `name=${temp}`;
    } else {
      throw Error('Not a valid location input. Try again');
    }
  }

  return locationForApi;
};

export default ResolveSearchInput;
