/**
 * LEYENDAS DE POTOSÍ — Macuquina Tours
 * Cada leyenda se vincula con uno o más lugares (campo "places", con los id de script.js).
 * Para agregar una leyenda, copia un bloque y cambia sus textos: la página se arma sola.
 * El texto de "content" admite <p>, <strong> y <em>.
 * VIDEO: en cada leyenda hay un campo  video: ''  → pega ahí el enlace de YouTube de esa historia
 *   (ej.  video: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' ) y aparece solo, debajo de la leyenda.
 * tellAt: dice en qué parada del recorrido se cuenta la historia y por qué tiene que ver con ese lugar.
 */
const legends = [
  {
    "id": "puente-del-diablo",
    "title": "El Puente del Diablo",
    "subtitle": "",
    "mood": "Inquietante",
    "where": "Puente y quebrada antigua (relato tradicional)",
    "places": [
      "city-tour"
    ],
    "teaser": "Un puente imposible de terminar y un pacto con el diablo a cambio de un alma.",
    "content": "<p>En las noches frías de la Villa Imperial, cuando las calles quedaban vacías y el viento bajaba desde el Cerro Rico, los viajeros hablaban de un puente que parecía imposible de terminar. Cada vez que los albañiles levantaban una parte, al amanecer aparecía derrumbada. La obra era urgente: debía unir dos lados de una quebrada y facilitar el paso de personas y mercancías.</p><p>Una noche, un hombre misterioso se presentó ante el maestro constructor. Dijo que podía levantar el puente antes del canto del gallo, pero pidió a cambio el alma de la primera persona que lo cruzara. Desesperado, el constructor aceptó. Durante la noche se escucharon golpes de piedra, cadenas y un murmullo que no parecía humano. Al amanecer, el puente estaba terminado, oscuro y húmedo, como si hubiera surgido de la misma tierra.</p><p>El maestro, arrepentido, buscó cómo evitar el pacto. Según una versión, hizo cruzar primero un animal; en otra, engañó al desconocido con una señal o una oración. El diablo, burlado, desapareció entre una nube de polvo y dejó una marca en las piedras. Desde entonces, el puente quedó asociado con pasos nocturnos, sombras y el precio de los acuerdos hechos por desesperación.</p><p><strong>Lo que deja la leyenda:</strong> advierte que la ambición y el miedo pueden llevar a pactos peligrosos. Las versiones cambian de un narrador a otro; se presenta aquí como relato de tradición oral, no como hecho documentado.</p>",
    "note": "Relato de tradición oral. Las versiones cambian de un narrador a otro.",
    "tellAt": {
      "city-tour": {
        "stop": "Balcón de la Horca",
        "link": "Potosí se levantó entre quebradas y pasos difíciles; el guía cuenta este relato al explicar cómo se unían los barrios de la Villa Imperial."
      }
    },
    "video": ""
  },
  {
    "id": "el-tio-de-la-mina",
    "title": "El Tío de la Mina",
    "subtitle": "",
    "mood": "Terror",
    "where": "Cerro Rico · interior de la mina",
    "places": [
      "cerro-rico"
    ],
    "teaser": "El dueño de las riquezas del subsuelo: los mineros le piden permiso antes de entrar al socavón.",
    "content": "<p>En el mundo minero potosino, el Tío es una figura temida y respetada. Se lo representa como un hombre con cuernos, ojos intensos y una sonrisa inquietante, sentado en las profundidades del socavón. No es simplemente un demonio: en la creencia minera, es el dueño de las riquezas subterráneas y puede proteger o castigar a quienes trabajan en su territorio.</p><p>Los mineros cuentan que antes de entrar a la mina se le ofrecen hojas de coca, cigarrillos, alcohol y otros presentes. Se le pide permiso, protección y una buena veta. El silencio de la montaña, el peligro de los derrumbes y la oscuridad hacen que su presencia se sienta cercana. Hay relatos de trabajadores que, al quedarse solos, escucharon pasos detrás de ellos, una risa breve o una voz que los llamaba desde un túnel vacío.</p><p>Una historia cuenta que un joven minero ignoró las ofrendas y se burló de la imagen del Tío. Esa jornada, sus compañeros oyeron un golpe seco y luego un silencio absoluto. Lo encontraron desorientado, asegurando que una figura de ojos encendidos le había cerrado el camino. Desde entonces, el joven nunca volvió a entrar sin saludar al guardián.</p><p><strong>Sentido cultural:</strong> el Tío expresa la relación de respeto, temor y reciprocidad con la mina. Los detalles de cada relato varían entre cooperativas y comunidades.</p>",
    "note": "Tradición minera andina. Los detalles varían entre cooperativas y comunidades.",
    "tellAt": {
      "cerro-rico": {
        "stop": "Recorrido por las galerías",
        "link": "Dentro de la mina verás las ofrendas al Tío; la leyenda explica por qué los mineros le piden permiso antes de entrar."
      }
    },
    "video": ""
  },
  {
    "id": "pobre-de-san-martin",
    "title": "Pobre de San Martín",
    "subtitle": "",
    "mood": "Terror",
    "where": "Calles y templos del Potosí antiguo",
    "places": [
      "san-francisco"
    ],
    "teaser": "Un hombre pobre que pide abrigo y una advertencia: nunca niegues ayuda a quien la necesita.",
    "content": "<p>En las narraciones antiguas se recuerda a un hombre conocido como San Martín, pobre y solitario, que recorría las calles buscando abrigo y ayuda. Su figura aparecía especialmente cuando las campanas marcaban la noche y las casas cerraban sus puertas. Algunos lo describían como un mendigo; otros, como un alma que no encontraba descanso.</p><p>Una noche de frío intenso, San Martín pidió refugio a varias personas. Nadie quiso abrirle. Llegó finalmente a una puerta donde una voz le respondió con desprecio. El hombre siguió caminando por las callejuelas, dejando tras de sí un sonido parecido al arrastre de sus pasos sobre las piedras. Al día siguiente, quienes lo habían rechazado encontraron señales extrañas: golpes en sus puertas, luces que se apagaban o una sensación de presencia en los corredores.</p><p>Con el tiempo, la historia se convirtió en una advertencia: no negar ayuda a quien la necesita. En algunas versiones, el personaje es un alma en pena; en otras, un visitante que pone a prueba la caridad de los habitantes. La leyenda mezcla el misterio nocturno de la ciudad colonial con una enseñanza moral.</p>",
    "note": "Relato de tradición oral. El título y la versión pueden variar según quien lo cuente.",
    "tellAt": {
      "san-francisco": {
        "stop": "Templo y convento de San Francisco",
        "link": "Es un relato sobre la caridad y el abrigo al necesitado, valores que el convento franciscano guarda desde la época colonial."
      }
    },
    "video": ""
  },
  {
    "id": "la-misa-de-las-12",
    "title": "La Misa de las 12",
    "subtitle": "",
    "mood": "Inquietante",
    "where": "Templo antiguo · Centro histórico",
    "places": [],
    "teaser": "Cuando dan las doce, las campanas llaman a una misa que nadie debería estar celebrando.",
    "content": "<p>Se dice que, en una iglesia antigua de Potosí, algunas noches se escucha el llamado de las campanas cuando ya no debería celebrarse ninguna ceremonia. Quienes conocen la historia aseguran que, al llegar las doce, las puertas parecen abrirse y una misa comienza en el interior. Los asistentes visten ropas de otra época y permanecen inmóviles, con los rostros ocultos por la penumbra.</p><p>Un caminante que volvía a casa escuchó el canto y entró pensando que encontraría a un sacerdote. Vio las bancas ocupadas y una figura frente al altar. Todo parecía normal, salvo por el frío que le calaba los huesos y el silencio de los asistentes. Cuando la ceremonia terminó, las personas se levantaron lentamente y se dirigieron hacia la salida. Al pasar junto a él, el caminante notó que sus rostros eran pálidos y que algunos no proyectaban sombra.</p><p>Asustado, salió corriendo. Al mirar atrás, la iglesia estaba oscura y cerrada. Al día siguiente, un anciano le explicó que aquella era una misa de difuntos, celebrada por almas que repetían eternamente sus últimas oraciones. Desde entonces, el hombre evitó acercarse al templo a medianoche.</p><p><strong>Lo que simboliza:</strong> la frontera entre el mundo de los vivos y el de los muertos, y el respeto que inspira la noche en los espacios sagrados.</p>",
    "note": "Versión literaria de la leyenda de la misa nocturna.",
    "image": "la-misa-de-las-12.jpg",
    "badge": "Recorrido nocturno · Viernes",
    "experience": {
      "brand": "Recorridos que Crecen",
      "kicker": "Recorrido nocturno teatralizado",
      "title": "Ecos de la Villa Imperial: Plata, Poder y Ánimas en las leyendas potosinas",
      "subtitle": "Descubre la historia política, el comercio de la plata y las jerarquías coloniales de Potosí a través de una ruta nocturna teatralizada.",
      "cta": "Reserva tu cupo — Todos los viernes, 19:30 hrs",
      "waMessage": "Hola, quiero reservar mi cupo para el recorrido nocturno \"Ecos de la Villa Imperial\" (viernes, 19:30 hrs).",
      "image": "moneda-macuquina.jpg",
      "imageAlt": "Monedas macuquinas de plata sobre una mesa de madera",
      "aboutTitle": "Sobre la experiencia",
      "about": "«Recorridos que Crecen» convierte la tradicional leyenda potosina (siglos XVII–XVIII) en una propuesta cultural sostenible que va más allá del turismo de terror convencional. A través del misterio de las ánimas, faroles de época y vestuarios históricos rigurosos, el recorrido revela cómo funcionaban el poder del Cabildo y la Iglesia, la economía textil y el comercio global de la plata macuquina en la Villa Imperial.",
      "includes": [
        {
          "title": "Recorrido guiado y teatralizado (2 horas)",
          "text": "4 paradas en el casco histórico acompañadas por un guía historiador y actores caracterizados como caballeros, beatas, mitayos y frailes."
        },
        {
          "title": "Pasaporte de la Villa Imperial",
          "text": "Documento impreso en papel texturizado color marfil y sellado en vivo con lacre al iniciar la ruta."
        },
        {
          "title": "Material ilustrado de bolsillo",
          "text": "Mapa con la ruta comercial de la plata y guía rápida sobre las jerarquías de vestimenta colonial."
        },
        {
          "title": "Cierre sensorial y recuerdo",
          "text": "Bebida caliente tradicional (mate aromático de canela/coca, café o chocolate con pastel) y una réplica coleccionable de moneda macuquina."
        }
      ],
      "itinerary": [
        {
          "time": "19:30",
          "place": "Plaza 10 de Noviembre y Catedral",
          "text": "Recepción, sellado de pasaportes y relato sobre el control político y los toques de queda en la colonia."
        },
        {
          "time": "20:00",
          "place": "Casa de Moneda",
          "text": "Historia del comercio de la plata macuquina y cómo la vestimenta delataba el estatus social."
        },
        {
          "time": "20:35",
          "place": "Arco de Cobija o Plaza 10 de Noviembre",
          "text": "Intervención teatral con la beata vestida de saya y manto rumbo al templo."
        },
        {
          "time": "21:30",
          "place": "Atrio Colonial (San Francisco / La Merced)",
          "text": "Escenificación de La Misa de las 12, entrega de monedas macuquinas y degustación caliente."
        }
      ],
      "practical": [
        {
          "label": "Días y horario",
          "value": "Todos los viernes, de 19:30 a 21:30 hrs"
        },
        {
          "label": "Punto de encuentro",
          "value": "Atrio de la Catedral (Plaza 10 de Noviembre), Potosí"
        },
        {
          "label": "Tarifa general",
          "value": "Bs. 70 por persona"
        },
        {
          "label": "Promoción grupal",
          "value": "4 personas pagan Bs. 210 (4×3)"
        }
      ]
    },
    "video": ""
  },
  {
    "id": "juan-de-toledo",
    "title": "Juan de Toledo",
    "subtitle": "La sombra que no debía seguirse",
    "mood": "Perturbador",
    "where": "Callejones del centro histórico",
    "places": [
      "city-tour"
    ],
    "teaser": "Una sombra que lo sigue por los callejones y una voz que lo llama por su nombre.",
    "content": "<p>En el Potosí de las calles empedradas, cuando la plata parecía convertir cada esquina en una promesa y cada noche en un secreto, vivía un hombre llamado Juan de Toledo. Era conocido por caminar tarde, incluso cuando el frío descendía desde el Sumaj Orcko y las campanas anunciaban que la ciudad debía estar dormida. Juan decía que conocía cada callejón… hasta la noche en que encontró uno que no recordaba.</p><p>Volvía a casa pasada la medianoche. La luna apenas iluminaba los tejados y el viento movía las puertas de madera. Al doblar una esquina vio a un hombre vestido de negro, quieto junto a una pared. No tenía rostro visible: el ala de su sombrero lo cubría por completo. Juan intentó pasar sin mirarlo, pero oyó una voz áspera:</p><p><strong>—Don Juan… ¿va usted por el camino correcto?</strong></p><p>Juan se detuvo. No conocía al extraño. Respondió que sí y siguió andando. Sin embargo, al mirar de reojo descubrió que la figura caminaba detrás de él. Sus pasos no sonaban sobre las piedras. Juan aceleró; la sombra también. Se metió por una calle estrecha para perderla, pero al final del pasaje encontró al mismo hombre, esperándolo bajo un farol apagado.</p><p>Esta vez, la voz llegó más cerca:</p><p><strong>—No debería caminar solo a esta hora. Hay cosas que despiertan cuando la ciudad calla.</strong></p><p>Juan sintió un frío distinto al de la noche. Corrió hacia la plaza, pero las calles parecían cambiar de lugar. Las ventanas estaban cerradas, las puertas no respondían y, a lo lejos, las campanas dieron las doce. En cada esquina, el hombre de negro aparecía un poco más cerca. Juan quiso rezar, pero la lengua se le pegó al paladar.</p><p>Al llegar frente a una antigua puerta, escuchó tres golpes desde el otro lado. La figura señaló la madera. Juan, desesperado, preguntó quién estaba allí. La respuesta no vino de la puerta, sino de detrás de su oído:</p><p><strong>—El que viene a buscarte… soy yo.</strong></p><p>Juan se volvió. El hombre ya no tenía sombrero. En el lugar de su rostro había una oscuridad profunda, como la entrada de un socavón. Y en esa negrura, Juan reconoció sus propios ojos.</p><p>Al amanecer, unos vecinos lo encontraron sentado junto a la puerta, pálido y temblando. No recordaba cómo había llegado. Solo repetía que una sombra lo había seguido toda la noche. Desde entonces, cuentan que si alguien escucha pasos sin sonido en los callejones de Potosí, no debe mirar atrás ni responder cuando una voz lo llame por su nombre.</p><p><strong>Y si al terminar este relato escuchas tres golpes…</strong> no abras la puerta. Puede que Juan de Toledo todavía esté buscando el camino de regreso.</p>",
    "note": "Recreación literaria basada en atmósferas de leyenda urbana. No es una crónica histórica verificada.",
    "tellAt": {
      "city-tour": {
        "stop": "Camino entre la Catedral y la Plaza 6 de Agosto",
        "link": "Se narra al cruzar los callejones del casco antiguo, donde, según el relato, la sombra seguía al caminante."
      }
    },
    "video": ""
  },
  {
    "id": "la-viuda-de-los-callejones",
    "title": "La Viuda de los callejones",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Callejones del centro histórico",
    "places": [
      "city-tour"
    ],
    "teaser": "Una mujer de negro, con el rostro cubierto, que pide ser acompañada hasta la esquina.",
    "content": "<p>En los relatos de muchas ciudades antiguas aparece la figura de una mujer vestida de negro que camina sola cuando las calles quedan vacías. En esta versión ambientada en Potosí, los vecinos cuentan que una viuda se deja ver cerca de las casonas y callejones, siempre con el rostro oculto por un velo.</p><p>Una noche, un caminante que regresaba a casa la encontró junto a una pared de piedra. Ella le pidió que la acompañara hasta una esquina. El hombre aceptó, pero notó que la mujer no hacía ruido al andar y que su vestido parecía deslizarse sobre el suelo. Cuando llegaron al lugar indicado, ella levantó lentamente el velo: no había rostro, solo una sombra profunda.</p><p>El caminante corrió hasta la plaza y, al mirar atrás, la calle estaba vacía. Desde entonces, la historia advierte que no conviene seguir a desconocidos por callejones solitarios. </p>",
    "note": "Adaptación narrativa de un motivo tradicional. Versión potosina no verificada documentalmente.",
    "tellAt": {
      "city-tour": {
        "stop": "Plaza 6 de Agosto",
        "link": "Los callejones que salen de las plazas son el escenario del relato; se recorren justo después de esta parada."
      }
    },
    "video": ""
  },
  {
    "id": "el-condenado",
    "title": "El condenado",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Caminos antiguos y zonas altas",
    "places": [
      "kari-kari"
    ],
    "teaser": "Un alma en pena que pide agua y una oración en los caminos altos.",
    "content": "<p>Se llama condenado, en distintas tradiciones andinas, al alma que no logra descansar y vaga por el mundo debido a una falta grave o una promesa incumplida. En los caminos que rodean la Villa Imperial, el relato se imagina como una advertencia para quienes viajan solos durante la noche.</p><p>Un arriero aseguró haber escuchado un lamento detrás de él. Al volverse, vio a un hombre encorvado, con ropa desgastada y los pies cubiertos de polvo. La figura le pidió agua y que no la abandonara. El arriero compartió su cantimplora, pero el desconocido no bebió: el agua cayó al suelo como si atravesara su cuerpo. Luego pidió que alguien rezara por él y desapareció con el viento.</p><p>La historia invita a reflexionar sobre la compasión, el arrepentimiento y el respeto a los viajeros. Es una narración de tradición oral, no un suceso histórico comprobado.</p>",
    "note": "Motivo de tradición oral andina.",
    "tellAt": {
      "kari-kari": {
        "stop": "Caminata por las lagunas",
        "link": "Los caminos altos de la cordillera son el escenario del relato; se narra durante la caminata o junto a la fogata en la casa de familia."
      }
    },
    "video": ""
  },
  {
    "id": "la-campana-que-suena-sola",
    "title": "La campana que suena sola",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Templos y campanarios antiguos",
    "places": [
      "torre-compania",
      "catedral"
    ],
    "teaser": "Una campana que suena una sola vez, sin viento y sin nadie en el campanario.",
    "content": "<p>En una ciudad de templos y campanarios, las campanas forman parte de la memoria cotidiana. Una leyenda cuenta que, en ciertas noches sin viento, una campana de un templo antiguo suena una vez, aunque las puertas estén cerradas y no haya nadie en el campanario.</p><p>Un cuidador decidió subir para averiguar la causa. Revisó las cuerdas, las ventanas y los mecanismos: todo estaba quieto. Cuando bajó, escuchó el tañido detrás de él. Al día siguiente encontró, junto a la entrada, una pequeña vela consumida y una nota que decía: «No olvides a quienes ya no pueden llamar».</p><p>Desde entonces, algunos interpretan el sonido como recuerdo de las almas y otros como una explicación nacida de los ecos y del viento. El relato se presenta como una recreación inspirada en historias de campanas misteriosas.</p>",
    "note": "Recreación inspirada en leyendas sobre campanas misteriosas.",
    "tellAt": {
      "torre-compania": {
        "stop": "Mirador de la torre",
        "link": "Se cuenta junto al campanario, cuando se explica cómo las campanas marcaban las horas de la ciudad."
      },
      "catedral": {
        "stop": "Catedral de Potosí",
        "link": "La catedral también tuvo campanas que ordenaban la vida de la plaza; aquí se cuenta el relato de la campana que suena sola."
      }
    },
    "video": ""
  },
  {
    "id": "la-casa-de-las-tres-puertas",
    "title": "La casa de las tres puertas",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Casonas del Potosí antiguo",
    "places": [
      "city-tour"
    ],
    "teaser": "Una casona con tres puertas idénticas y un patio que siempre devuelve al mismo lugar.",
    "content": "<p>En el Potosí de las casonas coloniales se cuentan historias de viviendas cuyos corredores parecen más largos de noche que de día. La casa de las tres puertas es una de ellas: se dice que tenía tres entradas visibles desde la calle, aunque los planos y recuerdos de los vecinos nunca coincidían.</p><p>Un joven curioso entró una tarde para buscar un objeto perdido. Encontró un patio silencioso y tres puertas idénticas. Eligió una, pero volvió al mismo patio. Probó la segunda y escuchó voces detrás de la tercera. Al abrirla, vio la calle iluminada por una luna enorme, aunque afuera todavía era de día. Cerró los ojos y pidió volver. Cuando los abrió, estaba en la vereda, sin saber cuánto tiempo había pasado.</p><p>La leyenda juega con el misterio de las casas antiguas y los espacios que parecen guardar secretos. Es una historia recreada, no una descripción de un inmueble identificado.</p>",
    "note": "Recreación literaria. No se atribuye a una casona concreta.",
    "tellAt": {
      "city-tour": {
        "stop": "Calles coloniales del centro",
        "link": "Las casonas con patio y varias puertas son parte del paisaje del recorrido: el guía las señala mientras cuenta la historia."
      }
    },
    "video": ""
  },
  {
    "id": "el-tesoro-escondido-del-cerro",
    "title": "El tesoro escondido del Cerro",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Cerro Rico y sus alrededores",
    "places": [
      "cerro-rico"
    ],
    "teaser": "Una luz azulada entre las rocas señala una veta que nadie ha logrado encontrar.",
    "content": "<p>El Cerro Rico ha sido asociado durante siglos con la plata, el trabajo y las historias de riquezas ocultas. Una leyenda cuenta que, en ciertas noches, una luz azulada aparece entre las rocas y marca la entrada a una veta que nadie ha podido encontrar.</p><p>Un buscador siguió la luz con una pequeña lámpara. La señal lo condujo a una grieta estrecha, donde creyó escuchar el tintineo de monedas. Pero cada vez que avanzaba, el sonido se alejaba. Al amanecer, la luz se apagó y el hombre comprendió que había pasado la noche dando vueltas por el mismo lugar.</p><p>Los relatos de tesoros escondidos suelen expresar la esperanza y el peligro de perseguir la riqueza. Esta versión es narrativa y no recomienda ingresar a zonas mineras; el Cerro Rico es un espacio de trabajo que requiere seguridad y autorización.</p>",
    "note": "Recreación inspirada en el imaginario popular. El Cerro Rico es un espacio de trabajo: visítalo solo con guía y autorización.",
    "tellAt": {
      "cerro-rico": {
        "stop": "Traslado al Cerro Rico",
        "link": "Se cuenta en el camino hacia la montaña, mientras se ve su silueta y se explica de dónde salió la plata de Potosí."
      }
    },
    "video": ""
  },
  {
    "id": "la-laguna-encantada",
    "title": "La laguna encantada",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Serranías y lagunas de la región potosina",
    "places": [
      "kari-kari",
      "ojo-inca"
    ],
    "teaser": "Luces sobre el agua, música y voces que te llaman por tu nombre.",
    "content": "<p>Las lagunas de las alturas forman parte de la geografía y la memoria de Potosí. En los relatos de la laguna encantada, el agua permanece inmóvil durante el día, pero al caer la noche refleja luces que no pertenecen al cielo.</p><p>Una pastora vio una hilera de pequeñas lámparas sobre la superficie. Al acercarse, escuchó música y voces que la llamaban por su nombre. Recordó la advertencia de su abuela: no responder a las luces del agua. Se alejó sin mirar atrás y, al amanecer, las señales habían desaparecido.</p><p>Algunas versiones interpretan las luces como espíritus; otras las relacionan con fenómenos naturales vistos desde la distancia. Este texto es una adaptación narrativa y no señala una laguna específica.</p>",
    "note": "Adaptación literaria de motivos andinos. No señala una laguna específica.",
    "tellAt": {
      "kari-kari": {
        "stop": "Caminata por las lagunas",
        "link": "Se cuenta frente a las lagunas de colores, que son justamente las protagonistas de la historia."
      },
      "ojo-inca": {
        "stop": "Caminata hasta el Ojo del Inca",
        "link": "Otra laguna, otra leyenda: se narra al llegar a las aguas termales."
      }
    },
    "video": ""
  },
  {
    "id": "la-monja-del-claustro",
    "title": "La monja del claustro",
    "subtitle": "",
    "mood": "Misterioso",
    "where": "Claustros del Convento de Santa Teresa",
    "places": [
      "santa-teresa"
    ],
    "teaser": "Una figura que reza al amanecer en el claustro y que nadie recuerda haber visto entrar.",
    "content": "<p>Cuentan las voces del barrio que, en las madrugadas más frías, una monja camina despacio por los claustros del convento. Lleva el hábito de otra época y reza en voz baja frente a un muro donde, según dicen, hubo una puerta que ya no existe.</p><p>Las hermanas aseguran que nunca la ven entrar ni salir; solo escuchan el roce de la tela y un rezo que termina cuando sale el sol. Algunos creen que es una novicia que prometió rezar por las almas de la Villa Imperial y que sigue cumpliendo su promesa.</p><p>Quien visita el convento de día encuentra silencio, pinturas virreinales y arcos de piedra; quien pasa de madrugada, dicen, aprende a hablar más bajo.</p>",
    "note": "Relato popular recogido de la tradición oral; versión literaria adaptada para el recorrido.",
    "tellAt": {
      "santa-teresa": {
        "stop": "Claustros del convento",
        "link": "Se cuenta al recorrer los claustros, entre los arcos de piedra, donde el silencio del convento invita a escucharla."
      }
    },
    "video": ""
  },
  {
    "id": "el-cerro-que-hablo",
    "title": "El cerro que habló",
    "subtitle": "Sumaj Orcko, el cerro hermoso",
    "mood": "Leyenda popular",
    "where": "Cerro Rico y sus faldas",
    "places": [
      "cerro-rico"
    ],
    "teaser": "El Inca quiso extraer su plata y una voz profunda le advirtió que esa riqueza no era para él.",
    "content": "<p>Antes de ser Cerro Rico, la montaña se llamaba Sumaj Orcko: el cerro hermoso. Se dice que el Inca Huayna Capac llegó hasta sus pies con la intención de explotar sus vetas brillantes. Cuando sus hombres comenzaron a trabajar, una voz profunda salió de la montaña y les dijo que esa plata no era para ellos, sino para otros que vendrían de lejos.</p><p>El Inca, asustado, ordenó detener la obra. Los siglos siguientes parecieron darle la razón: la plata del cerro financió imperios lejanos mientras Potosí quedaba marcado por el esfuerzo de quienes entraban a sus socavones.</p><p>Hoy, desde los miradores, el cerro sigue ahí, con su color rojizo y su silueta inconfundible, recordando que cada riqueza tiene una historia más grande que el brillo del metal.</p>",
    "note": "Tradición popular muy difundida en Potosí; existen varias versiones.",
    "tellAt": {
      "cerro-rico": {
        "stop": "Traslado al Cerro Rico",
        "link": "Habla del origen de la montaña, el Sumaj Orcko, justo cuando el grupo la tiene enfrente."
      }
    },
    "video": ""
  },
  {
    "id": "el-ojo-que-llora",
    "title": "El ojo que llora",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Laguna Ojo del Inca (Tarapaya)",
    "places": [
      "ojo-inca"
    ],
    "teaser": "Una laguna perfectamente redonda, de aguas tibias, que según el relato nació de una lágrima del Inca.",
    "content": "<p>En las afueras de Potosí, entre cerros rojizos, hay una laguna casi perfecta que parece mirar al cielo. Los abuelos cuentan que el Inca, al ver partir su plata hacia tierras lejanas, lloró en silencio y que de esa lágrima nació el Ojo del Inca.</p><p>Sus aguas, siempre tibias por el calor que sube desde la tierra, serían el recuerdo de esa tristeza que no se enfría. Por eso muchos viajeros se acercan despacio, sin gritar, como quien visita un lugar que guarda memoria.</p>",
    "note": "Relato popular; la formación termal de la laguna tiene explicación geológica, pero la historia forma parte de la tradición local.",
    "tellAt": {
      "ojo-inca": {
        "stop": "Caminata hasta el Ojo del Inca",
        "link": "Cuenta el origen de la laguna que se visita en esta parada."
      }
    },
    "video": ""
  },
  {
    "id": "el-eco-de-la-moneda",
    "title": "El eco de la moneda",
    "subtitle": "",
    "mood": "Inquietante",
    "where": "Salas y patios de la Casa Nacional de Moneda",
    "places": [
      "casa-moneda"
    ],
    "teaser": "Golpes metálicos que algunos juran escuchar de noche, como si las prensas siguieran acuñando.",
    "content": "<p>La Casa de Moneda fue durante siglos el corazón del dinero de la Villa Imperial: aquí se fundía y acuñaba la plata que salía del cerro. Por eso, dicen los vigilantes, el edificio nunca guarda silencio del todo.</p><p>Algunas noches se oyen golpes secos, parecidos a los de las prensas, y el tintineo de monedas cayendo sobre una mesa de madera. Cuando alguien se acerca, el ruido se detiene, como si los antiguos trabajadores avisaran que su turno todavía no termina.</p>",
    "note": "Relato popular contado por guías y vecinos; versión literaria adaptada.",
    "tellAt": {
      "casa-moneda": {
        "stop": "Sala de acuñación",
        "link": "Frente a las prensas originales de madera, el guía cuenta por qué dicen que aún se oyen los golpes de la acuñación."
      }
    },
    "video": ""
  },
  {
    "id": "la-sombra-del-mirador",
    "title": "La sombra del mirador",
    "subtitle": "",
    "mood": "Misterioso",
    "where": "Torre de la Compañía de Jesús",
    "places": [
      "torre-compania"
    ],
    "teaser": "Quien sube de noche a la torre dice ver una silueta que mira el Cerro Rico sin moverse.",
    "content": "<p>Desde lo alto de la torre barroca, Potosí se ve entero: tejados rojos, calles estrechas y el cerro dominando el horizonte. Se cuenta que, al caer la tarde, una silueta aparece junto a la baranda, siempre mirando hacia la montaña.</p><p>Nadie sabe si fue un vigía, un monje o un minero que buscaba orientarse. Lo único seguro es que, cuando uno se acerca para saludar, solo queda el viento y la sensación de haber compartido la vista con alguien más.</p>",
    "note": "Relato popular; versión literaria adaptada para el recorrido.",
    "tellAt": {
      "torre-compania": {
        "stop": "Mirador de la torre",
        "link": "Relato pensado para el momento en que el grupo mira Potosí y el Cerro Rico desde lo alto."
      }
    },
    "video": ""
  },
  {
    "id": "la-macuquina-de-la-suerte",
    "title": "La macuquina de la suerte",
    "subtitle": "",
    "mood": "Leyenda popular",
    "where": "Patio y salas de la Casa Nacional de Moneda",
    "places": [
      "casa-moneda"
    ],
    "teaser": "Una moneda tosca, acuñada a mano, que los mineros llevaban en el bolsillo para volver con vida de la mina.",
    "content": "<p>Se cuenta que, cuando la plata del cerro llegaba a la Casa de Moneda, los acuñadores apartaban a veces una macuquina de forma irregular, tan imperfecta que nadie quería gastarla. Los mineros la pedían como amuleto: decían que una moneda hecha a golpes de martillo conocía el peso de la montaña y sabía guiar a su dueño de regreso a la luz.</p><p>Quien la llevaba no debía gastarla nunca: si la entregaba, la suerte se iba con ella. Por eso, dicen, todavía hoy quedan macuquinas perdidas en cajones y baúles de familias potosinas, esperando a alguien que sepa guardarlas.</p>",
    "note": "Relato popular; versión literaria adaptada para el recorrido. La macuquina es la moneda acuñada a mano en la Casa de Moneda de Potosí.",
    "tellAt": {
      "casa-moneda": {
        "stop": "Ingreso y patio principal",
        "link": "Acompaña la explicación de qué era una macuquina y cómo se fabricaba en este edificio."
      }
    },
    "video": ""
  },
  {
    "id": "las-catacumbas-que-susurran",
    "title": "Las catacumbas que susurran",
    "subtitle": "",
    "mood": "Misterioso",
    "where": "Catacumbas bajo la Catedral y el Colegio Pichincha",
    "places": [
      "catedral"
    ],
    "teaser": "Bajo la catedral, dicen los guías, el silencio se rompe con rezos que nadie recuerda haber pronunciado.",
    "content": "<p>Debajo de la Catedral y de los muros del antiguo colegio hay pasadizos y bóvedas donde, según la tradición, descansaron los restos de vecinos ilustres, frailes y familias de la Villa Imperial. Quien baja con el grupo nota primero el frío; después, un murmullo parecido a un rezo.</p><p>Los guías dicen que no hay que tenerle miedo: son los antiguos feligreses que siguen acompañando a la iglesia. Por eso, al salir, es costumbre guardar un momento de silencio y agradecer la visita.</p>",
    "note": "Relato popular; versión literaria adaptada para el recorrido.",
    "tellAt": {
      "catedral": {
        "stop": "Colegio Pichincha y catacumbas",
        "link": "Se cuenta antes de bajar a las catacumbas, donde se visita el espacio que da origen al relato."
      }
    },
    "video": ""
  }
];
