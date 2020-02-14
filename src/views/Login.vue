<template>
  <div>
    <div class="column">
      <h3 class="title has-text-black">Login</h3>
      <p class="subtitle has-text-black">Please login to proceed.</p>
    </div>

    <ValidationObserver #default="{ handleSubmit  }">
      <form @submit.prevent="handleSubmit(onClickLogin)">
        <ValidationProvider
          name="Email"
          rules="required|email" #default="{ touched, failed, errors }"
        >
          <BaseInput
            name="Email"
            type="email"
            placeholder="Email"
            autocomplete="username"
            :message="errors[0]"
            :color="touched && failed ? 'danger' : 'primary'"
            v-model="email"
          >
          </BaseInput>

          <span class="is-clearfix"></span>
        </ValidationProvider>

        <ValidationProvider
          name="Password"
          rules="required" #default="{ touched, failed, errors }"
        >
          <BaseInput
            name="Password"
            type="password"
            placeholder="Password"
            autocomplete="current-password"
            :message="errors[0]"
            :color="touched && failed ? 'danger' : 'primary'"
            v-model="password"
          />
          <span class="is-clearfix"></span>
        </ValidationProvider>

        <div class="field">
          <p class="control">
            <base-button
              :loading="loading"
              :disabled="loading"
              type="submit"
            >
              Login
            </base-button>
          </p>
        <span v-if="error">
          <p class="has-text-danger">
            {{ error }}
          </p>
        </span>
        </div>
      </form>
  </ValidationObserver>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import asyncable from '@/mixins/asyncable';

export default {
  mixins: [asyncable],
  data() {
    return {
      loading: false,
      error: '',
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },
  methods: {
    ...mapActions('auth', ['login']),

    toggleLoading() {
      this.loading = !this.loading;
    },

    async onClickLogin() {
      const [, error] = await this.asyncAction(
        this.login({ email: this.email, password: this.password }),
        { toggleLoading: this.toggleLoading },
      );
      if (error) this.error = error.response.data.error;
      if (this.loggedIn) this.$router.replace(this.$route.query.redirect || '/');
    },
  },
};
</script>
