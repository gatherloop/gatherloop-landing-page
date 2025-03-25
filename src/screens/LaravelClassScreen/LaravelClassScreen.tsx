import React from "react";
import { Instagram, Menu } from "@tamagui/lucide-icons";
import { ScrollView, YStack } from "tamagui";
import {
  Layout,
  Navbar,
  Footer,
  HeroWithImageBackground,
  Container,
  Curriculum,
  HeroWithAccent,
  TestimonialCentered,
  PageHeader,
  Testimonial,
  Pricing,
  Features,
} from "tamakit";

const links = [
  { title: "Suasana", href: "#suasana" },
  { title: "Menu", href: "#menu" },
  { title: "Promo", href: "#promo" },
  { title: "Fasilitas", href: "#fasilitas" },
  { title: "Kegiatan", href: "#kegiatan" },
  { title: "Komunitas", href: "#komunitas" },
  { title: "Lokasi", href: "#lokasi" },
];

export function LaravelClassScreen() {
  return (
    <Layout
      navbar={
        <Navbar
          mobileMenuIcon={Menu}
          links={links}
          logoImageSource="/assets/images/GatherloopLogoDarkTheme.png"
        />
      }
      main={
        <ScrollView>
          <YStack gap="$15" marginBottom="$10">
            <HeroWithImageBackground
              tag="Laravel Class"
              title="Bikin Website Booking Event dengan Laravel 12"
              subtitle="Belajar Laravel dari Nol sampai Bisa Bikin Website Booking Event menggunakan Laravel dan Tailwind CSS."
              imageSource="/assets/images/LaravelHero.png"
            />
            <Container>
              <Features
                tag="Benefit"
                title="Kenapa Harus Ikut Kelas Laravel?"
                subtitle="Dapatkan beragam manfaat untuk meningkatkan skill web development Anda dengan mengikuti kelas Laravel ini"
                items={[
                  {
                    title: "Project Berbasis Industri",
                    subtitle:
                      "Belajar membangun aplikasi booking event yang relevan dengan kebutuhan bisnis saat ini",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Pemahaman Laravel Menyeluruh",
                    subtitle:
                      "Kuasai framework Laravel dari konsep dasar hingga fitur-fitur lanjutan",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Integrasi dengan Tailwind CSS",
                    subtitle:
                      "Pelajari cara membuat UI responsif dan menarik menggunakan Tailwind CSS",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Sistem Authentication & Authorization ( Fortify )",
                    subtitle:
                      "Implementasi sistem Autentikasi menggunakan Laravel Fortify",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Dukungan Pasca Kelas",
                    subtitle:
                      "Akses grup komunitas dan konsultasi lanjutan setelah kelas selesai",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Project Portfolio",
                    subtitle:
                      "Dapatkan project portfolio untuk menunjang karir sebagai web developer",
                    imageSource: "/assets/images/laravel.png",
                  },
                ]}
              />
            </Container>
            <Container>
                <Curriculum
                    tag="Materi"
                    title="Materi Pembelajaran"
                    subtitle="Materi pembelajaran yang akan Anda dapatkan selama mengikuti kelas Laravel ini"
                    topics={[
                        {
                            title: "Pengenalan Laravel",
                            description: "Pengenalan Laravel 12 dan fitur-fiturnya",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Apa itu Laravel?",
                                "Keunggulan Laravel dibanding framework lain",
                                "Instalasi Laravel menggunakan Composer",
                                "Struktur folder dalam Laravel",
                            ],
                        },
                        {
                            title: "Routing & Middleware",
                            description: "Pengenalan routing di Laravel dan cara penggunaannya",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Pengenalan routing di Laravel",
                                "Membuat route dasar web.php",
                                "Route dengan parameter",
                                "Named routes",
                                "Middleware dasar",
                            ],
                        },
                        {
                            title: "Layouting dengan Blade Templating",
                            description: "Pengenalan Blade Templating dan cara penggunaannya",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Pengenalan Blade Templating",
                                "Template inheritance (@extends, @section, @yield)",
                                "Blade directives (@if, @foreach, @include, dll)",
                                "Component dan slot",
                            ],
                        },
                        {
                            title: "Controller dan Request Handling",
                            description: "Pengenalan Controller di Laravel & Request Handling",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Membuat controller dengan php artisan make:controller",
                                "Menghubungkan controller dengan route",
                                "Menggunakan Request untuk menangani data dari form",
                                "Validasi request dasar",
                            ],
                        },
                        {
                            title: "Model dan Database ( Eloquent ORM )",
                            description: "Pengenalan Eloquent ORM dan cara penggunaannya",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Pengenalan Eloquent ORM",
                                "Migrasi database ( php artisan migrate )",
                                "Seeding dan factory untuk dummy data",
                                "Relasi antar tabel (One to One, One to Many, Many to Many)",
                            ],
                        },
                        {
                            title: "CRUD ( Create, Read, Update, Delete )",
                            description: "Pengenalan CRUD dan cara membuatnya di Laravel",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Membuat fitur CRUD dengan Laravel",
                                "Form handling untuk create & update",
                                "Menampilkan data dari database",
                                "Menghapus data dari database",
                                "Flash messages untuk notifikasi sukses / gagal",
                            ],
                        },
                        {
                            title: "Authentication & Authorization ( Dasar )",
                            description: "Pengenalan sistem autentikasi Laravel",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Pengenalan sistem autentikasi Laravel ( Laravel Breeze / Jetstream) ",
                                "Middleware untuk proteksi halaman",
                                "Role-based access control (dasar)",
                            ],
                        },
                        {
                            title: "Website Booking Event: Setup Project & Authentication ( Fortify )",
                            description: "Setup project dan implementasi autentikasi",
                            imageSource: "/assets/images/laravel.png",
                            subtopics: [
                                "Instalasi Laravel dan konfigurasi Laravel Fortify",
                                "Setup Laravel Fortify untuk autentikasi ( Login, Register, Logout, Reset Password )",
                                "Layouting form login dan register menggunakan Blade dan Modernize Bootstrap 5",
                                "Implementasi middleware untuk proteksi dashboard"
                            ]
                        },
                        {
                            title: "Slicing & Layouting Website",
                            description: "Slicing desain dari UI/UX ke dalam HTML & Tailwind CSS",
                            imageSource: "/assets/images/layout.png",
                            subtopics: [
                                "Strukturisasi file dengan Blade templating untuk layout yang rapi",
                                "Setup layouting website booking tiket menggunakan Blade",
                                "Setup layouting dashboard admin Modernize Bootstrap 5",
                                "Implementasi sistem komponen Blade agar modular"
                            ]
                        },
                        {
                            title: "Setup Database & Factory",
                            description: "Mendesain skema database untuk event booking",
                            imageSource: "/assets/images/database.png",
                            subtopics: [
                                "Menggunakan database migrations untuk membuat tabel",
                                "Mengisi database dengan Laravel Seeder dan Factory untuk user dan data awal"
                            ]
                        },
                        {
                            title: "Implementasi Fitur Event",
                            description: "CRUD untuk events serta sistem kategori dan status",
                            imageSource: "/assets/images/event.png",
                            subtopics: [
                                "CRUD untuk events ( admin dapat menambah, mengedit, menghapus event )",
                                "Sistem kategori dan status event",
                                "Menampilkan daftar event dengan filter pencarian"
                            ]
                        },
                        {
                            title: "Implementasi Sistem Pemesanan Event",
                            description: "Sistem pemesanan event dengan integrasi pembayaran",
                            imageSource: "/assets/images/order.png",
                            subtopics: [
                                "User dapat memilih event untuk dibeli",
                                "Sistem pemesanan event dengan jumlah tiket yang bisa dibeli",
                                "Menghubungkan event dengan stok yang tersedia",
                                "Implementasi metode pembayaran ( sementara bisa manual dengan upload bukti transfer )",
                                "Status pembayaran dan verifikasi order"
                            ]
                        },
                        {
                            title: "Dashboard Admin & User",
                            description: "Dashboard untuk mengelola event dan melihat statistik",
                            imageSource: "/assets/images/dashboard.png",
                            subtopics: [
                                "Dashboard admin atau operator untuk mengelola event dan melihat statistik penjualan",
                                "Dashboard user untuk melihat histori pembelian dan status order",
                                "Implementasi chart atau grafik untuk analisis data event"
                            ]
                        },
                        {
                            title: "Notifikasi & Integrasi Email / Whatsapp",
                            description: "Sistem notifikasi untuk user dan admin",
                            imageSource: "/assets/images/notification.png",
                            subtopics: [
                                "Notifikasi ke user setelah sukses booking event",
                                "Pengiriman email atau pesan konfirmasi ke user",
                                "Notifikasi admin untuk pesanan baru"
                            ]
                        },
                    ]}
                />
            </Container>
            <Container>
              <HeroWithAccent
                tag="Mentor"
                title="Halo, Saya Maman"
                subtitle="Saya adalah seorang Fullstack Developer yang memiliki pengalaman dalam membangun aplikasi web menggunakan Laravel, serta berbagai teknologi modern lainnya. Saya akan menjadi mentor Anda selama mengikuti kelas pembuatan Website Booking Event menggunakan Laravel, dan siap membantu Anda dalam menyelesaikan project hingga Anda benar-benar bisa membuat aplikasi web dengan Laravel, jadi tunggu apalagi? Ayo bergabung sekarang!"
                imageSource="https://media.licdn.com/dms/image/v2/D5603AQFDUGGb6YcyJA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707102360564?e=1744848000&v=beta&t=-W148IF2DcqBHxAAMYGn8ay9skkl3fFZUnTefBZ-kCY"
                primaryButton={{
                  label: "LinkedIn",
                  onPress: () =>
                    window.open("https://www.linkedin.com/in/maman27/"),
                }}
              />
            </Container>
            <Container>
              <YStack gap="$8">
                <PageHeader
                  tag="Testimonial"
                  title="Dengarkan Apa Pendapat Mereka"
                  subtitle="Lorem ipsum dolor sit amet"
                  align="center"
                />
                <Testimonial
                  items={[
                    {
                      name: "M. Nindra Zaka",
                      role: "Software Engineer",
                      content: "Gaga maman tehhhh",
                      logoImageSource:
                        "https://gatherloop.co/assets/images/GatherloopLogoDarkTheme.png",
                      profileImageSource:
                        "https://avatars.githubusercontent.com/u/11532800?v=4",
                    },
                    {
                      name: "M. Nindra Zaka",
                      role: "Software Engineer",
                      content: "Gaga maman tehhhh",
                      logoImageSource:
                        "https://gatherloop.co/assets/images/GatherloopLogoDarkTheme.png",
                      profileImageSource:
                        "https://avatars.githubusercontent.com/u/11532800?v=4",
                    },
                    {
                      name: "M. Nindra Zaka",
                      role: "Software Engineer",
                      content: "Gaga maman tehhhh",
                      logoImageSource:
                        "https://gatherloop.co/assets/images/GatherloopLogoDarkTheme.png",
                      profileImageSource:
                        "https://avatars.githubusercontent.com/u/11532800?v=4",
                    },
                    {
                      name: "M. Nindra Zaka",
                      role: "Software Engineer",
                      content: "Gaga maman tehhhh",
                      logoImageSource:
                        "https://gatherloop.co/assets/images/GatherloopLogoDarkTheme.png",
                      profileImageSource:
                        "https://avatars.githubusercontent.com/u/11532800?v=4",
                    },
                  ]}
                />
              </YStack>
            </Container>
            <Container>
              <Pricing
                title="Get Lifetime Access"
                subtitle="Get access to 200+ components and free updates. Customize it to your needs, and make it yours today!"
                tag="Pricing"
                items={[
                  {
                    title: "Lite Package",
                    features: [
                      "Exclusive Single User License",
                      "Access to All Pro Components",
                      "Limitless Project Implementation",
                      "Regular Free Updates",
                      "24/7 Dedicated Customer Support",
                    ],
                    buyButton: {
                      label: "Buy Now",
                      onPress: () => {},
                    },
                    price: 99,
                    additionalPriceInfo: "plus local taxes",
                  },
                  {
                    title: "Pro Package",
                    features: [
                      "Exclusive Single User License",
                      "Access to All Pro Components",
                      "Limitless Project Implementation",
                      "Regular Free Updates",
                      "24/7 Dedicated Customer Support",
                    ],
                    buyButton: {
                      label: "Buy Now",
                      onPress: () => {},
                    },
                    price: 299,
                    additionalPriceInfo: "plus local taxes",
                  },
                  {
                    title: "Regular Package",
                    features: [
                      "Exclusive Single User License",
                      "Access to All Pro Components",
                      "Limitless Project Implementation",
                      "Regular Free Updates",
                      "24/7 Dedicated Customer Support",
                    ],
                    buyButton: {
                      label: "Buy Now",
                      onPress: () => {},
                    },
                    price: 99,
                    additionalPriceInfo: "plus local taxes",
                  },
                ]}
              />
            </Container>
          </YStack>
        </ScrollView>
      }
      footer={
        <Footer
          logoImageSource="/assets/images/GatherloopLogoDarkTheme.png"
          tagline="Nongkrong, Belajar, dan Berkembang Bareng"
          links={[{ title: "Menu", subLinks: links }]}
          socialMediaLinks={[
            {
              icon: <Instagram />,
              href: "https://www.instagram.com/gatherloop/",
            },
          ]}
          copyrightText="copyright &copy; Gatherloop 2025"
        />
      }
    />
  );
}
