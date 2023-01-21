/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/join",
        destination: "https://chat.whatsapp.com/Fhd16OBC7HtEMSdPUmJR9k",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
