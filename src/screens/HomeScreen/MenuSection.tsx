import { Features } from "tamakit";

export function MenuSection() {
  return (
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
          imageSource: "/assets/images/MenuAyamCrispy.jpg",
        },
        {
          title: "Mie Gather",
          subtitle:
            "Mie pedas yang bikin nagih dengan bumbu spesial, bisa juga dinikmati dengan kuah miso",
          imageSource: "/assets/images/MenuMieGather.jpg",
        },
      ]}
    />
  );
}
