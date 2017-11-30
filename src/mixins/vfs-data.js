import {
  VFS_EVENT_CHANGE,
} from '../constants';

const vfsDataMixin = {
  data() {
    return {
      vfsBus: {},
      vfsComponents: {},
      vfsEvents: [
        VFS_EVENT_CHANGE,
      ],
      vfsModel: {},
      vfsSchema: [],
      vfsState: {},
    };
  },
};

export default vfsDataMixin;
