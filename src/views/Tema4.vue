<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Planeación de proyectos de <i>software</i>
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-color11
            p.mb-0 La planificación de proyectos de software involucra un conjunto de actividades que buscan tener una imagen preliminar del software a construir a partir de la cual se realizan estimaciones que permiten determinar la viabilidad o no de un proyecto de acuerdo con la cantidad de recursos asignados.
        p Según (SCRUMstudy, 2013), las actividades de planificación definidas dentro del marco de trabajo de Scrum son las que a continuación se mencionan en el recurso de aprendizaje:
      .col-lg-7
        figure
          img(src='@/assets/curso/img10.png')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/w86E_jHn3qY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema4',
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
