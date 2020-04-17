import Browser from '@base-cms/marko-web/browser';
import Inquiry from '@base-cms/marko-web-inquiry/browser';
import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import PhotoSwipe from '@base-cms/marko-web-photoswipe/browser';

DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
GCSE(Browser);
SocialSharing(Browser);
PhotoSwipe(Browser);
Inquiry(Browser);

const CompanyProfileWebsiteLink = () => import(/* webpackChunkName: "company-profile-website-link" */ './website-link.vue');
const CompanyProfileSocialLink = () => import(/* webpackChunkName: "company-profile-social-link" */ './social-link.vue');

const { EventBus } = Browser;
Browser.register('CompanyProfileWebsiteLink', CompanyProfileWebsiteLink, {
  on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
});
Browser.register('CompanyProfileSocialLink', CompanyProfileSocialLink, {
  on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
});

export default Browser;
