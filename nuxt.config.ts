export default defineNuxtConfig({
    compatibilityDate: '2024-08-11',
    devtools: {enabled: true},

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    app: {
        head: {
            htmlAttrs: {
                lang: 'id'
            },
            title: 'Laju Kreatif - Jasa Pembuatan Website Profesional untuk UMKM',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Jasa pembuatan website profesional untuk membantu meningkatkan citra dan daya saing perusahaan Anda di dunia digital. Paket lengkap, harga terjangkau.'
                },
                {
                    name: 'keywords',
                    content: 'jasa website, pembuatan website, website umkm, landing page, website murah, website profesional'
                }
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}
            ]
        }
    }
})