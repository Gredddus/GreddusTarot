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
        nombre: "El Hierofante o Papa (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 6,
        nombre: "El Hierofante o Papa (Invertido)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 7,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 8,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 9,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 10,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 11,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 12,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 13,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 14,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 15,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 16,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 17,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 18,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 19,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 20,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 21,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 22,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 23,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 24,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 25,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 26,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 27,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 28,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 29,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 30,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 31,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 32,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 33,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 34,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 35,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 36,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 37,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 38,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 39,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 40,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 41,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 42,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 43,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 44,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 45,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 46,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 47,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 48,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 49,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 50,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 51,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 52,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 53,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 54,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 55,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 56,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 57,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 58,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 59,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 60,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 61,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 62,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 63,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 64,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 65,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 66,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 67,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 68,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 69,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 70,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 71,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 72,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 73,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 74,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 75,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 76,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 77,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 78,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 79,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 80,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 81,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 82,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 83,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 84,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 85,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 86,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 87,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 88,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 89,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 90,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 91,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 92,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 93,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 94,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 95,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 96,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 97,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 98,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 99,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 100,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 101,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 102,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 103,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 104,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 105,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 106,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 107,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 108,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 109,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 110,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 111,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 112,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 113,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 114,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 115,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 116,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 117,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 118,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 119,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 120,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 121,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 122,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 123,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 124,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 125,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 126,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 127,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 128,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 129,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 130,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 131,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 132,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 133,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 134,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 135,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 136,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 137,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 138,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 139,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 140,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 141,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 142,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 143,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 144,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 145,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 146,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 147,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 148,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 149,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 150,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 151,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 152,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 153,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 154,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 155,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    },
    {
        id: 156,
        nombre: "El Mago (Derecho)",
        imagen: "ruta/o/url/de/la/imagen.jpg",
        descripcion: "Simboliza el **poder personal**, la **manifestación** y la **acción**. Tienes todas las herramientas necesarias a tu disposición para materializar tus metas."
    }
];