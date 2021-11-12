<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Marcos de trabajo tradicionales
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/img2.png')
    p.mb-5 Para el desarrollo de un buen producto de #[i software] se debe iniciar por un excelente proceso de planificación y gestión de este durante todas las etapas y actividades que involucran transformar una idea o requerimiento en un producto o servicio que será usado por un cliente particular.
    .row.align-items-center.mb-5.bg-color2(data-aos="fade-left")
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img2.svg').img-position1
        p.text-white Los marcos de trabajo tradicionales o metodologías tradicionales se caracterizan por centrar la mayor parte de su esfuerzo en la planeación y control del proceso, lo que conlleva a una documentación exhaustiva y precisa de los artefactos que describen los requisitos y los modelos del sistema en las etapas iniciales del desarrollo del proyecto
        .row
          .col-12.d-inline-flex.justify-content-center.align-items-center
            p.text-center.mb-0.text-white #[span  (Maida y Pacienzia, 2015).]
            .cuadro
      .col-lg-6
        figure
          img(src='@/assets/curso/img3.svg', style="width: 600px").m-auto
    p Lo anterior supone que este tipo de enfoques son óptimos en proyectos en los cuales los requisitos están plenamente identificados y delimitados, donde no se producirá ningún cambio en lo establecido mientras el proyecto es finalizado.
    p.mb-5 A continuación, se describen algunas metodologías que se enmarcan en los marcos tradicionales de desarrollo de #[i software].
    #t_2_1
    .titulo-segundo.color-secundario
      h2 2.1 Cascada
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-4
        .row.mb-4
          .col-12.bg-color3
            p.mb-0 #[b Este es uno de los modelos genéricos más ampliamente conocido en la ingeniería de #[i software] y se deriva de procesos de ingeniería de sistemas más generales] (Royce, 1970). Este modelo plantea un proceso lineal donde las actividades de desarrollo de un producto o servicios de #[i software] se agrupan en un conjunto de fases sucesivas donde estas son desarrolladas una única vez y los resultados de cada fase son la entrada requerida para cada fase subsiguiente, ninguna fase puede iniciar si la fase anterior no ha sido finalizada generalmente mediante un formalismo que puede ser un documento.
        p.mb-0 Según Sommerville (2005) el modelo en cascada se compone de cinco (5) etapas principales que se asocian con actividades fundamentales en el proceso de desarrollo de #[i software], las cuales son:
      .col-lg-6
        figure
          img(src='@/assets/curso/img3.png')
    .row
      .col-12
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/img4.svg')
          .tarjeta.color-acento-botones.p-3(x="21%" y="15%" numero="1")
            p.mb-0 Esta fase involucra la construcción del #[i software] a partir de los diseños del sistema.
          .tarjeta.color-acento-botones.p-3(x="21%" y="23.5%" numero="2")
            p.mb-0 Se hace una verificación inicial e individual del funcionamiento de cada uno de los módulos que se vayan construyendo.
          .tarjeta.color-acento-botones.p-3(x="18.2%" y="39.4%" numero="3")
            p.mb-0 Esta es la fase en la que entra el proyecto una vez el producto o servicio de #[i software] es entregado para ser usado por el cliente.
          .tarjeta.color-acento-botones.p-3(x="15.5%" y="48.8%" numero="4")
            p.mb-0 El mantenimiento hace referencia a la corrección de errores que no fueron detectados en las fases anteriores.
          .tarjeta.color-acento-botones.p-3(x="19.2%" y="56.5%" numero="5")
            p.mb-0 En la implementación se hacen mejoras del sistema y la incorporación de nuevos requerimientos.
          .tarjeta.color-acento-botones.p-3(x="41%" y="58.4%" numero="6")
            p.mb-0 Esta fase se encarga de hacer el proceso formal de pruebas.
          .tarjeta.color-acento-botones.p-3(x="40.8%" y="66.5%" numero="7")
            p.mb-0 Se verifica fundamentalmente que el conjunto de módulos construidos funcione correctamente.
          .tarjeta.color-acento-botones.p-3(x="40.9%" y="74.7%" numero="8")
            p.mb-0 Se verifica que cumpla con los requerimientos establecidos en la primera fase.
          .tarjeta.color-acento-botones.p-3(x="76%" y="17.5%" numero="9")
            p.mb-0 En esta fase se realiza una especificación muy detallada del sistema indicando los alcances, servicios a construir y restricciones.
          .tarjeta.color-acento-botones.p-3(x="76.5%" y="27%" numero="10")
            p.mb-0 Esta fase se encarga principalmente en la especificación de los requisitos.
          .tarjeta.color-acento-botones.p-3(x="85.7%" y="44.4%" numero="11")
            p.mb-0 En esta fase se establece la arquitectura final del sistema.
          .tarjeta.color-acento-botones.p-3(x="85.7%" y="51.2%" numero="12")
            p.mb-0 Se describen todas las abstracciones fundamentales del #[i software] y relaciones generalmente usando un lenguaje de modelado.
    p.mb-5 Las anteriores fases se pueden visualizar en la siguiente figura donde se sintetiza la información anteriormente mencionada.
    .row.mb-5(data-aos="fade-left")
      .col-12.p-5.bg-color5
        .titulo-quinto.color-acento-contenido
          h4 Etapas del modelo cascada
        figure
          img(src='@/assets/curso/img5.svg')
    p.mb-5 Siguiendo con el tema se presenta un cuadro comparativo donde se resumen las principales ventajas y desventajas de este modelo.
    .titulo-sexto.color-acento-contenido.ms-4.mb-5
      p.mb-0 Tabla 1 Ventajas y desventajas del modelo cascada.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-b.color-acento-contenido
          table
            tr
              th.text-center.text-white(style="background-color: #FFA726") Ventaja
              th.text-center.text-white(style="background-color: #FFA726; border-left: 2px solid #AFAFAF;") Desventaja
            tr
              td La definición clara de fases permite el desarrollo de una estructura sencilla que es ideal para proyectos sencillos y cortos
              td(style="border-left: 2px solid #AFAFAF;") No se acopla muy bien a proyectos complejos con múltiples equipos trabajando en paralelo ya que las fases normalmente se traslapan y es difícil diferenciarlas.
            tr
              td Siguiendo este modelo se genera una muy buena documentación del proceso y es posible definir hitos claros.
              td(style="border-left: 2px solid #AFAFAF;") Es difícil introducir cambios en el transcurso del proyecto.
            tr
              td Es más fácil realizar la estimación de costos al inicio del proyecto.
              td(style="border-left: 2px solid #AFAFAF;") Los usuarios finales y clientes normalmente son integrados al final del proceso lo que impide tener realimentación y ajustes en etapas tempranas.
            tr
              td Es fácil elaborar cronogramas de trabajo en base al desarrollo de las actividades de cada fase.
              td(style="border-left: 2px solid #AFAFAF;") Existen fallos que solo son detectados cuando el sistema entra en funcionamiento, lo que puede ser desastroso para un proyecto que sigue este modelo.
    p.mb-5 El modelo en cascada define cuatro grupos de roles típicos los cuales se mencionan a continuación:
    .row(data-aos="fade-right")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h2.text-center Desarrolladores
              p Es el rol más importante en la metodología cascada ya que son los encargados directos de la creación de código.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img7.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h2.text-center Testers
              p Encargados de encontrar fallas en los productos finales y retornar el software a los desarrolladores para arreglar todos los defectos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h2.text-center Analista del negocio
              p Encargado de la realización de estrategias de negocio que le permitan al producto software alcanzar popularidad en el mercado digital.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h2.text-center Administrador del proyecto
              p Es responsable de la calidad final del software. Administra el proyecto y lo subdivide en tareas entre los miembros del equipo.
    separador.mb-5
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Proceso Racional Unificado - RUP
    p RUP es una sigla en inglés equivalentes a Proceso Racional Unificado, el cual es un proceso de desarrollo de software tradicional basado en el modelo cascada y que fue desarrollado por la empresa Rational Software que es propiedad de IBM, esta metodología se centra en la arquitectura y es guía por casos de uso (requerimientos) (Kruchten, 2003).
    p.mb-5 RUP divide el proceso de desarrollo en cuatro grandes fases, dentro de las que se realizan algunas iteraciones donde se desglosan, en mayor o menor intensidad, un conjunto de disciplinas según la fase que se está abordando. A continuación, se observan las fases y disciplinas propuestas por RUP.
    .titulo-quinto.color-acento-contenido.mb-5
      h4 Fases y disciplinas de RUP
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/img10.svg').m-auto
      figcaption.mt-4 Nota. Tomada de Man, Hafriz, Nural, Maizura, Noor, Wan, Bakar y Man (2008).
    p.mb-5 A continuación, se describen las fases y su impacto en el proceso, por lo que se le invita a revisar el siguiente recurso de aprendizaje.
    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-contenido
        .row(titulo="Primera fase").align-items-center.justify-content-center
          .col-11.col-lg-5.mb-4
            figure
              img(src='@/assets/curso/img11.svg', style="width: 400px").m-auto
          .col-11.col-lg-5
            p.mb-0 La #[b primera gran fase] definida por RUP es la de #[b inicio], en la cual se abordan actividades principalmente enfocadas en la comprensión del problema y el tipo de tecnología a utilizar, por lo que hay una gran carga en actividades relacionadas con la disciplina de modelado del negocio y especificación de requisitos.
        .row(titulo="Segunda fase").align-items-center.justify-content-center
          .col-11.col-lg-5.mb-4
            p.mb-0 La #[b segunda fase] es la elaboración, donde se centra la mayor parte del esfuerzo en la definición general de la arquitectura del sistema y el refinamiento de requisitos y modelado del negocio. RUP generalmente se apoya en el lenguaje de modelado UML para el modelado del negocio y descripción de la arquitectura.
          .col-11.col-lg-5
            figure
              img(src='@/assets/curso/img13.svg', style="width: 400px").m-auto
        .row(titulo="Tercera fase").align-items-center.justify-content-center
          .col-11.col-lg-5.mb-4
            figure
              img(src='@/assets/curso/img14.svg', style="width: 400px").m-auto
          .col-11.col-lg-5
            p.mb-0 La #[b tercera fase] corresponde a la #[b construcción], donde se centran en las actividades relacionadas con la construcción del producto. Normalmente esta fase está constituida por varias iteraciones donde en cada una de ellas se desarrollan un subconjunto de requerimientos que normalmente están especificados como casos de uso. Cada una de estas pequeñas iteraciones se realiza utilizando el modelo cascada y el conjunto de todas las iteraciones producen al final una versión del producto.
        .row(titulo="Cuarta fase").align-items-center.justify-content-center
          .col-11.col-lg-5.mb-4
            p.mb-0 A la #[b cuarta fase] se le denomina #[b transición] y en esta se desarrollan principalmente las disciplinas de pruebas y despliegue, es decir las actividades encaminadas a garantizar que el producto esté listo para entrega a sus usuarios.
          .col-11.col-lg-5
            figure
              img(src='@/assets/curso/img15.svg', style="width: 400px").m-auto
    p Es importante aclarar que dentro de cada una de las fases se desarrollan varias de las disciplinas, pero el esfuerzo y tiempo que se invierte en ellas tendrá mayor o menor enfoque dependiendo de la fase en la que se encuentre el proyecto.
    p.mb-5 Otro aspecto importante de esta metodología es que se apoya en un conjunto de artefactos que son desarrollados con el fin de especificar el proceso de análisis y diseño que soporta la construcción del software, entre los artefactos más comunes se encuentran:
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-5.mb-4.mb-lg-0
        ul.lista-ul--color.lista-ul
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Documento de visión.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Documento de especificación de requisitos.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Diagramas de casos de uso.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Modelos conceptuales (clases y entidad relación).
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Diagramas que representan la vista de implementación como:
          ul.ms-5
            li 
              i.fas.fa-chevron-right(style="color: #039BE5")
              | Diagramas de secuencia.
            li 
              i.fas.fa-chevron-right(style="color: #039BE5")
              | Diagramas de estados.
            li 
              i.fas.fa-chevron-right(style="color: #039BE5")
              | Diagramas de colaboración, entre otros.
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img4.png', style="width: 600px").m-auto
    p.mb-5 Las disciplinas, por otra parte, representan un conjunto de actividades relacionadas con un área específica del proyecto y están inspiradas en el modelo en cascada. RUP establece las siguientes disciplinas según Kruchten (2003):
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img16.svg', style="width: 600px").m-auto
      .col-lg-4
        ul.lista-ul--color.lista-ul.ms-5
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Modelado de negocios.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Requerimientos.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Análisis y diseño.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Implementación.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Pruebas.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Despliegue.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Configuración.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Administración del cambio.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Administración de proyectos y ambiente.
    p A continuación, se describen cada una de las disciplinas mencionadas y cómo estás aportan en el proceso.
    p.mb-5 RUP propone una categorización de roles encargados de la realización de actividades dentro de cada una de las disciplinas que son:
    TabsB.color-acento-contenido.mb-5.bg-color5
      .py-4.py-md-5(titulo="Analistas" :icono="require('@/assets/curso/img17.svg')")
        .row
          .col-12
            p.mb-5 #[b A continuación se describen cada uno de los roles:]
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-5.mb-4.mb-lg-0
                p En los #[b roles específicos] clasificados en la categoría de analistas se encuentran:
                ul.lista-ul--color.lista-ul.ms-5
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Analistas de procesos de negocio.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Diseñadores del negocio.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Analistas del sistema.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Especificador de requisitos.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Diseñadores de interfaces de usuario o similares.
              .col-lg-5
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/img21.svg', style="width: 300px").m-auto
      .py-4.py-md-5(titulo="Desarrolladores" :icono="require('@/assets/curso/img18.svg')")
        .row
          .col-12
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-5.mb-4.mb-lg-0
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/img22.svg', style="width: 300px").m-auto
              .col-lg-5
                p Dentro de los roles específicos clasificados en la categoría de #[b desarrolladores] se encuentran:
                ul.lista-ul--color.lista-ul.ms-5
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Arquitectos de #[i software].
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Diseñador de bases de datos.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | 
                    p.mb-0 Desarrollador #[i backend] y #[i frontend].
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Cualquier otro rol relacionado con procesos de codificación o integración de código.
      .py-4.py-md-5(titulo="Probadores" :icono="require('@/assets/curso/img19.svg')")
        .row
          .col-12
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-5.mb-4.mb-lg-0
                p En los roles específicos clasificados en la categoría de #[b probadores] se encuentran:
                ul.lista-ul--color.lista-ul.ms-5
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Los diseñadores de pruebas.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Los implementadores de pruebas.
              .col-lg-5
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/img23.svg', style="width: 300px").m-auto
      .py-4.py-md-5(titulo="Encargados y otros actores." :icono="require('@/assets/curso/img20.svg')")
        .row
          .col-12
            p.mb-5 De igual forma, en los roles específicos clasificados en la categoría de analistas encontramos: analistas de procesos de negocio, diseñadores del negocio, analistas del sistema, especificador de requisitos, diseñadores de interfaces de usuario.
            .row.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/img24.svg', style="width: 300px").m-auto
              .col-lg-6
                p Dentro de los roles específicos clasificados en la categoría de otros se encuentran:
                ul.lista-ul--color.lista-ul.ms-5
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Artistas gráficos.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Administradores de sistemas.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Especialista en herramientas.
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    |
                    p.mb-0 #[i Stakeholders.]
                  li 
                    i.fab.fa-buffer(style="color: #039BE5")
                    | Cualquier otro rol no especificado anteriormente.
    .row.justify-content-center
      .col-10.bg-color6(data-aos="fade-down")
        .p-5
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img65.svg', style="width: 170px").m-auto
            .col
              p.mb-0 Existen otras metodologías que son categorizadas como marcos de trabajo tradicionales, sin embargo, la idea de este espacio es mostrar las características principales de los más reconocidos en la industria de software. Si se desea profundizar en las ventajas y desventajas de estas metodologías y otras, se invita a explorar el apartado de materiales complementarios. A continuación, se detallarán las metodologías enmarcadas dentro de la categoría de marcos de trabajo ágiles.

</template>

<script>
export default {
  name: 'Tema2',
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
