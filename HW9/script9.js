document.addEventListener("DOMContentLoaded", function(event){
//Ball
    class Ball {
        constructor(ball, top, left, color){
            this.top = top;
            this.left = left;
            this.ball = document.getElementById(ball);

            let move_timer = null;
            let move_speed = 10;
//Default style
            this.ball.style.top = `${top}px`;
            this.ball.style.left = `${left}px`;
            this.ball.style.background = color;
//Use in AI
            this.ball_x = null;
            this.ball_y = null;
//Start
            this.move();
        }
//Method move
        move(){
            this.move_timer = setInterval( () => {
                this.top++;
                this.ball.style.top = this.top+'px';

                this.ball_x = this.left + (+window.getComputedStyle(this.ball).getPropertyValue('width').slice(0, -2) / 2);
                this.ball_y = this.top + (+window.getComputedStyle(this.ball).getPropertyValue('height').slice(0, -2));

                this.over_screen();

            }, this.move_speed)
        }
//Method stop
        stop() {
            clearInterval(this.move_timer);
        }
//Method over_screen
        over_screen() {
            if( this.ball_y > window.innerHeight ) this.stop();
        }
    }
//Ball end
    let mercury = new Ball('mercury', -300, 20, 'red');
    let venus = new Ball('venus', -100, 300, 'blue');
    let earth = new Ball('earth', -400, 500, 'green');
    let mars = new Ball('mars', -600, 700, 'yellow');
    let jupiter = new Ball('jupiter', -350, 800, 'black');
    let saturn = new Ball('saturn', -800, 900, 'orange');
    let uranus = new Ball('uranus', -500, 1000, 'brown');
    let neptune = new Ball('neptune', -300, 1200, 'purple');

    //Platform
    class Platform {

        constructor(platform){
            this.platform = document.getElementById(platform);
            this.middle_pl = +window.getComputedStyle(this.platform).getPropertyValue('width').slice(0, -2) / 2;
            document.addEventListener('mousemove', function(e){
                this.move(e.clientX)
            });
            // this.platform_left = +window.getComputedStyle(platform).getPropertyValue('left').slice(0, -2);
        }
        move(pl_x) {
            this.platform.style.left = pl_x - this.middle_pl +'px';
        }



    }
    let platform = new Platform('platform');


// document.getElementById('platform').onclick = () => ball.stop();



});
