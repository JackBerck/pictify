export default function SearchBar() {
  return (
    <div className="flex flex-col justify-center max-w-screen-sm">
      {/* Tambahkan style CSS langsung di sini */}
      <style>
        {`
            .glow {
              top: -10%;
              left: -10%;
              width: 120%;
              height: 120%;
              border-radius: 100%;
            }
            
            .glow-1 {
              animation: glow1 4s linear infinite;
            }
            
            .glow-2 {
              animation: glow2 4s linear infinite;
              animation-delay: 100ms;
            }
            
            .glow-3 {
              animation: glow3 4s linear infinite;
              animation-delay: 200ms;
            }
            
            .glow-4 {
              animation: glow4 4s linear infinite;
              animation-delay: 300ms;
            }
            
            @keyframes glow1 {
              0% {
                transform: translate(10%, 10%) scale(1);
              }
              25% {
                transform: translate(-10%, 10%) scale(1);
              }
              50% {
                transform: translate(-10%, -10%) scale(1);
              }
              75% {
                transform: translate(10%, -10%) scale(1);
              }
              100% {
                transform: translate(10%, 10%) scale(1);
              }
            }
            
            @keyframes glow2 {
              0% {
                transform: translate(-10%, -10%) scale(1);
              }
              25% {
                transform: translate(10%, -10%) scale(1);
              }
              50% {
                transform: translate(10%, 10%) scale(1);
              }
              75% {
                transform: translate(-10%, 10%) scale(1);
              }
              100% {
                transform: translate(-10%, -10%) scale(1);
              }
            }
            
            @keyframes glow3 {
              0% {
                transform: translate(-10%, 10%) scale(1);
              }
              25% {
                transform: translate(-10%, -10%) scale(1);
              }
              50% {
                transform: translate(10%, -10%) scale(1);
              }
              75% {
                transform: translate(10%, 10%) scale(1);
              }
              100% {
                transform: translate(-10%, 10%) scale(1);
              }
            }
            
            @keyframes glow4 {
              0% {
                transform: translate(10%, -10%) scale(1);
              }
              25% {
                transform: translate(10%, 10%) scale(1);
              }
              50% {
                transform: translate(-10%, 10%) scale(1);
              }
              75% {
                transform: translate(-10%, -10%) scale(1);
              }
              100% {
                transform: translate(10%, -10%) scale(1);
              }
            }
          `}
      </style>

      <div className="relative w-full">
        <div className="overflow-hidden z-0 rounded-full relative p-2 md:p-3">
          <form
            role="form"
            className="relative flex z-50 bg-white-base rounded-full text-base lg:text-lg"
          >
            <input
              type="text"
              placeholder="Search your imagination..."
              className="rounded-full flex-1 px-4 py-2 md:px-6 md:py-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-indigo-500 text-white rounded-full font-semibold px-4 py-2 md:px-8 md:py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
              Search
            </button>
          </form>
          <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
          <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
          <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
          <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
        </div>
      </div>
    </div>
  );
}
