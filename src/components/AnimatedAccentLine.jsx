export function AnimatedAccentLine({ height = 6, speed = 6, colors = ["#ff7300", "#805ad5"], backgroundOpacity = 0.06 }) {
  const grad = `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${colors[0]} 20%, ${colors[1]} 40%, ${colors[0]} 60%, ${colors[1]} 80%, rgba(255,255,255,0) 100%)`;
  return (
    <div className="relative mt-8 w-full overflow-hidden" style={{ height }}>
      <div className="absolute inset-0" style={{ background: `rgba(255,255,255,${backgroundOpacity})` }} />
      <div
        className="absolute inset-0 animate-[stripeMove_var(--spd)_linear_infinite] bg-[length:200%_100%]"
        style={{
          backgroundImage: grad,
          ['--spd']: `${speed}s`,
        }}
      />
      <style>{`@keyframes stripeMove { from { background-position: 0% 0; } to { background-position: 200% 0; } }`}</style>
    </div>
  );
}