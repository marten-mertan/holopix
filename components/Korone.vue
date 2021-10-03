<template>
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
</template>

<script>
    export default {
        name: 'Korone',
        components: {
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
    .korone-decor {
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 360px;
        z-index: 1;
        cursor: pointer;

        @media screen and (max-width: 720px) {
            width: 180px;
            bottom: -5px;
            left: -5px;
            z-index: 9;
        }

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

            @media screen and (max-width: 720px) {
                width: 26.5px;
            }
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
</style>
