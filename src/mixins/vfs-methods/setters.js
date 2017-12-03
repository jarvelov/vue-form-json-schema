import { set } from 'lodash';
import {
  VFS_EVENT_MODEL_UPDATED,
} from '../../constants';

const vfsMethodsSettersMixin = {
  setVfsListener(event, cb) {
    this.vfsBus.$on(event, (value) => {
      if (cb) {
        cb(event, value);
      }

      this.vfsBusEventHandler(event, value);
    });
  },
  setVfsSetListeners(events = []) {
    events.forEach(this.setVfsListener);
  },
  setVfsFieldModel(value, key) {
    if (!key || !this.vfsFieldModelKey) {
      throw new Error('Could not determine model key and no key argument was submitted');
    }

    const path = key || this.vfsFieldModelKey;

    const newModel = Object.assign({}, this.vfsModel);

    set(newModel, path, value);

    this.vfsBus.$emit(VFS_EVENT_MODEL_UPDATED, newModel);
  },
};

export default vfsMethodsSettersMixin;
