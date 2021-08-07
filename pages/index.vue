<template>
    <div class="home">
        <Game />
        <div class="korone">
            <img class="korone-shadow"
                 src="img/korone.png" 
                 alt="">
            <img class="korone-img" 
                 src="img/korone.png" 
                 alt="">
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
        background-image: url('/img/back.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        background-size: cover;
        padding-top: 64px;

        .korone {
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 360px;
            z-index: 1;

            &-img {
                width: 100%;
                transform: scale(-1, 1);
                filter: drop-shadow(12px 12px 0 #38abe0);
            }

            &-shadow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                transform: scale(-1, 1);
                filter: drop-shadow(-12px -12px 0 white);
            }
        }
    }

</style>
