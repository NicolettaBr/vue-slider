 var app = new Vue (
    {
        el: '#root',
        data: {
            //array del percorso delle immagini
            imagesPath: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpg',
                'img/montagne.webp'
            ],

            currentImage: 0,

        },
        methods: {

        }
    }
 );