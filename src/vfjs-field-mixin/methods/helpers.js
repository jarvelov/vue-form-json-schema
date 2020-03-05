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
      eventsObj = events.reduce((obj, event) => ({ ...obj, [event]: true }), {});
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
    return (data) => {
      if (typeof cb === 'function') {
        return this.setVfjsFieldModel(cb(data));
      }

      if (data instanceof Event) {
        if (data.target && typeof data.target.value !== 'undefined') {
          let value = data.target.value;
          let checked = this.vfjsOptions.componentProperties.domProps.checked;
          if (checked.indexOf(data.target.type) > -1)
            value = data.target.checked;
          return this.setVfjsFieldModel(value);
        }

        return this.setVfjsFieldModel(undefined);
      }

      return this.setVfjsFieldModel(data);
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
};

export default helpers;
