export default {
  props: {
    route: {
      required: false,
      default: '',
    },
  },
  computed: {
    isRouteActive() {
      return this.$route && this.$route.path === this.route;
    },
    routeClass() {
      return { 'is-active': this.isRouteActive };
    },
  },
  methods: {
    goToRoute() {
      if (this.route) this.$router.push(this.route);
    },
  },
};
