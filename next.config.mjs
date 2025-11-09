/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL(
        "https://cdns.klimg.com/mav-prod-resized/0x0/ori/newsOg/2024/5/2/1714642878118-2zls9.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1762341328778/5bd1059a-2e21-40d2-a65a-44c5affe1cb4.jpeg?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&format=webp"
      ),
    ],
  },
};

export default nextConfig;
