/**
 * Create a function named hasValuesFromArray that
 * returns a boolean if all the elements in the array exist within the set.
 * It accepts two arguments: a set (Set) and an array (Array).
 */
export default function hasValuesFromArray(set, array) {
  let existingElements = 0;
  array.forEach((element) => {
    if (set.has(element)) existingElements += 1;
  });
  if (existingElements === array.length) return true;
  return false;
}
