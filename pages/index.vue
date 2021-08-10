<template>
    <div class="home">
        <Game />
        <div class="korone-decor"
             :class="[speaking ? 'speaking' : null]"
             @click="speak">
            <img class="korone-decor-img" 
                 src="img/korone.png" 
                 alt="">
            <img class="korone-decor-mouth" 
                 src="img/korone-mouth.png" 
                 alt="">
            <div class="korone-decor-baloon">
                {{ speakingText }}
            </div>
        </div>
    </div>
</template>

<script>
    import Game from '@/components/Game';

    export default {
        name: 'HomePage',
        components: {
            Game
        },
        data() {
            return {
                speaking: false,
                speakingText: '',
                speakingPhrases: [
                    'Lets go!~~',
                    'Wow! Wow! Woow! WOOOOOW!',
                    'Woof~ Wooof~',
                    'Ganbatte!'
                ]
            };
        },
        methods: {
            speak() {
                if (!this.speaking) {
                    this.speaking = true;
                    this.speakingText = this.speakingPhrases[Math.floor(Math.random()*this.speakingPhrases.length)];
                    setTimeout(() => {
                        this.speaking = false;
                    }, 1000);
                }
            }
        }
    };
</script>

<style lang="scss">
    .home {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 32px);
        background-image: url('/holopix/img/back.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        background-size: cover;
        padding-top: 64px;

        .korone-decor {
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 360px;
            z-index: 1;
            cursor: pointer;

            &.speaking {
                animation: bounce .6s 1;
                transform-origin: bottom center;
                animation-timing-function: cubic-bezier(.28, .84, .42, 1);

                .korone-decor-mouth {
                    animation: speaking .6s 1 steps(5, start);
                }

                .korone-decor-baloon {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
            }

            &-img {
                width: 100%;
            }

            &-mouth {
                position: absolute;
                top: 58.3%;
                left: 47.55%;
                width: 53px;
                z-index: 1;
                opacity: 0;
            }

            &-baloon {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                right: -100px;
                width: 200px;
                min-height: 80px;
                padding: 20px;
                background: white;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
                border-radius: 20px;
                box-shadow: 0 0 6px rgba(0, 0, 0, .12), 0 1px 6px rgba(0, 0, 0, .24);
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                transition: all .3s ease;
            }
        }
    }

    @keyframes speaking {
        0% {
            opacity: 1;
        }

        20% {
            opacity: 0;
        }

        40% {
            opacity: 1;
        }

        60% {
            opacity: 0;
        }

        80% {
            opacity: 1;
        }
    }

    @keyframes bounce {
        0% {
            transform: scale(1, 1) translateY(0);
        }

        10% {
            transform: scale(1.1, .9) translateY(0);
        }

        30% {
            transform: scale(.9, 1.1);
        }

        50% {
            transform: scale(1.05, .95) translateY(0);
        }

        57% {
            transform: scale(1, 1);
        }

        64% {
            transform: scale(1, 1) translateY(0);
        }

        100% {
            transform: scale(1, 1) translateY(0);
        }
    }
</style>
