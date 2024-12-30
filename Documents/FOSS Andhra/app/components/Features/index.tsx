import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Aboutdata = [
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "Open Access Web",
    paragraph:
      "We are committed to promoting the free exchange of educational resources. By championing open access, we ensure that knowledge is available to everyone.",
    steps: [
      "Free access to educational resources after webhooks",
      "Breaking down financial and geographic barriers",
      "Empowering lifelong learning for all",
    ],
  },
  {
    imgSrc: "/assets/features/signal.svg",
    heading: "Collaboration",
    paragraph:
      "Collaboration is at the heart of our mission. We partner with communities, educators, and developers from around the world to create open-source solutions that benefit everyone.",
    steps: [
      "Partnering with global communities and educators",
      "Sharing resources for collective benefit",
      "Fostering innovation through collaboration",
    ],
  },
  {
    imgSrc: "/assets/features/time.svg",
    heading: "Inclusivity",
    paragraph:
      "We are dedicated to ensuring that our tools and resources are designed to be inclusive and accessible to everyone, regardless of location, financial status, or background.",
    steps: [
      "Accessibility for all learners",
      "Removing financial barriers to education",
      "Ensuring equity in the digital learning space",
    ],
  },
];

const Features = () => {
  return (
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
          Our Mission
        </h3>
        <h5 className="text-black opacity-60 text-lg font-normal text-center">
          We empower Andhra Pradesh with open-source solutions, fostering
          digital transformation, reducing administrative overhead, enhancing
          education, and ensuring equitable access to knowledge through FOSS and
          decentralized technologies.
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="bg-white flex flex-col justify-around rounded-2xl p-5 featureShadow"
            >
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={55}
                height={55}
                className="mb-2"
              />
              <h3 className="text-2xl font-semibold text-black mt-5">
                {item.heading}
              </h3>
              <h4 className="text-md font-normal text-black opacity-50 my-2">
                {item.paragraph}
              </h4>
              <h3 className="text-[#172754] mt-4 font-semibold">
                Key Features:
              </h3>
              <ul className="list-disc ml-5 text-black opacity-70">
                {item.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
              <Link
                href={"/"}
                className="text-electricblue text-md font-medium flex gap-2 pt-4"
              >
                Learn more{" "}
                <Image
                  src="/assets/people/arrow-right.svg"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
