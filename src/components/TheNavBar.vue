<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
        </a>
        <span class="navbar-item">
            <base-button
              class="is-inverted"
              @click="$emit('logout')"
              v-if="loggedIn"
            >
                Logout
              </base-button>
            </span>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  props: {
    loggedIn: {
      type: Boolean,
      required: true,
    },
  },

};
</script>
