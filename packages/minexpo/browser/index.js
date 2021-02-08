import Directory from '@ascend-media/package-directory/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import paginationPageNumberInput from './pagination-page-number-input.vue';

export default (Browser) => {
  Directory(Browser);
  Inquiry(Browser);
  Browser.registerComponent('PaginationPageNumberInput', paginationPageNumberInput);
};
