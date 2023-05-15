import { Divider, TestimonialCard, TestimonialCardProps } from "@/components";
import React from "react";
import { H3, Paragraph, XStack, YStack } from "tamagui";

const items: TestimonialCardProps[] = [
  {
    name: "Danny Dwi Cahyono",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQFWr5wgECWgeg/profile-displayphoto-shrink_800_800/0/1622892566947?e=1689206400&v=beta&t=edqDfiF8Z8nWF_9RvnF9WzJDkwpRKQZZLpXbxRol4UE",
    job: "Frontend Engineer at Gredu Asia",
    description:
      "Sebagai mahasiswa Pendidikan Olahraga, saya tidak pernah memikirkan untuk berkarir di dunia software engineering. Saya merasa kebingungan tentang teknologi yang harus dipelajari, mulai dari mana, dan bagaimana cara belajar yang efektif. Beruntung, saya mendapat kesempatan mentoring privat dari Aka yang sangat membantu. Sekarang, saya tidak lagi bingung tentang roadmap belajar, cara mengatasi error, dan belajar coding menjadi menyenangkan. Hal yang paling penting, Aka memberikan mentoring yang intensif dan eksklusif, meskipun ada banyak orang yang dimentorinya.",
  },
  {
    name: "Andri Purnomo",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQEQcZZxvFnUAg/profile-displayphoto-shrink_800_800/0/1636299412679?e=1689206400&v=beta&t=sbWEYQnfS5gxhcWDePoQCl5quHNt4Iiubv_G4U9XAUo",
    job: "Frontend Engineer at Zero One Group",
    description:
      "Setelah lulus bootcamp, saya merasa kebingungan mengenai kebutuhan industri, seperti jenis skill yang dibutuhkan dan tahapan interview-nya. Saya kemudian mencoba untuk mencari koneksi dengan seseorang yang sudah bekerja di industri tersebut. Akhirnya, saya bertemu dengan Mas Aka dan melakukan sesi ngobrol-ngobrol untuk membahas permasalahan yang saya alami. Kemudian, saya melakukan mentoring selama beberapa bulan untuk mengejar ketertinggalan skill yang dibutuhkan oleh industri, baik dari hard skill maupun soft skill. Di sesi mentoring tersebut, saya belajar bagaimana cara belajar yang baik dan cara menjelaskan sesuatu secara efektif",
  },
  {
    name: "M. Ilham Surya Pratama",
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQHtjkiNd3t1ew/profile-displayphoto-shrink_800_800/0/1674207190793?e=1689206400&v=beta&t=tY4QGNVZ5DevNhvSTbVK51RYHPSkLyGHMswcojaNmXU",
    job: "Backend Engineer at Ruangguru",
    description:
      "Saya adalah seorang Backend Engineer yang ingin berkarir di industri namun tidak tau harus memilih teknologi apa yang tepat untuk dipelajari. Akhirnya saya bertemu dengan Aka, Aka memberikan banyak insight tentang dunia industri, tak terkecuali tentang Backend Engineer. Akhirnya bersama Aka, saya bisa menentukan teknologi apa yang akan saya pelajari hingga bisa menentukan arah karir saya. Meskipun Aka seorang Frontend Engineer, pengetahuan Aka tentang dunia programming sangat luas dan general. Bukan hanya tentang pengetahuan teknis, saya juga banyak belajar tentang soft skill bersama Aka, seperti bagaimana cara belajar dengan benar, bagaimana meningkatkan karir di perusahaan, bagaimana menjadi mentor, dan masih banyak lagi. Aka adalah mentor yang baik untuk semua orang yang ingin berkarir sebagai software engineer, terlepas dari role apa yang dipilih, Aka adalah mentor terbaik.",
  },
  {
    name: "Deby Silvia Agnes",
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQGusDz3HLAIow/profile-displayphoto-shrink_800_800/0/1665312035396?e=1689206400&v=beta&t=JAt3gcJ6eLgdmimtH8SdvXuJ21xszbNT6xnEwVmoRLc",
    job: "Product Engineer (Backend) at Zero One Group",
    description:
      "Saya sebelumnya sudah bekerja di industri IT consultant. Namun saya merasa karir dan skill saya stuck, bahkan kurang berkembang selama 2 tahun saya bekerja di industri tersebut. Ternyata karena cara belajar saya yang masih salah, komunikasi yang kurang benar dan kurangnya teman untuk berbagi ilmu di bidang backend. Kemudian di masa saya ingin pindah tempat kerja, saya ngobrol dan meminta mentoring ke mas aka. Dari sana saya belajar banyak hal. Teknik menjawab interview, gimana memecah soal hackerrank biar mudah dipahami dan bisa dapet gambaran problem solvingnya, gimana pentingnya disiplin dan tetep fokus pada niat awal, gimana metode belajar yang baik. Hingga akhirnya sekarang saya bisa bekerja di tempat yang saya impikan culture nya. Bisa ketemu temen temen backend yang bisa diajak ngobrol dan banyak temen temen lain juga. Semua karena bantuan mentoring dari mas aka. JazakAllahu khoiron katsiron mas aka",
  },
  {
    name: "Alif Mauludi",
    imageUrl:
      "https://media.licdn.com/dms/image/C5103AQGOf1Jb8T2dLg/profile-displayphoto-shrink_800_800/0/1533343737240?e=1689206400&v=beta&t=5bThmGgVfiyT9mpX5JEw3nnFIGCiv2MeDRTzyUIS6vw",
    job: "Backend Engineer at PT Satkomindo Mediyasa",
    description:
      "Sebagai seorang Web Developer yang ingin menjadi Backend Developer, saya memilih untuk fokus belajar bahasa pemrograman Golang. Saya mengikuti kursus online yang bagus, namun metode pembelajaran by video tidak cocok untuk saya. Saya membutuhkan pembelajaran hybrid dengan materi tertulis dan video. Beruntung, saya bertemu dengan mentor yang membimbing saya dalam menentukan roadmap belajar Golang yang efektif dari basic hingga advance. Saya merasa belajar menjadi lebih terarah dan mentor saya selalu siap membantu jika saya stuck dengan materi.",
  },
  {
    name: "Yansen Victor",
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQEsF3F--ivLJg/profile-displayphoto-shrink_800_800/0/1622887591562?e=1687392000&v=beta&t=XXWTWu0wWpM-5b3Mwob8sWXCKm0oYiuxTSriQc-pUk8",
    job: "Ex-Supporting Commercial at Warung Pintar",
    description:
      "Berawal dari ingin mencoba menjadi seorang frond-end engineer ditemukan masalak soft skill yang kurang dan tidak update dengan perkembangan saat ini. Dengan adanya program mentoring ini, memberikan solusi dari masalah yang dimiliki. Program mentoring ini menyesuaikan kebutuhan dan berfokus pada tujuan yang ingin dicapai. Selama program ini materi yang didapatkan update dengan kebutuhan masa kini dan mentor paham materi serta memberikan servis untuk berdikusi secara langsung.",
  },
];

export function TestimonialSection() {
  return (
    <YStack marginTop="$10" space="$8">
      <YStack
        justifyContent="space-between"
        alignItems="center"
        $gtXs={{ flexDirection: "row" }}
        space="$5"
      >
        <YStack space="$3" flex={1}>
          <H3 textAlign="center" $gtXs={{ textAlign: "left" }}>
            TESTIMONIAL
          </H3>
          <Divider alignSelf="center" $gtXs={{ alignSelf: "flex-start" }} />
          <Paragraph
            size="$5"
            textAlign="center"
            $gtXs={{ textAlign: "left" }}
            maxWidth={640}
          >
            Gatherloop memiliki basecamp yang menyediakan beberapa fasilitas
            untuk menunjang kenyamanan belajarmu
          </Paragraph>
        </YStack>
      </YStack>

      <XStack flexWrap="wrap" margin="$-5">
        {items.map((item) => (
          <YStack
            key={item.name}
            flexBasis="100%"
            $gtXs={{ flexBasis: "50%" }}
            padding="$5"
          >
            <TestimonialCard {...item} width="100%" height="100%" />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}
