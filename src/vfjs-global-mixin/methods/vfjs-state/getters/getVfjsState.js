import { get } from 'lodash';

function getVfjsState(key) {
  if (key) {
    return get(this.vfjsState, key);
  }

  return this.vfjsState;
}

export default getVfjsState;
