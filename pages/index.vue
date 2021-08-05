<template>
    <div :class="$style.home"
         class="page">
        <div class="container">
            <Game />
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

<style lang="scss" module>
    .home {
        //
    }
</style>
