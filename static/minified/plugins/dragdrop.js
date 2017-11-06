/* SCEditor v2.0.0-beta1 | (C) 2017, Sam Clarke | sceditor.com/license */

!function(e){"use strict";function n(e){for(var n=e.substr(5,e.indexOf(";")-5),t=atob(e.substr(e.indexOf(",")+1)),r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t[i].charCodeAt(0);try{return new Blob([r],{type:n})}catch(e){return null}}var t="data:image/gif;base64,R0lGODlhlgBkAPABAH19ffb29iH5BAAKAAAAIf4aQ3JlYXRlZCB3aXRoIGFqYXhsb2FkLmluZm8AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAlgBkAAAC1YyPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2OvwD2fP6iD/gH6Pc2GIhg2JeQSNjGuLf4GMlYKIloefAIUEl52ZmJyaY5mUhqyFnqmQr6KRoaMKp66hbLumpQ69oK+5qrOyg4a6qYV2x8jJysvMzc7PwMHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fL99UAAAh+QQACgAAACwAAAAAlgBkAIEAAAB9fX329vYAAAAC3JSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2OvwD2fP4iABgY+CcoCNeHuJdQyLjIaOiWiOj4CEhZ+SbZd/nI2RipqYhQOThKGpAZCuBZyArZprpqSupaCqtaazmLCRqai7rb2av5W5wqSShcm8fc7PwMHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX29/j5/vVAAAIfkEAAoAAAAsAAAAAJYAZACBAAAAfX199vb2AAAAAuCUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4PDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9jr8E9nz+AgAYGLjQVwhXiJgguAiYgGjo9tinyCjoKLn3hpmJUGmJsBmguUnpCXCJOZraaXoKShoJe9DqehCqKlnqiZobuzrbyvuIO8xqKpxIPKlwrPCbBx0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P379UAAAh+QQACgAAACwAAAAAlgBkAIEAAAB9fX329vYAAAAC4JSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2OvwT2fP6iD7gAMEhICAeImIAYiFDoOPi22KcouZfw6BhZGUBZeYlp6LbJiTD6CQqg6Vm6eQqqKtkZ24iaKtrKunpQa9tmmju7Wwu7KFtMi3oYDMzompkHHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX29/j5+vv8/f31QAADs=",r=void 0!==window.FileReader,i=/data:[^;]+;base64,/i;e.plugins.dragdrop=function(){function a(){g.style.display="none",u.className=u.className.replace(/(^| )dnd( |$)/g,"")}function A(){"none"===g.style.display&&(g.style.display="block",u.className+=" dnd")}function o(e){return!("application/x-moz-file"!==e.type&&f.allowedTypes&&f.allowedTypes.indexOf(e.type)<0)&&(!f.isAllowed||f.isAllowed(e))}function d(e){function n(e){var n=v.getBody().ownerDocument.getElementById(r.id);n&&("string"==typeof e&&n.insertAdjacentHTML("afterend",e),n.parentNode.removeChild(n))}var r=document.createElement("img");return r.src=t,r.className="sceditor-ignore",r.id="sce-dragdrop-"+m++,function(){return e?e.parentNode.replaceChild(r,e):v.wysiwygEditorInsertHtml(r.outerHTML),{insert:function(e){n(e)},cancel:n}}}function s(e){for(var n=e.dataTransfer,t=n.files.length||!n.items?n.files:n.items,r=0;r<t.length;r++)if("string"===t[r].kind)return;A(),e.preventDefault()}function l(e){var n=e.dataTransfer,t=n.files.length||!n.items?n.files:n.items;a();for(var r=0;r<t.length;r++){if("string"===t[r].kind)return;o(t[r])&&c(t[r],d())}e.preventDefault()}if(r){var f,v,c,u,g,p=this,m=0;p.signalReady=function(){f=(v=this).opts.dragdrop||{},c=f.handleFile,u=v.getContentAreaContainer().parentNode,g=u.appendChild(e.dom.parseHTML('<div class="sceditor-dnd-cover" style="display: none"><p>'+v._("Drop files here")+"</p></div>").firstChild),u.addEventListener("dragover",s),u.addEventListener("dragleave",a),u.addEventListener("dragend",a),u.addEventListener("drop",l),v.getBody().addEventListener("dragover",s),v.getBody().addEventListener("drop",a)},p.signalPasteHtml=function(e){if(!("handlePaste"in f)||f.handlePaste){var t=document.createElement("div");t.innerHTML=e.val;for(var r=t.querySelectorAll("img"),a=0;a<r.length;a++){var A=r[a];if(i.test(A.src)){var s=n(A.src);s&&o(s)?c(s,d(A)):A.parentNode.removeChild(A)}}e.val=t.innerHTML}}}}}(sceditor);