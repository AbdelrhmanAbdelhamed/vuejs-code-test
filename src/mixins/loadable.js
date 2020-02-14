export default {
  data() {
    return {
      loadingClass: 'is-loading',
    };
  },
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
