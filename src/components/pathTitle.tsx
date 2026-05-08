type PathTitleProps = {
  title: string;
  color?: string;
  bg?: string;
  className?: string;
  borderColor?: string;
};

const PathTitle = ({ title, color, bg, className, borderColor }: PathTitleProps) => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor: borderColor ?? "#4F93FF",
          boxShadow: "0 0 0 1px rgba(79,147,255,0.35), 0 0 18px rgba(79,147,255,0.25)",
          background:
            "linear-gradient(180deg, rgba(56,102,179,0.35) 0%, rgba(43,74,143,0.28) 100%)",
        }}
        className={`${className} opacity-0 rounded-[12px] border p-[0.10rem] backdrop-blur-sm`}
      >
        <div
          className="w-[130px] sm:w-[150px] md:w-[165px] h-[64px] sm:h-[72px] md:h-[82px] rounded-[8px] border border-[#4F93FF] flex items-center justify-center px-3 sm:px-4"
          style={{
            background:
              bg ??
              "radial-gradient(circle at 50% 0%, rgba(45,102,196,0.35), rgba(10,20,65,0.95) 62%)",
            boxShadow: "inset 0 0 18px rgba(16,66,163,0.35)",
          }}
        >
          <h2
            className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.08em] uppercase"
            style={{
              color: color ?? "#E8F2FF",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PathTitle;