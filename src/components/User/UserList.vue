<template>
  <div class="user-list">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">Users List</p>
          <span class="card-header-icon"></span>
      </div>
      <div class="card-content">
        <data-table :loading="loading" :headers="headers" :items="users">
          <template #avatar="{ value }">
            <figure class="image is-64x64">
              <img class="is-rounded" :src="value" />
            </figure>
          </template>

          <template #actions="{ item }">
            <div class="buttons">
              <action-button
                color="info"
                :item="item"
                dialog-title="Edit User"
                confirm-button-color="info"
                @click="onClickEdit"
                @click:confirm="onClickConfirmEdit"
              >
                Edit
                <template #dialogBody>
                  <form-inputs :source-item="currentSourceItem"/>
                </template>
              </action-button>

              <action-button
                color="danger"
                :item="item"
                dialog-title="Delete User"
                @click:confirm="onClickConfirmDelete"
              >
                Delete
                <template #dialogBody>
                  Are you sure you want to delete {{ item.fullName }} ?
                </template>
              </action-button>
            </div>
          </template>

          <template #footer>
            <Pagination
              :current-page="usersPagination.page"
              :total-pages="usersPagination.totalPages"
              v-model="page"
            />
          </template>
        </data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { omit, cloneDeep } from 'lodash';

import asyncable from '@/mixins/asyncable';

import User from '@/models/User';

import { mapState, mapActions, mapMutations } from 'vuex';
import { mapCacheActions } from 'vuex-cache';

import { SET_USERS, SET_PAGINATION } from '@/store/mutation-types';

import DataTable from '@/components/DataTable/DataTable.vue';
import Pagination from '@/components/Pagination.vue';
import ActionButton from '@/components/ActionButton.vue';
import FormInputs from '@/components/FormInputs.vue';

export default {
  name: 'UserList',
  components: {
    DataTable,
    Pagination,
    ActionButton,
    FormInputs,
  },
  mixins: [asyncable],
  props: {
    itemsPerPage: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  data() {
    return {
      loading: false,
      headers: [
        { text: 'Picture', value: 'avatar' },
        { text: 'Id', value: 'id' },
        { text: 'Email', value: 'email' },
        { text: 'First name', value: 'firstName' },
        { text: 'Last name', value: 'lastName' },
        { text: 'Actions', value: 'actions' },
      ],
      currentSourceItem: this.createEmptyUser(),
      currentSourceItemId: null,
      page: 1,
    };
  },
  methods: {
    ...mapActions('users', ['createUser', 'updateUser', 'deleteUser']),
    ...mapCacheActions('users', ['readUsers']),
    ...mapMutations('users', [SET_USERS, SET_PAGINATION]),

    toggleLoading() {
      this.loading = !this.loading;
    },

    createEmptyUser() {
      return omit(new User({
        email: '',
        firstName: '',
        lastName: '',
        avatar: '',
      }), 'id');
    },

    onClickEdit({ item }) {
      this.currentSourceItemId = item.id;
      this.currentSourceItem = cloneDeep(omit(item, 'id'));
    },

    async onClickConfirmEdit({ toggleShow, toggleLoading }) {
      await this.asyncAction(
        this.updateUser({
          ...this.currentSourceItem,
          id: this.currentSourceItemId,
        }), { toggleShow, toggleLoading },
      );
    },

    async onClickConfirmDelete({ toggleShow, toggleLoading, item }) {
      await this.asyncAction(
        this.deleteUser(item.id),
        { toggleShow, toggleLoading },
      );
    },

    async onChangePage(page = 1) {
      const [res] = await this.asyncAction(
        this.readUsers({ page, perPage: this.itemsPerPage }),
        { toggleLoading: this.toggleLoading },
      );
      if (res) {
        this.SET_USERS(res);
        this.SET_PAGINATION(res);
      }
    },
  },
  computed: {
    ...mapState('users', ['users', 'usersPagination']),
  },
  watch: {
    page: {
      handler: 'onChangePage',
      immediate: true,
    },
  },
};
</script>
