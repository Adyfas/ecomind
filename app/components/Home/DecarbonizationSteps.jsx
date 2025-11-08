import { motion } from "framer-motion";
import CountUp from "../animations/CountUp";

const DecarbCard = ({ item, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.5, duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center text-center px-4 py-6 max-w-xs max-md:border rounded-2xl border-black/20"
    >
      <div className="mb-6">{item.icon}</div>

      <p className="text-sm font-semibold text-gray-400 tracking-widest mb-2">
        <CountUp
          from={0}
          to={item.count}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />{" "}
        year
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

export default function DecarbonizationSteps() {
  const widthIcon = "6em";
  const heightIcon = "6em";
  const colorIcon = "fill-green-500";

  const decarbData = [
    {
      id: 1,
      title: "Plastic Bag",
      count: 20,
      description:
        "Common litter pollutant, causes soil infertility and harms animals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={widthIcon}
          height={heightIcon}
          viewBox="0 0 24 24"
          className={`${colorIcon ? colorIcon : "fill-neon"}`}
        >
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path d="M5.003 16.408q.173-.521.2-1.069c0-.553-.123-1.099-.36-1.598a.34.34 0 0 0-.409-.25a.35.35 0 0 0-.25.41q.03.334 0 .669q-.072.376-.19.739c0 .24-.1.49-.17.73a5.6 5.6 0 0 0-.17 1.367c.012.26.099.51.25.72a.4.4 0 0 0 .53.14a.39.39 0 0 0 .13-.53c-.06-.14 0-.27 0-.42q.19-.468.44-.908m2.326 2.217h-.36c-1.198 0-1.208-.09-1.337.13c-.24.44.839.999 1.258 1.129c.238.06.485.078.73.05c1.377-.13 1.377-.47 1.377-.6s.13-.41-1.668-.709m15.951-1.498a4.51 4.51 0 0 0-3.555-3.756a7.2 7.2 0 0 0-2.677.06a5.8 5.8 0 0 0-2.507 1.059a6.6 6.6 0 0 0-2.118 3.925a4.81 4.81 0 0 0 1.229 4.245c.408.384.89.68 1.418.87a7.77 7.77 0 0 0 4.505.249a4.73 4.73 0 0 0 2.587-1.678a6.52 6.52 0 0 0 1.118-4.974m-9.798 1.478a5.42 5.42 0 0 1 1.848-3.146a4.56 4.56 0 0 1 1.998-.77a6 6 0 0 1 2.167-.06q.304.08.59.21c-.67.69-1.35 1.369-1.998 2.128c-.33.4-.64.819-.94 1.249a18 18 0 0 0-.838 1.308c-.56.999-1 1.948-1.488 2.926a2.8 2.8 0 0 1-.57-.38a3.89 3.89 0 0 1-.769-3.465m7.88 2.907a3.78 3.78 0 0 1-1.997 1.428a6.26 6.26 0 0 1-3.885-.1c.699-.999 1.458-1.998 2.197-3.066c.39-.55.77-1.109 1.149-1.668c.38-.56.739-1.129 1.128-1.678c.28-.4.58-.79.87-1.179a3.63 3.63 0 0 1 1.328 2.118a5.4 5.4 0 0 1-.79 4.145" />
            <path d="M17.159 8.807c.253-.225.416-.533.46-.87a7.7 7.7 0 0 0 .05-1.537c0-.87-.07-1.728-.17-2.587s-.24-1.508-.41-2.248a11.7 11.7 0 0 1 1.788 3.346a21 21 0 0 1 .759 2.737c.29 1.441.454 2.905.49 4.375a.39.39 0 0 0 .768 0a22.6 22.6 0 0 0 0-4.425a15 15 0 0 0-.37-1.887a10 10 0 0 0-.698-1.818c-.28-.56-2.527-4.215-3.277-3.476c-.318.11-.618.268-.888.47c-.444.35-.811.79-1.08 1.288a6.9 6.9 0 0 0-.588 1.907a13.4 13.4 0 0 0 .1 2.897a.4.4 0 0 0 .399.38a.38.38 0 0 0 .37-.39a19 19 0 0 1 .26-2.257c.05-.29.129-.56.199-.85q.14-.62.39-1.208c.117-.397.318-.765.589-1.079q.222 1.156.31 2.328c.05.829.06 1.668 0 2.497c0 .18 0 .589-.05.998c0 .22 0 .45-.12.53a4 4 0 0 1-1.449.53a13.4 13.4 0 0 1-2.686.159c-.59 0-1.18-.06-1.758-.12c-.58-.06-1.169-.13-1.758-.23l-1.199-.18s-.11-.06-.13-.13a3 3 0 0 1-.09-.459a4 4 0 0 1 0-.729c.025-.978.121-1.953.29-2.916q.171-.926.47-1.818c0 .09.08.18.11.27s.15.45.22.669l.309.999q.412 1.318.669 2.676a.38.38 0 0 0 .759-.06c.028-.81-.009-1.622-.11-2.427a7 7 0 0 0-.22-1.028a7 7 0 0 0-.4-1A6.6 6.6 0 0 0 7.9.148a.3.3 0 0 0-.27-.11a.3.3 0 0 0-.29 0a10.1 10.1 0 0 0-3.226 3.796a18.2 18.2 0 0 0-1.588 4.664l-.42 2.917l-.479 2.297C1.207 15.239.5 17.097.63 18.705a3.8 3.8 0 0 0 1.927 3.136q.338.199.7.35q.358.15.738.24q.618.16 1.249.25q.635.094 1.278.099q.868.015 1.728-.09q.859-.093 1.698-.29a.38.38 0 0 0 .3-.449a.39.39 0 0 0-.46-.3q-.796.154-1.608.21q-.808.052-1.618 0a9 9 0 0 1-1.158-.14c-.38-.07-.76-.17-1.139-.28a3.4 3.4 0 0 1-.59-.22a4 4 0 0 1-.548-.309a2.73 2.73 0 0 1-1.289-2.297c.099-1.573.436-3.122.999-4.594l.49-2.408l.329-2.936a17 17 0 0 1 1.288-4.435A9.4 9.4 0 0 1 7.54.836l.19.32c-.405.802-.72 1.646-.939 2.517a24 24 0 0 0-.51 2.996a5.3 5.3 0 0 0 .07 1.598a1.37 1.37 0 0 0 .65.88q.264.126.55.19c.339.08.728.109.998.169c.61.11 1.229.21 1.848.27c.62.06 1.228.11 1.868.13c1.005.031 2.01-.052 2.996-.25a5 5 0 0 0 1.898-.85" />
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Aluminum Can",
      count: 200,
      description: "Recyclable but pollutes if discarded improperly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={widthIcon}
          height={heightIcon}
          viewBox="0 0 15 15"
          className={`${colorIcon ? colorIcon : "fill-neon"}`}
        >
          <path d="M3 2.5c.5 1.5 8.5 1.5 9 0v11c0 2-9 2-9 0zm6.5-1.25c.5 0 1 .25 1 .5s-.5.5-1 .5s-1-.25-1-.5s.5-.5 1-.5m2.5.25C12 0 3 0 3 1.5c0 2 9 2 9 0"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Plastic Bottles",
      count: 450,
      description:
        "Major contributor to ocean pollution, produces microplastics.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={widthIcon}
          height={heightIcon}
          viewBox="0 0 24 24"
          className={`${colorIcon ? colorIcon : "fill-neon"}`}
        >
          <path
            fillRule="evenodd"
            d="M15.993 2.017a4 4 0 0 0-.193.328l-.323.583l-2.827 1.39l-.168.083c-1.626.835-2.772 2.403-3.116 4.233c-.01.05-.019.103-.034.19l-.001.007l-.03.173a7.24 7.24 0 0 1-2.095 3.927l-.804.79c-.504.496-.91.896-1.214 1.24c-.31.35-.56.694-.71 1.088a3.49 3.49 0 0 0 .363 3.18c.236.35.558.626.939.894c.373.262.859.555 1.46.917l.713.43c.601.362 1.087.654 1.492.86c.412.21.806.367 1.225.406a3.23 3.23 0 0 0 2.88-1.284c.254-.335.413-.732.548-1.184c.133-.445.261-1.01.42-1.715l.255-1.121l.039-.171a7.2 7.2 0 0 1 2.297-3.798l.006-.005l.141-.126c1.358-1.237 2.076-3.054 1.958-4.914l-.015-.192l-.262-3.267l.355-.642c.058-.103.12-.216.166-.318c.053-.116.111-.274.12-.467a1.25 1.25 0 0 0-.195-.729a1.3 1.3 0 0 0-.337-.344a4 4 0 0 0-.303-.193l-.815-.491a5 5 0 0 0-.33-.188a1.3 1.3 0 0 0-.489-.139a1.25 1.25 0 0 0-.763.204a1.3 1.3 0 0 0-.354.365m-.01 2.333l1.472.887l.248 3.101c.005.064.009.103.01.134l-1.055.351a1.95 1.95 0 0 1-1.838-.328a3.45 3.45 0 0 0-3.703-.392l-.06.03a4.43 4.43 0 0 1 2.261-2.473z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Glass",
      count: 1000000,
      description: "Essentially non-degradable, can be recycled infinitely.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={widthIcon}
          height={heightIcon}
          viewBox="0 0 24 24"
          className={`${colorIcon ? colorIcon : "fill-neon"}`}
        >
          <path d="m3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2zm2.22 2h13.56L17 20H7z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full py-20 px-4 grid justify-items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            The Crisis and the Change
          </h1>
        </motion.div>

        {/* Gunakan grid untuk tata letak kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 justify-items-center">
          {decarbData.map((item, index) => (
            <DecarbCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
