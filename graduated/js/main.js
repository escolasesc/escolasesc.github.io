const siteData = {
  "homeTitle":"Ex-alunos",
  "homeSubtitle":"Alunos Formados na Escola Sesc de Ensino Médio",
  "servicesTitle":"Turmas",
  "servicesSubtitle":"Turmas formadas",
  "servicesBox":[{"title":"2008 - 2010", "subtitle":"Eles foram os Primeiros", "icon":"fa fa-graduation-cap", "page":"pages/2008.html"}, {"title":"2009 - 2011", "subtitle":"Arquitetura do Afeto", "icon":"fa fa-graduation-cap", "page":"pages/2009.html"}, {"title":"2010 - 2012", "subtitle":"Ensaio Geral", "icon":"fa fa-graduation-cap", "page":"pages/2010.html"}, {"title":"2011 - 2013", "subtitle":"Laços formam nós", "icon":"fa fa-graduation-cap", "page":"pages/2011.html"}, {"title":"2012 - 2014", "subtitle":"Sobre Tons", "icon":"fa fa-graduation-cap", "page":"pages/2012.html"}, {"title":"2013 - 2015", "subtitle":"Ver-se em versos", "icon":"fa fa-graduation-cap", "page":"pages/2013.html"}, {"title":"2014 - 2016", "subtitle":"Para o tempo", "icon":"fa fa-graduation-cap", "page":"pages/2014.html"},{"title":"2015 - 2017", "subtitle":"Passagens", "icon":"fa fa-graduation-cap", "page":"pages/2015.html"}, {"title":"2016 - 2018", "subtitle":"Retratos", "icon":"fa fa-graduation-cap", "page":"pages/2016.html"}],
  "testimonialsTitle":"Programa de História Oral",
  "testimonialsButton":"Confira"
  }
Vue.component('home-page', {
  template:`
  <div class="container">
    <div class="social">
      <i class="fa fa-graduation-cap" aria-hidden="true"></i>
    </div>
    <h1 class="pageTitle">
      {{ homeTitle }}
    </h1>
    <span class="sub-font-size">{{ homeSubtitle }}</span>
    <div class="social">
      <a href="#services" class="arrow"><i class="fa fa-angle-double-down" aria-hidden="true"></i></a>
    </div>
  </div>
  `,
  data: function(){
    return siteData;
  }
});
new Vue({
  el: '#home'
});

Vue.component('services-page', {
  template:`
  <div class="container">
    <h2 class="pageTitle">
      {{ servicesTitle }}
    </h2>
    <div class="row">
      <div class="box col-xs-12 col-sm-6 col-md-4 col-lg-4 shadowbox borderradius" v-for="x in servicesBox">
      <a v-bind:href="x.page">
      <i :class="x.icon" aria-hidden="true"></i>
        <h3>{{x.title}}</h3>
        <p class="italic sub-font-size">{{x.subtitle}}</p>
      </a>
      </div>
    </div>
  </div>
  `,
  data: function() {
    return siteData;
  }
});
new Vue({
  el: '#services'
});

Vue.component('testimonials-page',{
  template:`
  <div class="container">
  <a href="http://centrodememoria.escolasesc.com.br/graduated/testimonials/index.html">
    <div class="social">
      <i class="fa fa-comments" aria-hidden="true"></i>
    </div>
    <h2 class="page-second-title">
      {{ testimonialsTitle }}
    </h2>
  </a>
  </div>
  `,
  data: function(){
    return siteData;
  }
});
new Vue({
  el:'#testimonials'
});

Vue.component('footer-site', {
  template:`
  <div><a href="http://centrodememoria.escolasesc.com.br"><img src="img/logocm.png" class="image-footer" alt=""></a></div>
  `
});
new Vue({
  el: '#footer'
});