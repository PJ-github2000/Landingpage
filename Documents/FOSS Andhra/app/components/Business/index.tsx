import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Make better business decisions with FOSS.</h2>
                    <h3 className='text-md leading-6 sm:leading-7 text-[#4b5563] my-4'>FOSS Andhra was founded with a singular vision: to promote
                    Free and Open-Source Software (FOSS) and Free and
                    Open-Source Hardware (FOSH) for the digital transformation
                    of Andhra Pradesh. Our mission is to democratize technology,
                    making it accessible, affordable, and open to everyone.</h3>
                    <h3 className='text-md leading-6 sm:leading-7 text-[#4b5563] my-4'>Whether it's revolutionizing public services or empowering
                    underprivileged communities, we believe that open-source
                    solutions hold the key to building a more inclusive and
                    innovative society.</h3>
                    <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                    Learn More About Our Projects
                    <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>

            </div>
        </div>

    )
}

export default Business;
