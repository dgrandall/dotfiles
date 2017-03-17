/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
function ClipResultBackground(){"use strict";function a(a,b,c){var d=document.getElementById("copier");d.value=a.text,d.select(),Browser.sendToTab(b.tab,{name:"sh_urlCopied",copied:document.execCommand("copy",!1,null),toOwnWindow:!0})}function b(a,b,c){var d=function(a,b){b&&(log.error(b),log.error(b.trace))},e=new JsonRpc(["NoteStore.emailNote"],extension.getBaseUrl());e.initWithShardId(account.userInfo.shardId,function(){e.client.NoteStore.emailNote(d,"",{guid:a.noteGuid,toAddresses:{javaClass:"java.util.ArrayList",list:a.recipients},message:a.message})})}function c(a,b,c){function d(c){for(var d=[],e=0;e<c.length;e++)c[e].type===ContactType.EMAIL&&d.push({name:c[e].name,email:c[e].id});Browser.sendToTab(b.tab,{name:"sh_receiveContacts",contacts:d,count:a.count,toOwnWindow:!0})}function e(a){log.error(a)}account.reload().then(function(b){account.isAuthenticated?extension.createNoteStoreClient().findContacts(b.authenticationToken,new ContactsQuery({maxEntries:5,prefix:a.prefix}),d,e):log.error("not logged in while finding contacts")})}function d(a,b,c){function e(a){Browser.sendToTab(b.tab,{name:"cr_receiveRelatedNotes",relatedNotes:a})}var f=extension.getPendingNote(a.pendingNoteKey);f&&f.relatedNotes?e(extension.combineRelatedNotes(f.relatedNotes.pers,account.userInfo.shardId,f.relatedNotes.biz,account.userInfo.bizShardId,f.relatedNotes.containingNotebooks)):a.recText?sidebarBackground.getSmartFilingInfo({notesOnly:!0,pendingNoteKey:a.pendingNoteKey,recText:a.recText,url:a.url,callback:function(a,b){d({pendingNoteKey:a},b)}},b):e([])}function e(a,b,c){function d(a,c){a.name="cr_receiveSameSiteNotes",Browser.sendToTab(b.tab,a)}function e(a){l=a,(i.bizAuthenticationToken&&m||!i.bizAuthenticationToken)&&d(g())}function f(a){m=a,l&&d(g())}function g(){for(var a=0;a<l.notes.list.length;a++)l.notes.list[a].shardId=j.shardId;if(i.bizAuthenticationToken){for(var a=0;a<m.notes.list.length;a++)m.notes.list[a].shardId=k.shardId,m.notes.list[a].inBusinessNotebook=!0,l.notes.list.push(m.notes.list[a]);l.notes.list.sort(function(a,b){return b.updated-a.updated})}return l}function h(){j.client.NoteStoreExtra.findNotesWithSnippet(e,i.authenticationToken,o,0,p,n),i.bizAuthenticationToken&&k.client.NoteStoreExtra.findNotesWithSnippet(f,i.bizAuthenticationToken,o,0,p,n)}var i,j,k,l,m,n=a.resultSpec,o=a.noteFilter,p=10;account.reload().then(function(a){if(i=a,account.isAuthenticated){var b=extension.getBaseUrl();j=new JsonRpc(["NoteStoreExtra.findNotesWithSnippet"],b),j.initWithShardId(a.shardId,function(){a.bizShardId?(k=new JsonRpc(["NoteStoreExtra.findNotesWithSnippet"],b),k.initWithShardId(a.bizShardId,h)):h()})}}),c&&c()}function f(a,b,c){a.name="cr_initialize",a.baseUrl=options.get("secureProto")+extension.getBootstrapInfo("serviceHost"),a.locale=extension.getBootstrapInfo("name"),a.userId=account.userInfo.userId,a.afterClip=options.get("afterClip"),a.basic=account.userInfo.basic,a.plus=account.userInfo.plus,a.premium=account.userInfo.premium,a.noteSizeMax=account.userInfo.noteSizeMax,a.quota=account.userInfo.quota,a.userNoteCountMax=account.userInfo.userNoteCountMax,a.sharingOptionsEnabled={facebook:extension.getBootstrapInfo("enableFacebookSharing"),linkedin:extension.getBootstrapInfo("enableLinkedInSharing"),singleNote:extension.getBootstrapInfo("enableSingleNoteSharing"),twitter:extension.getBootstrapInfo("enableTwitterSharing")},Browser.sendToTab(b.tab,a)}function g(a,b,c){function d(a){}function e(a){log.error(a)}var f=new NoteAttributes({source:"web.clip",sourceURL:a.sourceURL,reminderOrder:a.reminderOrder});a.reminderTime&&(f.reminderTime=a.reminderTime),extension.createNoteStoreClientFromUrl(a.noteStoreUrl).updateNote(a.token,new Note({guid:a.noteGuid,title:a.title,attributes:f}),d,e)}function h(b,c,d){function e(d){var e=options.get("secureProto")+extension.getBootstrapInfo("serviceHost")+"/shard/"+g.shardId+"/sh/"+b.guid+"/"+d;Browser.sendToTab(c.tab,{name:"sh_complete",url:e,toOwnWindow:!0}),"url"===b.shareType&&a({text:e},c)}function f(a){log.error(a)}var g=account.userInfo;extension.createNoteStoreClientFromUrl(b.noteStoreUrl).shareNote(g.authenticationToken,b.guid,e,f)}function i(a,b,c){function d(a,b,c){var e="https://www.facebook.com/dialog/return/close?#_=_";if(SAFARI){var f=a.target;f.url===e&&(safari.application.removeEventListener("navigate",d),Browser.closeWindow(j.facebook))}else b&&"loading"===b.status&&b.url===e&&(Browser.closeWindow(j.facebook),chrome.tabs.onUpdated.removeListener(d))}function e(a,b){function c(a){return!(Object.keys(a).length>0)}if(SAFARI){var f=a.target;for(var g in j)j.hasOwnProperty(g)&&j[g]===f&&(delete j[g],c(j)&&safari.application.addEventListener("navigate",d))}else for(var g in j)j.hasOwnProperty(g)&&j[g].id===b.windowId&&(delete j[g],c(j)&&(chrome.tabs.onRemoved.removeListener(e),chrome.tabs.onUpdated.hasListener(d)&&chrome.tabs.onUpdated.removeListener(d)))}var f=a.shareType,g=a.url,h=a.windowInfo;SAFARI||chrome.tabs.onRemoved.hasListener(e)||chrome.tabs.onRemoved.addListener(e),"facebook"===f&&(SAFARI?safari.application.addEventListener("navigate",d):chrome.tabs.onUpdated.hasListener(d)||chrome.tabs.onUpdated.addListener(d)),j[f]?Browser.focusWindow(j[f]):extension.msgHandlerOpenWindow({url:g,width:h.width,height:h.height,top:h.top,left:h.left,eventListener:SAFARI?{type:"close",callback:e}:null,type:"popup"},null,function(a){j[f]=a})}var j={};Browser.addMessageHandlers({copyText:a,emailNote:b,findContacts:c,getRelatedNotes:d,getSameSiteNotes:e,initializeClipResult:f,setReminder:g,shareNote:h,openShareNoteWindow:i}),Object.preventExtensions(this)}Object.preventExtensions(ClipResultBackground);