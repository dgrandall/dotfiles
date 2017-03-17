/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
function initClearlyComponent__highlight(a){if(!a)return!1;var b=a;switch(!0){case!b.settings:case!b.settings.path:case!b.window:case!b.window.document:case!b.window.document.body:case!b.jQuery:return b.debug&&(console.log(!b.settings),console.log(!b.settings.path),console.log(!b.window),console.log(!b.window.document),console.log(!b.window.document.body),console.log(!b.jQuery)),!1}b.document=b.window.document;var c=function(a,c){b.settings[a]||(b.settings[a]=c)};c("elementWhichMustContainAllHighlights",b.document.body),c("elementsToAttachMouseHandlersTo",[b.document.body]),c("onInsertCSSUseThisId","clearly_highlighting_css"),c("onInsertCSSImagesUseThisId","clearly_highlighting_css_images"),c("highlightingEnabledCSSClass","clearly_highlighting_enabled"),c("highlightElementIdAttribute","clearly_highlight_id"),c("highlightElementCSSClass","clearly_highlight_element"),c("highlightElementFirstCSSClass","clearly_highlight_first"),c("highlightElementLastCSSClass","clearly_highlight_last"),c("highlightElementDeleteCSSClass","clearly_highlight_delete_element"),c("highlightElementDeleteIdPrefix","clearly_highlight_delete__"),c("highlightCleanHTMLElementStart",'<span style="-evernote-highlighted:true; background-color:#f6ee96">'),c("highlightCleanHTMLElementEnd","</span>"),c("cssPath",b.settings.path+"css/"),c("cssImagesFile",b.settings.cssPath+"images.css");var d=b.jQuery;if(b.$window=d(b.window),b.$document=d(b.document),b.$html=b.$document.find("html"),b.$elementWhichMustContainAllHighlights=d(b.settings.elementWhichMustContainAllHighlights),b.enabled=!1,b.parseOptions={_elements_ignore:"|button|input|select|textarea|optgroup|command|datalist|--|frame|frameset|noframes|--|style|link|script|noscript|--|canvas|applet|map|--|marquee|area|base|",_elements_ignore_tag:"|form|fieldset|details|dir|--|center|font|span|",_elements_container:"|body|--|article|section|--|div|--|td|--|li|--|dd|dt|",_elements_self_closing:"|br|hr|--|img|--|col|--|source|--|embed|param|--|iframe|",_elements_highlight_protect:"|video|audio|source|--|object|param|embed|",_elements_keep_attributes:{a:["href","title","name"],img:["src","width","height","alt","title"],video:["src","width","height","poster","audio","preload","autoplay","loop","controls"],audio:["src","preload","autoplay","loop","controls"],source:["src","type"],object:["data","type","width","height","classid","codebase","codetype"],param:["name","value"],embed:["src","type","width","height","flashvars","allowscriptaccess","allowfullscreen","bgcolor"],iframe:["src","width","height","frameborder","scrolling"],td:["colspan","rowspan"],th:["colspan","rowspan"]}},b.debug=b.debug||!1,b.debug){switch(!0){case!(!b.window.console||!b.window.console.log):b.logOneline=function(a){b.window.console.log(a)};break;case!(!b.window.opera||!b.window.opera.postError):b.logOneline=function(a){b.window.opera.postError(a)};break;default:b.logOneline=function(a){}}b.log=function(){if(b.debug){for(var a=0,c=arguments.length;a<c;a++)b.logOneline(arguments[a]);b.logOneline("-----------------------------------------")}}}else b.logOneline=function(){return!1},b.log=function(){return!1};return b.escape_html=function(a){var b={"&":"amp",'"':"quot","<":"lt",">":"gt"};return a&&a.replace?a.replace(/[&"<>]/g,function(a){return"&"+b[a]+";"}):""},b.rand=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},b.insertCSS=function(){b.$document.find("head").append('<link id="'+b.escape_html(b.settings.onInsertCSSUseThisId)+'" href="'+b.escape_html(b.settings.cssPath+"style.css")+'" rel="stylesheet" type="text/css" />'),b.$document.find("head").append('<link id="'+b.escape_html(b.settings.onInsertCSSImagesUseThisId)+'" href="'+b.escape_html(b.settings.cssImagesFile)+'" rel="stylesheet" type="text/css" />')},b.sel={},b.sel.getWindowFromDocument=function(a){return a?("defaultView"in a?arguments.calee=function(a){return a?a.defaultView:null}:"parentWindow"in a?arguments.calee=function(a){return a?a.parentWindow:null}:arguments.calee=function(a){return null},arguments.calee(a)):null},b.sel.getSelection=function(a){return a?("getSelection"in a?arguments.calee=function(a){return a?a.getSelection():null}:"selection"in a.document?arguments.calee=function(a){return a?a.document.selection:null}:arguments.calee=function(a){return null},arguments.calee(a)):null},b.sel.getRange=function(a){return a?("getRangeAt"in a?arguments.calee=function(a){return a&&a.rangeCount>0?a.getRangeAt(0):null}:"createRange"in a?arguments.calee=function(a){return a?a.createRange():null}:arguments.calee=function(a){return null},arguments.calee(a)):null},b.sel.getRangeHTML=function(a){return a?("htmlText"in a?arguments.calee=function(a){return a?a.htmlText:null}:"surroundContents"in a?arguments.calee=function(a){if(!a)return null;if(!a.commonAncestorContainer||!a.commonAncestorContainer.ownerDocument)return null;var b=a.commonAncestorContainer.ownerDocument.createElement("div");return b.appendChild(a.cloneContents()),b.innerHTML}:arguments.calee=function(a){return null},arguments.calee(a)):null},b.sel.getRangeText=function(a){return a?("text"in a?arguments.calee=function(a){return a?a.text:null}:"surroundContents"in a?arguments.calee=function(a){if(!a)return null;if(!a.commonAncestorContainer||!a.commonAncestorContainer.ownerDocument)return null;var b=a.commonAncestorContainer.ownerDocument.createElement("div");return b.appendChild(a.cloneContents()),b.textContent}:arguments.calee=function(a){return null},arguments.calee(a)):null},b.highlight__deleteSpansFromParents=function(a){for(var b=[],c=!1,d="",e=0,f=a.length;e<f;e++){c=!1;for(var g=0,h=b.length;g<h;g++)if(b[g]==a[e]){c=!0;break}c||(b.push(a[e]),d=a[e].innerHTML,d.indexOf("<span")>-1&&(d=d.replace(/<span([^>]*?)>/gi,""),d=d.replace(/<\/span>/gi,""),a[e].innerHTML=d))}},b.highlight__getDeepestTextNode=function(a){for(var b=a;;)switch(!0){case b.nodeType&&3==b.nodeType:return b;case b.nodeType&&1==b.nodeType&&b.childNodes.length>0:b=b.childNodes[0];break;case b.nodeType&&1==b.nodeType&&0==b.childNodes.length&&b.nextSibling:b=b.nextSibling;break;default:return a}return a},b.highlight__getCommonAncestorContainerForNodes=function(a,b,c){for(var e=a,f=b;;){switch(e=e.parentNode,f=f.parentNode,!0){case!e:case!f:case e==c:case f==c:return c}switch(!0){case e==f:return e;case d.contains(e,b):return e;case d.contains(f,a):return f;case d.contains(e,f):return e;case d.contains(f,e):return f}}return c},b.highlight__getParentElementOfNode=function(a){for(var b=a;;){if(1==b.nodeType)break;b=b.parentNode}return b},b.highlight__getParentElementOfNodeWithThisParent=function(a,b){switch(!0){case a==b:return a;case!d.contains(b,a):return a}for(var c=a;;){if(c.parentNode==b)break;c=c.parentNode}return c},b.highlight__buildHTMLForElementWithSelectedRange=function(a,c,e){var f=0,g="",h="boundry-end"==c,i=function(a){f++;var j=3===a.nodeType?"#text":1===a.nodeType&&a.tagName&&a.tagName>""?a.tagName.toLowerCase():"#invalid",k=b.parseOptions._elements_ignore_tag.indexOf("|"+j+"|")>-1,k=!!k&&"span"!=j,l=0,m=0,n=0,o=0,p="",q=!1,r=!1;switch(!0){case"#invalid"==j:case b.parseOptions._elements_ignore.indexOf("|"+j+"|")>-1:return;case"#text"==j:switch(p=a.nodeValue.replace(/</gi,"&lt;").replace(/>/gi,"&gt;"),!0){case"nothing"==c:break;case"everything"==c:p="<highlight>"+p+"</highlight>";break;case"boundry-start"==c:case"boundry-end"==c:case"boundry-both"==c:if(a==e.endContainer&&(p="<highlight>"+p.substr(0,e.endOffset)+"</highlight>"+p.substr(e.endOffset),h=!1,r=!0),a==e.startContainer&&(p=""+p.substr(0,e.startOffset)+"<highlight>"+p.substr(e.startOffset)+"</highlight>",h=!0,q=!0),q&&r&&(p=a.nodeValue.replace(/</gi,"&lt;").replace(/>/gi,"&gt;"),p=""+p.substr(0,e.startOffset)+"<highlight>"+p.substr(e.startOffset,e.endOffset-e.startOffset)+"</highlight>"+p.substr(e.endOffset),h=!1),q&&e.startOffset>0&&(p=p.replace(/([ .,;?!])([a-z0-9]{1,2})<highlight>/gi,"$1<highlight>$2"),p=p.replace(/<highlight>([\s])([^\s])/gi,"$1<highlight>$2"),p=p.replace(/<highlight>([a-z0-9])([ ])([a-z0-9])/gi,"$1$2<highlight>$3")),r&&e.endOffset>0){var s=!0;e.endContainer&&e.endContainer.nodeValue&&e.endContainer.nodeValue.length&&(s=e.endOffset<e.endContainer.nodeValue.length),s&&(p=p.replace(/<\/highlight>([a-z0-9]{0,2})([ .,;?!])/gi,"$1$2</highlight>"),p=p.replace(/([^\s])([\s])<\/highlight>/gi,"$1</highlight>$2"),p=p.replace(/([ ])([a-z0-9])<\/highlight>([a-z0-9])/gi,"</highlight>$1$2$3"))}q||r||(p=a.nodeValue.replace(/</gi,"&lt;").replace(/>/gi,"&gt;"),h&&(p="<highlight>"+p+"</highlight>"))}return void(g+=p)}if(1==e.endContainer.nodeType&&a==e.endContainer&&(h=!1,r=!0),1==e.startContainer.nodeType&&a==e.startContainer&&(h=!0,q=!0),q&&r&&(h=!1),k);else{if(l=g.length,g+="<"+j,j in b.parseOptions._elements_keep_attributes)for(var t=0,u=b.parseOptions._elements_keep_attributes[j].length;t<u;t++){var v=b.parseOptions._elements_keep_attributes[j][t],w=a.getAttribute(v);w>""&&(g+=" "+v+'="'+w+'"')}var x=a.getAttribute("id"),y=a.getAttribute("data-evernote-id");y&&(g+=' data-evernote-id="'+y+'"'),x>""&&(g+=' id="'+x+'"'),"a"==j&&(g+=' target="_blank"');var z=a.getAttribute("class");if(z>""&&(g+=' class="'+z+'"'),"em"==j&&"everything"!=c)switch(!0){case h:case 0==e.startOffset&&a.firstChild&&a.firstChild==e.startContainer:break;default:var A=a.getAttribute(b.settings.highlightElementIdAttribute);A>""&&(g+=" "+b.settings.highlightElementIdAttribute+'="'+A+'"')}g+=b.parseOptions._elements_self_closing.indexOf("|"+j+"|")>-1?" />":">",m=g.length}if(b.parseOptions._elements_self_closing.indexOf("|"+j+"|")>-1);else for(var t=0,u=a.childNodes.length;t<u;t++)i(a.childNodes[t]);switch(!0){case k:return;case b.parseOptions._elements_self_closing.indexOf("|"+j+"|")>-1:n=g.length,o=g.length;break;default:n=g.length,g+="</"+j+">",o=g.length}switch(!0){case b.parseOptions._elements_highlight_protect.indexOf("|"+j+"|")>-1:case"em"==j&&d(a).hasClass(b.settings.highlightElementCSSClass):g=""+g.substr(0,m)+g.substr(m,n-m).replace(/<highlight>/gi,"").replace(/<\/highlight>/gi,"")+g.substr(n);break;case"a"==j&&"deleteHighlight"==a.className:g=g.substr(0,l)+g.substr(o)}};return i(a),g=g.replace(/<highlight>/gi,'<em class="'+b.settings.highlightElementCSSClass+'">').replace(/<\/highlight>/gi,"</em>")},b.highlight__doRange=function(a){var c=b.highlight__getParentElementOfNode(a.commonAncestorContainer),e=b.highlight__getParentElementOfNodeWithThisParent(a.startContainer,c),f=b.highlight__getParentElementOfNodeWithThisParent(a.endContainer,c);if(c.tagName&&!d.contains(b.settings.elementWhichMustContainAllHighlights,c))return!1;if(b.callbacks&&b.callbacks.arbitraryRangeExclusion&&b.callbacks.arbitraryRangeExclusion(a,c,e,f)===!1)return!1;for(var g=b.rand(1,1e3);;){if(!(b.$elementWhichMustContainAllHighlights.find("em."+b.settings.highlightElementCSSClass+"["+b.settings.highlightElementIdAttribute+'="'+g+'"]').length>0))break;g=b.rand(1,1e3)}for(var h=[],i=e,j=!1;;){if(j={_element:i,_tagName:3===i.nodeType?"#text":1===i.nodeType&&i.tagName&&i.tagName>""?i.tagName.toLowerCase():"#invalid"},h.push(j),i==f)break;if(i=i.nextSibling,!i)break}for(var k=[],l=0,m=h.length,i=!1;l<m;l++){var i=h[l],n=i._element,o=i._tagName,p="",q=!1,r=!1;switch(!0){case 1==m&&0==l:p="boundry-both";break;case m>1&&0==l:p="boundry-start";break;case m>1&&l==m-1:p="boundry-end";break;default:p="everything"}switch(q=b.highlight__buildHTMLForElementWithSelectedRange(n,p,a),!0){case"#text"==o:var s=b.document.createElement("span");s.innerHTML=q,r=s,n.parentNode.replaceChild(r,n);break;case b.parseOptions._elements_self_closing.indexOf("|"+o+"|")>-1:r=n;break;default:if(r=n,q=q.substr(q.indexOf(">")+1),q=q.substr(0,q.lastIndexOf("<")),!(q.indexOf('<em class="'+b.settings.highlightElementCSSClass+'">')>-1))break;n.innerHTML=q}d(r).find("em."+b.settings.highlightElementCSSClass+":not(["+b.settings.highlightElementIdAttribute+"])").attr(b.settings.highlightElementIdAttribute,g),"em"==o&&d(r).hasClass(b.settings.highlightElementCSSClass)&&d(r).attr(b.settings.highlightElementIdAttribute,g),k.push(r.parentNode)}return b.highlight__deleteSpansFromParents(k),!0},b.highlight__doCurentSelection=function(){var a=b.sel.getSelection(b.window),c=b.sel.getRange(a),e=b.sel.getRangeText(c),f=!!c&&{commonAncestorContainer:c.commonAncestorContainer,startContainer:c.startContainer,endContainer:c.endContainer,startOffset:c.startOffset,endOffset:c.endOffset};switch(!0){case!e:case!(e.length>0):case!f:return!1}1==f.startContainer.nodeType&&f.startContainer.childNodes[f.startOffset]&&(f.startContainer=f.startContainer.childNodes[f.startOffset],f.startOffset=0),1==f.endContainer.nodeType&&f.endContainer.childNodes[f.endOffset]&&(f.endContainer=f.endContainer.childNodes[f.endOffset],f.endOffset=0);var g=b.highlight__doRange(f);if(g===!1)return!1;try{a.removeAllRanges()}catch(a){}var h=[];b.$elementWhichMustContainAllHighlights.find("em."+b.settings.highlightElementCSSClass+" em."+b.settings.highlightElementCSSClass).each(function(a,c){d(c).find("a."+b.settings.highlightElementDeleteCSSClass).remove();var e=b.document.createElement("span");e.innerHTML=c.innerHTML,c.parentNode.replaceChild(e,c),h.push(e.parentNode)}),b.highlight__deleteSpansFromParents(h),b.$elementWhichMustContainAllHighlights.find("em."+b.settings.highlightElementCSSClass+" a."+b.settings.highlightElementDeleteCSSClass).remove(),b.$elementWhichMustContainAllHighlights.find("em."+b.settings.highlightElementCSSClass+"."+b.settings.highlightElementFirstCSSClass).removeClass(b.settings.highlightElementFirstCSSClass),b.$elementWhichMustContainAllHighlights.find("em."+b.settings.highlightElementCSSClass+"."+b.settings.highlightElementLastCSSClass).removeClass(b.settings.highlightElementLastCSSClass);var i=b.$elementWhichMustContainAllHighlights.find("em."+b.settings.highlightElementCSSClass),j=[],k=!1;return i.each(function(a,c){j.push(d(c).attr(b.settings.highlightElementIdAttribute))}),i.each(function(a,c){var e=!j[a-1]||j[a]!=j[a-1],f=!j[a+1]||j[a]!=j[a+1];e&&(d(c).addClass(b.settings.highlightElementFirstCSSClass),k=b.document.createElement("a"),k.className=b.settings.highlightElementDeleteCSSClass,k.id=b.settings.highlightElementDeleteIdPrefix+j[a],c.insertBefore(k,c.firstChild)),f&&d(c).addClass(b.settings.highlightElementLastCSSClass)}),!0},b.highlight__deleteAllHighlights=function(a){a&&"object"==typeof a?b.highlight__deleteHighlight(a):b.highlight__deleteHighlight("all")},b.highlight__deleteHighlight=function(a){var c,d=[];"object"==typeof a?a.tag&&a.tagName&&(c=a.tagName):c="em."+b.settings.highlightElementCSSClass+("all"==a?"":"["+b.settings.highlightElementIdAttribute+'="'+a+'"]'),b.$elementWhichMustContainAllHighlights.find(c).each(function(a,c){var e=b.document.createElement("span");e.innerHTML=c.innerHTML,c.parentNode.replaceChild(e,c),d.push(e.parentNode)}),b.highlight__deleteSpansFromParents(d)},b.enable=function(){b.enabled||(b.enabled=!0,b.window.document.body.classList.add(b.settings.highlightingEnabledCSSClass))},b.disable=function(){b.enabled&&(b.enabled=!1,b.window.document.body.classList.remove(b.settings.highlightingEnabledCSSClass))},b.highlight__mouseUp_timeout=!1,b.highlight__deleteButton__byId__mouseEnter_timeout={},b.highlight__deleteButton__byId__mouseLeave_timeout={},b.highlight__mouseUp=function(){b.enabled&&(b.highlight__mouseUp_timeout=b.window.setTimeout(function(){b.highlight__mouseUp_timeout=!1;var a=b.highlight__doCurentSelection();a===!1||b.callbacks&&b.callbacks.highlightAdded&&b.callbacks.highlightAdded()},250))},b.highlight__mouseDown=function(){b.enabled&&b.window.clearTimeout(b.highlight__mouseUp_timeout)},b.highlight__deleteButton__show=function(a){b.$elementWhichMustContainAllHighlights.find("#"+b.settings.highlightElementDeleteIdPrefix+a).fadeIn(250)},b.highlight__deleteButton__hide=function(a){b.$elementWhichMustContainAllHighlights.find("#"+b.settings.highlightElementDeleteIdPrefix+a).fadeOut(250)},b.addMouseHandlers=function(){for(var a=0,c=b.settings.elementsToAttachMouseHandlersTo.length;a<c;a++)d(b.settings.elementsToAttachMouseHandlersTo[a]).mouseup(b.highlight__mouseUp).mousedown(b.highlight__mouseDown);b.$elementWhichMustContainAllHighlights.on("mouseenter","em."+b.settings.highlightElementCSSClass,function(){var a=d(this).attr(b.settings.highlightElementIdAttribute);b.window.clearTimeout(b.highlight__deleteButton__byId__mouseLeave_timeout[a]),b.highlight__deleteButton__byId__mouseEnter_timeout[a]=b.window.setTimeout(function(){b.highlight__deleteButton__byId__mouseEnter_timeout[a]=!1,b.highlight__deleteButton__show(a)},250)}),b.$elementWhichMustContainAllHighlights.on("mouseleave","em."+b.settings.highlightElementCSSClass,function(){var a=d(this).attr(b.settings.highlightElementIdAttribute);b.window.clearTimeout(b.highlight__deleteButton__byId__mouseEnter_timeout[a]),b.highlight__deleteButton__byId__mouseLeave_timeout[a]=b.window.setTimeout(function(){b.highlight__deleteButton__byId__mouseLeave_timeout[a]=!1,b.highlight__deleteButton__hide(a)},250)}),b.$elementWhichMustContainAllHighlights.on("click","em."+b.settings.highlightElementCSSClass+" a."+b.settings.highlightElementDeleteCSSClass,function(){var a=d(this.parentNode).attr(b.settings.highlightElementIdAttribute);d(this).remove(),b.highlight__deleteHighlight(a),b.callbacks&&b.callbacks.highlightDeleted&&b.callbacks.highlightDeleted()})},b.getCleanHTML=function(a){var c=a;c=c.replace(/<span([^>]*?)>/gi,""),c=c.replace(/<\/span>/gi,"");var d=new RegExp("<a ([^>]*?)"+b.settings.highlightElementDeleteCSSClass+"([^>]*?)></a>","gi");c=c.replace(d,"");var e=new RegExp("<em ([^>]*?)"+b.settings.highlightElementCSSClass+"([^>]*?)>([^>]+?)</em>","gi");c=c.replace(e,"<highlight>$3</highlight>");for(var f=new RegExp("<highlight>([\\s\\S]*?)</highlight>([ \\n\\r\\t]*?)<highlight>([\\s\\S]*?)</highlight>","gi");null!=c.match(f);)c=c.replace(f,"<highlight>$1$3</highlight>");var g=new RegExp("<highlight>([\\s\\S]*?)</highlight>","gi");return c=c.replace(g,b.settings.highlightCleanHTMLElementStart+"$1"+b.settings.highlightCleanHTMLElementEnd)},b}