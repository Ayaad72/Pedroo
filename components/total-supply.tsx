export default function TotalSupply() {
  return (
    <div className="relative w-[600px] h-[600px] ">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="total-supply-bg w-[450px] h-[450px] rounded-full bg-gradient-to-r from-white/30 to-transparent backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="total-supply-bg-inner w-[350px] h-[350px] rounded-full bg-gradient-to-r backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full   flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-3xl font-light tracking-[0.2em] mb-2">
                TOTAL SUPPLY
              </h1>
              <p className="text-4xl font-light tracking-wider">1 BILLION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
