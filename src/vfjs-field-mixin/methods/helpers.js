import { VFJS_EVENT_UI_FIELDS_UPDATE } from '../../constants';

const helpers = {
  vfjsFieldHelperAddListener(el, event) {
    el.addEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperRemoveListener(el, event) {
    el.removeEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperStateEventHandler(event) {
    if (event && event.type === 'blur') {
      const initialBlur = this.vfjsFieldState.vfjsFieldBlur;
      this.setVfjsFieldState({
        ...this.vfjsFieldState,
        vfjsFieldBlur: true,
      });

      if (!initialBlur) {
        this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE);
      }
    }
  },
  vfjsFieldHelperFormatEvents(events) {
    if (!events) {
      return {};
    }

    let eventsObj = events;

    if (Array.isArray(events)) {
      eventsObj = events.reduce(
        (obj, event) => ({ ...obj, [event]: true }),
        {},
      );
    } else if (typeof events === 'string') {
      eventsObj = { [events]: true };
    }

    return this.vfjsFieldHelperFormatEventsReducer(eventsObj);
  },
  vfjsFieldHelperFormatClasses(classes) {
    if (!classes) {
      return {};
    }

    if (typeof classes === 'string') {
      return {
        [classes]: true,
      };
    }

    if (Array.isArray(classes)) {
      return classes.reduce(
        (classesObj, key) => ({
          ...classesObj,
          [key]: true,
        }),
        {},
      );
    }

    if (typeof classes === 'string') {
      if (classes.indexOf(',') !== -1) {
        return classes.split(',');
      }

      if (classes.indexOf(' ') !== -1) {
        return classes.split(' ');
      }
    }

    return classes;
  },
  vfjsFieldHelperEventHandler(key, cb) {
    return (...args) => {
      const [event] = args;
      let value = event;

      if (typeof cb === 'function') {
        value = cb(...args);
      } else if (event instanceof Event) {
        if (
          event.target &&
          typeof event.target[this.vfjsFieldEventProp] !== 'undefined'
        ) {
          value = event.target[this.vfjsFieldEventProp];
        }
      }

      if (this.vfjsFieldHelperInternalModelEnabledForEvent(key)) {
        // Set internal value so that on next re-render the new value will be updated
        this.vfjsInternalModel = value;
      }

      return this.setVfjsFieldModel(value);
    };
  },
  vfjsFieldHelperFormatEventsReducer(events = {}) {
    return Object.keys(events).reduce(
      (formattedEvents, key) => ({
        ...formattedEvents,
        [key]: this.vfjsFieldHelperEventHandler(key, events[key]),
      }),
      {},
    );
  },
  vfjsFieldHelperComponentMatchesComponentProperties(componentProperties) {
    return componentProperties.some((componentProperty) => {
      if (typeof componentProperty === 'string') {
        return this.vfjsComponent === componentProperty;
      }

      if (typeof componentProperty === 'object') {
        const { component, ...properties } = componentProperty;

        if (this.vfjsComponent === component) {
          return Object.keys(properties).every((property) => {
            if (property in this.vfjsFieldOptions) {
              const keys = properties[property];

              return Object.keys(keys).every(
                (key) => this.vfjsFieldOptions[property][key] === keys[key],
              );
            }

            return false;
          });
        }
      }

      return false;
    });
  },
  vfjsFieldHelperAttrsChecked() {
    const { checked = [] } = this.vfjsOptions.componentProperties.attrs;
    if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
      if (this.vfjsFieldOptions.attrs) {
        if (
          typeof this.vfjsFieldModel !== 'undefined' &&
          this.vfjsFieldModel === this.vfjsFieldOptions.attrs.value
        ) {
          return true;
        }

        return this.vfjsFieldOptions.attrs.checked;
      }
    }

    return undefined;
  },
  vfjsFieldHelperAttrsRequired() {
    const { required = [] } = this.vfjsOptions.componentProperties.attrs;

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(required)) {
      return this.vfjsFieldRequired;
    }

    return undefined;
  },
  vfjsFieldHelperAttrsValue() {
    const { value = [] } = this.vfjsOptions.componentProperties.attrs;
    if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
      if (this.vfjsFieldModel) {
        return this.vfjsFieldModel;
      }

      return this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value;
    }

    return undefined;
  },
  vfjsFieldHelperDomPropsInnerHTML() {
    const { innerHTML = [] } = this.vfjsOptions.componentProperties.domProps;

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(innerHTML)) {
      if (this.vfjsFieldModel) {
        return this.vfjsFieldModel;
      }

      return (
        this.vfjsFieldOptions.domProps &&
        this.vfjsFieldOptions.domProps.innerHTML
      );
    }

    return undefined;
  },
  vfjsFieldHelperDomPropsValue() {
    const { value = [] } = this.vfjsOptions.componentProperties.domProps;
    if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
      if (this.vfjsFieldModel) {
        return this.vfjsFieldModel;
      }

      return (
        this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.value
      );
    }

    return undefined;
  },
  vfjsFieldHelperDomPropsChecked() {
    const { checked = [] } = this.vfjsOptions.componentProperties.domProps;
    if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
      if (this.vfjsFieldOptions.domProps) {
        if (this.vfjsFieldModel === this.vfjsFieldOptions.domProps.value) {
          return true;
        }

        return this.vfjsFieldOptions.domProps.checked;
      }
    }

    return undefined;
  },
  vfjsFieldHelperPropsRequired() {
    const { required = [] } = this.vfjsOptions.componentProperties;
    if (this.vfjsFieldHelperComponentMatchesComponentProperties(required)) {
      return this.vfjsFieldRequired;
    }

    return undefined;
  },
  vfjsFieldHelperInternalModelEnabledForEvent(key) {
    if (this.vfjsFieldInternalModel) {
      if (Array.isArray(this.vfjsFieldInternalModel)) {
        return this.vfjsFieldInternalModel.indexOf(key) >= 0;
      }

      return this.vfjsFieldInternalModel === true;
    }

    return false;
  },
};

export default helpers;
