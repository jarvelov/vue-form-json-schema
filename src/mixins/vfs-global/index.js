import {
  VFS_EVENT_MODEL_UPDATED,
  VFS_EXTERNAL_EVENT_CHANGE,
} from '../../constants';

const vfsGlobalMixin = {
  props: {
    fields: {
      type: Object,
      default: () => {},
    },
    model: {
      type: Object,
      default: () => {},
    },
    schema: {
      type: Array,
      required: true,
      default: () => [],
    },
    schemaVersion: {
      type: Number,
      default: 7,
    },
  },
  computed: {
    vfsSchemaValid() {
      return this.vfsSchema.every(this.isVfsFieldSchemaValid);
    },
    vfsModelValid() {
      return this.vfsSchema.every(this.isVfsFieldModelValid);
    },
    vfsFields() {
      return this.vfsSchema.map(this.getVfsField);
    },
  },
  created() {
    this.vfsComponents = this.fields;
    this.vfsSchema = this.schema;
    this.vfsModel = Object.assign({}, this.model);

    this.setVfsSetListeners(this.vfsEvents);
  },
  methods: {
    vfsBusEventHandler(event, value) {
      if (event === VFS_EVENT_MODEL_UPDATED) {
        this.$emit(VFS_EXTERNAL_EVENT_CHANGE, value);
      }

      this.$emit(event, value);
    },
  },
  watch: {
    model(value) {
      this.vfsModel = value;
    },
  },
};

export default vfsGlobalMixin;
