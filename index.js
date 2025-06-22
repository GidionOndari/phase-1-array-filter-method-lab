

/**
 * Returns all drivers whose name exactly matches `query`
 * (case-insensitive).
 * @param {string[]} drivers
 * @param {string}   query
 * @returns {string[]}
 */
function findMatching(drivers, query) {
  const lower = query.toLowerCase();
  return drivers.filter(name => name.toLowerCase() === lower);
}

/**
 * Returns every driver whose name STARTS with the given letters.
 * The match is case-insensitive and only checks the beginning.
 * @param {string[]} drivers
 * @param {string}   letters
 * @returns {string[]}
 */
function fuzzyMatch(drivers, letters) {
  const prefix = letters.toLowerCase();
  return drivers.filter(name => name.toLowerCase().startsWith(prefix));
}

/**
 * Returns every driver object whose `name` property
 * exactly matches `query`.
 * @param {{name:string}[]} drivers
 * @param {string}          query
 * @returns {{name:string}[]}
 */
function matchName(drivers, query) {
  return drivers.filter(driver => driver.name === query);
}


