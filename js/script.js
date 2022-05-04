

const app = new Vue({

    el: "#app",

    data: {

        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        counterSlide: 0,

        autoScroll: null
    },

 
    

    methods: {
        nextSlide(){
            this.counterSlide ++;
            if (this.counterSlide > this.slides.length - 1){
                this.counterSlide = 0;
            }

            console.log(counterSlide);
        },
        prevSlide(){
            this.counterSlide --;
            if (this.counterSlide < 0){
                this.counterSlide = this.slides.length -1;
            }

            console.log(counterSlide);
        },
        changeImage(index){
            
            this.counterSlide = index;

        },
        mouseOver(){


            clearInterval(this.autoScroll);
            this.autoScroll = null;
            
        },
        mouseOut(){
            
            this.startAutoScroll();

        },
        startAutoScroll(){
            this.autoScroll = setInterval(() =>{
                this.nextSlide();
            },1000)
        }
    },


    mounted(){

        this.startAutoScroll();
    
    }

});