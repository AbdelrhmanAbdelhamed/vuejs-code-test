export default {
  data() {
    return {
      isRounded: false,
    };
  },
  computed: {
    roundedClass() {
      return { 'is-rounded': this.isRounded };
    },
  },
};
