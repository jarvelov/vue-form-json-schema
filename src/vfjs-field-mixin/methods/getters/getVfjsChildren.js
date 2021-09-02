import vfjsHelperCreateElement from '../../../vfjs-global-mixin/methods/vfjs-helpers/vfjsHelperCreateElement';

function getVfjsChildren() {
  const { default: defaultSlot, ...slots } = this.$slots;

  const namedSlots = Object.keys(slots).map((key) => [
    vfjsHelperCreateElement(
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
