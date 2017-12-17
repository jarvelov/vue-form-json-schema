import { merge } from 'lodash';

const computed = {
  vfjsAttributes() {
    return {
      ...this.getVfjsFieldAttributes(
        this.vfjsFieldOptions,
        merge({}, this.vfjsDefaultOptions, {
          attrs: {
            required: this.vfjsFieldRequired,
          },
          key: this.vfjsFieldId,
          props: this.$options.propsData,
        }),
      ),
    };
  },
};

export default computed;
