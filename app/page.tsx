"use client";
import MarqueeSm from "@/components/MarqueeSm";
import { Nav } from "@/components/Navbar";
import Pedronomics from "@/components/Pedronomics";
import Roadmap from "@/components/RoadMap";
import TotalSupply from "@/components/TotalSupply";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import "../styles/globals.css";
import { Button } from "@/components/ui/button";
import { VerticalMetrics } from "@/components/VerticalMetrix";
import { WhyPedro } from "@/components/WhyPedro";
import Image from "next/image";
import Footer from "@/components/Footer";
import MetricsInfo from "@/components/MetrixInfo";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

export default function Home() {
  const isMobile = useIsMobile();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: { opacity: 1 },
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const pedro_gif =
    "https://s3-alpha-sig.figma.com/img/3d71/7fce/044af6f03699e7c1706cc397adf184e7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkR-zfPVu~8U2r1Sr9qWFR2L-Azf7auTvkoCOJkFbDsaC7M3wNx1sQHviW0~OcXzVjWLiCd76GYOvR1EF~UbpIRuIwD~EcxYxP71lI39m~kylWBcVlK15jkZDGLeE~gv4n5638YORlnADvgTp2-lk43Dsg8PjaL7aa4tKwNYgfNMvt8rQVn8xBu0cVrtFRUT2llMx~XJXTTmxgIWBQzqQcQUAmxQ1y6xf6DZGZn44sEpAm5JXjjBdaiHByqXtylDJvuP0tlbH8g2D3~iaBgcS736ef9wRJJd-15WngiuxHX6nkjZkjHf5-IVc3P9CsVj9RfbqywJFDoNtnMwlOOAUA__";

  return (
    <main className="main-bg min-h-screen bg-gradient-to-b ">
      <div className="mx-auto" style={{ overflow: "hidden" }}>
        <div className="hero-bg h-[85vh]">
          <Nav />
          <motion.div
            className="main-text text-center max-w-6xl mx-auto mt-20 mb-32"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="banner-text text-4xl md:text-7xl font-title font-pixelify text-white mb-6"
              {...fadeInUp}
            >
              Buiasdsad the sdfsdfsd of Memes & Tokens with the
              {isMobile && <br />}
              <span>Awkward Look</span>
            </motion.h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              {...fadeInUp}
            >
              Where humor and innovation unite on the Solana blockchain—join the
              community-driven revolution blending internet culture with
              cutting-edge crypto utility.
            </motion.p>

            <motion.div {...fadeInUp}>
              <Button className="bg-[#4A1D1D] text-[#D38A59] hover:bg-[#3A1515] px-8 py-6 text-lg rounded-[100px] border border-[#D38A59]">
                JOIN THE COMMUNITY
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative bg-[#fff]">
          <ScrollingBanner />
          <div
            id="about"
            className="w-[80%] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 mx-auto"
          >
            <div className="tale-of-perdro-wrapper text-center md:text-left max-w-xl">
              <h2 className=" text-3xl md:text-5xl font-bold text-[#4A1D1D] mb-6">
                THE TALE OF PEDRO WHERE MEMES MEET BLOCKCHAIN
              </h2>
              <p className="text-[#7F1911] text-lg leading-8 font-light">
                PedroCoin isn't just another cryptocurrency—it's a movement!
                Built on the Solana blockchain, PedroCoin merges the universal
                language of memes with groundbreaking blockchain technology. Our
                mission is to make crypto accessible, fun, and impactful for
                everyone, from seasoned investors to meme lovers.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={pedro_gif}
                alt="Pedro Meme"
                width={500}
                height={500}
                className="rounded-full aspect-square w-[300px] md:w-[400px] lg:w-[500px]"
              />
            </div>
          </div>
        </div>
        <WhyPedro />
        <div id="tokenomics" className="pedronomics-container">
          <Pedronomics />
          <div
            className="supply-container relative matrics-container flex items-end justify-center gap-[2rem]"
            style={{
              gap: !isMobile ? 0 : "2rem",
            }}
          >
            <div className="absolute right-[6rem] top-[-3rem]">
              {isMobile && <TotalSupply />}
            </div>
            <div>
              {isMobile && (
                <MetricsInfo
                  title="Liquidity Pool"
                  value="550,000,000 coins"
                  description="Locked liquidity ensures market stability"
                  titleColor="#41CE84"
                  desktop={true}
                  percentage={50}
                />
              )}
              <VerticalMetrics percentage={50}>
                <MetricsInfo
                  title="Liquidity Pool"
                  value="550,000,000 coins"
                  description="Locked liquidity ensures market stability"
                  titleColor="#41CE84"
                />
              </VerticalMetrics>
            </div>
            <div>
              {isMobile && (
                <MetricsInfo
                  title="Ecosystem Utility"
                  value="250,000,000 coins"
                  description="Staking rewards, governance, and transactions"
                  titleColor="#41CE84"
                  desktop={true}
                  percentage={25}
                />
              )}
              <VerticalMetrics percentage={25}>
                <MetricsInfo
                  title="Ecosystem Utility"
                  value="250,000,000 coins"
                  description="Staking rewards, governance, and transactions"
                  titleColor="#41CE84"
                />
              </VerticalMetrics>
            </div>
            <div>
              {isMobile && (
                <MetricsInfo
                  title="Team & Advisors"
                  value="150,000,000 coins"
                  description="Locked for 12-24 months with gradual vesting"
                  titleColor="#41CE84"
                  desktop={true}
                  percentage={15}
                />
              )}
              <VerticalMetrics percentage={15}>
                <MetricsInfo
                  title="Team & Advisors"
                  value="150,000,000 coins"
                  description="Locked for 12-24 months with gradual vesting"
                  titleColor="#41CE84"
                />
              </VerticalMetrics>
            </div>
            <div>
              {isMobile && (
                <MetricsInfo
                  title="Marketing & Partnerships"
                  value="50,000,000 coins"
                  description="Meme campaigns and strategic collaborations"
                  titleColor="#41CE84"
                  desktop={true}
                  percentage={5}
                />
              )}
              <VerticalMetrics percentage={5}>
                <MetricsInfo
                  title="Marketing & Partnerships"
                  value="50,000,000 coins"
                  description="Meme campaigns and strategic collaborations"
                  titleColor="#41CE84"
                />
              </VerticalMetrics>
            </div>
          </div>
        </div>
        <Roadmap />
        <MarqueeSm />
        <Footer />
      </div>
    </main>
  );
}
