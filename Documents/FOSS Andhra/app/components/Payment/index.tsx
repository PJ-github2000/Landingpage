import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {

    return (
            <div className="mx-auto max-w-7xl pt-20  px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-2'>
                <div className='col-span-4 relative'>
    {/* <Image 
        src="/assets/payment/payment.jpeg" 
        alt="nothing" 
        className="bg-cover rounded-lg mix-blend-screen" 
        width={300} 
        height={200} 
    /> */}
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white to-transparent rounded-lg"></div>
</div>
                    <div className='col-span-8 flex flex-col justify-center mb-32'>
                        <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Now its time to change Vision</h2>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>FOSS Andhra is committed to creating an equitable digital future by promoting transparency, inclusivity, and innovation, while ensuring sustainability in technology solutions that are accessible and adaptable to all communities.</h3>
                        <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                            Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Payment;
