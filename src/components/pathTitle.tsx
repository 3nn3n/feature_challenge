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
    <div className={`path-title-root ${className ?? ""}`}>
      <div
        className="path-title-shell"
        style={{
          background: bg ?? tokens.colors.gradientPanel,
          boxShadow: tokens.colors.shadowInsetGlow,
          borderColor: borderColor ?? tokens.colors.borderPrimary,
        }}
      >
        <h2
          className="path-title-heading"
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
