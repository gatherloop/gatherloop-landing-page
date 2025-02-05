import { HeroWithImageBackground } from "tamakit";

export function HeroSection() {
  return (
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
  );
}
