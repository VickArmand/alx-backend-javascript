/**
 * Export a const instance of WeakMap and name it weakMap.
 * Export a new function named queryAPI.
 * It should accept an endpoint argument like so:
 * { protocol: 'http', name: 'getUsers',}
 * Track within the weakMap the number of times
 * queryAPI is called for each endpoint.
 * When the number of queries is >= 5
 * throw an error with the message Endpoint load is high.
 */
export const weakMap = new WeakMap();
export function queryAPI(endPoint) {
  if (!weakMap.has(endPoint)) weakMap.set(endPoint, 1);
  else {
    const queries = weakMap.get(endPoint);
    if (queries >= 5) throw Error('Endpoint load is high');
    weakMap.set(endPoint, queries + 1);
  }
}
