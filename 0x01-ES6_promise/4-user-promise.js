/*
That returns a resolved promise with this object:
{
  firstName: value,
  lastName: value,
}
*/
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
