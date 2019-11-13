<template>
    <v-app>
        <app-header></app-header>
        <hr>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import Header from './Header'
    import Footer from './Footer'

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
        },
        data: () => ({

        })
    }
</script>
