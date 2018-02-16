document.addEventListener("DOMContentLoaded", function(event){
    // Ball
    class Ball {
        constructor(ball, top, left, color){
            this.top = top;
            this.left = left;
            this.ball = document.getElementById(ball);

            let move_timer = null;
            let move_speed = 10;

            // default style
            this.ball.style.top = `${top}px`;
            this.ball.style.left = `${left}px`;
            this.ball.style.background = color;

            // use in AI
            this.ball_x = null;
            this.ball_y = null;

            // start
            this.move();
        }

        move(){
            this.move_timer = setInterval( () => {
                this.top++;
                this.ball.style.top = this.top+'px';


                this.ball_x = this.left + (+window.getComputedStyle(this.ball).getPropertyValue('width').slice(0, -2) / 2);
                this.ball_y = this.top + (+window.getComputedStyle(this.ball).getPropertyValue('height').slice(0, -2));

                this.over_screen();
            }, this.move_speed)
        }

        stop() {
            clearInterval(this.move_timer);
        }

        over_screen() {
            if( this.ball_y > window.innerHeight ) this.stop();
        }

    }

    let ball = new Ball('my_ball_0', 12, 30, 'red');
    let ball_1 = new Ball('my_ball_1', 30, 100, 'blue');

    // Ball end

    // Platform
    class Platform {
        constructor(){
            this.top_platform
        }
    }

// document.getElementById('platform').onclick = () => ball.stop();



});
