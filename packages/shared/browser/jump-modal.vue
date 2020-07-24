<template>
  <div>
    <a
      :href="href"
      :class="classNames"
      @click.prevent="displayModal"
    >
      {{ label }}
    </a>
    <modal
      name="jump-modal"
      max-width="500"
      height="auto"
      adaptive
    >
      <div class="text-center p-4 font-size-sm">
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-link font-weight-bold"
            :style="{ color: '#000', fontSize: '24px', padding: 0 }"
            @click="close"
          >
            &times;
          </button>
        </div>
        <img :src="imgSrc" :style="{ width: '200px' }">
        <hr>
        <p>{{ message }}</p>
        <p>{{ href }}</p>
        <a
          class="btn btn-primary"
          :href="href"
          :target="target"
          :rel="rel"
          @click="close"
        >
          {{ buttonLabel }}
        </a>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: '_blank',
    },
    classNames: {
      type: [String, Array, Object],
      default: null,
    },
    message: {
      type: String,
      default: 'The link provided below is for convenience only, and is not an endorsement of either the linked-to entity or any product or service.',
    },
    buttonLabel: {
      type: String,
      default: 'Proceed',
    },
    imgSrc: {
      type: String,
      default: 'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/hearthub/image/static/aha-logo.jpg',
    },
  },

  computed: {
    rel() {
      if (this.target === '_blank') return 'noopener nofollow';
      return 'nofollow';
    },
  },

  methods: {
    displayModal() {
      this.$modal.show('jump-modal');
    },
    close() {
      this.$modal.hide('jump-modal');
    },
  },
};
</script>
