import { set } from 'lodash';
import {
  VFS_EVENT_MODEL_UPDATED,
} from '../constants';

const vfsMethodsSettersMixin = {
  methods: {
    setVfsListener(event, cb) {
      this.vfsBus.$on(event, (value) => {
        if (cb) {
          cb(event, value);
        }

        this.vfsEventHandler(event, value);
      });
    },
    setVfsSetListeners(events = []) {
      events.forEach(this.setVfsListener);
    },
    setVfsFieldModel(key, value) {
      const newModel = Object.assign({}, this.vfsModel);

      set(newModel, key || this.vfsFieldModelKey, value);

      this.vfsBus.$emit(VFS_EVENT_MODEL_UPDATED, newModel);
    },
  },
};

export default vfsMethodsSettersMixin;
