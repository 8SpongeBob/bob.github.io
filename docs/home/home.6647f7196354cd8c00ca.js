(()=>{"use strict";new class{constructor(e){this.targets=e.targets,this.count=e.count||1,this.props=e,this.reverse=e.reverse,this.exec()}get curIndex(){return this.props.count-this.count+1}get lastTarget(){return this.targets[this.needReverse?0:this.targets.length-1]}get needReverse(){try{return!0===this.reverse||this.reverse.includes(this.curIndex)}catch(e){return!1}}exec(){let e=this.targets.slice();this.addEventListener(e)}addEventListener(e){if(!e.length)return;let t=this.needReverse?e.pop():e.shift();console.log(t),t.el.classList.add(t.animationClassName);let s=this,n=function(a){a.target.classList.remove(t.animationClassName),t.el.removeEventListener("animationend",n),s.addEventListener(e),a.target==s.lastTarget.el&&s.count>1&&(s.count--,setTimeout((function(){s.exec()})))};t.el.addEventListener("animationend",n)}}({targets:[{el:document.querySelector(".box1"),animationClassName:"change"},{el:document.querySelector(".box2"),animationClassName:"change"},{el:document.querySelector(".box3"),animationClassName:"change"},{el:document.querySelector(".box4"),animationClassName:"change"},{el:document.querySelector(".box5"),animationClassName:"change"}],count:4,reverse:!1})})();