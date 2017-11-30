import {
  VFS_EVENT_MODEL_UPDATED,
} from '../../constants';

const vfsDataMixin = {
  data() {
    return {
      vfsBus: {},
      vfsComponents: {},
      vfsEvents: [
        VFS_EVENT_MODEL_UPDATED,
      ],
      vfsModel: {},
      vfsSchema: [],
      vfsState: {},
    };
  },
};

export default vfsDataMixin;
