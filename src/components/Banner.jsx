import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/LXrJd8qR/cow1.jpg')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-3 text-white flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-5xl">
            Find Your Perfect Qurbani Animal
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            verified cows & goats from trusted sellers
          </p>

          <div className="flex gap-4">
            <Link href="/animals">
              <Button className="btn btn-outline rounded-full">
                Browse...
              </Button>
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;