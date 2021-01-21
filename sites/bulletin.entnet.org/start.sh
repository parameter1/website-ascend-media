#!/bin/bash

# run local yarn to get correct bindings for executables
yarn

# Default configs
export NEW_RELIC_ENABLED=0
export NEW_RELIC_LICENSE_KEY=unset
export NODE_ENV=development
export RECAPTCHA_SITE_KEY=unset
export RECAPTCHA_SECRET_KEY=unset
export SENDGRID_API_KEY=unset
export SENDGRID_DEV_TO=support@parameter1.com
export YARN_CACHE_FOLDER=/.yarn-cache

# tauron configs
export GRAPHQL_URI=https://graphql.tauron.base.parameter1.com
export OEMBED_URI=https://oembed.tauron.base.parameter1.com
export RSS_URI=https://rss.tauron.base.parameter1.com
export SITEMAPS_URI=https://sitemaps.tauron.base.parameter1.com

# Site configs
export PORT=9819
export EXPOSED_PORT=9819
export LIVERELOAD_PORT=19819
export TENANT_KEY=ascend_hh
export SITE_ID=6001de6ce8e95f05158b4577

./node_modules/.bin/basecms-website dev index.js
