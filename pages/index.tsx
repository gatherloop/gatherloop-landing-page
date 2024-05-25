import { HomeScreen } from "@/screens";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://www.instagram.com/gatherloop.cafe/",
      permanent: false,
    },
  };
};

export default HomeScreen;
