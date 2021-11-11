<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Marcos de trabajo ágiles
    .row.mb-5(data-aos="fade-right")
      .col-lg-6.px-0
        figure
          img(src='@/assets/curso/img5.png').img-position2
      .col-lg-6.bg-color7
        .p-4
          figure.mb-0.mb-lg-5
            img(src='@/assets/curso/img2.svg').img-position3
          p.text-white Los marcos de trabajo ágiles o metodologías ágiles para el desarrollo de #[i software] nacen como otra opción para abordar proyectos donde no es posible tener un detalle completo de los requerimientos y sus estimaciones en la primera fase del proyecto o donde es necesario hacer procesos de adaptabilidad a lo largo del proceso de desarrollo de #[i software].
          .row
            .col-12.d-inline-flex.justify-content-center.align-items-center
              p.text-center.mb-0.text-white #[span  (Maida y Pacienzia, 2015).]
              .cuadro
    p.mb-5 Las metodologías ágiles proveen un conjunto de pautas y principios que buscan facilitar y priorizar la entrega de producto sobre procesos de documentación exhaustiva, haciéndolos más simples, donde interactúa el cliente final desde las primeras etapas del proyecto. El inicio de las metodologías ágiles nació en el año 2001 a partir del manifiesto ágil de #[i software] donde se establecen cuatro valores fundamentales (Manifiesto Ágil, 2001):
    ul.lista-ul--color.lista-ul.ms-5.mb-5
      li 
        i.fab.fa-buffer(style="color: #039BE5")
        | Individuos e interacciones sobre procesos y herramientas.
      li 
        i.fab.fa-buffer(style="color: #039BE5")
        | Software funcionando sobre documentación extensiva.
      li 
        i.fab.fa-buffer(style="color: #039BE5")
        | Colaboración con el cliente sobre negociación contractual.
      li 
        i.fab.fa-buffer(style="color: #039BE5")
        | Respuesta ante el cambio sobre seguir un plan.
    p.mb-5 Adicionalmente a los valores ágiles anteriormente listados, el manifiesto ágil establece 12 principios ágiles para materializar los valores definidos (Manifiesto Ágil, 2001):
    .row.mb-4.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img25.svg', style="width: 500px").m-auto
      .col-lg-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 1
            | “Nuestra principal prioridad es satisfacer al cliente a través de la entrega temprana y continua de software de valor.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 2
            | Son bienvenidos los requisitos cambiantes, incluso si llegan tarde al desarrollo. Los procesos ágiles se doblegan al cambio como ventaja competitiva para el cliente.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 3
            | Entregar con frecuencia software que funcione, en periodos de un par de semanas hasta un par de meses, con preferencia en los períodos breves.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 4
            | Las personas del negocio y los desarrolladores deben trabajar juntos de forma cotidiana a través del proyecto.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 5
            | Construcción de proyectos en torno a individuos motivados, dándoles la oportunidad y el respaldo que necesitan y procurándoles confianza para que realicen la tarea.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 6
            | La forma más eficiente y efectiva de comunicar información de ida y vuelta dentro de un equipo de desarrollo es mediante la conversación cara a cara.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 7
            | El software que funciona es la principal medida del progreso.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 8
            | Los procesos ágiles promueven el desarrollo sostenido. Los patrocinadores, desarrolladores y usuarios deben mantener un ritmo constante de forma indefinida.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 9
            | La atención continua a la excelencia técnica enaltece la agilidad.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 10
            | La simplicidad como arte de maximizar la cantidad de trabajo que se hace, es esencial.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 11
            | Las mejores arquitecturas, requisitos y diseños emergen de equipos que se auto organizan.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #000000") 12
            | En intervalos regulares, el equipo reflexiona sobre la forma de ser más efectivo y ajusta su conducta en consecuencia”.
    p A continuación, se invita a profundizar en el tema revisando la sección de material complementario donde encontrará un video que le permitirá ampliar el conocimiento, por otro lado, en los numerales siguientes podrá identificar otra serie de factores importantes que debe tener en cuenta.
    #t_3_1
    .titulo-segundo.color-secundario
      h2 3.1 Programación Extrema - XP
    .row.mb-5
      .col-8.col-lg-6
        p XP es la abreviación comúnmente utilizada para referirse a Extreme Programming, que es un marco de desarrollo de software ágil que busca producir software de alta calidad en contextos con requisitos altamente cambiantes, riesgos que involucran tiempos fijo con tecnologías nuevas y equipos de trabajo pequeños ubicados en un mismo sitio.
        p.mb-0 En XP se definen cinco valores según Beck y Andrés (2004):
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img26.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Comunicación]: el desarrollo de software requiere de trabajo en equipo por lo cual es importante la transferencia de conocimientos y utilizar medios de comunicación apropiados, se propone la discusión cara a cara con herramientas que permitan dibujar o escribir, como, por ejemplo: un tablero.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img27.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Simplicidad]: esto se refiere a hacer solo las cosas que sean absolutamente necesarias evitando el desperdicio, elaborar las cosas de forma que sea fácil entender por otros y abordar solo requisitos conocidos.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img28.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Retroalimentación]: esto permite identificar áreas de mejora y revisión constante de las prácticas implementadas en el proceso de forma que se puedan establecer procesos de mejora permanentes.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img29.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Coraje]: se refiere al actuar sobre situaciones que pueden ser retadoras para el equipo, como, por ejemplo:
              ul.lista-ul--color.lista-ul
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  | Enfrentar problemas organizacionales.
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  | Intentar implementar funcionalidades de formas diferentes cuando lo convencional no funciona y aceptar comentarios, etc.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img30.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Respeto], los miembros del equipo deben respetarse entre sí para comunicarse y trabajar en equipo. Cada persona contribuye en favor de lograr el objetivo del equipo.
    p.mb-5 Adicional a los valores XP se caracteriza por la definición de un conjunto de 12 prácticas de desarrollo de software que aunque pueden ser adoptadas de forma aislada tiene mayor relevancia cuando son desarrolladas en conjunto (Jeffries, 2011):
    .row.mb-5
      .col-12.bg-color8
        .p-4
          LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
    p.mb-5 Los roles fundamentales establecidos por este marco de trabajo ágil son los siguientes: cliente, programador, coach, tester y mánager.
    .row
      .col-12.bg-color5
        .p-4
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src='@/assets/curso/img37.svg', style="width: 500px").m-auto
            .col-lg-6
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/img38.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 Los clientes son los encargados del establecimiento de las prioridades del proyecto y las necesidades puntuales.
              hr
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/img6.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 Los programadores se encargan de transformar esos requerimientos en bloques de código funcional, son el centro del marco de #[i Extreme Programming].
              hr
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/img7.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 Los #[i testers] se encargan de la aplicación de pruebas para garantizar la calidad de los productos y servicios desarrollados.
              hr
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/img8.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 El #[i coach] es una figura encargada de brindar asesoría a los miembros del equipo y son los que definen el rumbo del proyecto.
              hr
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/img9.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 El manager se encarga de la coordinación de actividades, del aseguramiento de los recursos requeridos para el proyecto y quien tiene la responsabilidad de la comunicación externa.
    separador.mb-5
    #t_3_2
    .titulo-segundo.color-secundario
      h2 3.2 Desarrollo rápido de aplicaciones - RAD
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-color10
            p.mb-0 RAD (Desarrollo Rápido de Aplicaciones) es otra metodología de desarrollo de software ágil que se centra en el desarrollo rápido de aplicaciones mediante la realización de iteraciones frecuentes y realimentación constante y fue inventado por James Martin en 1991.
        p Algunas características fundamentales de RAD son:
        ul.lista-ul--color.lista-ul.mb-0
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Mayor flexibilidad y adaptabilidad a cualquier ajuste que deba realizarse durante el proceso de desarrollo.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Iteraciones rápidas que reducen el tiempo de desarrollo y mantienen un ritmo de entrega acelerado.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Se fomenta la reutilización de código.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Mejor gestión del riesgo, ya que las partes interesadas discuten y abordan cualquier vulnerabilidad mientras se construyen los productos.
      .col-lg-7
        figure
          img(src='@/assets/curso/img6.png')
    p.mb-5 A continuación, se describen las fases propuestas en RAD.
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/img39.svg', style="width: 1300px").m-auto
      figcaption Nota. Tomada de Blog Capterra (2019).
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-color9
            p.mb-0 La #[b primera fase] definida corresponde a la #[b definición y finalización] de los requisitos del proyecto. En esta fase las partes interesadas se reúnen para definir los requisitos del proyecto definiendo entre otros casos:
        ul.lista-ul--color.lista-ul
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Los objetivos.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Las expectativas.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Los plazos.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Presupuesto del proyecto.
        p La #[b segunda fase] aborda la construcción de #[b prototipos] los cuales son construidos, validados y mejorados a partir de la validación con los usuarios y una vez son aprobados pasan a la #[b tercera fase] donde estos prototipos son transformados en modelos funcionales.
        p.mb-0 En la #[b cuarta fase] se enfoca en la realización de #[b pruebas] exhaustivas para garantizar que todos los elementos construidos funcionan bien individualmente y también de forma colectiva. Finalmente, en la #[b última fase] se realizan todas las actividades de lanzamiento del producto lo que involucra el cargue inicial de datos y entrenamiento a los usuarios.
      .col-lg-7
        figure
          img(src='@/assets/curso/img40.svg')
    p.mb-5 Según HKSAR (2009) los roles más importantes de la metodología RAD son: facilitador, escriba, equipo #[i Swat], administrador del modelo, administrador de bases de datos, equipo de planificación de #[i Workshop], equipo de diseño de usuario, equipo de soporte de construcción y equipo de transición, a continuación se mencionan las características más importantes de cada rol.
    .row
      .col-lg-6
        hr
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img41.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Facilitador]: se encarga del aseguramiento de los objetivos, es responsable de los #[i Workshops] de captura de requerimientos, se asegura del alistamiento de materiales, es un mediador en procesos de resolución de conflictos.
        hr
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img43.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Equipo Swat]: equipo encargado del diseño y construcción del sistema.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img45.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Administrador de bases de datos]: responsables del rendimiento, integridad y seguridad de los datos de la organización
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img47.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Equipo de diseño de usuario]: proveen información detallada describiendo las funciones del negocio y procesos que serán afectados por el sistema propuesto.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img49.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Equipo de transición]: desarrolla las tareas necesarias para preparar y llevar el sistema a entornos de producción.
      .col-lg-6
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img42.svg', style="width: 200px").m-auto
          .col
            p.mb-4 #[b Escriba]: es responsable de la documentación de todas las salidas producto de los #[i Workshops] de captura de requerimientos y registra información de todo el proceso.
        hr
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img44.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Administrador del modelo]: encargado de coordinar el desarrollo y mantenimiento de las arquitecturas modelos resultantes del proyecto.
        hr
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img46.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Equipo de planificación de los #[i Workshops]]: asisten en la definición de requerimientos y el alcance propuesto para el sistema propuesto.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img48.svg', style="width: 200px").m-auto
          .col
            p.mb-0 #[b Equipo de soporte de construcción]: equipo que se asegura que las necesidades del usuario final sean alcanzadas en el sistema completo mediante la entrega de conocimiento detallado de actividades de negocio y realimentación en la usabilidad del sistema al equipo Swat.
        hr
    separador.mb-5
    #t_3_3
    .titulo-segundo.color-secundario
      h2 3.3 Scrum
    p.mb-5 Scrum es un marco de trabajo ágil de muy amplio uso en la industria del software que se fundamenta en los valores y principios ágiles definidos en (Manifiesto Ágil, 2001) y donde se definen tres pilares fundamentales según (SCRUMstudy, 2013) los cuales se describen a continuación:
    .row.mb-5.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12.mb-4.bg-color6
            .p-4
              p #[b Transparencia]
              p Hace referencia a que cualquier proceso de Scrum puede ser conocido por cualquiera. Esto es posible por medio de eventos como:
              ul.lista-ul--color.lista-ul
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  | Las reuniones de revisión y reuniones diarias.
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  | Artefactos como la pila de producto.
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  | Cronogramas de lanzamiento.
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  | Documentos de visión del proyecto.
                li 
                  i.fab.fa-buffer(style="color: #039BE5")
                  |
                  p.mb-0 Instrumentos de seguimiento, como: el #[i burndown chart] o el tablero de #[i Scrum] (#[i Scrum board]).
          .col-12.mb-4.bg-color6
            .p-4
              p #[b Inspección]
              p Permite que cualquiera pueda estar enterado de las actividades realizadas por otros y en general conocer el estado actual de los procesos.
          .col-12.bg-color6
            .p-4
              p #[b Adaptación]
              p Por medio de la transparencia y la inspección es posible fijar actividades de mejoras que permitan modificar todo tipo de proceso en pro de lograr más altos estándares de calidad.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img7.png', style="width: 100%").m-auto
    p.mb-5 Adicionalmente, este marco de trabajo ágil está estructurado por un conjunto de roles, eventos y artefactos que pueden ser observados a continuación:
    .row.mb-5(data-aos="fade-right")
      .col-12.bg-color5
        .p-4
          .titulo-quinto.color-acento-contenido.mb-5
            h4 Marco de trabajo Scrum
          figure
            img(src='@/assets/curso/img50.svg', style="width: 1300px").m-auto
            figcaption Nota. Tomada de pngwing.com (s.f.)
    p.mb-5 Dentro de los roles hay una división en dos categorías fundamentales:
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/img51.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p Los roles centrales que hacen referencia a los requeridos obligatoriamente para la creación de un producto, están altamente comprometidos y de los cuales depende el éxito o no de un proyecto.
      .col-md-6.col-lg-5(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/img52.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p Los roles no centrales que se refieren a todo el personal interesado en el proyecto, pueden interactuar con el equipo, pero no son los responsables del éxito del mismo, dentro de esta categoría entran los #[i stakeholders], directivos, gerentes, #[i marketing], asesores, etc.
    p.mb-5 Para representar mejor estas dos categorías se hace referencia a la historia del cerdo y la gallina que se observa en la siguiente figura, los roles centrales son el cerdo en la historia y las gallinas los roles no centrales.
    h4.mb-5 Fábula roles de Scrum
    .row.mb-5.justify-content-center(data-aos="fade-up")
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img55.svg', style="width: 450px").m-auto
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img54.svg', style="width: 450px").m-auto
      .col-7.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/img53.svg', style="width: 450px").m-auto
      .col-11.bg-color5
        .p-2
          p.mb-0 Nota. Tomada de implementingscrum.com (2006).
    p.mb-5 Por otro lado hay tres roles centrales dentro del marco de trabajo de Scrum (SCRUMstudy, 2013) que se describen a continuación:
    h4.text-center Roles de Scrum
    .row.mb-5.justify-content-center(data-aos="fade-right")
      .col-8.col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img56.svg', style="width: 450px").m-auto
        p.text-center #[b Dueño del producto (#[i Product Owner])]
        p persona con amplio conocimiento en el negocio del cliente, sus necesidades y las tendencias del mercado para el área específica. Este rol está encargado de maximizar el valor de negocio entregado al cliente y es el único responsable del control del Product Backlog (requerimientos) y su priorización. Este también representa al cliente en algunos procesos de demostración de avances y determina cuándo aprobar o no una entrega.
      .col-8.col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img57.svg', style="width: 450px").m-auto
        p.text-center #[b #[i Scrum Master]]
        p es un rol que se encarga de facilitar los procesos al interior del equipo de trabajo removiendo cualquier impedimento y apoyando procesos de empoderamiento personal, debe velar porque los elementos propios del marco de trabajo Scrum se apliquen de manera correcta.
      .col-8.col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img58.svg', style="width: 450px").m-auto
        p.text-center #[b Equipo de desarrollo (#[i Developer Team])]
        p son los responsables de la transformación de los requerimientos en código ejecutable a ser usado por el cliente, pero también son responsables de la planificación de las iteraciones, establecimiento de características para tener en cuenta en la verificación de un requerimiento terminado y presentación de avances a los clientes. Generalmente es un equipo autoorganizado y autogestionado.
    p.mb-5 Además de los roles, Scrum define un conjunto de eventos con participantes y objetivos claros que se desarrollan en momentos particulares del flujo general de Scrum, a continuación, se detalla cada uno de estos:
    ImagenInfografica.color-secundario.p-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img59.svg')
      .tarjeta.color-acento-botones.p-3(x="47%" y="33%" numero="1")
        p.mb-0 #[b Sprint]: es el corazón de #[i Scrum] y se refiere a una iteración que está acotada generalmente por un lapso entre 2 y 4 semanas donde se realiza un ciclo completo de actividades de análisis, diseño, construcción y pruebas para desarrollar una versión del producto potencialmente entregable al cliente.
      .tarjeta.color-acento-botones.p-3(x="63%" y="41%" numero="2")
        p.mb-0 #[b Planeación del Sprint]: reunión realizada justo antes del inicio de un #[i Sprint] donde se definen el subconjunto de requerimientos (#[i Sprint Backlog]) a ser desarrollados en los siguientes y cómo será el proceso requerido para hacer la entrega, lo cual incluye detallar los requerimientos en tareas concretas, estimación de tiempos/esfuerzo y distribución inicial de responsabilidades. Dependiendo de la duración del #[i Sprint] este tiempo de planificación puede variar, pero la métrica establecida para un #[i Sprint] de 4 semanas corresponde a una planeación de #[i Sprint] de 8 horas.
      .tarjeta.color-acento-botones.p-3(x="46%" y="65%" numero="3")
        p.mb-0 #[b Reunión diaria (#[i Daily Meeting])]: reunión realizada generalmente al inicio de cada día donde el equipo de trabajo informa en que ha venido trabajando, qué cosas realizará en el día y qué problemas se le han presentado. Esta es corta, se realiza de pie y debe tener una duración alrededor de los 15 minutos, por lo que, se alinea con los pilares de transparencia e inspección.
      .tarjeta.color-acento-botones.p-3(x="30%" y="65%" numero="4")
        p.mb-0 #[b Revisión del #[i Sprint]]: reunión realizada al finalizar el #[i sprint] donde el equipo de desarrollo muestra los resultados. Para un #[i Sprint] de 4 semanas se usan reuniones de revisiones 4 horas.
      .tarjeta.color-acento-botones.p-3(x="34%" y="44%" numero="5")
        p #[b Reunión de retrospectiva]: esta es la última, se realiza luego de la revisión del #[i Sprint] y tiene como objetivo la autoevaluación personal y del grupo sobre el desempeño del Sprint que acaba de finalizar. En esta se identifican y documentan los aprendizajes por medio de diferentes técnicas en las que generalmente se busca dar respuesta a las siguientes preguntas:
        p.ms-3 ¿Qué funcionó bien y se debe seguir haciendo?
        p.ms-3 ¿Qué no funcionó bien y se debe dejar de realizar?
        p.ms-3 ¿Qué debemos empezar a mejorar?
        p.mb-0 Para un #[i Sprint] de 4 semanas se utilizan 3 horas para esta reunión.
    p.mb-5 Finalmente, el marco de trabajo Scrum define un conjunto de artefactos que permiten registrar y gestionar información clave para asegurar los tres pilares fundamentales y proveen información valiosa durante todo el proceso de desarrollo de software. Entre los artefactos representativos de este se encuentran los siguientes:
    .row.mb-5.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img8.png', style="width: 650px").m-auto
      .col-lg-6
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img60.svg', style="width: 60px").m-auto
          .col
            p.mb-0 #[b Pila de producto (#[i Product Backlog])]: lista priorizada de requerimientos generalmente descritos en formato de historias de usuarios que representa todas las características del sistema a construir.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img61.svg', style="width: 60px").m-auto
          .col
            p.mb-0 #[b Pila del #[i Sprint] (#[i Sprint Backlog])]: lista de requerimientos seleccionados desde el #[i Product backlog] por el equipo de trabajo para ser desarrollados durante un #[i Sprint] particular. Este es uno de los artefactos generados en la reunión de planeación del #[i Sprint].
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img62.svg', style="width: 60px").m-auto
          .col
            p.mb-0 #[b #[i Burndown Chart]]: es un gráfico visual de dos ejes que muestra a los equipos la cantidad de trabajo pendiente por completar (eje Y) y el tiempo disponible para hacerlo (eje X). Este generalmente se realiza por cada #[i Sprint] ubicando la cantidad de trabajo a realizar del #[i Sprint Backlog] (usualmente medido por puntos de historia u de horas de trabajo) en un tiempo 0 y por cada día finalizado se resta la cantidad de puntos de historia u horas de cada tarea completada.
    p.mb-5 Por otro lado, también es posible usar este mismo gráfico para representar el avance general del proyecto ubicando en el eje Y la cantidad total de horas o esfuerzo del #[i Product Backlog] y en el eje X la cantidad de #[i Sprint] proyectados. Cada uno de estos puntos se une por medio de una línea y es posible determinar visualmente si el flujo de trabajo está en una situación óptima o no respecto al tiempo restante para completar el #[i Sprint].
    .titulo-sexto.color-acento-contenido.ms-4.mb-5
      p.mb-0 Figura 7 Burndown Chart
    .row.mb-5
      .col-12.bg-color5
        .p-4
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img63.svg', style="width: 650px").m-auto
            .col-lg-6
              p Tablero de #[i Scrum] (#[u #[i Scrumboard]]): es un elemento visual donde se integra la mayor parte de los elementos del marco de trabajo #[i Scrum], en él se indica la carga de trabajo, el estado actual de cada una de las actividades y sus respectivos responsables. Este es un elemento que se sincroniza de manera permanente y facilita la implementación de los pilares de transparencia, inspección y adaptabilidad. Si bien se aconseja el uso de un tablero, existen diferentes tipos de herramientas digitales que permiten la implementación de un tablero de #[i Scrum].
      .col-12.bg-color8
        .p-2
          p.mb-0 Nota. Tomada de intl-blog.imgix.net (2019).
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 Figura 8 Tablero de Scrum
        figure
          img(src='@/assets/curso/img64.svg', style="width: 1100px").m-auto
    p.mb-5 Adicionalmente es de vital importancia mencionar que entre los principales beneficios del marco de trabajo Scrum se encuentran los siguientes elementos:
    .row.mb-5.align-items-center
      .col-lg-6
        ul.lista-ul--color.lista-ul
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Es posible gestionar las expectativas del cliente de manera regular, ya que, este puede y debe participar en las reuniones de revisión, por lo que, está enterado todo el tiempo del estado actual del proyecto.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | El cliente puede obtener resultados importantes y utilizables desde las primeras iteraciones, ya que, la lista de producto está priorizada para ofrecer mayor valor en el menor tiempo posible y porque cada finalización de Sprint debe tener como resultado una versión totalmente funcional.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | El proyecto puede iniciar con requerimientos de muy alto nivel y es fácil administrar los cambios.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | La participación constante del cliente permite mitigar riesgos del proyecto desde sus primeras etapas.
          li 
            i.fab.fa-buffer(style="color: #039BE5")
            | Los procesos de retrospectiva permiten establecer actividades permanentes de mejora continua en función de las experiencias del equipo.
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img9.png', style="width: 550px").m-auto
    p Un elemento clave en su formación es la planeación de proyectos de software que aunado con los contenidos ya vistos le permite tener un panorama amplio sobre el tema.
    p.mb-0 Para profundizar le invito a revisar la sección de material complementario donde encontrará un video sobre el tema.

</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'El juego de la planificación',
        texto:
          'Consiste en una reunión de planeación que realiza el equipo de desarrollo en conjunto con el cliente para discutir y probar las características a ser desarrolladas.',
        icono: require('@/assets/curso/img31.svg'),
      },
      {
        titulo: 'Pequeños lanzamientos',
        texto:
          'Esta práctica sugiere hacer iteraciones cortas con funcionalidades pequeñas que puedan ser probadas con el cliente de forma que se obtenga realimentación temprana y frecuente.',
        icono: require('@/assets/curso/img32.svg'),
      },
      {
        titulo: 'Metáfora',
        texto:
          'Los nombres usados para definir cualquier tipo de identificador en el sistema deben ser coherentes. El diseño y la estructura en general deben ser comprensibles para cualquier persona.',
        icono: require('@/assets/curso/img33.svg'),
      },
      {
        titulo: 'Diseño simple',
        texto:
          'Esto implica hacer un código que funcione y que sea a la vez la solución más simple posible, evitando duplicación de código, menor número de métodos y clases.',
        icono: require('@/assets/curso/img34.svg'),
      },
      {
        titulo: 'Pruebas',
        texto:
          'Sugiere el uso de técnicas donde se enfatice en el proceso de pruebas constantes antes de iniciar la construcción del código, como, por ejemplo: TTD (desarrollo basado en pruebas)',
        icono: require('@/assets/curso/img35.svg'),
      },
      {
        titulo: 'Refactorización',
        texto:
          'Eliminación de funciones innecesarias, desacoplar elementos y eliminar cualquier tipo de redundancia de forma que se mantenga un código lo más limpio posible, que sea fácil de entender y modifica.',
        icono: require('@/assets/curso/img36.svg'),
      },
    ],
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
