import Image from "next/image";
import Link from "next/link";
import MoveRight, { MoveRightIcon }  from "lucide-react"


const FreeAndOpenSource = () => {
  return (
    <div id="product">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20">
          <div className="col-span-4 flex justify-center">
            <Image
              src="/assets/people/FOSS.jpeg"
              alt="nothing"
              className="bg-cover rounded-lg"
              width={400}
              height={300}
            />
          </div>

          <div className="col-span-8 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
              Why FREE and OPEN source
            </h1>
            <p className="text-black text-md font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0">
              Inspired by the Free Software movement, we empower education with
              open-source tools that ensure freedom, transparency, and
              adaptability. Through decentralized technologies and training,
              schools enhance teaching and learning, fostering innovation,
              autonomy, and sustainable growth in a collaborative environment.
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-[#005fa0]">
                Accessible and Affordable
              </h3>
              <p className="text-sm text-[#4b5563]">
                Open-source technology removes licensing fees and complex
                contracts, offering affordable solutions for small businesses,
                nonprofits, and local communities, ensuring inclusivity.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-[#005fa0]">
                Customizable and Scalable
              </h3>
              <p className="text-sm text-[#4b5563]">
                Our open-source solutions adapt to your needs, enabling
                customization and seamless scalability as your organization
                grows, regardless of its stage.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-[#005fa0]">
                Community-Driven and Transparent
              </h3>
              <p className="text-sm text-[#4b5563]">
                Powered by a global developer community, open-source tools are
                secure, reliable, and consistently updated, ensuring
                transparency and long-term sustainability.
              </p>
            </div>
            <Link
              href={"/"}
              className="text-[#005fa0] text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0"
            >
              Learn more{" "}
              {/* <Image
                src="/assets/people/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              /> */}
              <MoveRightIcon/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAndOpenSource;
