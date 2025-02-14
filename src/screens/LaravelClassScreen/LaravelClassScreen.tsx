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
              tag="Epic Laravel"
              title="Kelas Jago Laravel"
              subtitle="Kuasai laravel dengan mudah"
              imageSource="/assets/images/LaravelHero.png"
            />
            <Container>
              <Features
                tag="Benefit"
                title="Kenapa Harus Ikut Kelas Laravel ?"
                subtitle="Lorem ipsum dolor sit amet"
                items={[
                  {
                    title: "Materi Lengkap",
                    subtitle:
                      "Materi lengkap dari basic hingga kamu jadi jago laravel",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Materi Lengkap 2",
                    subtitle:
                      "Materi lengkap dari basic hingga kamu jadi jago laravel",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Materi Lengkap 3",
                    subtitle:
                      "Materi lengkap dari basic hingga kamu jadi jago laravel",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Materi Lengkap 4",
                    subtitle:
                      "Materi lengkap dari basic hingga kamu jadi jago laravel",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Materi Lengkap 5",
                    subtitle:
                      "Materi lengkap dari basic hingga kamu jadi jago laravel",
                    imageSource: "/assets/images/laravel.png",
                  },
                  {
                    title: "Materi Lengkap 6",
                    subtitle:
                      "Materi lengkap dari basic hingga kamu jadi jago laravel",
                    imageSource: "/assets/images/laravel.png",
                  },
                ]}
              />
            </Container>
            <Container>
              <Curriculum
                tag="Materi"
                title="Materi Pembelajaran"
                subtitle="Materi lengkap dari basic hingga kamu jadi jago laravel"
                topics={[
                  {
                    title: "Pengenalan Laravel",
                    description: "Deskripsi topik 1",
                    imageSource: "/assets/images/laravel.png",
                    subtopics: [
                      "Apa itu Laravel?",
                      "Keunggulan Laravel dibanding framework lain",
                      "Instalasi Laravel menggunakan Composer",
                      "Struktur folder dalam Laravel",
                    ],
                  },
                  {
                    title: "Routing (Dasar Navigasi Aplikasi)",
                    description: "Deskripsi topik 2",
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
                    description: "Deskripsi topik 3",
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
                    description: "Deskripsi topik 4",
                    imageSource: "/assets/images/laravel.png",
                    subtopics: [
                      "Membuat controller dengan php artisan make:controller",
                      "Menghubungkan controller dengan route",
                      "Menggunakan Request untuk menangani data dari form",
                      "Validasi request dasar",
                    ],
                  },
                  {
                    title: "Model dan Database (Eloquent ORM)",
                    description: "Deskripsi topik 5",
                    imageSource: "/assets/images/laravel.png",
                    subtopics: [
                      "Pengenalan Eloquent ORM",
                      "Migrasi database (php artisan migrate)",
                      "Seeding dan factory untuk dummy data",
                      "Relasi antar tabel (One to One, One to Many, Many to Many)",
                    ],
                  },
                  {
                    title: "CRUD (Create, Read, Update, Delete)",
                    description: "Deskripsi topik 6",
                    imageSource: "/assets/images/laravel.png",
                    subtopics: [
                      "Membuat fitur CRUD dengan Laravel",
                      "Form handling untuk create & update",
                      "Menampilkan data dari database",
                      "Menghapus data dari database",
                      "Flash messages untuk notifikasi sukses/gagal",
                    ],
                  },
                  {
                    title: "Authentication & Authorization (Dasar)",
                    description: "Deskripsi topik 7",
                    imageSource: "/assets/images/laravel.png",
                    subtopics: [
                      "Pengenalan sistem autentikasi Laravel (Laravel Breeze/Jetstream)",
                      "Middleware untuk proteksi halaman",
                      "Role-based access control (dasar)",
                    ],
                  },
                  {
                    title: "API dengan Laravel (Opsional untuk Pemula)",
                    description: "Deskripsi topik 8",
                    imageSource: "/assets/images/laravel.png",
                    subtopics: [
                      "Membuat REST API dengan Laravel",
                      "Menggunakan Laravel Resource untuk format JSON",
                      "API Authentication dengan Laravel Sanctum",
                    ],
                  },
                ]}
              />
            </Container>
            <Container>
              <HeroWithAccent
                tag="Mentor"
                title="Halo, Saya Maman"
                subtitle="Saya Wibu"
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
