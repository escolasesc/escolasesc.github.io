const app = new Vue({
  el: '#turma',
  data: {
    graduatedData: ""
  },
  mounted() {
    let dados;
    let filterClass = document.querySelector("#turma").dataset.main;
    $.get("https://graduated-8cd87.firebaseio.com/"+ filterClass + ".json", function(dados) {
      app.graduatedData = dados;
    })
  }
});
Vue.component('modal', {
  template: `<transition name="modal">
                 <div class="modal-mask">
                   <div class="modal-wrapper">
                     <div class="modal-container">
                       <div class="modal-header">
                         <slot name="header">
                         </slot>
                       </div>
                       <div class="modal-body">
                         <slot name="body">
                           default body
                         </slot>
                       </div>
                       <div class="modal-footer">
                         <slot name="footer">
                           <button class="modal-default-button btn" style="margin:auto;" @click="$emit('close')">
                             OK
                           </button>
                         </slot>
                       </div>
                     </div>
                   </div>
                 </div>
               </transition>`
})
Vue.component('modal-video', {
  template: `<transition name="modal">
                 <div class="modal-mask">
                   <div class="modal-wrapper">
                     <div class="modal-container">
                       <div class="modal-body">
                         <slot name="body">
                         </slot>
                       </div>
                       <div class="modal-footer">
                         <slot name="footer">
                           <button class="modal-default-button btn" style="margin:auto;" @click="$emit('close')">
                             OK
                           </button>
                         </slot>
                       </div>
                       </div>
                     </div>
                   </div>
               </transition>`
})
