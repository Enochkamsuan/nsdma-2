import { conditions } from "../weatherData/page";

export default function WeatherStationMarker({ district, active, onActivate, onDeactivate }) {
  const color = conditions[district.condition]?.color ?? "var(--color-aqua)";

  return (
    <g
      tabIndex={0}
      role="button"
      aria-label={`${district.name}: ${district.temp} degrees, ${district.condition}, humidity ${district.humidity} percent, rainfall ${district.rainfall} millimetres`}
      className="cursor-pointer outline-none transition-transform duration-300 [transform-fill] [origin-center] focus-visible:filter-[drop-shadow(0_0_6px_var(--color-primary))]"
      onMouseEnter={() => onActivate(district)}
      onMouseLeave={onDeactivate}
      onFocus={() => onActivate(district)}
      onBlur={onDeactivate}
      style={{ transform: active ? "scale(1.25)" : "scale(1)", transformBox: "fill-box", transformOrigin: "center" }}
    >
      {/* pulsing halo */}
      <circle cx={district.x} cy={district.y} r="9" fill={color} opacity="0.5" className="animate-marker-pulse [transform-fill] [origin-center]" />
      {/* outer ring */}
      <circle cx={district.x} cy={district.y} r="9" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
      {/* core dot */}
      <circle cx={district.x} cy={district.y} r="4.5" fill={color} stroke="white" strokeWidth="1.2" />
      {/* district label */}
      <text
        x={district.x}
        y={district.y - 14}
        textAnchor="middle"
        className="pointer-events-none select-none fill-foreground font-(--font-sans text-[11px] font-semibold"
        style={{ opacity: active ? 1 : 0.78 }}
      >
        {district.name}
      </text>
    </g>
  );
}
