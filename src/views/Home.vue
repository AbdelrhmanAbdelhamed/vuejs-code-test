<template>
  <div class="home">
    <UserList :itemsPerPage="4"/>
  </div>
</template>

<script>
import UserList from '@/components/User/UserList.vue';

export default {
  components: {
    UserList,
  },
};
</script>
