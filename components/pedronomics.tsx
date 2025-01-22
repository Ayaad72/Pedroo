import useIsMobile from "@/hooks/useIsMobile";

export default function Pedronomics() {
  const isMobile = useIsMobile();

  return (
    <div className="w-[100%] min-h-[400px] bg-gradient-to-br  flex items-center">
      <div
        className="w-[80%] container mx-auto px-4 md:px-6 lg:px-0"
        style={
          {
            width: !isMobile && "100%",
          } as any
        }
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            !isMobile ? "pb-16" : "pb-28"
          } border-b-2 ${!isMobile ? "border-[#41CE84]" : "border-white"}`}
        >
          <h1 className="text-[#41CE84] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            PEDRONOMICS
          </h1>
          <p className="text-[#41CE84] text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            PedroCoin's hybrid tokenomics strategy ensures sustainability,
            transparency, and trust.
          </p>
        </div>
      </div>
    </div>
  );
}
