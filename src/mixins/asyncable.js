export default {
  methods: {
    async asyncAction(actionPromise, {
      toggleShow, toggleLoading,
    } = {}) {
      if (toggleLoading) toggleLoading();
      return actionPromise
        .then((res) => {
          if (toggleShow) toggleShow();
          if (toggleLoading) toggleLoading();
          return ([res, undefined]);
        })
        .catch((error) => {
          if (toggleLoading) toggleLoading();
          return Promise.resolve([undefined, error]);
        });
    },
  },
};
