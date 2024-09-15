import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: ' Course Management',
      description: 'Easily create, organize, and manage courses, lessons, and modules.Customizable course structures with support for multimedia content',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Progress Tracking & Analytics',
      description: 'Monitor student progress with detailed reports and analytics. Monitor student progress with detailed reports and analytics.',
      icon: LockClosedIcon,
    },
    {
      name: 'Assessment & Quizzes',
      description: 'Create and manage quizzes, exams, and assignments. Automated grading and instant feedback.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Interactive Learning Tools',
      description: 'Live chat and discussion forums for students and instructors. Virtual classrooms with video conferencing integration',
      icon: ShieldCheckIcon,
    },
    {
      name: 'User Management & Roles',
      description: 'Multi-level user roles: Admin, Teacher, Student, etc. Access control and permissions management. Single sign-on (SSO) and integration with external platforms.',
      icon: CogIcon,
    },
    {
      name: 'Gamification',
      description: 'Use points, leaderboards, and rewards to motivate learners. Interactive challenges and activities. Boost engagement with game-based learning mechanics.',
      icon: ServerIcon,
    },
  ]
  
  export default function Features() {
    return (
      <div className="relative bg-neutral-950 py-20 sm:py-25 lg:py-30">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-sky-200">Grow faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to Login to our app
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-xl text-gray-500">
          Our LMS is packed with features like course management, real-time progress tracking, interactive assessments, and mobile-friendly access. With gamification, personalized learning paths, and seamless integrations, it empowers both learners and educators to achieve their goals efficiently.
          </p>
          <div className="mt-20">
            <div className=" grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg h-full  bg-neutral-900 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-cyan-700 p-3 shadow-lg">
                          <feature.icon aria-hidden="true" className="h-8 w-8 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-sky-50">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  