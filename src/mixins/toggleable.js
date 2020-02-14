export default {
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
      this.$emit('click', this.isShowing);
    },
  },
};
