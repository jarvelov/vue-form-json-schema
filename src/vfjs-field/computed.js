const computed = {
  vfjsAttributes() {
    return this.getVfjsFieldAttributes(
      this.vfjsFieldOptions,
      this.defaultOptions,
      {
        props: this.$options.propsData,
      },
    );
  },
};

export default computed;
