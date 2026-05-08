import { tokens } from "@/tokens/colors";

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
        className="w-[130px] sm:w-[140px] md:w-[150px] h-[32px] sm:h-[36px] md:h-[42px] rounded-[18px] border border-(--color-border-primary) flex items-center justify-center px-3 sm:px-4"
        style={{
          background:
            bg ??
            tokens.colors.gradientPanel,
          boxShadow: tokens.colors.shadowInsetGlow,
          borderColor: borderColor ?? tokens.colors.borderPrimary,
        }}
      >
        <h2
          className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.08em] uppercase"
          style={{
            color: color ?? tokens.colors.textPrimary,
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PathTitle;