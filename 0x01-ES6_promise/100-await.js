import { uploadPhoto, createUser } from './utils';
/**
 * Write an async function named asyncUploadUser
 * that will call these two functions and return an object with the following format:
    {
    photo: response_from_uploadPhoto_function,
    user: response_from_createUser_function,
    }
 * If one of the async function fails, return an empty object. Example:
    {
    photo: null,
    user: null,
    }
 */
export default async function asyncUploadUser() {
  const result = Promise.all([uploadPhoto(), createUser()]).then(
    (values) => ({
      photo: values[0],
      user: values[1],
    }),
  ).catch(() => ({
    photo: null,
    user: null,
  }));
  return result;
}
