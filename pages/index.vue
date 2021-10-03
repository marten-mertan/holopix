<template>
    <div class="home">
        <Game />
        <Korone />
    </div>
</template>

<script>
    import Game from '@/components/Game';
    import Korone from '@/components/Korone';

    export default {
        name: 'HomePage',
        components: {
            Game,
            Korone
        },
        methods: {
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
        padding-top: $header-h;

        @media screen and (max-width: 720px) {
            padding-top: $header-h-m;
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
