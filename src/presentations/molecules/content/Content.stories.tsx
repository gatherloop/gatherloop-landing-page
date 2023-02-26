import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Content } from "./Content";

export default {
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
};

export const MultipleDescription = Template.bind({});
MultipleDescription.args = {
  title: "Permasalahan apa yang ingin kami selesaikan ?",
  descriptions: [
    "Kamu bermimpi untuk menjadi seorang software engineer ? Namun, dibutuhkan usaha yang sangat keras agar bisa mencapai mimpi tersebut.",
    "Tidak hanya mengusai bahasa pemrograman, seorang software engineer juga dituntut untuk bisa menganalisa sistem dan menentukan cara yang tepat untuk membangun sistem berdasarkan kondisi tertentu",
    "Gatherloop lahir untuk membantumu agar dapat berkembang dan menjadi seorang software engineer yang berkualitas dan meraih pekerjaan impianmu",
  ],
};

export const MultipleButton = Template.bind({});
MultipleButton.args = {
  title: "Tunggu apalagi ? Gabung dengan Gatherloop sekarang",
  descriptions: [
    "Dengan bergabung di Gatherloop, kalian akan mendapatkan informasi - informasi menganai event - event terbaru yang diadakan oleh Gatherloop",
  ],
  buttons: [
    {
      text: "Gabung ke Grup",
      onPress: () => console.log("join button pressed"),
    },
    {
      text: "Ikuti Instagram",
      onPress: () => console.log("instagram button pressed"),
    },
  ],
};

export const Large = Template.bind({});
Large.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
  size: "sm",
};

export const LeftAlign = Template.bind({});
LeftAlign.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
  align: "left",
};

export const RightAlign = Template.bind({});
RightAlign.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
  align: "right",
};

export const CenterAlign = Template.bind({});
CenterAlign.args = {
  title:
    "Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer",
  descriptions: [
    "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
  ],
  buttons: [
    { text: "Lihat Program Gatherloop", onPress: () => console.log("pressed") },
  ],
  align: "center",
};
