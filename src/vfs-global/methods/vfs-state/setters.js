import {
  VFS_EVENT_FIELD_STATE_UPDATE,
  VFS_EVENT_STATE_UPDATED,
} from '../../../constants';

const vfsStateSetters = {
  setVfsFieldState(value, key) {
    this.vfsBus.$emit(VFS_EVENT_FIELD_STATE_UPDATE, {
      key: key || this.vfsFieldModelKey,
      value,
    });
  },
  setVfsState(state) {
    this.vfsState = Object.assign({}, this.getVfsState(), state);
    this.vfsBus.$emit(VFS_EVENT_STATE_UPDATED);
  },
};

export default vfsStateSetters;
