<template>
    <div>
        <TheHeader />

        <main :class="$style.main">
            <nuxt />
        </main>

        <TheFooter />
    </div>
</template>

<script>
    import TheHeader from '~/components/layout/TheHeader';
    import TheFooter from '~/components/layout/TheFooter';

    export default {
        components: {
            TheHeader,
            TheFooter,
        },
    };
</script>

<style lang="scss" module>
    .main {
        min-height: calc(100vh - #{$footer-h});
    }
</style>
