import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-950 py-24 sm:py-10">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-10 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#226d82] to-[#98d0df] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-sky-200">Grow With Us</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">A better workflow</h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
          Designed to empower learners and educators alike, our LMS brings cutting-edge technology to education. Engage in interactive learning, track progress, and achieve your goals with ease, all in one place.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <figure className="border-l border-sky-200 pl-8">
              <blockquote className="text-base font-semibold leading-8 tracking-wide text-sky-200">
                <p>
                    "Users rave about the seamless navigation and interactive tools that make learning more engaging and efficient. Our LMS is praised for enhancing productivity and simplifying the teaching process for educators."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-cyan-700">Brenna Goyette</div>
                  <div className="text-gray-600">@brenna</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-sm leading-7 text-gray-700 lg:col-span-7">
            <p>
            Our LMS offers a complete solution for creating, managing, and delivering courses, with tools for tracking progress, interactive learning, and automated assessments. Students and educators can engage through virtual classrooms, discussion forums, and collaborative tools, while customizable learning paths, certifications, and real-time analytics ensure an optimized learning experience, accessible anytime, anywhere.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-sky-200" />
                <span className='text-base'>
                  <strong className="font-semibold text-cyan-700">Level of Learning :</strong> We here implement the stages of learning like K-12 for  "5 th - 10 + 2" , Higher Education for Btech Graduates and Profeessional Education for Jobs Aspirants
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-sky-200" />
                <span>
                  <strong className="font-semibold text-cyan-700">VideoNote :</strong> It will make you ready for the test like Moketest. With the topics you perfect on upon, if you wwant to teach any subject here you can teach the things and upload and earn badges for your viewers.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-sky-200" />
                <span>
                  <strong className="font-semibold text-cyan-700">Integration & API Support :</strong>Seamless integration with existing systems (HR, CRM, ERP). API access for developers to expand functionality. Plug-ins for third-party tools like Zoom, Slack, or Google Classroom.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
