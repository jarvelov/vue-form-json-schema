import { merge } from 'lodash';

const computed = {
  vfjsAttributes() {
    return {
      ...this.getVfjsFieldAttributes(
        this.vfjsFieldOptions,
        merge({}, this.vfjsDefaultOptions, {
          attrs: {
            id: this.vfjsFieldUuid,
            key: this.vfjsFieldUuid,
          },
          props: this.$options.propsData,
        }),
      ),
    };
  },
};

export default computed;
