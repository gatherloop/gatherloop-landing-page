import React from "react";
import { Instagram, Menu } from "@tamagui/lucide-icons";
import { ScrollView, useThemeName, YStack } from "tamagui";
import {
  HeroWithImageBackground,
  HeroWithAccent,
  ImageGallery,
  Layout,
  Navbar,
  EventCalendar,
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
  { title: "Kegiatan", href: "#kegiatan" },
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
                    "/assets/images/Cafe-1.jpg",
                    "/assets/images/Cafe-2.jpg",
                    "/assets/images/Cafe-3.jpg",
                    "/assets/images/Cafe-4.jpg",
                    "/assets/images/Cafe-5.jpg",
                    "/assets/images/Cafe-6.jpg",
                    "/assets/images/Cafe-7.jpg",
                    "/assets/images/Cafe-8.jpg",
                    "/assets/images/Cafe-9.jpg",
                    "/assets/images/Cafe-10.jpg",
                    "/assets/images/Cafe-11.jpg",
                    "/assets/images/Cafe-12.jpg",
                  ]}
                  maxColumn={4}
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
                      imageSource:
                        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/43ffdd3f-33b7-4d1a-be7b-19d0da9f0dd7_Go-Biz_20231226_153401.jpeg",
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
                      imageSource:
                        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pZSUyMGF5YW18ZW58MHx8MHx8fDA%3D",
                    },
                  ]}
                />
              </YStack>
            </Container>

            <Container>
              <YStack id="promo">
                <HeroWithAccent
                  tag="Promo"
                  title="Nongkrong Lebih Hemat dengan Promo Gatherloop"
                  subtitle="Tenang, nongkrong di Gatherloop gak bakal bikin kantong kamu kering, yuk cek promo Gatherloop sekarang juga"
                  imageSource="/assets/images/promo.jpg"
                  primaryButton={{
                    label: "Lihat Promo",
                    onPress: () => {},
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

            <Container>
              <YStack id="kegiatan">
                <EventCalendar
                  tag="Event"
                  title="Ikuti Keseruan Kegiatan Gatherloop di Bulan Ini"
                  subtitle="Tiap bulan ada kegiatan seru di Gatherloop yang bisa level up skillmu"
                  align="center"
                  maxColumn={4}
                  events={[
                    {
                      title: "Gatherloop Connect & Learn",
                      datetime: "2025-02-01T12:00:00Z",
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
            </Container>

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
