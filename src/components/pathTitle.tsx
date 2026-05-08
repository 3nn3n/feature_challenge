type PathTitleProps = {
  title: string;
  color?: string;
  bg?: string;
  className?: string;
  borderColor?: string;
};

const PathTitle = ({ title, color, bg, className, borderColor }: PathTitleProps) => {
  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <div
        className="w-[130px] sm:w-[140px] md:w-[150px] h-[32px] sm:h-[36px] md:h-[42px] rounded-[18px] border border-[#4F93FF] flex items-center justify-center px-3 sm:px-4"
        style={{
          background:
            bg ??
            "radial-gradient(circle at 50% 0%, rgba(45,102,196,0.35), rgba(10,20,65,0.95) 62%)",
          boxShadow: "inset 0 0 18px rgba(16,66,163,0.35)",
          borderColor: borderColor ?? "#4F93FF",
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
  );
};

export default PathTitle;