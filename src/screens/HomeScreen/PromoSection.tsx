import { YStack } from "tamagui";
import { HeroWithAccent } from "tamakit";

export function PromoSection() {
  return (
    <YStack>
      <HeroWithAccent
        tag="Kopi Pagi & Sore"
        title="Diskon Rp. 2000 untuk Pembelian Kopi di Pagi dan Sore Hari"
        subtitle="Berlaku di pagi hari jam 10.00 - 12.00 dan sore hari jam 17.00 - 19.00 selama bulan Februari 2025"
        imageSource="/assets/images/promo.jpg"
        primaryButton={{
          label: "Lihat Promo",
          onPress: () =>
            window.open("https://www.instagram.com/p/DFmLM5QPGj0/"),
        }}
      />
    </YStack>
  );
}
