function LPdriver(){this.derive_doc=function(){var e=null;return e="undefined"!=typeof g_isfirefox&&g_isfirefox&&LP?LP.getBrowser().contentDocument:document,e?e:null},this.find_element_by_id=function(e,n){return e||(e=this.derive_doc())?e.getElementById(n):null},this.find_element_by_name=function(e,n){if(!e&&!(e=this.derive_doc()))return null;var t=e.getElementsByName(n);return!t||t.length<1?null:t[0]},this.find_element_by_xpath=function(e,n){return e||(e=this.derive_doc())?LP_getElementByXPath(e,n):null},this.find_element_by_link_text=function(e,n){return e||(e=this.derive_doc()),null},this.find_element_by_partial_link_text=function(e,n){return e||(e=this.derive_doc()),null},this.find_element_by_tag_name=function(e,n){if(!e&&!(e=this.derive_doc()))return null;if(void 0!==e.getElementsByTagName){var t=e.getElementsByTagName(n);return t&&t.length>0?t[0]:null}return null},this.find_element_by_class_name=function(e,n){if(!e&&!(e=this.derive_doc()))return null;var t=e.getElementsByClasName(n);return!t||t.length<1?null:t[0]},this.find_element_by_css_selector=function(e,n){if(!e&&!(e=this.derive_doc()))return null;if(void 0===e.querySelectorAll)return null;var t=e.querySelectorAll(n);return t&&t.length>0?t:null},this.find_elements_by_name=function(e,n){return e||(e=this.derive_doc())?e.getElementsByName(n):null},this.find_elements_by_xpath=function(e,n){return e||(e=this.derive_doc())?LP_getElementByXPath(e,n):null},this.find_elements_by_link_text=function(e,n){return e||(e=this.derive_doc()),null},this.find_elements_by_partial_link_text=function(e,n){return e||(e=this.derive_doc()),null},this.find_elements_by_tag_name=function(e,n){if(!e&&!(e=this.derive_doc()))return null;if(void 0!==e.getElementsByTagName){var t=e.getElementsByTagName(n);return t&&t.length>0?t:null}return null},this.find_elements_by_class_name=function(e,n){return e||(e=this.derive_doc())?e.getElementsByClassName(n):null},this.find_elements_by_css_selector=function(e,n){if(!e&&!(e=this.derive_doc()))return null;if(void 0===e.querySelectorAll)return null;var t=e.querySelectorAll(n);return t&&t.length>0?t:null},this.find_input_elements_by_id=function(e,n){if(!e&&!(e=this.derive_doc()))return null;if(void 0!==e.getElementsByTagName){var t,l=e.getElementsByTagName("INPUT"),i=[];if(l)for(t=0;t<l.length;t++)l[t]&&l[t].id==n&&i.push(l[t]);return i.length<1?null:i}}}