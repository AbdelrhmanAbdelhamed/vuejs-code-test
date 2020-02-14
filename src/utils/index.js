/* eslint-disable no-plusplus */
import {
  cloneDeep,
  isObject,
  startCase as _startCase,
} from 'lodash';

import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

function getNestedValue(object, path) {
  const keys = path.split('.');
  let clonedObject = cloneDeep(object);
  for (let i = 0, n = keys.length; i < n; i++) {
    const key = keys[i];
    if (isObject(clonedObject) && key in clonedObject) {
      clonedObject = clonedObject[key];
    } else {
      return;
    }
  }
  // eslint-disable-next-line consistent-return
  return clonedObject;
}

function startCase(string) {
  return _startCase(string);
}

export {
  camelcaseKeys,
  snakecaseKeys,
  getNestedValue,
  startCase,
};
