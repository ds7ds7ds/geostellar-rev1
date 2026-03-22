/**
 * GeoStellar Bore Pyramid Icon
 * Brand mark derived from the business card design.
 * Represents the wellhead (top circle) with bore lines fanning out
 * to drill points below — vertical, inclined, and collocated drilling.
 */

const BorePyramid = ({
  size = 40,
  className = '',
  topColor = 'currentColor',
  lineColor = 'currentColor',
  dotColor = 'currentColor',
  lineOpacity = 0.5,
  dotOpacity = 0.25,
  topOpacity = 0.9,
  animated = false
}) => {
  return (
    <svg
      viewBox="0 0 46 46"
      fill="none"
      width={size}
      height={size}
      className={`${animated ? 'animate-float' : ''} ${className}`}
      aria-label="GeoStellar bore pyramid icon"
    >
      {/* Wellhead — top circle */}
      <circle cx="23" cy="5" r="3.5" fill={topColor} opacity={topOpacity} />

      {/* Bore lines fanning out from wellhead */}
      <line x1="23" y1="8.5" x2="10" y2="40" stroke={lineColor} strokeWidth="1.2" strokeLinecap="round" opacity={lineOpacity} />
      <line x1="23" y1="8.5" x2="16.5" y2="41.5" stroke={lineColor} strokeWidth="1.2" strokeLinecap="round" opacity={lineOpacity} />
      <line x1="23" y1="8.5" x2="23" y2="42.5" stroke={lineColor} strokeWidth="1.2" strokeLinecap="round" opacity={lineOpacity} />
      <line x1="23" y1="8.5" x2="29.5" y2="41.5" stroke={lineColor} strokeWidth="1.2" strokeLinecap="round" opacity={lineOpacity} />
      <line x1="23" y1="8.5" x2="36" y2="40" stroke={lineColor} strokeWidth="1.2" strokeLinecap="round" opacity={lineOpacity} />

      {/* Bore endpoints — drill points */}
      <circle cx="10" cy="40" r="1.5" fill={dotColor} opacity={dotOpacity} />
      <circle cx="16.5" cy="41.5" r="1.5" fill={dotColor} opacity={dotOpacity} />
      <circle cx="23" cy="42.5" r="1.5" fill={dotColor} opacity={dotOpacity} />
      <circle cx="29.5" cy="41.5" r="1.5" fill={dotColor} opacity={dotOpacity} />
      <circle cx="36" cy="40" r="1.5" fill={dotColor} opacity={dotOpacity} />
    </svg>
  )
}

export default BorePyramid
