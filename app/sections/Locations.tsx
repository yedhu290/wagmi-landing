'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { BiSupport, BiMessageSquareDetail, BiMap, BiPhoneCall } from 'react-icons/bi';
import Button from '../components/Button';
import { useModal } from '../context/ModalContext';

import type { MapProps } from '../components/Map';
import { locations, primaryLocation } from '../data/locations';

// Dynamically import Map to avoid SSR issues
const Map = dynamic<MapProps>(() => import('../components/Map'), {
    loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />,
    ssr: false,
});

const contactInfo = [
    {
        icon: BiSupport,
        title: 'Chat to customer services',
        subtitle: 'Need help? Reach out to us anytime.',
        link: 'admin@wagmiworkspace.com',
        href: 'mailto:admin@wagmiworkspace.com',
    },
    {
        icon: BiMessageSquareDetail,
        title: 'Chat to our sales',
        subtitle: 'Interested in booking? Let’s talk.',
        link: 'admin@wagmiworkspace.com',
        href: 'mailto:admin@wagmiworkspace.com',
    },
    {
        icon: BiMap,
        title: 'Visit us',
        subtitle: 'Drop by our main office.',
        link: 'AN Square, Edappally, Kochi',
        href: `https://www.google.com/maps/search/?api=1&query=${primaryLocation.coords[0]},${primaryLocation.coords[1]}`,
    },
    {
        icon: BiPhoneCall,
        title: 'Call us',
        subtitle: 'Mon-Sat from 9am to 6pm.',
        link: '+91 81299 88389',
        href: 'tel:+918129988389',
    },
];


const Locations = () => {
    const { openContactModal } = useModal();
    const activeLocation = locations[0]; // Center map on the first location

    return (
        <section
            id="location"
            className="bg-[url('/img/CTASection.png')] bg-cover bg-center py-16 md:py-24 relative"
        >
            {/* <div className="absolute inset-0 bg-white/90" /> Removed overlay as requested */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">
                        Visit Wagmi Workspace and Experience a Better Work Environment
                    </h2>
                    <p className="text-gray-600 font-medium text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Schedule a free tour and see how our professional coworking space can
                        support your work.
                    </p>

                    <div className="flex justify-center">
                        <Button variant="primary" onClick={openContactModal}>
                            Book a seat
                        </Button>
                    </div>
                </motion.div>

                {/* Contact Grid & Map Container */}
                <div className="bg-white p-6 md:p-8">
                    <div className="overflow-hidden">
                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-8 md:p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-colors ${
                                        item.title === 'Call us' ? 'flex' : 'hidden md:flex'
                                    }`}
                                >
                                    <div className="w-12 h-12 border border-primary/20 bg-primary/5 flex items-center justify-center text-primary mb-6">
                                        <item.icon className="text-2xl" />
                                    </div>
                                    <h3 className="text-dark font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm mb-2">{item.subtitle}</p>
                                    <a
                                        href={item.href}
                                        className="text-dark font-bold underline decoration-primary/50 hover:decoration-primary transition-all"
                                    >
                                        {item.link}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Map Section */}
                        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-sm z-0">
                            <Map center={activeLocation.coords} zoom={12} locations={locations} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
