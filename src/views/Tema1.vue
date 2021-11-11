<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo de <i>software</i>
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        .row.mb-4
          .col-12.bg-color1
            p Es importante aclarar que existe un gran número de definiciones sobre lo que es una metodología, para evitar cualquier confusión en este material se utiliza la definición dada en Maida y Pacienzia (2015), quienes indican que #[b una metodología hace referencia a un conjunto de procedimientos genéricos y lógicos que se utilizan para alcanzar un objetivo particular usando un conjunto de habilidades y conocimientos].
        p Las metodologías de desarrollo de #[i software] siempre parten de un componente teórico y cuando son usadas por los equipos de trabajo conllevan a la utilización de un conjunto de técnicas y métodos que al final determinarán las tareas generales y específicas que se deberían realizar para alcanzar un objetivo.
      .col-lg-6
        figure
          img(src='@/assets/curso/img1.png')
    .row.align-items-center(data-aos="fade-left")
      .col-lg-6.order-2.order-lg-1
        figure
          img(src='@/assets/curso/img1.svg', style="width: 400px").m-auto
      .col-lg-6.order-1.order-lg-2
        p Existen diferentes tipos de metodologías de desarrollo de #[i software] que fueron ideadas pensando en problemas particulares presentados en la industria en contextos específicos, por lo cual es importante conocer sus diferentes características y contrastarlas con las necesidades particulares a las que se enfrenta a la hora de desarrollar un producto y servicio. Es decir, cada una de estas tiene ventajas y enfoques que pueden ser reutilizados en diferentes momentos.
        p Existen dos grandes clasificaciones de metodologías de desarrollo de #[i software] que se agrupan generalmente como marcos de trabajo tradicionales o marcos de trabajo ágiles que se verán a continuación.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
