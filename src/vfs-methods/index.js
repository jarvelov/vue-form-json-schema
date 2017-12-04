import getters from './getters';
import setters from './setters';

const vfsMethodsMixin = {
  methods: {
    ...getters,
    ...setters,
  },
};

export default vfsMethodsMixin;
