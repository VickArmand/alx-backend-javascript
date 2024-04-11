/*
The function should return a Promise rejecting with an Error
and the string $fileName cannot be processed
*/
export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
}
