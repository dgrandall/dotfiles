function formcacheset(e,l,t,c){return null==e||null==l||null==t||0===l.length||0===t.length||null==c?null:"FF"==l||"none"==l?null:(void 0===e.g_form_attr_cache&&(e.g_form_attr_cache=[]),null==e.g_form_attr_cache[l]&&(e.g_form_attr_cache[l]={}),e.g_form_attr_cache[l][t]=c,!0)}function formcacheget(e,l,t){if(null==e||null==l||null==t||0===l.length||0===t.length)return null;if(g_ignore_lp_cache)return null;if("FF"==l||"none"==l)return LPCTR("formcache_miss"),null;if(void 0===e.g_form_attr_cache)return LPCTR("formcache_miss"),null;if(null!=e.g_form_attr_cache[l]&&null!=e.g_form_attr_cache[l][t]){var c=e.g_form_attr_cache[l][t];return"object"==typeof c&&c.tagName&&c.nodeName&&element_is_detached(e,c,0)?(e.g_form_attr_cache[l][t]=null,LPCTR("formcache_miss"),null):(LPCTR("formcache_hit"),c)}return LPCTR("formcache_miss"),null}function formcachereset(e){return null!=e&&(e.g_form_attr_cache=[]),!0}function fieldcacheget(e,l,t){return null==e||null==l||null==t||0===t.length?null:g_ignore_lp_cache?null:void 0===e.g_field_attr_cache?(LPCTR("fieldcache_miss"),null):null!=e.g_field_attr_cache[l]&&null!=e.g_field_attr_cache[l][t]?(LPCTR("fieldcache_hit"),e.g_field_attr_cache[l][t]):(LPCTR("fieldcache_miss"),null)}function fieldcacheset(e,l,t,c){return null==e||null==l||null==t||0===t.length?null:(void 0===e.g_field_attr_cache&&(e.g_field_attr_cache=[]),null==e.g_field_attr_cache[l]&&(e.g_field_attr_cache[l]={}),e.g_field_attr_cache[l][t]=c,!0)}function fieldcachereset(e){return null!=e&&(e.g_field_attr_cache=[]),!0}function gettldcached(e){try{if(void 0!==tldcache[e])return tldcache[e];if("undefined"!=typeof punycode)var l=lp_gettld_url(punycode.URLToASCII(e));else var l=lp_gettld_url(e);return tldcache[e]=l,l}catch(l){return lp_gettld_url(e)}}function LP_measureTextCacheSet(e,l,t,c){return null==e||null==l||null==t||0===l.length||0===t.length||null==c?null:(void 0===e.g_LP_measureText_cache&&(e.g_LP_measureText_cache=[]),null==e.g_LP_measureText_cache[t]&&(e.g_LP_measureText_cache[t]={}),e.g_LP_measureText_cache[t][l]=c,!0)}function LP_measureTextCacheGet(e,l,t){return null==e||null==l||null==t||0===l.length||0===t.length?null:void 0===e.g_LP_measureText_cache?(LPCTR("measureText_miss"),null):null!=e.g_LP_measureText_cache[t]&&null!=e.g_LP_measureText_cache[t][l]?(LPCTR("measureText_hit"),e.g_LP_measureText_cache[t][l]):(LPCTR("measureText_miss"),null)}var tldcache=[];