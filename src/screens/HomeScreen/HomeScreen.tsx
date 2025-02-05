import React from "react";
import { Instagram, Menu } from "@tamagui/lucide-icons";
import { ScrollView, YStack } from "tamagui";
import {
  HeroWithImageBackground,
  HeroWithAccent,
  ImageGallery,
  Layout,
  Navbar,
  PageHeader,
  Footer,
  Container,
  Features,
} from "tamakit";
import { EventSection } from "./EventSection";
import { LocationSection } from "./LocationSection";

export type HomeScreenProps = {};

const links = [
  { title: "Suasana", href: "#suasana" },
  { title: "Menu", href: "#menu" },
  { title: "Promo", href: "#promo" },
  { title: "Fasilitas", href: "#fasilitas" },
  { title: "Komunitas", href: "#komunitas" },
  { title: "Lokasi", href: "#lokasi" },
];

export function HomeScreen(_props: HomeScreenProps) {
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
          <YStack gap="$10">
            <HeroWithImageBackground
              tag="Gatherloop Cafe & Community"
              title="Cafe Buat Nongkrong dan Berkembang Bareng"
              subtitle="Gatherloop Cafe & Community merupakan sebuah cafe di Probolinggo yang menjadi tempat nongkrong dan mengembangkan skill dan minat dengan berkolaborasi dengan banyak komunitas"
              imageSource="/assets/images/hero.jpg"
              primaryButton={{
                label: "Lihat Lokasi",
                onPress: () => window.open("https://gatherloop.co/location"),
              }}
            />

            <Container>
              <YStack id="suasana">
                <ImageGallery
                  imageSources={[
                    "/assets/images/Cafe1.jpg",
                    "/assets/images/Cafe2.jpg",
                    "/assets/images/Cafe3.jpg",
                    "/assets/images/Cafe4.jpg",
                    "/assets/images/Cafe5.jpg",
                    "/assets/images/Cafe6.jpg",
                    "/assets/images/Cafe7.jpg",
                    "/assets/images/Cafe8.jpg",
                    "/assets/images/Cafe9.jpg",
                    "/assets/images/Cafe10.jpg",
                    "/assets/images/Cafe11.jpg",
                    "/assets/images/Cafe12.jpg",
                    "/assets/images/Cafe13.jpg",
                    "/assets/images/Cafe14.jpg",
                    "/assets/images/Cafe15.jpg",
                    "/assets/images/Cafe16.jpg",
                    "/assets/images/Cafe17.jpg",
                    "/assets/images/Cafe18.jpg",
                    "/assets/images/Cafe19.jpg",
                    "/assets/images/Cafe20.jpg",
                    "/assets/images/Cafe21.jpg",
                  ]}
                  maxColumn={3}
                  align="center"
                  title="Suasana Gatherloop"
                  subtitle="Tempat yang nyaman untuk kumpul, kerja, dan bersantai"
                />
              </YStack>
            </Container>

            <Container>
              <YStack id="menu">
                <Features
                  title="Menu Favorit Gatherloop"
                  subtitle="Nikmati pilihan menu favorit di Gatherloop yang akan menemani nongkrongmu"
                  items={[
                    {
                      title: "Kopi",
                      subtitle:
                        "Berbagai menu kopi mulai dari tubruk, V60, espresso, latte, cappuccino, hingga es kopi susu",
                      imageSource: "/assets/images/MenuKopi.jpg",
                    },
                    {
                      title: "Matcha",
                      subtitle:
                        "Matcha campur susu yang dapat diminum secara hangat dan dingin",
                      imageSource: "/assets/images/MenuMatcha.jpg",
                    },
                    {
                      title: "Mojito",
                      subtitle:
                        "Manisnya sirup bertemu dengan kesegaran sprite, cocok diminum saat cuaca panas",
                      imageSource: "/assets/images/MenuMojito.jpg",
                    },
                    {
                      title: "Pancong",
                      subtitle:
                        "Lembutnya adonan kue bertemu dengan krim manis yang lumer dan beraneka rasa, seperti coklat, keju, matcha, taro, dll",
                      imageSource: "/assets/images/MenuPancong.jpg",
                    },
                    {
                      title: "Ayam Crispy",
                      subtitle:
                        "Nikmatnya ayam yang dilumuri tepung krispi, ditambah nasi hangat yang siap tuntaskan laparmu",
                      imageSource:
                        "https://st.depositphotos.com/1005891/2309/i/450/depositphotos_23093506-stock-photo-fried-chicken-on-square-white.jpg",
                    },
                    {
                      title: "Mie Gather",
                      subtitle:
                        "Mie pedas yang bikin nagih dengan bumbu spesial, bisa juga dinikmati dengan kuah miso",
                      imageSource: "/assets/images/MenuMieGather.jpg",
                    },
                  ]}
                />
              </YStack>
            </Container>

            <Container>
              <YStack id="promo">
                <HeroWithAccent
                  tag="Promo"
                  title="Kopi Pagi & Sore"
                  subtitle="Dapatkan potongan harga Rp. 2000 untuk setiap pembelian kopi di pagi dan sore hari"
                  imageSource="/assets/images/promo.jpg"
                  primaryButton={{
                    label: "Lihat Promo",
                    onPress: () =>
                      window.open("https://www.instagram.com/p/DFmLM5QPGj0/"),
                  }}
                />
              </YStack>
            </Container>

            <Container>
              <YStack flex={1} alignItems="center" id="fasilitas">
                <YStack maxWidth={720}>
                  <PageHeader
                    tag="Fasilitas"
                    title="Fasilitas Lengkap untuk Mendukung Produktivitasmu"
                    subtitle="Gatherloop punya semua fasilitas buat mendukung kegiatan dan produktivitasmu"
                    align="center"
                  />
                </YStack>
              </YStack>
            </Container>

            <Container>
              <YStack>
                <HeroWithAccent
                  tag="Event Space"
                  title="Ada Event Space Buat Kamu yang Mau Bikin Seminar"
                  subtitle="Mau ngadain seminar atau acara lain ? Tenang, di Gatherloop ada event space yang bisa kamu booking secara gratis, lengkap dengan speaker, mic, dan proyektor. Cocok buat ngadain seminar, rapat, dan acara lainnya."
                  imageSource="/assets/images/EventSpace.jpg"
                  headingPosition="right"
                />
                <HeroWithAccent
                  tag="Ruang Baca"
                  title="Tambah wawasan dengan koleksi buku di ruang baca"
                  subtitle="Gatherloop punya ruang baca yang berisi koleksi buku dengan berbagai macam kategori seperti self improvement, religi, bisnis, keuangan, novel, biografi, dan software engineering"
                  imageSource="/assets/images/RuangBaca.jpg"
                  headingPosition="left"
                />
                <HeroWithAccent
                  tag="Board Game"
                  title="Rehat sejenak dengan bermain puluhan board game"
                  subtitle="Udah selesai beraktivitas ? Mau istirahat bentar ? Tenang, Gatherloop punya koleksi board game yang bisa kamu mainkan buat refreshing sebelum mulai beraktivitas kembali"
                  imageSource="/assets/images/BoardGame.jpg"
                  headingPosition="right"
                />
              </YStack>
            </Container>

            {/* TODO: integrate to public google calendar later  */}
            {/* <Container>
              <YStack id="kegiatan">
                <EventCalendar
                  tag="Event"
                  title="Ikuti Keseruan Kegiatan Gatherloop di Bulan Ini"
                  subtitle="Tiap bulan ada kegiatan seru di Gatherloop yang bisa level up skillmu"
                  align="center"
                  maxColumn={4}
                  events={[
                    {
                      title: "Bedah Buku - ",
                      datetime: "2025-02-06T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "English Day",
                      datetime: "2025-02-06T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Meetup Web - HTML & CSS",
                      datetime: "2025-02-07T07:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Coding Day",
                      datetime: "2025-02-07T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Workshop Board Game",
                      datetime: "2025-02-08T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "English Day",
                      datetime: "2025-02-13T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Meetup Web - Server Node.js",
                      datetime: "2025-02-14T07:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Coding Day",
                      datetime: "2025-02-14T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Bedah Buku",
                      datetime: "2025-02-15T15:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "English Day",
                      datetime: "2025-02-20T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Meetup Android - Introduction",
                      datetime: "2025-02-21T07:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Coding Day",
                      datetime: "2025-02-21T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Diskusi Software Engineer",
                      datetime: "2025-02-22T07:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "English Day",
                      datetime: "2025-02-27T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Meetup Game Dev - Introduction",
                      datetime: "2025-02-28T07:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                    {
                      title: "Coding Day",
                      datetime: "2025-02-28T12:00:00Z",
                      imageSource: "/assets/images/Thumbnail.svg",
                    },
                  ]}
                />
              </YStack>
            </Container> */}

            <Container>
              <YStack id="komunitas">
                <PageHeader
                  tag="Komunitas"
                  title="Ikut Komunitas Gatherloop Buat Nambah Relasimu"
                  subtitle="Boost skillmu dengan ubah circlemu"
                  align="center"
                />
                <EventSection />
              </YStack>
            </Container>

            <Container>
              <YStack id="lokasi">
                <LocationSection />
              </YStack>
            </Container>

            <YStack marginBottom="$10"></YStack>
          </YStack>
        </ScrollView>
      }
      footer={
        <Footer
          logoImageSource="/assets/images/GatherloopLogoDarkTheme.png"
          tagline="Nongkrong, Belajar, dan Berkembang Bareng"
          links={[
            { title: "Menu", subLinks: links },
            {
              title: "Tentang",
              subLinks: [
                { title: "Tentang Kami", href: "" },
                { title: "Bantuan", href: "" },
                { title: "Kontak Kami", href: "" },
                { title: "Karir", href: "" },
              ],
            },
            {
              title: "Lainnya",
              subLinks: [
                { title: "Syarat dan Ketentuan", href: "" },
                { title: "Kebijakan Privasi", href: "" },
                { title: "Press Kit", href: "" },
              ],
            },
          ]}
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
