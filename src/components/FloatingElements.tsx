const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Emoji floating elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 opacity-20 float-gentle text-2xl" style={{ animationDelay: '1s' }}>🍃</div>
      <div className="absolute top-1/3 right-20 w-6 h-6 opacity-20 float-gentle text-xl" style={{ animationDelay: '3s' }}>🦋</div>
      <div className="absolute top-2/3 left-1/4 w-10 h-10 opacity-15 float-gentle text-3xl" style={{ animationDelay: '2s' }}>🍃</div>
      <div className="absolute bottom-1/4 right-1/3 w-7 h-7 opacity-20 float-gentle text-2xl" style={{ animationDelay: '4s' }}>🦋</div>
      <div className="absolute top-1/2 right-10 w-8 h-8 opacity-15 float-gentle text-2xl" style={{ animationDelay: '5s' }}>🌺</div>
      <div className="absolute bottom-1/3 left-16 w-6 h-6 opacity-20 float-gentle text-xl" style={{ animationDelay: '6s' }}>🍃</div>
    </div>
  );
};

export default FloatingElements;
