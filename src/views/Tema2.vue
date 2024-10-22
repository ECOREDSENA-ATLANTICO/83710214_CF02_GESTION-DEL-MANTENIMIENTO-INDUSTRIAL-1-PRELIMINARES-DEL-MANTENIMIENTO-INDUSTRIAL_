<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requerimientos e instructivos
    
    .row.justify-content-center.aling-items-center
      .col-lg-4.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img1.png", alt="imagen decorativa")
      .col-lg-8
        p.mb-3 Los requerimientos de una máquina son aquellas acciones de mantenimiento o actividades que se deben practicar a la máquina para que no falle o se dañe. Al implementar estas acciones, se puede garantizar la vida útil de los equipos. 
        p.my-4 Estos requerimientos se pueden encontrar en catálogos e información que puede ser suministrada por personas que estén involucradas en cada uno de los procesos. Cada requerimiento dará origen a un instructivo, el cual debe contener los siguientes elementos: a) código, b) nombre, c) material necesario, d) cuerpo y e) tiempo estimado de ejecución. Los requerimientos están asociados generalmente a labores de lubricación, electricidad, instrumentación y mecánica. A continuación, se ilustra el formato básico para un instructivo y la distribución de los elementos que debe contener.

    .row.justify-content-center.my-4.fondo-imagen-2
      .col-lg-6.col-md-8
        p Figura 3. <em>Ejemplo Instructivo</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img2.svg", alt="imagen decorativa")   
        p.text-center Fuente: (SENA – LP Risaralda, 2014).

    .row.justify-content-center.fondo-imagen-3.p-3
      .col-lg-9.align-content-center
        p Con el ejemplo anterior, se observa que el instructivo es la bitácora del operario, el cual lo orienta y direcciona en el desarrollo y ejecución de la acción del mantenimiento. Los instructivos pueden ser de lubricación, electricidad, mecánica e Instrumentación.
        p Para establecer los requerimientos e instructivos necesarios en los equipos que se encuentran bajo la supervisión del área de mantenimiento, es necesario realizar los siguientes pasos:
      .col-lg-3.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img5.png", alt="imagen decorativa")
    

    .row.justify-content-center.my-4.fondo-imagen-4
      .col-lg-6
        h3(data-aos="fade-left").mb-3.mt-4.blue_icon Concepciones más usadas
        ul.mt-3
          li
            span(style="color: #12263F") Estado funcional de la máquina: este permite conocer la función que realiza, y el papel que desempeña en la empresa.
        ul.mt-3
          li
            span(style="color: #12263F") Verificación del estado de la máquina: hace referencia a su estado de funcionamiento.
        ul.mt-3
          li
            span(style="color: #12263F") Empadronamiento de las máquinas: es un inventario de todos los equipos de la empresa que van a ser incluidos dentro del plan de mantenimiento.
        ul.mt-3
          li
            span(style="color: #12263F") Codificación de las máquinas: son nomenclaturas internas utilizadas con el fin de lograr una mejor identificación de la máquina.
      .col-lg-6.col-md-8.align-content-center.justify-content-center
        figure
          img.my-4(style="padding:3em")(src="@/assets/curso/temas/tema2/img7.png", alt="imagen decorativa")

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Esquema de tarjeta

    p.my-3 Son las fichas donde se consignan las características principales de la máquina obtenidas a través de sus placas, recolección de información en catálogos, personas involucradas, página web donde podemos encontrar fecha de compra, marca, modelo, motor, capacidad, color, tamaño, peso, servicios, entre otros.
    p.my-3 A continuación, varios ejemplos de tarjetas maestras:

    .row.justify-content-center.my-4.fondo-imagen-7
      .col-lg-10.col-md-8 
        p Figura 4. <em>Esquema de tarjeta</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img8.svg", alt="imagen decorativa")
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img9.svg", alt="imagen decorativa")
        p.mt-2.text-center Fuente: (SENA – LP Risaralda, 2014).
      .row.justify-content-center.my-4 
        .col-lg-10.col-md-8 
          p Figura 5. <em>Tarjeta de motores hidráulicos</em>
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img10.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img11.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img12.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img13.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img14.svg", alt="imagen decorativa")
          p.mt-2.text-center Fuente: (SENA – LP Risaralda, 2014).
    
      .row.justify-content-center.my-4 
        .col-lg-10.col-md-8 
          p Figura 6. <em>Tarjeta de válvulas</em>
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img15.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img16.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img17.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img18.svg", alt="imagen decorativa")
          figure
            img.my-4(src="@/assets/curso/temas/tema2/img19.svg", alt="imagen decorativa")
          p.mt-2.text-center Fuente: (SENA – LP Risaralda, 2014).

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Ejemplo tarjeta maestra diligenciada

    .row.justify-content-center.fondo-imagen-5
      .col-lg-10.col-md-8
        p.my-4 Figura 7. <em>Ejemplo tarjeta maestra diligenciada</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img21.svg", alt="imagen decorativa")
      .col-lg-7.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img22.svg", alt="imagen decorativa")
      .col-lg-7.col-md-8
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img23.svg", alt="imagen decorativa")
    
    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Hoja de vida de la máquina

    p.my-4 Luego de realizar la tarjeta maestra, es importante contar para cada máquina con el recuento de identificación del equipo, fecha, código del instructivo, trabajo realizado, costo, tiempo y quien lo realiza. Lo anterior se conoce como hoja de vida de la máquina. A continuación, se presenta el esquema de una hoja de vida. 
    p Figura 8. <em>Hoja de vida de la máquina</em>
    figure
      img.my-4(src="@/assets/curso/temas/tema2/img24.svg", alt="imagen decorativa")
    p.text-center Fuente: (SENA – LP Risaralda, 2014).

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Ejemplo hoja de vida diligenciada
    p Figura 9. <em>Ejemplo hoja de vida diligenciada</em>
    figure
      img.my-4(src="@/assets/curso/temas/tema2/img25.svg", alt="imagen decorativa")

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Tableros de control
    
    .row.justify-content-center.my-4
      .col-lg-8(data-aos="fade-left")
        p.mb Es un cronograma de actividades que se debe realizar a las máquinas periódicamente; cuando la actividad es diaria, semanal o anual se construye un cronograma llamado rutina diaria, rutina semanal o rutina anual respectivamente.
        .cajon.color-primario.p-4(style="background: #E69999")
          p.mt-0.mb-0 El tablero de control debe ser balanceo, frecuentemente se hace por tanteo buscando que se encuentre una separación entre la carga máxima y mínima del 10 %.
      .col-lg-4.col-md-8(data-aos="fade-right")
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img26.png", alt="imagen decorativa")
    
    p.my-4 A continuación, algunos esquemas de tablero de control:

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Esquema de un tablero de control

    .row.justify-content-center.fondo-imagen-6
      .col-lg-6.col-md-8
        p Figura 10. <em>Esquema de un tablero de control</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img27.svg", alt="imagen decorativa")
        p.text-center Fuente: (SENA – LP Risaralda, 2014).
      p.my-4 Si los instructivos deben aplicarse diariamente, entonces debes recurrirse a el formato rutina diaria. En seguida, se muestra un ejemplo del formato.
      
      .col-lg-12
        h3(data-aos="fade-left").mb-3.mt-4.blue_icon Esquema de un tablero de control diligenciado

      .col-lg-6.col-md-8.justify-content-center
        p Figura 11. <em>Tablero de control diligenciado</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img28.svg", alt="imagen decorativa")
      p.my-4 Es bueno resaltar que el requerimiento L-03 puede servir para varias máquinas, pero tener diferentes frecuencias de ejecución. Por lo anterior los instructivos no deben llevar escrito a que maquinas se van a implementar. En el único espacio donde se sabe a qué equipos se les ejecuta es determinado en el instructivo.

    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Tableros auxiliares

    .row.justify-content-center.my-4
      .col-lg-4.col-md-8(data-aos="fade-right")
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img30.png", alt="imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb Son tableros utilizados con el fin de configurar el cronograma semanal y diario de la asignación de instructivos para cada máquina. Su propósito es evitar la saturación del tablero general de control, en el caso en que un instructivo deba practicarse de manera permanente todas las semanas o todos los días.
        .cajon.color-acento-contenido.p-4(style="background: #ACC8E2")
          p.mt-0.mb-0 Si contamos con instructivos que se deban aplicar semanalmente, entonces se recurre a un formato llamado rutina semanal. A continuación, se muestra un ejemplo del formato.
    
    
    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Esquema de un tablero de control: rutina semanal
    .row.justify-content-center.my-4
      .col-lg-10.col-md-8
        p Figura 12. <em>Esquema de un tablero de control: rutina semanal</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img31.svg", alt="imagen decorativa")
          
    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Esquema de un tablero de control: rutina diaria
    .row.justify-content-center.my-4
      .col-lg-10.col-md-8
        p Figura 13. <em>Esquema de un tablero de control: rutina diaria</em>
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img32.svg", alt="imagen decorativa")
          
    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Órdenes de trabajo


    .row.justify-content-center.my-4
      .col-lg-12
        p.mb-4 Para que el proceso de control de mantenimiento sea eficiente, es necesario diseñar un formato que brinde una información detallada de las acciones realizadas en el mantenimiento. Dicho formato se conoce como orden de trabajo, el cual permite.
      .col-lg-12.d-lg-block.d-none
        p.my-4 Después, en el siguiente carrusel se podrán observar las diferentes formas de las órdenes de trabajo.
        
      .col-lg-4.col-md-8.order-md-2
        figure
          img.my-4(src="@/assets/curso/temas/tema2/img33.png", alt="imagen decorativa")
      
      .col-lg-12.order-md-3.d-lg-none.d-block
        p.my-4 Después, en el siguiente carrusel se podrán observar las diferentes formas de las órdenes de trabajo.

      .col-lg-8.order-md-4
        SlyderF(columnas="col-md-6 col-lg-6 col-xl-6")
          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img34.png", alt="imagen decorativa")
            p.text-center Asignar las acciones de mantenimiento por escrito, ya sea desde el área de mantenimiento o cualquier otra área de la organización.

          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img35.png", alt="imagen decorativa")
            p.text-center Definir el personal que se hará cargo de la labor, así como el equipo y los consumibles necesarios.

          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img36.png", alt="imagen decorativa")
            p.text-center Utilizar apropiadamente los recursos y así disminuir los costos de la actividad desarrollada.

          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img37.png", alt="imagen decorativa")
            p.text-center Retroalimentar la programación y la planeación del mantenimiento, con el fin de controlar la calidad en el desarrollo de los procedimientos.

          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img38.png", alt="imagen decorativa")
            p.text-center Nombre de trabajo y su descripción, el cual debe incluir el número de trabajadores necesarios, herramientas y equipos, insumos o consumibles, así como el tiempo necesario. Si el procedimiento requiere instructivos, estos deben ser referenciados.

          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img39.png", alt="imagen decorativa")
            p.text-center • Fecha de ejecución y nivel de urgencia o prioridad.<br>• De ser necesario, se debe brindar información de ingeniería (diagramas, planos y especificaciones).


          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img40.png", alt="imagen decorativa")
            p.text-center Código del equipo o máquina, se debe incluir su descripción y ubicación en la planta.

          .tarjeta-fondo.p-4
            .row.justify-content-center.mb-3
              .col-8.col-md-6
                img(src="@/assets/curso/temas/tema2/img41.png", alt="imagen decorativa")
            p.text-center Nombre del usuario quien solicita el trabajo (se debe incluir el área o departamento a donde pertenece).

        
    p.my-4 Para la programación y control, la orden de trabajo debe contener la siguiente información:
    
    .row.justify-content-center.align-content-center.p-5(style="background: #F2CCCC")
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-1.fnd-4
          h4.mb-0 01
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
          p.text-center.mb-0 Hora y fecha.
          
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-1.fnd-4
          h4.mb-0 02
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
          p.text-center.mb-0 Tiempo real que se utilizó.

      .col-lg-2.col-md-6.my-2
        .tarjeta.p-1.fnd-4
          h4.mb-0 03
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")
          p.text-center.mb-0 Costos reales consumidos en mano de obra, material e insumos.
          
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-1.fnd-4
          h4.mb-0 04
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
          p.text-center.mb-0 Causas y efectos de las averías o fallas.
          
      .col-lg-2.col-md-6.my-2
        .tarjeta.p-1.fnd-4
          h4.mb-0 05
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")
          p.text-center.mb-0 Procedimiento o acciones para corregirlas.

    p.my-4 A continuación, se muestra un ejemplo de orden de trabajo para propósitos generales:

    p Figura 14. <em>Esquema formato orden de trabajo</em>
    img(src="@/assets/curso/temas/tema2/img44.svg", alt="alt")







</template>

<script>
export default {
  name: 'Tema2',
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
