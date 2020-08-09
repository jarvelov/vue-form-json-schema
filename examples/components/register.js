import CollapsePrettyPrint from "./CollapsePrettyPrint.vue";
import PrettyPrint from "./PrettyPrint.vue";
import Message from "./Message.vue";
import ComponentProperty from "./ComponentProperty";
import BasicValueProp from "./Examples/BasicValueProp";
import BasicEventProp from "./Examples/BasicEventProp";
import BasicInput from "./Examples/BasicInput";

const components = [
  {
    name: "pretty-print",
    component: PrettyPrint
  },
  {
    name: "collapse-pretty-print",
    component: CollapsePrettyPrint
  },
  {
    name: "message",
    component: Message
  },
  {
    name: "component-property",
    component: ComponentProperty
  },
  {
    name: "basic-input",
    component: BasicInput
  },
  {
    name: "basic-event-prop",
    component: BasicEventProp
  },
  {
    name: "basic-value-prop",
    component: BasicValueProp
  }
];

const getExamples = (components) => {
  return Object.keys(components).reduce((items, key) => {
    const component = components[key];

    if (component && component.options) {
      const { label, description } = component.options;

      if (label) {
        items.push({
          description,
          label,
          value: key
        });
      }
    }

    return items;
  }, []);
};

const VfjsExamples = {};

VfjsExamples.install = function(Vue) {
  const examples = getExamples(Vue.options.components);

  Vue.prototype.$examples = () => examples;
};

export default (Vue) => {
  components.forEach(({ name, component }) => {
    Vue.component(name, component);
  });

  Vue.use(VfjsExamples);
};
