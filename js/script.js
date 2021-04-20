 var app = new Vue (
    {
        el: '#root',
        data: {
            //array del percorso delle immagini
            imagesPath: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ],

            currentImage: 0,

        },
        methods: {
            //funzione che al click sulla freccia destra scorre indice successivo di currentImage
            nextImage(){
                
                this.currentImage = this.currentImage + 1 ;

                if(this.currentImage > imagesPath.length - 1){
                    this.currentImage = 0;
                }else{
                    this.currentImage = this.currentImage + 1 ;
                }

            }
            /*
            prevImage(){

                this.currentImage = this.currentImage - 1;

                if(this.currentImage < 0){
                    this.currentImage = imagesPath.length -1;
                }else{
                    this.currentImage = this.currentImage - 1;
                }
            }*/

        }
    }
 );