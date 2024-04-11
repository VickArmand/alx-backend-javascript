import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
/*
Write and export a function named handleProfileSignup.
It should accept three arguments firstName (string), lastName (string), and fileName (string).
The function should call the two other functions.
When the promises are all settled it should return an array with the following structure:
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
*/
export default function handleProfileSignup(firstName, lastName, fileName) {
  const uploadphoto = uploadPhoto(fileName);
  const signupuser = signUpUser(firstName, lastName);
  return Promise.all([signupuser, uploadphoto]).finally(
    (res) => [{ status: 200, value: res }],
  );
}
