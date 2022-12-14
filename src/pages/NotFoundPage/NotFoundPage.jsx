import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="bg-black h-screen text-white">
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div class="flex flex-col justify-center content-center ">
                <div className="flex justify-center mb-10">
                    <img 
                      src="https://i.ibb.co/G9DC8S0/404-2.png" 
                      alt="404"
                    />
                </div>
                <div class="">
                    <div class="">
                        <h1 class="my-2 font-bold text-2xl">
                            Looks like you've found the
                            doorway to the great nothing
                        </h1>
                        <p class="my-2">Sorry about that! Please visit our hompage to get where you need to go.</p>
                        <Link to="/">
                          <button
                            className="bg-white border border-white text-black w-1/4 h-11 mt-5 rounded-3xl font-light hover:bg-black hover:text-white transition ease-in-out duration-500"
                            >
                            Home
                          </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
