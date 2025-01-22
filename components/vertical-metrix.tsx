import useIsMobile from "@/hooks/useIsMobile";

interface VerticalMetricsProps {
  percentage: number;
  children: React.ReactNode;
}

export function VerticalMetrics({
  percentage,
  children,
}: VerticalMetricsProps) {
  const isMobile = useIsMobile();

  const div_height = !isMobile ? 400 : 800;

  const height = Math.round((percentage / 50) * div_height);

  return (
    <div
      className="metrix-container relative w-64 overflow-hidden"
      style={{
        height: !isMobile ? "300px" : height,
        width: !isMobile ? "24rem" : "16rem",
      }}
    >
      <div className="absolute top-0 left-0 w-full p-6 text-[#41CE84] md:hidden">
        <div className="text-6xl font-bold mb-4 text-[#41CE84]">
          {percentage}%
        </div>
        {children}
      </div>
    </div>
  );
}
