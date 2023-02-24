import React from "react";
import { XStack, YStack } from "tamagui";
import { Content, IconTextList, MenuItem } from "../../molecules";
import { Image } from "../../atoms";

const programs = [
  {
    title: "Nugas Bareng",
    iconSrc: "/assets/icons/Calendar.svg",
    descriptions: [
      "Kamu sedang sekolah atau kuliah di jurusan IT ? Banyak materi dan tugas yang tidak kamu pahami ? ",
      "Gatherloop dapat membantumu untuk memahami materi dan tugas  yang diberikan di sekolah atau kampus.",
    ],
    details: [
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Hubungi Instagram Gatherloop untuk menentukan jadwal konsultasi",
      },
      {
        iconSrc: "/assets/icons/Users.svg",
        text: "Ceritakan tugas dan kendala yang dialami",
      },
      {
        iconSrc: "/assets/icons/Monitor.svg",
        text: "Dibimbing untuk menyelesaikan tugas tersebut",
      },
    ],
  },
  {
    title: "Workshop Learning How to Learn",
    iconSrc: "/assets/icons/Mic.svg",
    descriptions: [
      "Kamu sedang belajar pemrograman ? sudah berusaha maksimal namun tetap saja tidak paham ? atau selalu terpaku pada tutorial dan tidak bisa mengembangkannya ?",
      "Bisa jadi hal tersebut disebabkan karena cara belajar yang kurang tepat. Gatherloop akan membantumu untuk mempelajari cara yang tepat untuk mempelajari konsep pemrograman hingga akhirnya kamu bisa ngoding",
    ],
    details: [
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Belajar bagaimana cara untuk memahami hal baru dengan mudah",
      },
      {
        iconSrc: "/assets/icons/Users.svg",
        text: "Belajar bagaimana cara agar tidak terpaku pada tutorial",
      },
      {
        iconSrc: "/assets/icons/Monitor.svg",
        text: "Belajar memahami dan memperbaiki pesan error",
      },
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Belajar bagaimana cara bertanya yang efektif apabila kebingungan",
      },
    ],
  },
  {
    title: "Workshop Frontend dan Backend",
    iconSrc: "/assets/icons/Monitor.svg",
    descriptions: [
      "Kamu suka ngoding dan ingin menjadi seorang Frontend atau Backend engineer tapi belum memiliki skill yang dibutuhkan ?",
      "Tenang, kamu bisa mengikuti workshop Frontend dan Backend yang diadakan oleh Gatherloop untuk mempelajari skill dasar yang dibutuhkan untuk menjadi seorang Frontend dan Backend engineer",
    ],
    details: [
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Belajar skill dasar yang dibutuhkan untuk menjadi Frontend atau Backend engineer",
      },
      {
        iconSrc: "/assets/icons/Users.svg",
        text: "Menggunakan teknologi yang biasa digunakan di industri",
      },
      {
        iconSrc: "/assets/icons/Monitor.svg",
        text: "Praktek bersama - sama di basecamp Gatherloop",
      },
    ],
  },
  {
    title: "Career Mentoring",
    iconSrc: "/assets/icons/Users.svg",
    descriptions: [
      "Kamu sudah memiliki skill untuk menjadi seorang Frontend dan Backend engineer ? Sudah pernah interview tapi masih belum berhasil untuk mendapatkan pekerjaan yang kamu impikan ?",
      "Tenang, Gatherloop akan membantu mereview skill yang kamu miliki dan memberikan feedback agar kamu bisa mengembangkan skillmu hingga akhirnya bisa mendapatkan pekerjaan impianmu",
    ],
    details: [
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Konsultasi untuk belajar Frontend dan Backend lebih dalam lagi",
      },
      {
        iconSrc: "/assets/icons/Users.svg",
        text: "Latihan membangun project untuk menambah portfolio",
      },
      {
        iconSrc: "/assets/icons/Monitor.svg",
        text: "Tips dan trik dalam membuat Curriculum Vitae",
      },
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Latihan interview",
      },
    ],
  },
  {
    title: "Meetup Bulanan",
    iconSrc: "/assets/icons/Calendar.svg",
    descriptions: [
      "Gatherloop mengadakan meetup rutin tiap bulan yang dapat dihadiri oleh pelajar, mahasiswa, fresh graduate, atau siapapun yang berkutat di bidang IT. Di setiap meetup akan ada topik yang dibawakan oleh developer dari industri, sehingga cocok untuk menambah wawasan dan memperluas relasi",
    ],
    details: [
      {
        iconSrc: "/assets/icons/Calendar.svg",
        text: "Mendapatkan informasi terbaru seputar teknologi yang digunakan di startup",
      },
      {
        iconSrc: "/assets/icons/Users.svg",
        text: "Sharing mengenai kendala yang dialami di sekolah, kuliah, atau tempat kerja",
      },
      {
        iconSrc: "/assets/icons/Monitor.svg",
        text: "Mendapatkan relasi untuk meningkatkan opportunity kerja",
      },
    ],
  },
];

export type ProgramSectionProps = {};

export function ProgramSection(_props: ProgramSectionProps) {
  const [selectedProgramIndex, setSelectedProgramIndex] = React.useState(0);
  const selectedProgram = programs[selectedProgramIndex];

  return (
    <YStack justifyContent="space-between" space="$5">
      <Content
        size="lg"
        align="center"
        title="Program Kami"
        descriptions={[
          "Berikut beberapa program yang kami selenggarakan untuk membantumu belajar hingga mendapatkan pekerjaan impianmu",
        ]}
      />
      <XStack justifyContent="space-between" flexWrap="wrap">
        <YStack
          alignItems="flex-start"
          space="$5"
          flexBasis="50%"
          borderRightWidth={1}
          display="none"
          $gtXs={{ display: "flex" }}
        >
          {programs.map(({ title, iconSrc }, index) => (
            <MenuItem
              key={index}
              text={title}
              src={iconSrc}
              isSelected={selectedProgramIndex === index}
              onPress={() => setSelectedProgramIndex(index)}
            />
          ))}
        </YStack>

        <YStack
          space="$3"
          paddingLeft="$5"
          display="none"
          flexBasis="50%"
          $gtXs={{ display: "flex" }}
        >
          <Content
            title={selectedProgram.title}
            descriptions={selectedProgram.descriptions}
          />
          <IconTextList
            size="sm"
            items={selectedProgram.details.map(({ text, iconSrc }) => ({
              text,
              src: iconSrc,
            }))}
          />
        </YStack>

        <YStack space="$3" display="flex" flex={1} $gtXs={{ display: "none" }}>
          <Content
            align="center"
            title={selectedProgram.title}
            descriptions={selectedProgram.descriptions}
          />
          <IconTextList
            size="sm"
            items={selectedProgram.details.map(({ text, iconSrc }) => ({
              text,
              src: iconSrc,
            }))}
          />
        </YStack>
      </XStack>
    </YStack>
  );
}
