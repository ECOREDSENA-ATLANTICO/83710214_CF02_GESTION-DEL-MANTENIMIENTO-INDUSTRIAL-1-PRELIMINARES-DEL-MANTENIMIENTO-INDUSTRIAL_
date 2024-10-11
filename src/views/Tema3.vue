<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos generales sobre fiabilidad.

    .row.justify-content-center.my-4
      .col-lg-8(data-aos="fade-left")
        p.mb La ejecución de las actividades del mantenimiento es una de las razones más importantes de la gestión del mantenimiento industrial. Una adecuada ejecución de las acciones del mantenimiento no solo se debe limitar a dejar los equipos en óptimo funcionamiento y conformarse con que estén bien, por el contario el objetivo principal debe ser siempre la mejora continua. Lo anterior garantiza un mejoramiento de la fiabilidad de los dispositivos y el aumento de su disponibilidad a partir del análisis de las averías que se presentan y de las actividades o acciones de mantenimiento necesarias para corregirlas.
        .cajon.color-primario.p-4(style="background: #E69999")
          p.mt-0 En las organizaciones evidencian su competitividad y éxito mediante factores claves en su desempeño, como son: la rentabilidad, la productividad, la calidad, la imagen, la seguridad y la integridad. En los años recientes las organizaciones han agregado el concepto de fiabilidad, como otro factor importante de desempeño.
      .col-lg-4.col-md-8(data-aos="fade-right")
        figure
          img.my-4(src="@/assets/curso/temas/tema3/img1.png", alt="imagen decorativa")

    p.my-4 La gran mayoría de personas, al escuchar la palabra fiabilidad lo asocian directamente con la disponibilidad del equipo, y lo vinculan directamente con las actividades del mantenimiento, lo que no saben es que la causa de los problemas de disponibilidad y confiabilidad, generalmente inician mucho antes de que el mantenimiento sea necesario.

    .row.justify-content-center.my-4
      .col-lg-4.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema3/img2.png", alt="imagen decorativa")
      .col-lg-8
        p.my-4.mb-5 Es en la etapa de diseño donde la fiabilidad debe ser contemplada por los diseñadores, donde aspectos como el mantenimiento y la fiabilidad de cada elemento deben ser analizados. Luego será la fiabilidad del equipo la que debe considerarse teniendo en cuenta las mejores prácticas incorporadas en la etapa ensamble, instalación, puesta a punto y del equipo o máquina.
        p Seguidamente, se pueden evidenciar las necesidades de la fiabilidad:

    .row.justify-content-center.my-4
      .col-lg-3.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema3/img3.png", alt="imagen decorativa")
      .col-lg-8
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.p-4(style="background: #E69999")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema3/img4.png", alt="imagen decorativa")
            p.text-center Poder cuantificar la fiabilidad en función de la probabilidad.
          .tarjeta.p-4(style="background: #E69999")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema3/img5.png", alt="imagen decorativa")
            p.text-center Comprender lo que se conoce como “buen funcionamiento” en un elemento o máquina.
          .tarjeta.p-4(style="background: #E69999")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema3/img6.png", alt="imagen decorativa")
            p.text-center Tener claridad sobre el ambiente que el equipo necesita para funcionar adecuadamente.
          .tarjeta.p-4(style="background: #E69999")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema3/img7.png", alt="imagen decorativa")
            p.text-center Conocer los tiempos de funcionamiento entre fallas o averías.

    .row.justify-content-center.ms-2.p-3(style="background: #F2CCCC; border-radius: 10px 0px 0px 10px")
      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/temas/tema3/img8.png", alt="imagen decorativa")
      .col-lg-9
        p.my-4 Para definir el concepto de fiabilidad, se puede decir que es la probabilidad de que un elemento o equipo trabaje sin fallos durante un tiempo determinado. Si se da el caso de que la maquina o elemento se contemple apara un solo uso, como el caso de un proyectil o un misil, la fiabilidad se conoce como la probabilidad de que el elemento funcione bajo las consideraciones previstas.
        .cajon.color-primario.p-4(style="background: #E69999")
          p.mt-0.mb-0 La teoría de la fiabilidad se encuentra ligada a un grupo de métodos y teorías matemáticas y estadísticas, y prácticas operativas dirigidas a solucionar los problemas relacionados con la acción de prever, estimar y optimizar la duración de la vida media de los elementos o máquinas, y al porcentaje de tiempo que funcionen adecuadamente.
    
    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Conceptos básicos sobre la fiabilidad
    p.my-4 A continuación, los principales conceptos sobre fiabilidad:

    .row.justify-content-center
      SlyderF(columnas="col-lg-4 col-xl-4")
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img9.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3 Falla
              p.mb-0 Es toda perturbación o culminación de un elemento o equipo en el cumplimiento de la función solicitada.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img10.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3 Tasa de fallo
              p.mb-0 La tasa de fallo es el número de elementos que tienen mayor probabilidad de falla en un tiempo determinado. Para propósitos generales, la tasa de fallo no es un valor constante.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img11.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3 Mantenibilidad
              p.mb-0 Es la probabilidad de que, luego de presentarse la falla, el equipo pueda ser reparado en un tiempo dado.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img12.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3 Disponibilidad
              p.mb-0 Probabilidad de acreditar el funcionamiento de una máquina en un tiempo dado.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img13.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3 MTBF/MTTF
              p.mb-0 Son siglas que representan el tiempo medio entre fallos y tiempo medio hasta el fallo (Mean Time Between Failures / Mean Time To Failure).
    h5.my-4 La curva de la bañera:

    .row.justify-content-center.my-4
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="A. Fallos infantiles")
            .col-lg-12
              p.text-light Se presentan principalmente por problemas puntuales de diseño, fabricación, ensamble o montaje.
          
          .row(titulo="B. Vida útil")
            .col-lg-12
              p.text-light En esta fracción de tiempo la tasa de fallo es relativamente constante. Los fallos que más se presentan en este período son los relacionados con acciones fortuitas, como por ejemplo una sobrecarga de trabajo.

          .row(titulo="C. Desgaste")
            .col-lg-12
              p.text-light En este periodo la tasa de fallo va en aumento, siendo las averías relativamente frecuentes causando que los costos del mantenimiento se incrementan. Los fallos más comunes en este periodo están relacionados con el tiempo de uso del equipo, por lo que la degradación y el desgaste son notorios.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/temas/tema3/img14.png", alt="imagen decorativa")

    p.my-4 En la siguiente figura se ilustra la curva de la bañera, teniendo en cuenta los tres conceptos tratados anteriormente.

    .row.justify-content-center.my-4
      .col-lg-7.col-md-8
        p Figura 14.
        figure
          img(src="@/assets/curso/temas/tema3/img15.svg", alt="imagen decorativa")

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Actividades en mantenimiento

    p.my-4 Hasta el momento se han diseñado diversos formatos administrativos y técnicos que permiten programar, planificar y ejecutar las acciones o actividades de mantenimiento. Es conveniente entonces conocer a grandes rasgos cual es el conjunto de actividades generales que se ejecutan según el tipo de mantenimiento determinado por el equipo de mantenimiento de la organización. Las actividades de mantenimiento más importantes se centran en las de mantenimiento preventivo y correctivo.
    p.my-4 El mantenimiento preventivo se refiere al conjunto de actividades o acciones de mantenimiento destinadas a maquinas en funcionamiento, las cuales permite continuar su ciclo de prestación de servicios de manera óptima y segura, con el propósito de prevenir los paros imprevistos, fallas o averías.

    .row.justify-content-center
      .col-lg-5.col-md-8
        img(src="@/assets/curso/temas/tema3/img16.png", alt="imagen decorativa")
      .col-lg-7
        p.my-4 El mantenimiento correctivo es el conjunto acciones de mantenimiento ejecutados en máquinas y equipos, cuando al producirse la avería, el equipo ha dejado de trabajar según los términos y estándares definidos para su funcionamiento. Por lo que, el propósito de las tareas ejecutadas tiene como objetivo que el equipo se mantenga en la línea de producción.
    
    p.my-4 A continuación, actividades de mantenimiento preventivo y correctivo:

    .row.justify-content-center.my-4.fondo-imagen.p-4
      .tarjeta.tarjeta--blanca.p-3
        SlyderA(tipo="b")
          .row.p-3
            .col-lg-7.align-content-center
              h4 Verificación del estado del equipo
                p Su propósito es verificar el estado del equipo, en particular de los mecanismos, de los sistemas de lubricación, entre otros. Lo que se busca es garantizar el correcto funcionamiento del equipo según lineamientos establecidos por la organización.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Trabajos periódicos
                p Están vinculados con los instructivos programados en la tarjeta de control, los cuales son ejecutados cada cierto tiempo.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen decorativa')
          .row.p-3
            .col-lg-7.align-content-center
              h4 Revisión
                p Este procedimiento se ejecuta entre procesos de reparación según el programa de actividades para el equipo. Se busca validar el estado de éste y definir los requisitos mínimos necesarios para la próxima reparación.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa')
          .row.p-3
            .col-lg-7.align-content-center
              h4 Reparación menor
                p Busca predecir posibles problemas presentes en un equipo, cuando este seencuentre en un lapso en que se cuenta con un bajo volumen de trabajo.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Imagen decorativa')
          .row.p-3
            .col-lg-7.align-content-center
              h4 Otras actividades
                p Las actividades no se deben limitar a las ya tratadas, ya que, en las reuniones del área de mantenimiento, pueden surgir otras actividades más específicas y no contempladas en la lista anterior.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Imagen decorativa')

    h5.mt-4 Actividades en mantenimiento correctivo:
    p.my-4 La definición brindada para el mantenimiento correctivo, lo describía como el conjunto acciones de mantenimiento ejecutados en máquinas y equipos, cuando al producirse la avería, el equipo ha dejado de trabajar según los términos y estándares definidos para su funcionamiento. Por lo que, el propósito de las tareas ejecutadas tiene como objetivo que el equipo se mantenga en la línea de producción.
    p.my-4 Lo anterior nos indica que un programa de mantenimiento correctivo se centra prácticamente en la reparación y puesta en marcha de las maquinas o equipos. Este tipo de mantenimiento cuenta con las siguientes actividades generales:

    .row.justify-content-center.my-4
      .col-lg-8.align-content-center
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Reparación intermedia")(style="color: white")
            .col-lg-12
              p.mb-3.text-light A lo largo del proceso, el equipo es desmontado parcialmente, y por medio de la reparación o reemplazo de elementos en dañados se puede garantizar la puesta en marcha adecuada y el mejoramiento de la potencia del equipo necesaria hasta la próxima reparación programada.
              p.my-4.text-light En la reparación intermedia la maquina o equipo no funciona, pudiéndose realizar las siguientes actividades:
              p.my-4.text-light -Los definidos en una reparación menor.<br>-Desmontaje y ajuste de los mecanismos.<br>-Comprobar ajustes, calibración, balanceo y alineación de los elementos rodantes.
          .row(titulo="Reparación general")(style="color: white")
            .col-lg-12
              p.mb-3.text-light A lo largo del proceso, el equipo es desmontado parcialmente, y por medio de la reparación o reemplazo de elementos en dañados se puede garantizar la puesta en marcha adecuada y el mejoramiento de la potencia del equipo necesaria hasta la próxima reparación programada.
              p.my-4.text-light En la reparación intermedia la maquina o equipo no funciona, pudiéndose realizar las siguientes actividades:
              p.my-4.text-light -Los definidos en una reparación intermedia.<br>-Desmontaje total del equipo.<br>-Reparación del sistema hidráulico o neumático si lo tiene.<br>-Rectificación de todas las superficies en contacto con elementos móviles.<br>-Comprobación corrección de los defectos físicos del equipo.
          .row(titulo="Reparación imprevista")(style="color: white")
            .col-lg-12
              p.mb-3.text-light Esta reparación se efectúa en el momento en que la avería o falla se presenta. La reparación que se requiere luego una avería depende de la magnitud de esta y puede tener la importancia de una reparación menor, intermedia o general, siendo en casos muy específicos requerir el cambio o la reposición completa del equipo.
              p.my-4.text-light Las causas que pueden generar este tipo de averías son muy diversas. A continuación, se nombran algunas:
              p.my-4.text-light -Pobre lubricación o ausencia de este.<br>-Elevada carga en el equipo o máquina.<br>-Defectos de fabricación o de funcionamiento en componentes tecnológicos.<br>-Programación de reparación inoportuna o inadecuada.<br>-Baja calidad en el proceso de reparación anterior.<br>-Incremento o disminución del voltaje.<br>-Las fallas o averías se deben investigar con el fin de determinar las causas que la  provocaron, y de acuerdo con los resultados obtenidos tomar las medidas encaminadas a disminuir la posibilidad de futuras averías con comportamientos similares.
          
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/temas/tema3/img22.png", alt="imagen decorativa")

    p.mt-3 <strong>En la manera como se produce:</strong>


    .row.justify-content-center.my-4
      .col-lg-8.align-content-center
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Averías súbitas")(style="color: white")
            .col-lg-12
              p.mb-3.text-light se presentan de manera inesperada y se caracterizan por ser imposibles de evitar. Su origen se puede centrar en errores de diseño, selección inadecuada del material, funcionamiento deficiente de la maquina o un mal proceso de reparación.

          .row(titulo="Averías previstas")(style="color: white")
            .col-lg-12
              p.mb-3.text-light se presenta cuando, al detectar la anomalía esta no se corrige. Por lo general, se presentan en piezas baja vida útil. De acuerdo con la pérdida de función.

          .row(titulo="Avería total")(style="color: white")
            .col-lg-12
              p.mb-3.text-light se produce cuando el equipo no puede realizar todas las funciones para las cuales fue diseñado.

          .row(titulo="Avería parcial")(style="color: white")
            .col-lg-12
              p.mb-3.text-light se presenta cuando la avería solo afecta parcialmente algunas de las funciones del equipo que se consideran de menor importancia.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/temas/tema3/img23.png", alt="imagen decorativa")

    p.text-center.my-4 <strong>De la manera como se presenta a lo largo del tiempo:</strong> 

    .row.justify-content-center.my-4
      .col-lg-4.col-md-8.align-content-center
        figure
          img.my-4(src="@/assets/curso/temas/tema3/img24.png", alt="imagen decorativa")
      .col-lg-8.align-content-center.align-content-center
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Avería crónica")(style="color: white")
            .col-lg-12
              p.mb-3.text-light Perturba al equipo de manera repetitiva o se mantiene por un largo periodo de tiempo. Esta avería puede ser crítica o parcial.

          .row(titulo="Averías ocasionales")
            .col-lg-12
              p.mb-3.text-light Es una avería que aparece de manera aleatoria, esta puede ser crítica o parcial.

          .row(titulo="Avería transitoria")(style="color: white")
            .col-lg-12
              p.mb-3.text-light Esta se presenta en el equipo durante un tiempo corto y adquiere de nuevo las condiciones para funcionar de manera adecuada. Lo anterior sin necesidad de realizarse ninguna acción de mantenimiento.
    
    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5(style="background: #E69999")
    
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img25.png')})`}")
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
          p.mb-2 De los tipos de averías que se clasificaron, las averías imprevistas en las máquinas y equipos tienen mayor incidencia en los procesos productivos, debido a las dificultades que este suceso genera los procesos de producción y en la vida útil de los equipos, por lo que es necesario que estos sucesos sean analizados. Durante el servicio, cada avería debe ser analizada de manera minuciosa con el fin de obtener la máxima información relacionada con las causas.
          p <br>Entender el contexto de la situación en el análisis de avería es uno de los factores más importantes, ya que nos permite comprender aún más las causas que la generan. Para tal fin, es conveniente plantearse preguntas como las siguientes:

    .row.justify-content-center.align-content-center.p-5.mb-3.mt-4(style="background: #F6F6F6")
      .col-lg-3.col-md-8.align-content-center
        figure
          img.my-3(src="@/assets/curso/temas/tema3/img26.png", alt="imagen decorativa")
      .col-lg-9
        .row.justify-content-center
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 01
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿Cuáles son las actividades que ejecuta el equipo?
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 02
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
              p.text-center.mb-0 ¿Cómo puede fallar el equipo?
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 03
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿Qué acciones pueden generar la falla?
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 04
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
              p.text-center.mb-0 ¿Después de que sucede la falla, que pasa en la maquina o equipo?
        .row.justify-content-center
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 05
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿Qué sucede si el equipo falla?
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 06
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
              p.text-center.mb-0 ¿Cómo se puede prevenir la falla?
          .col-lg-3.col-md-6.my-2
            .tarjeta.p-4.fnd-5
              h4.mb-0 07
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿Qué pasa si la falla no puede ser prevenida?
    
    
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background: #E69999")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img27.png')})`}"
      )
      .bloque-texto-g__texto.p-4(style="background: #C10000")
        p.mb-0.text-light De los tipos de averías que se clasificaron, las averías imprevistas en las máquinas y equipos tienen mayor incidencia en los procesos productivos, debido a las dificultades que este suceso genera los procesos de producción y en la vida útil de los equipos, por lo que es necesario que estos sucesos sean analizados. Durante el servicio, cada avería debe ser analizada de manera minuciosa con el fin de obtener la máxima información relacionada con las causas.

    p.my-4 Entender el contexto de la situación en el análisis de avería es uno de los factores más importantes, ya que nos permite comprender aún más las causas que la generan. Para tal fin, es conveniente plantearse preguntas como las siguientes:

    .row.justify-content-center.align-content-center.p-5.mb-3.mt-4(style="background: #F6F6F6")
      .col-lg-9
        .row.justify-content-center
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-2.mx-2.fnd-6
              h4.mb-0 01
              .row.justify-content-center
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿Cuánto tiempo duro el elemento o pieza en funcionamiento?
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-2.mx-2.fnd-6
              h4.mb-0 02
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
              p.text-center.mb-0 ¿Qué tipo de solicitaciones de carga experimento la pieza en el instante en que se produjo la avería?
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-2.mx-2.fnd-6
              h4.mb-0 03
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿La pieza estuvo expuesta a sobre carga?
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-2.mx-2.fnd-6
              h4.mb-0 04
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
              p.text-center.mb-0 ¿Se presentaron trastornos significativos en el ambiente?
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-2.mx-2.fnd-6
              h4.mb-0 05
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
              p.text-center.mb-0 ¿Las actividades de mantenimiento aplicadas a la pieza fueron los adecuados?.
      .col-lg-3.col-md-8.align-content-center
        img.my-4(src="@/assets/curso/temas/tema3/img28.png", alt="alt")

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Finalización del trabajo

    p.my-4 La aproximación más frecuente para incrementar la eficiencia de la función mantenimiento es implementar alguna filosofía o técnica de mantenimiento más publicada. Esto incluye:

    .row.justify-content-center.my-4
      .col-lg-8
        .row.justify-content-center.my-4
          .col-md-12.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img29.svg", alt="alt")
              p.text-center 
                b Pruebas en vacío y con carga y medición de las variables de control.
          .col-md-12.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img29.svg", alt="alt")
              p.text-center 
                b Análisis del comportamiento basado en conocimientos del experto.
        .row.justify-content-center.my-4
          .col-md-12.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img29.svg", alt="alt")
              p.text-center 
                b Análisis del comportamiento basado en conocimientos del experto.
          .col-md-12.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img29.svg", alt="alt")
              p.text-center 
                b Fijar período de prueba, ajustes y observación.

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Formas más usadas

    p.my-4 son las pruebas necesarias para asegurar la confiabilidad de las maquinas. Es una etapa previa antes de entregarla al operador.
    .row.justify-content-center.my-4
      .col-lg-12
        .row.justify-content-center.my-4
          .col-lg-4.col-md-12
            .tarjeta-numerada.color-primario2.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img30.svg", alt="alt")
              p.text-center 
                b ¿Cuánto tiempo duro el elemento o pieza en funcionamiento?
          .col-lg-4.col-md-12
            .tarjeta-numerada.color-primario2.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img30.svg", alt="alt")
              p.text-center 
                b ¿Qué tipo de solicitaciones de carga experimento la pieza en el instante en que se produjo la avería?
          .col-lg-4.col-md-12
            .tarjeta-numerada.color-primario2.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img30.svg", alt="alt")
              p.text-center 
                b ¿La pieza estuvo expuesta a sobre carga?
    .row.justify-content-center.my-2
      .col-lg-8
        .row.justify-content-center.my-4
          .col-lg-6.col-md-12
            .tarjeta-numerada.color-primario2.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img30.svg", alt="alt")
              p.text-center 
                b ¿Se presentaron trastornos significativos en el ambiente?
          .col-lg-6.col-md-12
            .tarjeta-numerada.color-primario2.p-5
              .tarjeta-numerada__numero
                img(src="@/assets/curso/temas/tema3/img30.svg", alt="alt")
              p.text-center 
                b ¿Las actividades de mantenimiento aplicadas a la pieza fueron los adecuados?.

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon De la manera como se presenta a lo largo del tiempo

    p.my-4 La metodología que se utilice para realizar el análisis de averías debe ser lo suficientemente estructurada y que permita implementarse en un orden lógico, que no de opción a evadir ninguno de los pasos propuestos. Seguido, se propone una serie de etapas o fases para el análisis de averías:
    p.my-4 A continuación, se evidencian las fases de análisis de averías:

    .row.justify-content-center.my-4
      .col-lg-8.col-md-8
        p Figura 15.
        figure
          img.my-4(src='@/assets/curso/temas/tema3/img31.svg', alt='Img decorativa')


</template>

<script>
export default {
  name: 'Tema3',
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
