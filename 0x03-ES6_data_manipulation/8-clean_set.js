/**
 * Create a function named cleanSet that returns a string of all the
 * set values that start with a specific string (startString).
 * It accepts two arguments: a set (Set) and a startString (String).
 * When a value starts with startString you only append the rest of the string.
 * The string contains all the values of the set separated by -.
 */
export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      res += `${el.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
