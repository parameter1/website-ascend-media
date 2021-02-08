<template>
  <div class="pagination-page-number">
    <div class="input-group">
      Page
      <input
        class="pagination-page-number__input"
        :value="userPage"
        placeholder="Enter page number"
        @input="setPage($event)"
      >
      of {{ totalPages }}
      <a
        class="btn btn-primary btn--submit"
        href=""
        @click="pageNumberSubmit($event)"
      >
        Go
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
    path: {
      type: String,
      default: '',
    },
    queryStr: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      userPage: this.page,
    };
  },

  methods: {
    setPage(e) {
      const value = parseInt(e.target.value, 10);
      console.log(value);
      if (isNaN(value) || value < 0) {
        this.userPage = 0;
      } else if (value > this.totalPages) {
        this.userPage = this.totalPages;
      } else {
        this.userPage = value;
      }
    },
    pageNumberSubmit(e) {
      e.preventDefault();
      const { userPage } = this;
      const href = (this.queryStr)
        ? `/${this.path}?page=${userPage}&${this.queryStr}`
        : `/${this.path}?page=${userPage}`;
      window.location = href;
    },
  },
};
</script>
