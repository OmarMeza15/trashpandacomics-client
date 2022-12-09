import "./HomePage.css";
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context";

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext)

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

            <h3 className="text-2xl w-1/3 mt-3 mb-10 leading-relaxed">Tell your story through your own custom made comic in just a few easy steps</h3>

            <p className="w-1/2 leading-loose">Trashpandacomics is a small business, specializing in custom-made comic strips, posters and books. Since starting out in 2016, we've been working on hundreds of projects with clients from all over the world, and we're proud to say that the satisfaction of our customers remained our top priority over the years!</p>

            {!isLoggedIn && (
              <button className="bg-white text-black w-36 h-11 rounded-3xl font-light mt-20 hover:opacity-50 animate-pulse">Get Started</button>
            )}
          </div>
        </div>
      </div>
      
      {isLoggedIn && (
        <div className="bg-black text-white">

          {/* Info */}
          <div className="h-screen flex flex-col content-center justify-center">
            <h1 className="text-4xl mb-20">HOW IT WORKS</h1>

            {/* Steps */}
            <div className="flex justify-center gap-16">

              {/* Step 1 */}
              <div className="w-1/4">
                <h2 className="text-xl mb-3">STEP 1</h2>
                <p className="font-light leading-loose">Pick a package - our packages range from short, 4-panel comic strips, to several pages with the cover included. Depending on the length of your story, the optimal page count can vary.</p>
              </div>

              {/* Step 2 */}
              <div className="w-1/4">
                <h2 className="text-xl mb-3">STEP 2</h2>
                <p className="font-light leading-relaxed">Gather your reference photos and create a little brief of the story.  This will be used as a base for the storyline, but don't worry, writing skills are not required! We have our own professional writers to do the work for you!</p>
              </div>

              {/* Step 3 */}
              <div className="w-1/4">
                <h2 className="text-xl mb-3">STEP 3</h2>
                <p className="font-light leading-relaxed">Get in touch with us to discuss details, exchange ideas, and schedule your project, before submitting your order. We're always happy to answer all your questions personally before you commit to us!</p>
              </div>
            </div>

            {/* Button to get in contact */}
            <button className="bg-black border border-white text-white w-36 h-11 rounded-3xl font-light hover:bg-white hover:text-black mt-20 place-self-center transition ease-in-out duration-500">
              Get in Touch!
            </button>
          </div>

          {/*  */}

        </div>
      )}

      <script src="../path/to/flowbite/dist/flowbite.js"></script>

    </div>
  );
}

export default HomePage;
