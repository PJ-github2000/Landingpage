import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Signdialog from "./Signdialog";
// import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#product', current: true },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Features', href: '#features', current: false },
    { name: 'Contribute', href: '#Contribute', current: false },


]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar z-20">
            <>
                <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/assets/logo/logo1.png'}
                                    alt="/"
                                    width={140} height={90} 
                                />
                                <img
                                    className="hidden object-contain lg:block"
                                    src={'/assets/logo/logo1.png'}
                                    alt="/"
                                    width={140} height={90} 
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block ml-20">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                                'px-3 py-4 text-lg font-normal text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>


                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
