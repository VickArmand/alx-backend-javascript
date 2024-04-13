import { uploadPhoto, createUser } from './utils';
/*
In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises,
use the prototype below to collectively resolve all promises
and log body firstName lastName to the console.

In the event of an error, log Signup system offline to the console
*/
export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const createuser = createUser();
  return Promise.all([upload, createuser]).then((res) => { console.log(res[0].body, res[1].firstName, res[1].lastName); }).catch(() => { console.log('Signup system offline'); });
}
