<template>
    <header class="header">
        <div class="header-wrap container">
            <div class="header__title">
                HOLOPIX
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',
    };
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 15;
        width: 100%;
        background-color: rgba(white, .92);

        &-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            height: $header-h;

            @media screen and (max-width: 720px) {
                height: $header-h-m;
            }
        }

        &__title {
            font-size: 30px;
            font-weight: 300;
            letter-spacing: 3px;
            padding: 20px;
            color: #1fa3de;

            @media screen and (max-width: 720px) {
                font-size: 20px;
                padding: 6px 12px;
            }
        }
    }
</style>
