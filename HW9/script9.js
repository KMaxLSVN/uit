// document.addEventListener("DOMContentLoaded", function(event){
//Ball
    class Ball {
        constructor(ball, top, left, color, intel){
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

            this.isFallen = false;

//Start
            this.move(intel);
        }
//Method move
        move(intel){
            this.move_timer = setInterval( () => {
                this.top++;
                this.ball.style.top = this.top+'px';

                this.ball_x = this.left + (+window.getComputedStyle(this.ball).getPropertyValue('width').slice(0, -2) / 2);
                this.ball_y = this.top + (+window.getComputedStyle(this.ball).getPropertyValue('height').slice(0, -2));

                this.over_screen();

                intel.compare(this);
            }, this.move_speed)
        }
//Method stop
        stop(flag) {
            if (flag) {
                this.disappear();
            }
            clearInterval(this.move_timer);
            this.isFallen = true;
        }
//Method over_screen
        over_screen() {
            if( this.ball_y > window.innerHeight ) this.stop();
        }
//Method disappear
        disappear(){
            this.ball.style.display = 'none';
        }
    }
//Ball end

//Platform
    class Platform {
        constructor(platform){
            this.platform = document.getElementById(platform);
            this.middle_pl = +window.getComputedStyle(this.platform).getPropertyValue('width').slice(0, -2) / 2;
            this.platform_left = null;
            this.platform_right = null;
            this.platform_top = +window.innerHeight - (+getComputedStyle(this.platform).getPropertyValue('height').slice(0, -2));

            // Example avoid scope function
            // let that = this;
            // document.addEventListener('mousemove', function(e){
            //     that.move(e.clientX)
            // });

            document.addEventListener('mousemove', (e) => {
                this.move(e.clientX);
            });
        }
        move(pl_x) {
            this.platform_right = pl_x + this.middle_pl;
            this.platform_left = pl_x - this.middle_pl;
            this.platform.style.left = this.platform_left +'px';
        }
    }
// Artificial Intelligence
    class AI {
        constructor(platform, score){
            this.divScore = document.getElementById(score);
            this.plat = platform;
            this.scoreValue = 0;
        }
// Method Compare
        compare(planet){
            if ((planet.ball_x >= this.plat.platform_left && planet.ball_x <= this.plat.platform_right) && (planet.ball_y == this.plat.platform_top) && !planet.isFallen ){
                planet.stop(true);
                this.score();
            }
        }
// Method Score
        score(){
            this.scoreValue++;
            // console.log(this.scoreValue);
            localStorage.setItem('Score', this.scoreValue);
            this.divScore.innerHTML = this.scoreValue;
        }
    }

    let planets = [
        {
            id: 'mercury',
            y: -300,
            x: 20,
            color: 'red'
        },
        {
            id: 'venus',
            y: -100,
            x: 300,
            color: 'blue'
        },
        {
            id: 'earth',
            y: -400,
            x: 500,
            color: 'green'
        },
        {
            id: 'mars',
            y: -600,
            x: 700,
            color: 'yellow'
        },
        {
            id: 'jupiter',
            y: -350,
            x: 800,
            color: 'brown'
        },
        {
            id: 'saturn',
            y: -800,
            x: 900,
            color: 'orange'
        },
        {
            id: 'uranus',
            y: -500,
            x: 1000,
            color: 'yellow'
        },
        {
            id: 'neptune',
            y: -300,
            x: 1200,
            color: 'purple'
        }
    ];
    // new Ball('mercury', -300, 20, 'red', ai);
    // new Ball('venus', -100, 300, 'blue', ai);
    // new Ball('earth', -400, 500, 'green', ai);
    // new Ball('mars', -600, 700, 'yellow', ai);
    // new Ball('jupiter', -350, 800, 'black', ai);
    // new Ball('saturn', -800, 900, 'orange', ai);
    // new Ball('uranus', -500, 1000, 'brown', ai);
    // new Ball('neptune', -300, 1200, 'purple', ai);

// End addEventListener
// });

function start () {
    document.getElementById('push').style.display = 'none';

    let platform = new Platform('platform');
    let ai = new AI(platform,'score');

    planets.forEach((elem) => {
        new Ball(elem.id, elem.y, elem.x, elem.color, ai)
    });
}
