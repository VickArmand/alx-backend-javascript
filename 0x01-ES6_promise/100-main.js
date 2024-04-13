import asyncUploadUser from './100-await';

const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

import { test } from '@jest/globals';
test();
