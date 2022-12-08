import "./HomePage.css";

function HomePage() {
  return (
    <div className="bg-black h-screen">

      {/* Header */}
      <div>
        <div className="relative">
          <img 
            src="https://static.wixstatic.com/media/160c7a_9f01d6ef40374d8cad6104ead964e70e~mv2.jpg/v1/fill/w_1351,h_862,fp_0.59_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/160c7a_9f01d6ef40374d8cad6104ead964e70e~mv2.jpg"
            alt=""
            className="object-cover"
          />

          <div className="absolute bottom-0 left-0 inset-0 bg-gray-900 opacity-60"></div>

          <div className="absolute bottom-0 left-0 inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-7xl">TRASHPANDA</h1>

            <h1 className="text-6xl">CUSTOM COMICS</h1>

            <h3 className="text-2xl w-1/2 mt-3 mb-10">Tell your story through your own custom made comic in just a few easy steps</h3>

            <p className="w-1/2">Trashpandacomics is a small business, specializing in custom-made comic strips, posters and books. Since starting out in 2016, we've been working on hundreds of projects with clients from all over the world, and we're proud to say that the satisfaction of our customers remained our top priority over the years!</p>

            <button className="bg-white text-black w-36 h-11 rounded-3xl font-light mt-20 hover:opacity-50 animate-pulse">Get Started</button>
          </div>
        </div>
      </div>

      {/* Info */}

      <div>
        
      </div>

    </div>
  );
}

export default HomePage;
