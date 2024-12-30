import { HovermeButton } from "@/app/ui/button";
import { InteractiveHoverButton } from "@/app/ui/interactive-button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-header h-screen">
      <div className="mx-auto h-screen max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid my-auto h-full grid-cols-1 lg:grid-cols-12">
          <div className="col-span-12 my-auto flex flex-col justify-evenly relative">
            <Image
              src="/assets/banner/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-114px] right-[51px]"
            />
            <Image
              src="/assets/banner/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-114px] right-[51px] hidden sm:block"
            />
            <h1 className="mx-auto max-w-6xl italic font-display text-5xl font-semibold tracking-tight text-[#005da8] text-center sm:text-6xl  md:text-[4rem] lg:text-[5.8rem]">
              Ctrl + Alt +{" "}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-[#005ea5]"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative text-[#a5da49] hover:text-rose-600">Transform</span>
              </span>{" "}
            </h1>{" "}
            <p className="text-black opacity-75 text-md font-normal sm:text-lg lg:text-xl text-center pt-8">
            Join us in transforming education, governance, and public welfare through Free and open source software and hardware.
            </p>
            <div className="pt-8 mx-auto flex flex-wrap gap-10 justify-center lg:mx-0">
              {/* <button className="text-white text-xl font-medium py-3 px-9 rounded-2xl transition duration-150 ease-in-out bg-electricblue hover:text-white">
                Get started
              </button> */}
              <HovermeButton />
              <button className="md:text-xl text-md py-2 px-6 rounded-md">
                Get Invloved
              </button>
              {/* <InteractiveHoverButton /> */}
            </div>
          </div>

          {/* <div className="col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0">
            <Image
              src="/assets/banner/banner.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
