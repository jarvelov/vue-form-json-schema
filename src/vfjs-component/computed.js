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
            required: this.vfjsFieldRequired,
          },
          props: this.$options.propsData,
        }),
      ),
    };
  },
};

export default computed;
