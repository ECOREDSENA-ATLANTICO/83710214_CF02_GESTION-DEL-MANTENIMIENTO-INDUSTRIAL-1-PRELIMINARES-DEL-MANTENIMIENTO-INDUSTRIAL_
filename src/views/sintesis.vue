<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 La labor del mantenimiento en cualquier empresa obliga contemplar actividades que corresponden principalmente al mantenimiento correctivo, que suele operar cuando se produce la avería o falla, por tal razón deben lograrse cada vez más, los mejores resultados implementando acciones planes organizados y coherentes, que logren controlar la ejecución de las actividades de mantenimiento.
    p.mb-3 Se ha establecido las causas y consecuencias de las averías, su importancia en la organización del mantenimiento correctivo, como una condición fundamental para la ejecución de las actividades de mantenimiento, así también se pudo determinar la necesidad de implementar otros tipos de mantenimiento, a causa de la importancia de los equipos en los procesos productivos.
    p.mb-5 Se pudo constatar la importancia de las actividades del mantenimiento preventivo, al involucrar la planificación y programación, así como su seguimiento y medición, las cuales contribuyen en la productividad, calidad y confiabilidad a la empresa.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
