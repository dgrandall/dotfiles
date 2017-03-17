var FieldHistoryDialog=function(t){Dialog.call(this,t,{backButtonText:Strings.translateString("Hide All"),nextButtonText:Strings.translateString("Show All"),closeButtonEnabled:!0,dynamicHeight:!0,confirmOnClose:!1,overlayDialog:!0}),this.toggles=null};FieldHistoryDialog.prototype=Object.create(Dialog.prototype),FieldHistoryDialog.prototype.constructor=FieldHistoryDialog,function(t){var e=function(t,e,o){this.show=function(){o.value=LPProxy.decrypt(t,e.getKey())},this.getElement=function(){return i};var i=LPTools.createElement("div","action",Strings.translateString("Show"));$(i).bind("click",function(t){return function(){t.show()}}(this))},o=function(t,e){var o=!1;this.show=function(){l.value=LPProxy.decrypt(t,e.getKey()),s.addClass("selected"),o=!0},this.hide=function(){l.value=i,s.removeClass("selected"),o=!1},this.toggle=function(){o?this.hide():this.show()},this.getElement=function(){return n};var n=LPTools.createElement("div","relative"),l=LPTools.createElement("input",{class:"dialogInput",readonly:!0,type:"text"});l.value=i,n.appendChild(l);var s=LPTools.createElement("div","showPassword iconButton");n.appendChild(s),s=$(s),s.bind("click",function(t){return function(){t.toggle()}}(this))},i="********************";FieldHistoryDialog.prototype.open=function(t){this.toggles=[],t=t||{},t.title=Strings.translateString("Password History"),t.type===Constants.HISTORY_TYPES.USERNAME?t.title=Strings.translateString("Username History"):t.type===Constants.HISTORY_TYPES.NOTE&&(t.title=Strings.translateString("Note History")),Dialog.prototype.open.call(this,t)},FieldHistoryDialog.prototype.initialize=function(){Dialog.prototype.initialize.apply(this,arguments),this.backButton.unbind("click"),this.nextButton.unbind("click"),function(t){t.backButton.bind("click",function(){for(var e=0,o=t.toggles.length;e<o;++e)t.toggles[e].hide()}),t.nextButton.bind("click",function(){for(var e=0,o=t.toggles.length;e<o;++e)t.toggles[e].show()})}(this)},FieldHistoryDialog.prototype.close=function(){Dialog.prototype.close.apply(this,arguments),t.getElementById("fieldHistoryNoteDisplay").value="",$("#fieldHistoryElements").empty()},FieldHistoryDialog.prototype.setup=function(i,n){var l=Strings.translateString("Password");n.type===Constants.HISTORY_TYPES.USERNAME?l=Strings.translateString("Usernameproper"):n.type===Constants.HISTORY_TYPES.NOTE&&(l=Strings.translateString("Action"));var s=t.getElementById("fieldHistoryNoteDisplay");$("#fieldHistoryColumnHeader").text(l);var r=document.getElementById("fieldHistoryElements");if(n.history&&n.history.length>0){this.$element.removeClass("empty");for(var a=0,g=n.history.length;a<g;++a){var d=n.history[a],c=LPTools.createElement("tr");r.appendChild(c);var p=LPTools.createElement("td","fieldHistoryDate",d.date),y=d.whom&&d.whom.length?Strings.translateString("by")+" "+d.whom:"";p.appendChild(LPTools.createElement("p","fieldHistoryWhom",y)),c.appendChild(p);var h=null;h=n.type===Constants.HISTORY_TYPES.NOTE?new e(d.value,n.vaultItem,s):new o(d.value,n.vaultItem);var u=LPTools.createElement("td");u.appendChild(h.getElement()),c.appendChild(u),this.toggles.push(h)}}else this.$element.addClass("empty");Dialog.prototype.setup.apply(this,arguments),n.history&&n.history.length>0&&n.type===Constants.HISTORY_TYPES.NOTE?(this.$element.addClass("noteHistory"),this.dialogContent.css("bottom","0")):this.$element.removeClass("noteHistory")}}(document);