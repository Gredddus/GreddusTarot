const cartas = [
    {
        id: 1,
        nombre: "El Loco (Derecho)",
        imagen: "assets/cards/00-TheFool.jpg",
        descripcion: "Nuevo comienzo, Inocencia, Espontaneidad, Espiritu Libre. Elemento fuego, pero tambien asociado con los otros 3, ya que se cree que en su bolso lleva todos ellos. El 0 es el potencial sin límites, no tiene un lugar definido. Es el comienzo de un viaje. Indicador de novedad, pureza y gran energía. "
    },
    {
        id: 2,
        nombre: "El Loco (Invertido)",
        imagen: "assets/cards/00-TheFool.jpg",
        descripcion: "Ingenuidad, Insensatez, Imprudencia, Riesgos. Necesidad de un nuevo comienzo pero con cautela. Resistencia al nuevo inicio o proceso. Actuar sin pensar, sin considerar las consecuencias, vives el presente sin planear a futuro. Engaño por inocente y crédulo. "
    },
    {
        id: 3,
        nombre: "El Mago (Derecho)",
        imagen: "assets/cards/01-TheMagician.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 4,
        nombre: "El Mago (Invertido)",
        imagen: "assets/cards/01-TheMagician.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 5,
        nombre: "La Alta Sacerdotisa (Derecho)",
        imagen: "assets/cards/02-TheHighPriestess.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 6,
        nombre: "La Alta Sacerdotisa (Invertida)",
        imagen: "assets/cards/02-TheHighPriestess.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 7,
        nombre: "La Emperatriz (Derecho)",
        imagen: "assets/cards/03-TheEmpress.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 8,
        nombre: "La Emperatriz (Invertida)",
        imagen: "assets/cards/03-TheEmpress.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 9,
        nombre: "El Emperador (Derecho)",
        imagen: "assets/cards/04-TheEmperor.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 10,
        nombre: "El Emperador (Invertido)",
        imagen: "assets/cards/04-TheEmperor.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 11,
        nombre: "El Hierofante o Papa (Derecho)",
        imagen: "assets/cards/05-TheHierophant.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 12,
        nombre: "El Hierofante o Papa (Invertido)",
        imagen: "assets/cards/05-TheHierophant.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 13,
        nombre: "Los Amantes (Derecho)",
        imagen: "assets/cards/06-TheLovers.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 14,
        nombre: "Los Amantes (Invertido)",
        imagen: "assets/cards/06-TheLovers.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 15,
        nombre: "El Carro (Derecho)",
        imagen: "assets/cards/07-TheChariot.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 16,
        nombre: "El Carro (Invertido)",
        imagen: "assets/cards/07-TheChariot.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 17,
        nombre: "La Fuerza (Derecho)",
        imagen: "assets/cards/08-Strength.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 18,
        nombre: "La Fuerza (Invertida)",
        imagen: "assets/cards/08-Strength.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 19,
        nombre: "El Hermitaño (Derecho)",
        imagen: "assets/cards/09-TheHermit.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 20,
        nombre: "El Hermitaño (Invertido)",
        imagen: "assets/cards/09-TheHermit.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 21,
        nombre: "La Rueda de la Fortuna (Derecho)",
        imagen: "assets/cards/10-WheelOfFortune.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 22,
        nombre: "La Rueda de la Fortuna (Invertida)",
        imagen: "assets/cards/10-WheelOfFortune.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 23,
        nombre: "La Justicia (Derecho)",
        imagen: "assets/cards/11-Justice.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 24,
        nombre: "La Justicia (Invertida)",
        imagen: "assets/cards/11-Justice.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 25,
        nombre: "El Colgado (Derecho)",
        imagen: "assets/cards/12-TheHangedMan.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 26,
        nombre: "El Colgado (Invertido)",
        imagen: "assets/cards/12-TheHangedMan.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 27,
        nombre: "La Muerte (Derecho)",
        imagen: "assets/cards/13-Death.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 28,
        nombre: "La Muerte (Invertida)",
        imagen: "assets/cards/13-Death.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 29,
        nombre: "La Templanza (Derecho)",
        imagen: "assets/cards/14-Temperance.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 30,
        nombre: "La Templanza (Invertida)",
        imagen: "assets/cards/14-Temperance.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 31,
        nombre: "El Diablo (Derecho)",
        imagen: "assets/cards/15-TheDevil.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 32,
        nombre: "El Diablo (Invertido)",
        imagen: "assets/cards/15-TheDevil.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 33,
        nombre: "La Torre (Derecho)",
        imagen: "assets/cards/16-TheTower.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 34,
        nombre: "La Torre (Invertida)",
        imagen: "assets/cards/16-TheTower.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 35,
        nombre: "La Estrella (Derecho)",
        imagen: "assets/cards/17-TheStar.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 36,
        nombre: "La Estrella (Invertida)",
        imagen: "assets/cards/17-TheStar.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 37,
        nombre: "La Luna (Derecho)",
        imagen: "assets/cards/18-TheMoon.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 38,
        nombre: "La Luna (Invertida)",
        imagen: "assets/cards/18-TheMoon.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 39,
        nombre: "El Sol (Derecho)",
        imagen: "assets/cards/19-TheSun.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 40,
        nombre: "El Sol (Invertido)",
        imagen: "assets/cards/19-TheSun.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 41,
        nombre: "El Juicio (Derecho)",
        imagen: "assets/cards/20-Judgement.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 42,
        nombre: "El Juicio (Invertido)",
        imagen: "assets/cards/20-Judgement.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 43,
        nombre: "El Mundo (Derecho)",
        imagen: "assets/cards/21-TheWorld.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 44,
        nombre: "El Mundo (Invertido)",
        imagen: "assets/cards/21-TheWorld.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 45,
        nombre: "As de Copas (Derecho)",
        imagen: "assets/cards/Cups01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 46,
        nombre: "As de Copas (Invertido)",
        imagen: "assets/cards/Cups01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 47,
        nombre: "Dos de Copas (Derecho)",
        imagen: "assets/cards/Cups02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 48,
        nombre: "Dos de Copas (Invertido)",
        imagen: "assets/cards/Cups02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 49,
        nombre: "Tres de Copas (Derecho)",
        imagen: "assets/cards/Cups03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 50,
        nombre: "Tres de Copas (Invertido)",
        imagen: "assets/cards/Cups03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 51,
        nombre: "Cuatro de Copas (Derecho)",
        imagen: "assets/cards/Cups04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 52,
        nombre: "Cuatro de Copas (Invertido)",
        imagen: "assets/cards/Cups04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 53,
        nombre: "Cinco de Copas (Derecho)",
        imagen: "assets/cards/Cups05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 54,
        nombre: "Cinco de Copas (Invertido)",
        imagen: "assets/cards/Cups05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 55,
        nombre: "Seis de Copas (Derecho)",
        imagen: "assets/cards/Cups06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 56,
        nombre: "Seis de Copas (Invertido)",
        imagen: "assets/cards/Cups06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 57,
        nombre: "Siete de Copas (Derecho)",
        imagen: "assets/cards/Cups07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 58,
        nombre: "Siete de Copas (Invertido)",
        imagen: "assets/cards/Cups07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 59,
        nombre: "Ocho de Copas (Derecho)",
        imagen: "assets/cards/Cups08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 60,
        nombre: "Ocho de Copas (Invertido)",
        imagen: "assets/cards/Cups08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 61,
        nombre: "Nueve de Copas (Derecho)",
        imagen: "assets/cards/Cups09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 62,
        nombre: "Nueve de Copas (Invertido)",
        imagen: "assets/cards/Cups09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 63,
        nombre: "Diez de Copas (Derecho)",
        imagen: "assets/cards/Cups10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 64,
        nombre: "Diez de Copas (Invertido)",
        imagen: "assets/cards/Cups10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 65,
        nombre: "Paje de Copas (Derecho)",
        imagen: "assets/cards/Cups11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 66,
        nombre: "Paje de Copas (Invertido)",
        imagen: "assets/cards/Cups11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 67,
        nombre: "Caballero de Copas (Derecho)",
        imagen: "assets/cards/Cups12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 68,
        nombre: "Caballero de Copas (Invertido)",
        imagen: "assets/cards/Cups12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 69,
        nombre: "Reina de Copas (Derecho)",
        imagen: "assets/cards/Cups13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 70,
        nombre: "Reina de Copas (Invertido)",
        imagen: "assets/cards/Cups13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 71,
        nombre: "Rey de Copas (Derecho)",
        imagen: "assets/cards/Cups14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 72,
        nombre: "Rey de Copas (Invertido)",
        imagen: "assets/cards/Cups14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 73,
        nombre: "As de Oro (Derecho)",
        imagen: "assets/cards/Pentacles01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 74,
        nombre: "As de Oro (Invertido)",
        imagen: "assets/cards/Pentacles01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 75,
        nombre: "Dos de Oro (Derecho)",
        imagen: "assets/cards/Pentacles02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 76,
        nombre: "Dos de Oro (Invertido)",
        imagen: "assets/cards/Pentacles02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 77,
        nombre: "Tres de Oro (Derecho)",
        imagen: "assets/cards/Pentacles03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 78,
        nombre: "Tres de Oro (Invertido)",
        imagen: "assets/cards/Pentacles03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 79,
        nombre: "Cuatro de Oro (Derecho)",
        imagen: "assets/cards/Pentacles04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 80,
        nombre: "Cuatro de Oro (Invertido)",
        imagen: "assets/cards/Pentacles04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 81,
        nombre: "Cinco de Oro (Derecho)",
        imagen: "assets/cards/Pentacles05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 82,
        nombre: "Cinco de Oro (Invertido)",
        imagen: "assets/cards/Pentacles05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 83,
        nombre: "Seis de Oro (Derecho)",
        imagen: "assets/cards/Pentacles06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 84,
        nombre: "Seis de Oro (Invertido)",
        imagen: "assets/cards/Pentacles06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 85,
        nombre: "Siete de Oro (Derecho)",
        imagen: "assets/cards/Pentacles07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 86,
        nombre: "Siete de Oro (Invertido)",
        imagen: "assets/cards/Pentacles07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 87,
        nombre: "Ocho de Oro (Derecho)",
        imagen: "assets/cards/Pentacles08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 88,
        nombre: "Ocho de Oro (Invertido)",
        imagen: "assets/cards/Pentacles08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 89,
        nombre: "Nueve de Oro (Derecho)",
        imagen: "assets/cards/Pentacles09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 90,
        nombre: "Nueve de Oro (Invertido)",
        imagen: "assets/cards/Pentacles09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 91,
        nombre: "Diez de Oro (Derecho)",
        imagen: "assets/cards/Pentacles10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 92,
        nombre: "Diez de Oro (Invertido)",
        imagen: "assets/cards/Pentacles10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 93,
        nombre: "Paje de Oro (Derecho)",
        imagen: "assets/cards/Pentacles11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 94,
        nombre: "Paje de Oro (Invertido)",
        imagen: "assets/cards/Pentacles11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 95,
        nombre: "Caballero de Oro (Derecho)",
        imagen: "assets/cards/Pentacles12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 96,
        nombre: "Caballero de Oro (Invertido)",
        imagen: "assets/cards/Pentacles12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 97,
        nombre: "Reina de Oro (Derecho)",
        imagen: "assets/cards/Pentacles13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 98,
        nombre: "Reina de Oro (Invertido)",
        imagen: "assets/cards/Pentacles13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 99,
        nombre: "Rey de Oro (Derecho)",
        imagen: "assets/cards/Pentacles14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 100,
        nombre: "Rey de Oro (Invertido)",
        imagen: "assets/cards/Pentacles14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 101,
        nombre: "As de Espadas (Derecho)",
        imagen: "assets/cards/Swords01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 102,
        nombre: "As de Espadas (Invertido)",
        imagen: "assets/cards/Swords01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 103,
        nombre: "Dos de Espadas (Derecho)",
        imagen: "assets/cards/Swords02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 104,
        nombre: "Dos de Espadas (Invertido)",
        imagen: "assets/cards/Swords02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 105,
        nombre: "Tres de Espadas (Derecho)",
        imagen: "assets/cards/Swords03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 106,
        nombre: "Tres de Espadas (Invertido)",
        imagen: "assets/cards/Swords03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 107,
        nombre: "Cuatro de Espadas (Derecho)",
        imagen: "assets/cards/Swords04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 108,
        nombre: "Cuatro de Espadas (Invertido)",
        imagen: "assets/cards/Swords04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 109,
        nombre: "Cinco de Espadas (Derecho)",
        imagen: "assets/cards/Swords05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 110,
        nombre: "Cinco de Espadas (Invertido)",
        imagen: "assets/cards/Swords05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 111,
        nombre: "Seis de Espadas (Derecho)",
        imagen: "assets/cards/Swords06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 112,
        nombre: "Seis de Espadas (Invertido)",
        imagen: "assets/cards/Swords06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 113,
        nombre: "Siete de Espadas (Derecho)",
        imagen: "assets/cards/Swords07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 114,
        nombre: "Siete de Espadas (Invertido)",
        imagen: "assets/cards/Swords07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 115,
        nombre: "Ocho de Espadas (Derecho)",
        imagen: "assets/cards/Swords08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 116,
        nombre: "Ocho de Espadas (Invertido)",
        imagen: "assets/cards/Swords08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 117,
        nombre: "Nueve de Espadas (Derecho)",
        imagen: "assets/cards/Swords09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 118,
        nombre: "Nueve de Espadas (Invertido)",
        imagen: "assets/cards/Swords09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 119,
        nombre: "Diez de Espadas (Derecho)",
        imagen: "assets/cards/Swords10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 120,
        nombre: "Diez de Espadas (Invertido)",
        imagen: "assets/cards/Swords10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 121,
        nombre: "Paje de Espadas (Derecho)",
        imagen: "assets/cards/Swords11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 122,
        nombre: "Paje de Espadas (Invertido)",
        imagen: "assets/cards/Swords11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 123,
        nombre: "Caballero de Espadas (Derecho)",
        imagen: "assets/cards/Swords12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 124,
        nombre: "Caballero de Espadas (Invertido)",
        imagen: "assets/cards/Swords12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 125,
        nombre: "Reina de Espadas (Derecho)",
        imagen: "assets/cards/Swords13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 126,
        nombre: "Reina de Espadas (Invertido)",
        imagen: "assets/cards/Swords13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 127,
        nombre: "Rey de Espadas (Derecho)",
        imagen: "assets/cards/Swords14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 128,
        nombre: "Rey de Espadas (Invertido)",
        imagen: "assets/cards/Swords14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 129,
        nombre: "As de Bastos (Derecho)",
        imagen: "assets/cards/Wands01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 130,
        nombre: "As de Bastos (Invertido)",
        imagen: "assets/cards/Wands01.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 131,
        nombre: "Dos de Bastos (Derecho)",
        imagen: "assets/cards/Wands02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 132,
        nombre: "Dos de Bastos (Invertido)",
        imagen: "assets/cards/Wands02.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 133,
        nombre: "Tres de Bastos (Derecho)",
        imagen: "assets/cards/Wands03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 134,
        nombre: "Tres de Bastos (Invertido)",
        imagen: "assets/cards/Wands03.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 135,
        nombre: "Cuatro de Bastos (Derecho)",
        imagen: "assets/cards/Wands04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 136,
        nombre: "Cuatro de Bastos (Invertido)",
        imagen: "assets/cards/Wands04.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 137,
        nombre: "Cinco de Bastos (Derecho)",
        imagen: "assets/cards/Wands05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 138,
        nombre: "Cinco de Bastos (Invertido)",
        imagen: "assets/cards/Wands05.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 139,
        nombre: "Seis de Bastos (Derecho)",
        imagen: "assets/cards/Wands06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 140,
        nombre: "Seis de Bastos (Invertido)",
        imagen: "assets/cards/Wands06.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 141,
        nombre: "Siete de Bastos (Derecho)",
        imagen: "assets/cards/Wands07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 142,
        nombre: "Siete de Bastos (Invertido)",
        imagen: "assets/cards/Wands07.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 143,
        nombre: "Ocho de Bastos (Derecho)",
        imagen: "assets/cards/Wands08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 144,
        nombre: "Ocho de Bastos (Invertido)",
        imagen: "assets/cards/Wands08.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 145,
        nombre: "Nueve de Bastos (Derecho)",
        imagen: "assets/cards/Wands09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 146,
        nombre: "Nueve de Bastos (Invertido)",
        imagen: "assets/cards/Wands09.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 147,
        nombre: "Diez de Bastos (Derecho)",
        imagen: "assets/cards/Wands10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 148,
        nombre: "Diez de Bastos (Invertido)",
        imagen: "assets/cards/Wands10.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 149,
        nombre: "Paje de Bastos (Derecho)",
        imagen: "assets/cards/Wands11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 150,
        nombre: "Paje de Bastos (Invertido)",
        imagen: "assets/cards/Wands11.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 151,
        nombre: "Caballero de Bastos (Derecho)",
        imagen: "assets/cards/Wands12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 152,
        nombre: "Caballero de Bastos (Invertido)",
        imagen: "assets/cards/Wands12.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 153,
        nombre: "Reina de Bastos (Derecho)",
        imagen: "assets/cards/Wands13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 154,
        nombre: "Reina de Bastos (Invertido)",
        imagen: "assets/cards/Wands13.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 155,
        nombre: "Rey de Bastos (Derecho)",
        imagen: "assets/cards/Wands14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 156,
        nombre: "Rey de Bastos (Invertido)",
        imagen: "assets/cards/Wands14.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    }
];