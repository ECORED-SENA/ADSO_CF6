export default {
  global: {
    componenteFormativo: 'Metodologías de desarrollo de <i>software</i>',
    descripcionCurso:
      'Las metodologías de desarrollo de <i>software</i> proponen un conjunto de procesos y actividades que deben ser desarrolladas por el equipo de desarrollo de <i>software</i> para realizar un trabajo organizado que sea fácil hacerle seguimiento y de esta forma establecer planes de mejora en busca de una mejor calidad de los productos y servicios que se desarrollan.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metodologías de desarrollo de <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marcos de trabajo tradicionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cascada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso Racional Unificado - RUP',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marcos de trabajo ágiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Programación extrema - XP',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Desarrollo rápido de aplicaciones - RAD',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'SCRUM',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Planeación de proyectos de <i>software</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agilemanifesto.org. (2021). Manifiesto por el desarrollo ágil de software. Agilemanifesto.org. ',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Beck, K., & Andrés, C. (2004b). Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series). Addison-Wesley. ',
    },
    {
      referencia: 'Blog Capterra.com. (2019). RAD. ',
      link:
        'https://blog.capterra.com/wp-content/uploads/2019/12/K_rOSJJEJ-Zl0G3VZGYWiGw3tFj1TuRQDvqPTpmVB3FrK4lnOONPG06gqWdwjBOagIbRUyCyD5R_WhvzZ4cHdglqaVyGyV4pWcn-PwIJn8JniGlQaeAQBJqLxqH_t4i7uCnBW9rp.png',
    },
    {
      referencia: 'Implementingscrum.com (2006). Scrum. Fuente: ',
      link:
        'https://cdn-images-1.medium.com/max/1600/1*znawlwBQPM_xAcopRXjQHw@2x.jpeg',
    },
    {
      referencia: 'Intl-blog.imgix.net. (2019).  Burndown-chart. ',
      link:
        'https://intl-blog.imgix.net/wp-content/uploads/2019/12/Burndown-chart.png?auto=format%2Cenhance',
    },
    {
      referencia:
        'Jeffries, R. (2011). What is Extreme Programming? Ronjeffries.com. ',
      link: 'https://ronjeffries.com/xprog/what-is-extreme-programming/',
    },
    {
      referencia:
        'Kruchten, P. (2003). The Rational Unified Process: An Introduction. Addison-Wesley Professional. ',
    },
    {
      referencia:
        'Maida, E, G., Pacienzia, J. (2015). Metodologías de desarrollo de software [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería Fray Rogelio Bacon. Universidad Católica Argentina. ',
      link: 'https://bit.ly/3hJMwXP',
    },
    {
      referencia:
        'Man, M., Hafriz, M., Nural, A., Mohd, H., Maizura, N., Noor, M., Wan, W., Bakar, A., & Man, M. (2008). eWorks: Development of a Web Based Site Assessment Software for Construction Progress Project. Communications of the IBIMA, (5), 93-99. ',
      link:
        'https://www.researchgate.net/profile/Mustafa-Man/publication/228820202/figure/fig6/AS:668418772578316@1536374862199/Phases-in-Rational-Unified-Process.png',
    },
    {
      referencia:
        'Martin, J. (1991). Rapid Application Development. Macmillan Coll. ',
    },
    {
      referencia: 'Pngwing.com (s.f.) Marco de trabajo Scrum. ',
      link: 'https://www.pngwing.com/es/free-png-xqgjv',
    },
    {
      referencia:
        'Royce, W. W. (1970). Managing the Development of Large Software Systems. Proceedings of IEEE WESCON, 26, 328-388. ',
    },
    {
      referencia:
        'SCRUMstudy. (2013). A Guide to the Scrum Body of Knowledge (SBOK Guide). VMEdu Inc. ',
    },
    {
      referencia:
        'Sommerville, I., Galipienso, M. I. A., y Martínez, A. B. (2005). Ingeniería del software. Pearson Educación. ',
    },
  ],
  glosario: [
    {
      termino: 'Iteración',
      significado:
        'hace referencia a un ciclo limitado por tiempo donde se ejecutan actividades de análisis, diseño, construcción y pruebas.',
    },
    {
      termino: '<em>Product Owner</em>',
      significado:
        'rol central de Scrum encargado de la gestión de la pila de producto y representante del cliente dentro del grupo de trabajo.',
    },
    {
      termino: '<em>Scrum Master</em>',
      significado:
        'rol central de Scrum encargado de facilitar el trabajo del equipo de desarrollo y de mantener la aplicación del marco de trabajo SCRUM.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'persona, organización o empresa interesada en el desarrollo del proyecto.',
    },
  ],
  complementario: [
    {
      texto:
        'Henao, C. (2018). #1. <em>¿Qué son las metodologías tradicionales en el desarrollo de software?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i8CPD1dW88kyfeature=youtu.be',
    },
    {
      texto:
        'Henao, C. (2018b). #2. <em>¿Qué son las metodologías ágiles en el desarrollo de Software?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fHKsufzM7qQyfeature=youtu.be',
    },
    {
      texto:
        'Henao, C. (2018d). #3. <em>SCRUM en 6 minutos | Metodologías Ágiles</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HhC75IonpOUyfeature=youtu.be',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de gestión industrial - Regional Bogotá Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional Bogotá Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la industria de la comunicación gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Arévalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
