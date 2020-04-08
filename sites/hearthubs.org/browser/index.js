import Browser from '@base-cms/marko-web/browser';
import Shared from '@ascend-media/package-shared/browser';

const CompanyProfileWebsiteLink = () => import(/* webpackChunkName: "company-profile-website-link" */ './website-link.vue');
const CompanyProfileSocialLink = () => import(/* webpackChunkName: "company-profile-social-link" */ './social-link.vue');

Shared(Browser);
const { EventBus } = Browser;
Browser.register('CompanyProfileWebsiteLink', CompanyProfileWebsiteLink, {
  on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
});
Browser.register('CompanyProfileSocialLink', CompanyProfileSocialLink, {
  on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
});

export default Browser;
