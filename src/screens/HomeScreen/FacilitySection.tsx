import { YStack } from "tamagui";
import { HeroWithAccent, PageHeader } from "tamakit";

export function FacilitySection() {
  return (
    <>
      <YStack flex={1} alignItems="center">
        <YStack maxWidth={720}>
          <PageHeader
            tag="Fasilitas"
            title="Fasilitas Lengkap untuk Mendukung Produktivitasmu"
            subtitle="Gatherloop punya semua fasilitas buat mendukung kegiatan dan produktivitasmu"
            align="center"
          />
        </YStack>
      </YStack>

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
    </>
  );
}
