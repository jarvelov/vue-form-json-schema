import { merge } from 'lodash';

const computed = {
  vfjsAttributes() {
    return {
      ...this.getVfjsFieldAttributes(
        this.vfjsFieldOptions,
        merge({}, this.defaultOptions, {
          props: this.$options.propsData,
        }),
      ),
    };
  },
};

export default computed;
