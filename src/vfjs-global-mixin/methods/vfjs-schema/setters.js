import { cloneDeep, isEqual } from 'lodash';

const vfjsSchemaSetters = {
  setVfjsSchema(value) {
    if (!isEqual(value, this.vfjsSchema)) {
      this.vfjsSchema = cloneDeep(value);
    }
  },
};

export default vfjsSchemaSetters;
