var moment = require('moment');

/** @region_snippet_generateMessage */
var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};
/** @endregion */

/** @region_snippet_generateLocationMessage */
var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
};
/** @endregion */

module.exports = { generateMessage, generateLocationMessage };
