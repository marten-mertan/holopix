<template>
    <footer class="footer">
        <div class="footer-wrap container">
            created by
            <a class="footer-link" 
               target="_blank"
               href="https://github.com/marten-mertan">Mertan</a>
        </div>
    </footer>
</template>

<script>
    export default {
        components: {

        },
    };
</script>

<style lang="scss">
    .footer {
        position: relative;
        z-index: 10;
        background: black;

        &-wrap {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: $footer-h;
            color: white;
            font-size: 12px;
            font-weight: 300;
            letter-spacing: 2px;
        }

        &-link {
            color: #1fa3de;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 2px;
            margin: 0 6px;
        }
    }
</style>
