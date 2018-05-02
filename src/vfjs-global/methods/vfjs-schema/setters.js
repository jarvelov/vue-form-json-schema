import { cloneDeep } from 'lodash';

const vfjsSchemaSetters = {
  setVfjsSchema(value) {
    this.vfjsSchema = cloneDeep(value);
  },
};

export default vfjsSchemaSetters;
