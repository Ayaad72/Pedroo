import Marquee from "react-fast-marquee";

export default function MarqueeSm() {
  const MarqueeItem = () => (
    <>
      <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        PEDROCOIN
      </span>
      <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        ×
      </span>
      <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        AWKWARDLY EPIC
      </span>
      <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        ×
      </span>
    </>
  );

  return (
    <div className="bg-[#8B1D1D] overflow-hidden whitespace-nowrap h-[64px] flex items-center">
      <Marquee gradient={false} speed={30}>
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </Marquee>
    </div>
  );
}
