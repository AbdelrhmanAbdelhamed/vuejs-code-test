<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <div class="hero-head">
        <TheNavBar
         :loggedIn="loggedIn"
         @logout="onClickLogout"
        />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div>
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  components: {
    TheNavBar,
  },
  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async onClickLogout() {
      await this.logout();
      this.$router.replace({ name: 'login' });
    },
  },
};
</script>

<style></style>
