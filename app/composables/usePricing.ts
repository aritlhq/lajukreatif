import {ref} from 'vue'

export const usePricing = () => {
    // Mengambil konfigurasi secara dinamis dari app.config.ts
    const appConfig = useAppConfig()
    const whatsappNumber = appConfig.lajuKreatif.whatsappNumber;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.`;

    const pricingPlans = ref([
        {
            name: 'Landingpage Non Hosting',
            discount: 'Diskon 510.000',
            originalPrice: '1,2jt',
            price: '600rb',
            renewal: '*Rp 0 / Tahun',
            features: [
                'Garansi Selamanya', 'Pengerjaan 5 - 14 Hari', 'Tanpa Domain', 'Tanpa Email Bisnis', 'Tanpa Hosting',
                'Menggunakan Template Premium', 'Mobile Friendly', 'Dibantu Pembuatan 1 Halaman', 'Halaman Tambahan Rp 150.000 / Halaman',
                'Tidak Bisa Menambahkan Halaman Sendiri', 'Menggunakan Wordpress', 'Bonus Click to Whatsapp', 'Tanpa Akses Cpanel'
            ],
            note: 'Cocok sebagai halaman landing untuk promosi dengan budget terbatas.',
            ctaText: 'Pilih Paket Ini'
        },
        {
            name: 'WP Landing Page',
            discount: 'Diskon 510.000',
            originalPrice: '1,5jt',
            price: '990rb',
            renewal: '*Rp 450rb / Tahun',
            popular: true,
            features: [
                'Garansi Selamanya', 'Pengerjaan 5 - 14 Hari', 'Gratis Domain .com', 'Tanpa Email Bisnis', 'Shared Storage',
                'Menggunakan Template Premium', 'Mobile Friendly', 'Dibantu Pembuatan 1 Halaman', 'Halaman Tambahan Rp 150.000 / Halaman',
                'Tidak Bisa Menambahkan Halaman Sendiri', 'Menggunakan Wordpress', 'Bonus Click to Whatsapp', 'Tanpa Akses Cpanel'
            ],
            note: 'Cocok sebagai halaman landing untuk promosi dengan budget terbatas.',
            ctaText: 'Pilih Paket Populer'
        },
        {
            name: 'WP Landing Page cPanel',
            discount: 'Diskon Rp 400.000',
            originalPrice: '1,9jt',
            price: '1,5jt',
            renewal: '*Rp 800rb / Tahun',
            features: [
                'Garansi Selamanya', 'Pengerjaan 5 - 14 Hari', 'Gratis Domain .com', '5 Email Bisnis', 'SSD Diskspace 2GB',
                'Menggunakan Template Premium', 'Mobile Friendly', 'Dibantu Pembuatan 1 Halaman', 'Halaman Tambahan Rp 150.000 / Halaman',
                'Bisa Menambahkan Halaman Sendiri', 'Menggunakan Wordpress', 'Bonus Click to Whatsapp', 'Full Akses Cpanel'
            ],
            note: 'Cocok sebagai halaman landing untuk promosi dengan budget lebih leluasa.',
            ctaText: 'Pilih Paket Lengkap'
        }
    ]);

    return {
        pricingPlans,
        whatsappLink
    }
}