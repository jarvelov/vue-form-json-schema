import { merge } from 'lodash';

function getVfjsUiField(field) {
  if (this.getVfjsUiFieldVisible(field)) {
    const isArray = this.vfjsHelperFieldIsArray(field.model);
    const required = this.vfjsHelperFieldIsRequired(field.model);

    const dynamicProperties = this.vfjsHelperFieldDynamicProperties(field);
    const { children = [], ...fieldProperties } = merge(
      {},
      field,
      dynamicProperties,
    );

    if (isArray) {
      return {
        ...fieldProperties,
        required,
        children: this.getVfjsUiFieldArrayChildrenActive(
          field.model,
          children,
        ),
      };
    }

    return {
      ...fieldProperties,
      required,
      children: this.getVfjsUiFieldsActive(children),
    };
  }

  return false;
}

export default getVfjsUiField
