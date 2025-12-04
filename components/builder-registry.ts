'use client';

import { Builder } from '@builder.io/react';
import { Hero } from './Hero';
import { ServicePathway } from './ServicePathway';

Builder.registerComponent(Hero, {
    name: 'Hero',
    inputs: [
        { name: 'title', type: 'string', defaultValue: 'Rotating and Static Equipment Specialists' },
        { name: 'description', type: 'longText', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus in urna a gravida, cum inceptos hymenaeos.' },
        {
            name: 'primaryCta',
            type: 'object',
            subFields: [
                { name: 'label', type: 'string', defaultValue: 'Mitte Peritum' },
                { name: 'href', type: 'url', defaultValue: '#contact' },
            ],
        },
        {
            name: 'secondaryCta',
            type: 'object',
            subFields: [
                { name: 'label', type: 'string', defaultValue: 'Explora Facultates' },
                { name: 'href', type: 'url', defaultValue: '#services' },
            ],
        },
        { name: 'videoSrc', type: 'file', allowedFileTypes: ['mp4', 'webm'], defaultValue: '/videos/hero-background-orig.mp4' },
    ],
});

Builder.registerComponent(ServicePathway, {
    name: 'ServicePathway',
    inputs: [
        { name: 'title', type: 'string', defaultValue: 'Sectorem Tuae Pete' },
        { name: 'subtitle', type: 'string', defaultValue: 'Iter Servitii' },
        {
            name: 'sectors',
            type: 'list',
            subFields: [
                { name: 'title', type: 'string' },
                { name: 'focus', type: 'string' },
                { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
                { name: 'link', type: 'url' },
            ],
            defaultValue: [
                {
                    title: "Metalla & Mineralia",
                    focus: "Molendina, Conterentes, Vehicula",
                    image: "/images/IMG_0442.JPEG",
                    link: "/industries/mining"
                },
                {
                    title: "Oleum & Aer",
                    focus: "Pulsus Bituminis, Gradus Superior",
                    image: "/images/IMG_0448.JPEG",
                    link: "/industries/oil-and-gas"
                },
            ],
        },
    ],
});
