<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      class="pagination-previous"
      @click="!isInFirstPage && onClickPrevious()"
      :disabled="isInFirstPage"
    >
      <slot name="previous">Previous</slot>
    </a>
    <ul class="pagination-list">
      <li v-for="(page, index) in pages" :key="index">
        <a
          class="pagination-link"
          :aria-label="`Goto page ${page.number}`"
          @click="!page.isDisabled && onClickPage(page.number)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.number) }"
        >
          {{ page.number }}
        </a>
      </li>
    </ul>
    <a class="pagination-next" @click="!isInLastPage && onClickNext()" :disabled="isInLastPage">
      <slot name="next">Next</slot>
    </a>
  </nav>
</template>

<script>
import { range } from 'lodash';

export default {
  name: 'Pagination',
  model: {
    prop: 'currentPage',
    event: 'change',
  },
  props: {
    currentPage: {
      type: Number,
      required: false,
      default: 1,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    firstPage() {
      return 1;
    },
    lastPage() {
      return this.totalPages;
    },
    pages() {
      return range(this.firstPage, this.lastPage + 1).map((number) => ({
        number,
        isDisabled: number === this.currentPage,
      }));
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickPrevious() {
      this.$emit('change', this.currentPage - 1);
      this.$emit('previous');
    },
    onClickPage(page) {
      this.$emit('change', page);
    },
    onClickNext() {
      this.$emit('change', this.currentPage + 1);
      this.$emit('next');
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>
