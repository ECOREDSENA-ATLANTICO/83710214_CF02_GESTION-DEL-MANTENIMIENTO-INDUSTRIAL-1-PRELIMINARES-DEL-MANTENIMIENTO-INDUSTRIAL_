export default {
  global: {
    componenteFormativo:
      'Ejecución de actividades y software para órdenes de trabajo',
    descripcionCurso:
      'La gestión del mantenimiento industrial requiere de software para generar órdenes de trabajo y ejecutar actividades para dejar los equipos en un óptimo funcionamiento en una mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: [
          'banner-principal-decorativo-1',
          'd-none',
          'd-lg-block',
          'fadeLeft',
        ],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mantenimiento asistido por computador',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requerimientos e instructivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conceptos generales sobre fiabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de averías',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Órdenes de trabajo',
      referencia: 'Ecosistema recursosSENA [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=t7PFDuJK4oo',
    },
  ],
  glosario: [
    {
      termino: 'Averías súbitas',
      significado:
        'Se presentan de manera inesperada y se caracterizan por ser imposibles de evitar. Su origen se puede centrar en errores de diseño, selección inadecuada del material, funcionamiento deficiente de la maquina o un mal proceso de reparación.',
    },
    {
      termino: 'Averías previstas',
      significado:
        'Se presenta cuando, al detectar la anomalía esta no se corrige. Por lo general, se presentan en piezas baja vida útil.',
    },
    {
      termino: 'Avería total',
      significado:
        'Se produce cuando el equipo no puede realizar todas las funciones para las cuales fue diseñado.',
    },
    {
      termino: 'Avería parcial',
      significado:
        'Se presenta cuando la avería solo afecta parcialmente algunas de las funciones del equipo que se consideran de menor importancia.',
    },
    {
      termino: 'Desgaste',
      significado:
        'En este periodo la tasa de fallo va en aumento, siendo las averías relativamente frecuentes causando que los costos del mantenimiento se incrementan. Los fallos más comunes en este periodo están relacionados con el tiempo de uso del equipo, por lo que la degradación y el desgaste son notorios.',
    },
    {
      termino: 'Fallos infantiles',
      significado:
        'Se presentan principalmente por problemas puntuales de diseño, fabricación, ensamble o montaje.',
    },
    {
      termino: 'Vida útil',
      significado:
        'En esta fracción de tiempo la tasa de fallo es relativamente constante. Los fallos que más se presentan en este período son los relacionados con acciones fortuitas, como por ejemplo una sobrecarga de trabajo.',
    },
  ],
  referencias: [
    {
      referencia: 'Boucly, F. (1998). Gestión del mantenimiento. AENOR.',
      link: '',
    },
    {
      referencia:
        'García, S. (25/02/2014) .Videolibro ingeniería mantenimiento cap2: estrategias de mantenimiento.',
      link: 'https://www.youtube.com/watch?v=dO1clA0hcTU',
    },
    {
      referencia:
        'García, S. (25/02/2014). Videolibro ingeniería mantenimiento cap4: la elaboración del plan de mto.',
      link: 'https://www.youtube.com/watch?v=uwRwLD3aMa8',
    },
    {
      referencia:
        'García, S. (25/02/2014). Videolibro ingeniería mantenimiento cap5: plan de mto. basado en fabricantes.',
      link: 'https://www.youtube.com/watch?v=pgUQqcyQoaE',
    },
    {
      referencia:
        'García, S. (25/02/2014). Videolibro ingeniería mantenimiento cap6: el plan de mto. basado en protocolos por equipos.',
      link: 'https://www.youtube.com/watch?v=-t1VDOYDLyM',
    },
    {
      referencia:
        'García, S. (25/02/2014) Videolibro ingeniería mantenimiento cap07: plan de mto. basado en rcm.',
      link: 'https://www.youtube.com/watch?v=lF0t4RKSeHw',
    },
    {
      referencia:
        'Kelly, A. & M.J. Harris. (1978). Management of Industrial Maintenance. Butterworths. London.',
      link: '',
    },
    {
      referencia:
        'Herrera, H. Mantenimiento y lubricación. Notas de clase. Universidad Tecnológica de Pereira. Pereira (2014).',
      link: '',
    },
    {
      referencia:
        'J.M. de Bona.(1999). Gestión del mantenimiento. Criterios para la subcontratación. F.Confemetal.',
      link: '',
    },
    {
      referencia:
        'Ruiz Falcó, A. (2012). Concepto de fiabilidad (reliability). Consultado el 29 de septiembre de 2014',
      link:
        'https://www.aec.es/c/document_library/get_file?p_l_id=33948&folderId=257007&name=DLFE-11836.pdf',
    },
    {
      referencia:
        'Souris, J. (1992) Mantenimiento: Fuente de Beneficios. Díaz de Santos, S.A. Madrid.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de recursos educativos digitales (RED)',
          centro: 'Dirección general',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Elena Montoya Rendón',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro de diseño e innovación tecnológica industrial – Regional Risaralda',
        },
        {
          nombre: 'Marcela María Cardona Molina',
          cargo: 'Instructora',
          centro:
            'Centro de diseño e innovación tecnológica industrial – Regional Risaralda',
        },
        {
          nombre: 'Luis Guillermo Álvarez García',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
