export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  computed: {
    colorClass() {
      return `is-${this.color}`;
    },
  },
};
