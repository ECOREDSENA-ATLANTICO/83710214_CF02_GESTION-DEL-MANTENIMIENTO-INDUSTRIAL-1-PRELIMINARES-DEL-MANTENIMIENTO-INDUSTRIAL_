<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '<strong><em>Un sistema de gestión de mantenimiento se conoce como sistema de información </em></strong>',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Las herramientas tecnológicas aportan desorden en la información ',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Excel es una herramienta que ayuda a la programación y organización de información ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Las tarjetas maestras son fichas donde se consignan las características principales de la máquina.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La fiabilidad es importante para el óptimo funcionamiento de las máquinas.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los requerimientos de una máquina son aquellas acciones de mantenimiento o actividades que se deben practicar a la máquina para que no falle o se dañe. ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Luego de realizar la tarjeta maestra, es importante contar para cada máquina con el recuento de identificación del equipo, fecha, código del instructivo, trabajo realizado, costo, tiempo y quien lo realiza. ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Los tableros auxiliares son tableros utilizados con el fin de sobre escribir el cronograma anual de la asignación de instructivos para cada lote de ganado. ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La programación y el control de las ordenes de trabajo es importante para el proceso. ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La fiabilidad, se puede decir que es la probabilidad de que un elemento o equipo trabaje sin fallos durante un tiempo determinado. ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento de la normativa que orienta el desarrollo educativo en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
