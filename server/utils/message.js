/** @region_snippet_generateMessage */
var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};
/** @endregion */

/** @region_snippet_generateLocationMessage */
var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};
/** @endregion */

module.exports = { generateMessage, generateLocationMessage };
