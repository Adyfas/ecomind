/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL(
        "https://cdns.klimg.com/mav-prod-resized/0x0/ori/newsOg/2024/5/2/1714642878118-2zls9.jpeg"
      ),
    ],
  },
};

export default nextConfig;
