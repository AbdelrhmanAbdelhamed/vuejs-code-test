export default {
  props: {
    size: {
      type: String,
      required: false,
      default: 'normal',
    },
  },
  computed: {
    sizeClass() {
      return `is-${this.size}`;
    },
  },
};
