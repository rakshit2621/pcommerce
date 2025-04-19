// src/components/Background.tsx
const Background = () => {
    const orbs = Array.from({ length: 7 });
    const colors = [
      "bg-blue-400",
      "bg-purple-400",
      "bg-pink-400",
      "bg-cyan-400",
      "bg-orange-400",
      "bg-green-400",
      "bg-yellow-400",
    ];
  
    return (
      <div className="fixed inset-0 w-full h-full bg-black ">
        {/* Glassy Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />
  
        {/* Glowing Orbs */}
        {orbs.map((_, index) => (
          <div
            key={index}
            className={`absolute w-48 h-48 opacity-70 blur-[150px] rounded-full ${colors[index % colors.length]}`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          />
        ))}
      </div>
    );
  };
  
  export default Background;
  