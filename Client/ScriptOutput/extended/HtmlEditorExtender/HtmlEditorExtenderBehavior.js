// (c) 2010 CodePlex Foundation
(function(){var b="HtmlEditorExtenderBehavior";function a(){var m="ToolbarButtons",l="ForeColor",d="on",h="blur",k="select",j="button",g="input",e=true,c="unselectable",f="div",b=false,a=null;Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.HtmlEditorExtenderBehavior=function(m){var i="ajax__html_editor_extender_button",h="px",d=this;Sys.Extended.UI.HtmlEditorExtenderBehavior.initializeBase(d,[m]);d._textbox=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(m);var l=d.get_id();d._backColor=a;d._foreColor=a;d._commandName=a;d.savedRange=a;d.isInFocus=a;_flag=b;d._ButtonWidth=23;d._ButtonHeight=21;d._containerTemplate={nodeName:f,properties:{id:l+"_ExtenderContainer"},cssClasses:[c,"ajax__html_editor_extender_container"]};d._editableTemplate={nodeName:f,properties:{id:l+"_ExtenderContentEditable",style:{width:"100%",height:"80%",overflow:"auto",clear:"both"},contentEditable:e},cssClasses:["ajax__html_editor_extender_texteditor"]};d._buttonTemplate={nodeName:g,properties:{type:j,style:{width:d._ButtonWidth+h,height:d._ButtonHeight+h}},cssClasses:[i]};d._textboxTemplate={nodeName:g,properties:{type:"text"}};d._dropDownTemplate={nodeName:k,properties:{style:{width:d._ButtonWidth+h,height:d._ButtonHeight+h}},cssClasses:[i]};d._topButtonContainerTemplate={nodeName:f,properties:{id:l+"_ExtenderButtonContainer"},cssClasses:["ajax__html_editor_extender_buttoncontainer"]};d._container=a;d._toolbarButtons=a;d._editableDiv=a;d._topButtonContainer=a;d._buttons=[];d._btnClickHandler=a;d._requested_buttons=[];d._colorPicker=a;d._txtBoxForColor=a;if(typeof WebForm_OnSubmit=="function"&&!Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit){Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit=WebForm_OnSubmit;WebForm_OnSubmit=Sys.Extended.UI.HtmlEditorExtenderBehavior.WebForm_OnSubmit}};Sys.Extended.UI.HtmlEditorExtenderBehavior.prototype={initialize:function(){var b=this;Sys.Extended.UI.HtmlEditorExtenderBehavior.callBaseMethod(b,"initialize");var i=0;b._button_list=[];b._createContainer();b._createTopButtonContainer();b._createEditableDiv();b._createButton();var c=b._textbox._element.parentNode;while(c!=a&&c.nodeName!="FORM")c=c.parentNode;if(c==a)throw"Missing Form tag";var f=Function.createDelegate(b,b._textBox_onblur),d=Function.createDelegate(b,b._editableDiv_onblur),g=Function.createDelegate(b,b._executeCommand);$addHandler(b._textbox._element,h,f,e);$addHandler(b._editableDiv,h,d,e);$addHandler(b._topButtonContainer,"click",g)},_dispose:function(){$removeHandler(this._textbox._element,h,delTextBox_onblur);$removeHandler(this._editableDiv,h,delEditableDiv_onblur);$removeHandler(_topButtonContainer,"click",btnClickHandler);Sys.Extended.UI.HtmlEditorExtenderBehavior.callBaseMethod(this,"dispose")},_createContainer:function(){var a=this,c=a.get_element();a._container=$common.createElementFromTemplate(a._containerTemplate,c.parentNode);var b=$common.getBounds(a._textbox._element);$common.setSize(a._container,{width:b.width,height:b.height});$common.wrapElement(a._textbox._element,a._container,a._container)},_createTopButtonContainer:function(){this._topButtonContainer=$common.createElementFromTemplate(this._topButtonContainerTemplate,this._container)},_createButton:function(){var s="ajax__html_editor_extender_button ajax__html_editor_extender_",r="FontSize",o="Arial",h="11px",n="left",q="FontName",f="span",e=this;for(i=0;i<e._toolbarButtons.length;i++){var m;if(e._toolbarButtons[i].CommandName=="HorizontalSeparator")m=$common.createElementFromTemplate({nodeName:f,cssClasses:["ajax__html_editor_extender_separator"]},e._topButtonContainer);else if(e._toolbarButtons[i].CommandName==q){m=$common.createElementFromTemplate({nodeName:"nobr",properties:{style:{cssFloat:n,fontSize:h}},children:[{nodeName:f,properties:{textContent:"Font ",style:{paddingLeft:"5px",fontWeight:"bold"}}}]},e._topButtonContainer);_select=$common.createElementFromTemplate({nodeName:k,properties:{style:{fontSize:h,fontFamily:o,height:"20px",width:"115px"}},events:{change:function(){document.execCommand(q,b,this.options[this.selectedIndex].value)}}},m);var t=[{Text:o,Value:"arial,helvetica,sans-serif"},{Text:"Courier New",Value:"courier new,courier,monospace"},{Text:"Georgia",Value:"georgia,times new roman,times,serif"},{Text:"Tahoma",Value:"tahoma,arial,helvetica,sans-serif"},{Text:"Times New Roman",Value:"times new roman,times,serif"},{Text:"Verdana",Value:"verdana,arial,helvetica,sans-serif"},{Text:"Impact",Value:"impact"},{Text:"WingDings",Value:"wingdings"}];for(x in t){var p=document.createElement("option");p.text=t[x].Text;p.value=t[x].Value;try{_select.add(p,a)}catch(v){_select.add(p)}}_select.setAttribute("id",e._id+e._toolbarButtons[i].CommandName);_select.setAttribute("name",e._toolbarButtons[i].CommandName);_select.setAttribute("title",e._toolbarButtons[i].Tooltip);_select.setAttribute(c,d)}else if(e._toolbarButtons[i].CommandName==r){m=$common.createElementFromTemplate({nodeName:"nobr",properties:{style:{cssFloat:n,fontSize:h}},children:[{nodeName:f,properties:{textContent:"Size ",style:{paddingLeft:"5px",fontWeight:"bold"}}}]},e._topButtonContainer);_select=$common.createElementFromTemplate({nodeName:k,properties:{style:{fontSize:h,fontFamily:o,height:"20px",width:"50px"}},events:{change:function(){document.execCommand(r,b,this.options[this.selectedIndex].value)}}},m);var t=[{Text:"1 (8 pt)",Value:"8pt"},{Text:"2 (10 pt)",Value:"10pt"},{Text:"3 (12 pt)",Value:"12pt"},{Text:"4 (14 pt)",Value:"14pt"},{Text:"5 (18 pt)",Value:"18pt"},{Text:"6 (24 pt)",Value:"24pt"},{Text:"7 (36 pt)",Value:"36pt"}];for(x in t){var p=document.createElement("option");p.text=t[x].Text;p.value=t[x].Value;try{_select.add(p,a)}catch(v){_select.add(p)}}_select.setAttribute("id",e._id+e._toolbarButtons[i].CommandName);_select.setAttribute("name",e._toolbarButtons[i].CommandName);_select.setAttribute("title",e._toolbarButtons[i].Tooltip);_select.setAttribute(c,d)}else if(e._toolbarButtons[i].CommandName==l){m=$common.createElementFromTemplate({nodeName:f,properties:{style:{backgroundColor:"#ff0000",border:"solid 1px #c2c2c2",display:"block",cssFloat:n}}},e._topButtonContainer);m.setAttribute(c,d);e._foreColor=$common.createElementFromTemplate({nodeName:g,properties:{type:j,id:e._id+e._toolbarButtons[i].CommandName,name:e._toolbarButtons[i].CommandName,title:e._toolbarButtons[i].Tooltip,style:{backgroundColor:"transparent",width:"21px",height:"19px"}},cssClasses:[s+e._toolbarButtons[i].CommandName]},m);e._foreColor.setAttribute(c,d)}else{var u={Copy:1,Cut:1,Paste:1};if(!(Sys.Browser.agent!=Sys.Browser.InternetExplorer&&u[e._toolbarButtons[i].CommandName])){m=$common.createElementFromTemplate({nodeName:g,properties:{type:j,id:e._id+e._toolbarButtons[i].CommandName,name:e._toolbarButtons[i].CommandName,title:e._toolbarButtons[i].Tooltip,style:{width:"23px",height:"21px"}},cssClasses:[s+e._toolbarButtons[i].CommandName]},e._topButtonContainer);m.setAttribute(c,d)}Array.add(e._buttons,m)}}},_createEditableDiv:function(){var a=this;a._editableDiv=$common.createElementFromTemplate(a._editableTemplate,a._container);a._editableDiv.innerHTML=a._textbox._element.value;$common.setVisible(a._textbox._element,b)},_editableDiv_onblur:function(){this._textbox._element.value=this.innerHTML},_textBox_onblur:function(){this._editableDiv.innerHTML=this.value},_editableDiv_submit:function(){var c=this,e=3,b=a;c._editableDiv.focus();if(Sys.Browser.agent!=Sys.Browser.Firefox)if(document.selection){b=document.selection.createRange();b.moveStart("character",e);b.select()}else{b=window.getSelection();b.collapse(c._editableDiv.firstChild,e)}var d=c._editableDiv.innerHTML.replace(/&/ig,"&amp;").replace(/</ig,"&lt;").replace(/>/ig,"&gt;").replace(/\'/ig,"&quot;").replace(/\xA0/ig,"&nbsp;");d=d.replace(/&lt;STRONG&gt;/ig,"&lt;b&gt;").replace(/&lt;\/STRONG&gt;/ig,"&lt;/b&gt;").replace(/&lt;EM&gt;/ig,"&lt;i&gt;").replace(/&lt;\/EM&gt;/ig,"&lt;/i&gt;");c._textbox._element.value=d},_executeCommand:function(g){var i="createLink",c=this;if(g.target.name==undefined)return;var m=Sys.Browser.agent==Sys.Browser.Firefox,p=Function.createDelegate(c,c._colorPicker_onchange);m&&document.execCommand("styleWithCSS",b,b);var q={JustifyRight:1,JustifyLeft:1,JustifyCenter:1,JustifyFull:1};if(q[g.target.name])try{document.execCommand(g.target.name,b,a)}catch(s){if(s&&s.result==2147500037){var n=window.getSelection().getRangeAt(0),j=document.createElement(f),k=b;j.style.height="1px;";if(n.startContainer.contentEditable=="true"){window.getSelection().collapseToEnd();k=e}var h=window.getSelection().getRangeAt(0).startContainer;while(h&&h.contentEditable!="true")h=h.parentNode;if(!h)throw"Selected node is not editable!";h.insertBefore(j,h.childNodes[0]);document.execCommand(g.target.name,b,a);j.parentNode.removeChild(j);k&&window.getSelection().addRange(n)}else window.console&&window.console.log&&window.console.log(s)}else if(g.target.name==i){var o=prompt("Please insert  URL","");o&&document.execCommand(i,b,o)}else if(g.target.name==l){c._commandName=g.target.name;c.saveSelection();if(!c._foreColorPicker){c._foreColorPicker=$create(Sys.Extended.UI.ColorPickerBehavior,{unselectable:d},{},{},c._foreColor);c._foreColorPicker.set_sample(c._foreColor.parentNode);c._foreColorPicker.add_colorSelectionChanged(p)}c._foreColorPicker.show()}else if(g.target.name=="UnSelect")if(m){c._editableDiv.focus();var r=window.getSelection();r.collapse(c._editableDiv.firstChild,0)}else document.execCommand(g.target.name,b,a);else document.execCommand(g.target.name,b,a)},_colorPicker_onchange:function(c){var a="backcolor";this.restoreSelection();if(this._commandName==a)!document.execCommand("hilitecolor",b,"#"+c._selectedColor)&&document.execCommand(a,b,"#"+c._selectedColor);else document.execCommand(this._commandName,b,"#"+c._selectedColor)},saveSelection:function(){if(window.getSelection)this.savedRange=window.getSelection().getRangeAt(0);else if(document.selection)this.savedRange=document.selection.createRange()},restoreSelection:function(){var b=this;b.isInFocus=e;if(b.savedRange!=a)if(window.getSelection){var c=window.getSelection();c.rangeCount>0&&c.removeAllRanges();c.addRange(b.savedRange)}else if(document.createRange)window.getSelection().addRange(b.savedRange);else document.selection&&b.savedRange.select()},get_ButtonWidth:function(){return this._ButtonWidth},set_ButtonWidth:function(a){if(this._ButtonWidth!=a){this._ButtonWidth=a;this.raisePropertyChanged("ButtonWidth")}},get_ButtonHeight:function(){return this._ButtonHeight},set_ButtonHeight:function(a){if(this._ButtonHeight!=a){this._ButtonHeight=a;this.raisePropertyChanged("ButtonHeight")}},get_ToolbarButtons:function(){return this._toolbarButtons},set_ToolbarButtons:function(a){if(this._toolbarButtons!=a){this._toolbarButtons=a;this.raisePropertyChanged(m)}}};Sys.Extended.UI.HtmlEditorExtenderBehavior.registerClass("Sys.Extended.UI.HtmlEditorExtenderBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.HtmlEditorExtenderBehavior,{name:"HtmlEditorExtender",parameters:[{name:m,type:"HtmlEditorExtenderButton[]"}]});Sys.Extended.UI.HtmlEditorExtenderBehavior.WebForm_OnSubmit=function(){var d=Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit();if(d)for(var b=Sys.Application.getComponents(),a=0;a<b.length;a++){var c=b[a];Sys.Extended.UI.HtmlEditorExtenderBehavior.isInstanceOfType(c)&&c._editableDiv_submit()}return d}}if(window.Sys&&Sys.loader)Sys.loader.registerScript(b,["ExtendedBase","ExtendedCommon"],a);else a()})();