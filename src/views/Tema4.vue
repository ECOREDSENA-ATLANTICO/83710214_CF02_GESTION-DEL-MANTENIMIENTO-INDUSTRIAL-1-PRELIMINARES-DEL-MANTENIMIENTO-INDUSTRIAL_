<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis de averías

    p.mb-3 Para conocer cuál debe ser el proceso para analizar una falla, se debe tener claro el concepto de averías que para este caso es equivalente al término falla, y que se define como la culminación de la habilidad de un equipo o máquina para desarrollar una tarea específica.
    p.mb-3 Por lo general las averías son progresivas, generando reacciones progresivas hasta llegar al daño total o catastrófico de la máquina o equipo. Las averías pueden ser previstas o súbitas, pudiéndose clasificar de la siguiente forma:

    p.mt-3 <strong>En la manera como se produce:</strong>


    .row.justify-content-center.my-4
      .col-lg-8.align-content-center
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Averías súbitas")(style="color: white")
            .col-lg-12
              p.mb-3 Se presentan de manera inesperada y se caracterizan por ser imposibles de evitar. Su origen se puede centrar en errores de diseño, selección inadecuada del material, funcionamiento deficiente de la máquina o un mal proceso de reparación.

          .row(titulo="Averías previstas")(style="color: white")
            .col-lg-12
              p.mb-3 Se presenta cuando, al detectar la anomalía esta no se corrige. Por lo general, se presentan en piezas de baja vida útil. De acuerdo con la pérdida de función.

          .row(titulo="Avería total")(style="color: white")
            .col-lg-12
              p.mb-3 Se produce cuando el equipo no puede realizar todas las funciones para las cuales fue diseñado.

          .row(titulo="Avería parcial")(style="color: white")
            .col-lg-12
              p.mb-3 Se presenta cuando la avería solo afecta parcialmente algunas de las funciones del equipo que se consideran de menor importancia.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/temas/tema4/img23.png", alt="imagen decorativa")

    p.text-center.my-4 <strong>De la manera como se presenta a lo largo del tiempo:</strong> 

    .row.justify-content-center.my-4
      .col-lg-4.col-md-8.align-content-center
        figure
          img.my-4(src="@/assets/curso/temas/tema4/img24.png", alt="imagen decorativa")
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
              p.mb-3.text-light Esta se presenta en el equipo durante un tiempo corto y adquiere de nuevo las condiciones para funcionar de manera adecuada. Lo anterior, sin necesidad de realizarse ninguna acción de mantenimiento.
    
    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5(style="background: #E69999")
    
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img25.png')})`}")
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
          p.mb-2 De los tipos de averías que se clasificaron, las averías imprevistas en las máquinas y equipos tienen mayor incidencia en los procesos productivos, debido a las dificultades que este suceso genera en los procesos de producción y en la vida útil de los equipos, por lo que es necesario que estos sucesos sean analizados. Durante el servicio, cada avería debe ser analizada de manera minuciosa con el fin de obtener la máxima información relacionada con las causas.
          p <br>Entender el contexto de la situación en el análisis de avería es uno de los factores más importantes, ya que nos permite comprender aún más las causas que la generan. Para tal fin, es conveniente plantearse preguntas como las siguientes:

    .row.justify-content-center.align-content-center.p-5.mb-3.mt-4(style="background: #F6F6F6")
      .col-lg-3.col-md-8.align-content-center
        figure
          img.my-3(src="@/assets/curso/temas/tema4/img26.png", alt="imagen decorativa")
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
              p.text-center.mb-0 ¿Después de que sucede la falla, qué pasa en la máquina o equipo?
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
    
    p.my-4 Es importante que se cuente con toda la información relacionada con la pieza o conjunto de piezas averiadas, además de conocer cuáles fueron las condiciones de operación de la máquina al momento de la falla. Para identificar lo sucedido, se debe responder las siguientes preguntas:

    .row.justify-content-center.align-content-center.py-3.mb-3.mt-4.d-lg-block.d-none(style="background: #F6F6F6")
      .col-lg-12.col-md-6.my-2
        .row.justify-content-center
          .col-lg-auto.my-2.col-md-6
            .tarjeta.p-2.fnd-6
              h4.mb-0 01
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Cuánto tiempo duró el elemento o pieza en funcionamiento?
          .col-lg-auto.my-2.col-md-6
            .tarjeta.p-2.fnd-6
              h4.mb-0 02
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Qué tipo de solicitaciones de carga experimentó la pieza en el instante en que se produjo la avería?
          .col-lg-auto.my-2.col-md-6
            .tarjeta.p-2.fnd-6
              h4.mb-0 03
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿La pieza estuvo expuesta a sobre carga?
          .col-lg-auto.my-2.col-md-6
            .tarjeta.p-2.fnd-6
              h4.mb-0 04
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Se presentaron trastornos significativos en el ambiente?
          .col-lg-auto.my-2.col-md-6
            .tarjeta.p-2.ms-2.fnd-6
              h4.mb-0 05
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Las actividades de mantenimiento aplicadas a la pieza fueron las adecuados?
          .col-lg-auto.my-2.col-md-8.align-content-center
            img(src="@/assets/curso/temas/tema4/img28.png", alt="imagen decorativa")



    .row.justify-content-center.align-content-center.p-5.mb-3.mt-4.d-lg-none.d-block(style="background: #F6F6F6")
      .col-lg-9
        .row
          .col-md-6.my-2
            .tarjeta.p-4.fnd-7
              h4.mb-0 01
              .row.mb-3.justify-content-center
                .col-6
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Cuánto tiempo duro el elemento o pieza en funcionamiento?
          .col-md-6.my-2
            .tarjeta.p-4.fnd-7
              h4.mb-0 02
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Qué tipo de solicitaciones de carga experimento la pieza en el instante en que se produjo la avería?
        .row.justify-content-center
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-4.fnd-7
              h4.mb-0 03
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿La pieza estuvo expuesta a sobre carga?
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-4.fnd-7
              h4.mb-0 04
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema2/img43.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Se presentaron trastornos significativos en el ambiente?
          .col-lg-2.col-md-6.my-2
            .tarjeta.p-4.fnd-7
              h4.mb-0 05
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema2/img42.svg", alt="alt")(style="width: 100px")
              p.text-center.mb-0 ¿Las actividades de mantenimiento aplicadas a la pieza fueron los adecuados?.
      .col-lg-3.col-md-8.align-content-center.justify-content-center
        img.my-4(src="@/assets/curso/temas/tema4/img28.png", alt="alt")

    .row.justify-content-center.py-3(style="background: #F9E6E6")
      .col-lg-4.col-md-8
        img(src="@/assets/curso/temas/tema4/img1.png", alt="alt")
      .col-lg-8
        p.my-3 Los anteriores cuestionamientos resultan necesarios y de vital importancia, teniendo presente que el análisis de averías sirve de insumo para el desarrollo de las actividades de mantenimiento preventivo y correctivo. Por lo anterior, es necesario establecer una metodología que permita sistematizar el proceso de análisis, disminuyendo los riesgos y la posibilidad de que se presente una avería futura.



    h3(data-aos="fade-left").mb-3.mt-4.blue_icon Metodología para analizar averías

    p.mb-3 La metodología que se utilice para realizar el análisis de averías debe ser lo suficientemente estructurada y que permita implementarse en un orden lógico, que no de opción a evadir ninguno de los pasos propuestos. Seguido, se propone una serie de etapas o fases para el análisis de averías:
    p.my-3 A continuación, se evidencian las fases de análisis de averías:

    .row.justify-content-center
      SlyderF(columnas="col-md-6 col-lg-4 col-xl-4")
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img2.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3.text-center Fase A
              p.mb-0.text-center(style="margin-left: 4em; margin-right: 4em") Concretar el problema.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img3.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3.text-center Fase B
              p.mb-0.text-center(style="margin-left: 4em; margin-right: 4em") Determinar las causas.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img4.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3.text-center Fase C
              p.mb-0.text-center(style="margin-left: 5em; margin-right: 5em") Elaborar la solución.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(style="width:100%")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img5.png", alt="imagen decorativa")
            .crd_hover_txt--body
              h4.mb-3.text-center Fase D
              p.mb-0.text-center(style="margin-left: 4em; margin-right: 4em") Presentar la propuesta.
   
    .row.justify-content-center.my-4
      .col-lg-8.col-md-8
        p Figura 16. <em>Estructura metodología análisis de averías</em>
        figure
          img.my-4(src='@/assets/curso/temas/tema4/img31.svg', alt='Img decorativa')


</template>

<script>
export default {
  name: 'Tema4',
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
