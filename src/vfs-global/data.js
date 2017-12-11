import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_MODEL_VALIDATE,
  VFS_EVENT_FIELD_STATE_UPDATE,
  VFS_EVENT_MODEL_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_MODEL_VALIDATE,
  VFS_EVENT_STATE_UPDATED,
} from '../constants';

const vfsDataMixin = {
  data() {
    return {
      vfsBus: {},
      vfsComponents: {},
      vfsEvents: [
        VFS_EVENT_FIELD_MODEL_UPDATE,
        VFS_EVENT_FIELD_MODEL_VALIDATE,
        VFS_EVENT_FIELD_STATE_UPDATE,
        VFS_EVENT_MODEL_UPDATE,
        VFS_EVENT_MODEL_UPDATED,
        VFS_EVENT_MODEL_VALIDATE,
        VFS_EVENT_STATE_UPDATED,
      ],
      vfsFieldsActive: [],
      vfsListeners: [],
      vfsModel: {},
      vfsSchema: {},
      vfsUiSchema: [],
      vfsState: {},
      vfsValidator: null,
    };
  },
};

export default vfsDataMixin;
