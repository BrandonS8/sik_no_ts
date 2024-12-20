/**
 * A one line solution to checking if an object is undefined or null that
 * asserts this so that strict compilers flag the variable as potentially
 * undefined or null.
 *
 * @param object - The object that should be checked if it is undefined or null.
 */
function validate(object, message) {
  if (message === void 0) {
    message = undefined
  }
  if (object === undefined) {
    throw new Error(
      message !== null && message !== void 0
        ? message
        : 'Attempted operation on undefined object.'
    )
  }
  if (object === null) {
    throw new Error(
      message !== null && message !== void 0
        ? message
        : 'Attempted operation on null object.'
    )
  }
}

module.exports = validate
