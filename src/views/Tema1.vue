<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mantenimiento asistido por computador
    
    p.my-4 Para el mantenimiento industrial, hay varios tipos de software que pueden ayudar a gestionar y optimizar las operaciones de mantenimiento.
  
    .row.justify-content-center.aling-items-center
      .col-lg-4.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema1/img1.png", alt="imagen decorativa")
      .col-lg-8
        p.my-4 Un sistema de gestión de mantenimiento (Content maintenance management system CMMS) también se conoce como Sistema de Información de gestión de mantenimiento Computarizado (Information system computerized maintenance management CMMIS), es un software o un conjunto de aplicativos construido para servir como base de datos para las diversas operaciones de mantenimiento requeridas por la organización. La función de estos consiste en servir como base de datos destinada optimizar los recursos de la organización mediante el aprovechamiento que los técnicos, supervisores y encargados del mantenimiento realicen mejorando la calidad de las decisiones de gestión y verificando el cumplimiento de las normas.
    
      .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5(style="background: #E69999")
        .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}")

        .bloque-texto-g__texto.p-4(data-aos="fade-right")
          p.mb-0 La elección del sistema y su robustez dependen de las necesidades y objetivos de mantenimiento que la compañía determine por ello, cada organización escogerá un sistema que se adapte a sus objetivos teniendo presente siempre que lo más importante para un departamento de mantenimiento es garantizar el aprovechamiento de los activos de la empresa.

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Uso de herramientas informáticas para el mantenimiento por computador:

    .row.justify-content-center.my-4
      .col-lg-4.col-md-8(data-aos="fade-right")
        figure
          img.my-4(src="@/assets/curso/temas/tema1/img3.png", alt="imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb La gran cantidad de información que debe procesar a diario el departamento de mantenimiento de una organización crea la necesidad de contar con herramientas que le permitan recopilar, analizar y almacenar información. En la actualidad se han desarrollado aplicaciones dedicadas a dicho objetivo haciendo uso de dispositivos móviles que ahorran tiempo y esfuerzo maximizando los recursos económicos y de talento humano que hacen parte de la organización.
        .cajon.color-primario.p-4(style="background: #E69999")
          p.mt-0.mb-0 Un programa para la gestión de mantenimiento asistido por computador brinda todo su potencial dirigido a la administración y gestión de las tareas, actividades o acciones del mantenimiento, teniendo la posibilidad de programar y brindar un seguimiento, teniendo presente aspectos técnicos, organizacionales y de presupuesto. 

    p.my-4 La herramienta computacional debe garantizar que las actividades asignadas al desarrollo de un programa de mantenimiento se encuentren disponibles en todas las áreas vinculadas al mantenimiento tales como las oficinas técnicas, almacenes y talleres. Actualmente, se busca que se utilicen entornos gráficos relacionados a bases de datos que contengan la información de los instructivos, las actividades realizadas, los cronogramas de actividades, entre otros.
    p.my-4 Se busca que la herramienta aporte los siguientes beneficios:

    .row.justify-content-center.aling-items-center
      .col-lg-4.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema1/img5.png", alt="imagen decorativa")
      .col-lg-8.align-content-center
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="▶▶▶")
            .col-md-12.mb-4.mb-md-0
              p Brindar un orden sistemático al servicio de mantenimiento.

          .row(numero="2" titulo="▶▶▶")
            .col-md-12.mb-4.mb-md-0
              p Mejorar la eficacia de los programas de mantenimiento

          .row(numero="3" titulo="▶▶▶")
            .col-md-12.mb-4.mb-md-0
              p Reducir los costos de mantenimiento.

          .row(numero="4" titulo="▶▶▶")
            .col-md-12.mb-4.mb-md-0
              p Organizar de una forma adecuada la programación de actividades y por ende aumentar la disponibilidad de los equipos.
    
    p.my-4 Esto se logra mediante el aprovechamiento de las herramientas             

    .row.justify-content-center.my-4.fondo-imagen.p-4
      .tarjeta.tarjeta--blanca.p-3
        SlyderA(tipo="b")
          .row.p-3
            .col-lg-7.align-content-center
              h4 Herramientas de ayuda.
                p Estas facilitan la toma de decisiones y optimización de los procesos y procedimientos en búsqueda de disminuir averías o daños súbitos.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Herramientas de apoyo
                p También brindan apoyo a la toma de decisiones en cuanto a la distribución deacciones y programación a ejecutar en función de los informes entregados porel personal técnico.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Herramientas para maximizar
                p Estas permiten tener mayor disponibilidad de los equipos y diagnóstico deestos.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Gestión para el mantenimiento de maquinaria y equipos
                p La función debe planificar y organizar las acciones de mantenimiento tantopreventivas como correctivas, también debe tratar urgencias y aumento de lacarga de trabajo en las máquinas, generar las órdenes de trabajo, preparacióny programación de tareas, así como verificar si han sido terminadas.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Gestión para compra de repuestos y contratación de servicios especializados
                p Esta función permite generar las solicitudes de compra y contratación depersonal o de servicios, seguimiento de pedidos, así como la recepción ycertificación de estos.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Gestión de inventarios de repuestos e insumos
                p La función permite gestionar las listas de reserva, controlar la existencia yreaprovisionamiento de repuestos y consumibles.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')
                
          .row.p-3
            .col-lg-7.align-content-center
              h4 Gestión de costos.
                p Compara los gastos reales al ejecutar el mantenimiento con el presupuesto disponible, ayuda a la elaboración del presupuesto anual necesario para la ejecución del programa anual del mantenimiento. Control de cuentas de acuerdo con la naturaleza del costo, tales como pintura mecánica, electricidad, instrumentación, entre otros.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')

    .bloque-texto-g.p-3.p-sm-4.p-md-5(style="background: #1D476D")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La información manejada por cada función debe ser guardada, organizada y recopilada con el propósito de facilitar al usuario la posibilidad de convertirla en documentos o formatos entendibles, que permitan una adecuada utilización en los procesos de mantenimiento.
        img.d-none.d-md-block.my-4(src='@/assets/curso/temas/tema1/img34.svg', alt='Imagen decorativa')

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Funciones para realizar por una herramienta computacional para gestionar el mantenimiento

    .row.justify-content-center.my-4
      .col-lg-7.col-md-8
        p Figura 1.
        figure
          img.my-4(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
        p.mt-2 Fuente: (SENA – LP Risaralda, 2014).

    .row.justify-content-center.my-4
      .col-lg-4.col-md-8(data-aos="fade-right")
        figure
          img.my-4(src="@/assets/curso/temas/tema1/img17.png", alt="imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .cajon.color-primario.p-4(style="background: #E69999")
          p.mt-0.mb-0 Es muy importante analizar si en la empresa es necesario adquirir herramientas especializadas para la gestión del mantenimiento. En ocasiones no es justificable adquirir una herramienta con las funciones mencionada por ello: se debe determinar si es posible su aplicación, justificar la implementación de la herramienta y los costos iniciales asociados a la adaptación y adecuación de la herramienta.
        p.my-4 Teniendo presente que la gran mayoría de empresas requieren solo de la gestión del mantenimiento de equipos, los programas ofimáticos como: Microsoft Acces® o Microsoft Excel® brindan excelentes alternativas para la planificación y organización de las acciones del mantenimiento. Por su practicidad y uso común, se brindarán las pautas básicas para la utilización de Microsoft Excel, como herramienta para la generación de los formatos y almacenamiento de información. 
    p.my-4 En general, los formatos con los que se dispone en la gestión del mantenimiento son:

    .row.justify-content-center.align-content-center.p-5(style="background: #F6F6F6")
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-4.fnd-3
          h4.mb-0 01
          .row.justify-content-center.mb-3
            .col-8
              img(src="@/assets/curso/temas/tema1/img18.svg", alt="alt")
          p.text-center.mb-0 Requerimientos.
          
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-4.fnd-3
          h4.mb-0 02
          .row.justify-content-center.mb-3
            .col-8
              img(src="@/assets/curso/temas/tema1/img19.svg", alt="alt")
          p.text-center.mb-0 Instructivos.
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-4.fnd-3
          h4.mb-0 03
          .row.justify-content-center.mb-3
            .col-8
              img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt")
          p.text-center.mb-0 La tarjeta maestra.
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-4.fnd-3
          h4.mb-0 04
          .row.justify-content-center.mb-3
            .col-8
              img(src="@/assets/curso/temas/tema1/img21.svg", alt="alt")
          p.text-center.mb-0 Tableros de Control.
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-4.fnd-3
          h4.mb-0 05
          .row.justify-content-center.mb-3
            .col-8
              img(src="@/assets/curso/temas/tema1/img22.svg", alt="alt")
          p.text-center.mb-0 Tableros Auxiliares.
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-4.fnd-3
          h4.mb-0 06
          .row.justify-content-center.mb-3
            .col-8
              img(src="@/assets/curso/temas/tema1/img23.svg", alt="alt")
          p.text-center.mb-0 Órdenes de Trabajo.
    p.my-4 A continuación, se brindarán los elementos y la información que debe contener cada uno de los formatos, así como ejemplos para su correcto diligenciamiento e implementación haciendo uso de la herramienta Microsoft Excel.

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Conceptos Básicos de Microsoft Excel
    
    .row.justify-content-center.align-items-center.p-4(style="background: #E69999")
      .col-lg-9
        p Microsoft® Office Excel® es un programa computacional que permite el manejo de hojas de cálculo, configuradas en libros para cálculos de todo tipo de manera simple e intuitiva. Esta herramienta es utilizada para el manejo de datos y su almacenamiento, también proporciona herramientas para la manipulación numérica y estadística de los datos, permitiendo su organizada tabulación e ilustración gráfica de los mismos. Microsoft® Office Excel® es una de las herramientas de uso común en el paquete ofimático de la suite de Microsoft Office.
      .col-lg-3.col-md-8
        img(src="@/assets/curso/temas/tema1/img24.png", alt="alt")
      
    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Interfaz de Microsoft® Office Excel®}

    .row.justify-content-center.my-4
      .col-lg-10.col-md-8
        p Figura 2.
        figure
          img.my-4(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
        p.mt-2.text-center Fuente: (SENA – LP Risaralda, 2014).

    p.mt-4.mb-3 A continuación, se enuncian algunas funciones de esta herramienta.

    .row.justify-content-center.my-4.fondo-imagen.p-4
      .tarjeta.tarjeta--blanca.p-3
        SlyderA(tipo="b")
          .row.p-3
            .col-lg-7.align-content-center
                p.mb-3 Libros de trabajo.
                p Un libro de trabajo es en sí, el archivo que se crea en el programa, por lo que todo lo que se realiza en este programa se guardara como un archivo tipo libro de trabajo. Los libros de trabajo de programa cuentan con la extensión .XLSX.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p Cada libro de trabajo está compuesto por varias hojas, inicialmente tendrá tres hojas (su número puede variar de 1 a 255). Dichas hojas se encuentran listadas en la parte inferior del programa, tal y como se muestra a continuación. 
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p La hoja de cálculo es uno de los tipos de hojas que se puede tener en un libro de trabajo. Es útil para el trabajo con un número considerable de datos, los cuales deban ser almacenados o tratados numérica o estadísticamente. Su forma es una hoja cuadriculada formada por filas y columnas.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img28.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p Las filas son un conjunto de celdas horizontales, las cuales son nombradas por números tal y como se muestra en la figura.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p El Rango es otro de los conceptos importantes en una hoja este se define como el bloque seleccionado de una o más celdas que el programa trata como una sola. Muchas de las operaciones que el programa realiza, pueden ser aplicadas a rangos directamente.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img30.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p En las celdas de la hoja, se puede ingresar textos, números o fórmulas. En cada caso, la secuencia a seguir es la siguiente: Ubicar el cursor sobre la celda donde desea agregar los datos. Los datos aparecen en dos lugares, una es en la celda activa y en la Barra de Fórmulas.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img31.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p Otra forma de introducir los datos es utilizando el cuadro de aceptación, el cual se encuentra en la barra de fórmulas tal y como se muestra.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img32.png', alt='Imagen decorativa')
    
          .row.p-3
            .col-lg-7.align-content-center
                p Si al momento de introducir el dato, este es incorrecto, puede detener el proceso oprimiendo la tecla ESC u oprimiendo el botón Cancelar de la barra de fórmulas tal y como se muestra.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img33.png', alt='Imagen decorativa')


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
