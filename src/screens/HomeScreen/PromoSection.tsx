import { YStack } from "tamagui";
import { HeroWithAccent, PageHeader } from "tamakit";

export function PromoSection() {
  return (
    <YStack>
      <PageHeader
        tag="Promo"
        title="Promo Terbaru"
        subtitle="Nongkrong hemat dengan promo-promo menarik dari kami"
        align="center"
      />
      <HeroWithAccent
        tag="Kopi Pagi & Sore"
        title="Diskon Rp. 2000 untuk Pembelian Kopi di Pagi dan Sore Hari"
        subtitle="Berlaku di pagi hari jam 10.00 - 12.00 dan sore hari jam 17.00 - 19.00 selama bulan Februari 2025"
        imageSource="/assets/images/Promo1.jpg"
        primaryButton={{
          label: "Lihat Promo",
          onPress: () =>
            window.open("https://www.instagram.com/p/DFmLM5QPGj0/"),
        }}
      />
      <HeroWithAccent
        tag="Paket Makan Siang"
        title="Diskon Hingga Rp. 5000 untuk Pembelian Makanan di Siang Hari"
        subtitle="Berlaku di siang hari jam 12.00 - 14.00 selama bulan Februari 2025"
        imageSource="/assets/images/Promo2.jpg"
        headingPosition="right"
        primaryButton={{
          label: "Lihat Promo",
          onPress: () =>
            window.open("https://www.instagram.com/p/DFwoveWJ2sf/"),
        }}
      />
    </YStack>
  );
}
