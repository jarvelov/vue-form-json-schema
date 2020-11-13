function getVfjsChildren() {
  const { default: defaultSlot, ...slots } = this.$slots;

  const namedSlots = Object.keys(slots).map((key) => [
    this.$createElement(
      'template',
      {
        slot: key,
      },
      slots[key],
    ),
  ]);

  return [defaultSlot, ...namedSlots];
}

export default getVfjsChildren;
