import React from 'react';

interface SvgTextLogoProps {
  text: string;
  fontSize?: number;
  fontWeight?: number | string;
  fill?: string;
  className?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  fontSize = 24,
  fontWeight = 'bold',
  fill = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      width="auto"
      height={fontSize}
      viewBox={`0 0 ${text.length * fontSize * 0.6} ${fontSize}`}
      className={className}
    >
      <text
        x="0"
        y={fontSize * 0.75}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
