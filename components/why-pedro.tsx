import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export function WhyPedro() {
  const isMobile = useIsMobile();

  const features = [
    {
      number: "1",
      title: "TRUST",
      description: "Initial LP tokens are burned to prevent rug pulls.",
      bgColor: "bg-[#C68B59]",
      color: "#4A1D1D",
      image: !isMobile ? "/pedro-1.png" : null,
    },
    {
      number: "2",
      title: "GROWTH",
      description:
        "Reserved tokens for staking rewards and ecosystem development.",
      image: "/pedro-2.png",
    },
    {
      number: "3",
      title: "FUN",
      description: "Memes, NFTs, and a thriving community.",
      image: "/pedro-3.png",
    },
  ];

  return (
    <section
      className="py-24 px-4 md:px-6 container mx-auto bg-[#fff]"
      style={
        {
          paddingBottom: !isMobile && "1rem",
        } as any
      }
    >
      <div
        className="max-w-3xl mx-auto text-center mb-24"
        style={
          {
            padding: !isMobile && "0 1rem",
          } as any
        }
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-[#4A1D1D] mb-6"
          style={
            {
              textAlign: !isMobile && "left",
              lineHeight: !isMobile && 1.3,
            } as any
          }
        >
          WHY PEDROCOIN?
        </h2>
        <p
          className="text-lg md:text-md text-[#7F1911] font-light"
          style={
            {
              textAlign: !isMobile && "left",
              lineHeight: !isMobile && 1.3,
            } as any
          }
        >
          PedroCoin isn't just another pump.shit coin. It's the quirky,
          community-powered token built on Solana to bring memes and utility
          together for the long haul. 🚀🐒
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-[2.5rem] h-[455px] ${
              feature.image ? "bg-[#4A1D1D]" : feature.bgColor || "bg-[#4A1D1D]"
            }`}
            style={
              {
                background: !isMobile && "#fff",
              } as any
            }
          >
            {feature.image && (
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={400}
                className="w-full h-auto object-cover absolute inset-0"
              />
            )}
            <div
              className={`relative p-8 h-full min-h-[320px] flex flex-col ${
                feature.image ? "" : "bg-[#C68B59]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full ${
                  feature.image
                    ? "bg-[#fff]"
                    : `bg-[${feature.color || "#fff"}]`
                } text-white flex items-center justify-center mb-4`}
              >
                <span
                  className="font-bold text-xl"
                  style={{
                    color: feature.image
                      ? "#4A1D1D"
                      : feature.number === "1"
                      ? "#fff"
                      : "#4A1D1D",
                  }}
                >
                  {feature.number}
                </span>
              </div>
              <div className="mt-auto">
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{
                    color: feature.image
                      ? "#fff"
                      : feature.number !== "1"
                      ? "#fff"
                      : "#4A1D1D",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: feature.image
                      ? "#fff"
                      : feature.number !== "1"
                      ? "#fff"
                      : "#4A1D1D",
                  }}
                  className="text-white/90 text-lg"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
