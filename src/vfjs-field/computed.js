const computed = {
  vfjsAttributes() {
    return this.vfjsGetFieldAttributes(
      this.vfjsFieldOptions,
      this.defaultOptions,
      {
        props: this.$options.propsData,
      },
    );
  },
};

export default computed;
