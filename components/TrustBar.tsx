'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
    "MAGNA VIRES",
    "ALTIUS ORDO",
    "CAELUM NATURA",
    "NOVA AUXILIUM",
    "AUREA SAXA",
    "FLUMEN LAPIS",
    "ITER NORD",
    "FORTIS ARBOR",
    "ORBIS SILVA",
    "MAGNA VIRES", // Repeat for seamless loop
    "ALTIUS ORDO",
    "CAELUM NATURA",
    "NOVA AUXILIUM",
    "AUREA SAXA",
];

export const TrustBar: React.FC = () => {
    return (
        <div className="bg-white border-b border-gray-100 py-8 overflow-hidden relative">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-6">
                <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-text-muted text-center md:text-left">
                    Fides Inter Titanos
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex gap-16 md:gap-24 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {CLIENTS.map((client, index) => (
                        <span
                            key={index}
                            className="font-display font-black text-2xl md:text-3xl text-gray-200 uppercase tracking-tighter hover:text-green-800 transition-colors cursor-default select-none"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    className="flex gap-16 md:gap-24 whitespace-nowrap absolute top-0 left-full pl-16 md:pl-24"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {CLIENTS.map((client, index) => (
                        <span
                            key={`dup-${index}`}
                            className="font-display font-black text-2xl md:text-3xl text-gray-200 uppercase tracking-tighter hover:text-green-800 transition-colors cursor-default select-none"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
