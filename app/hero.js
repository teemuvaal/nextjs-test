'use client'

import React, { useEffect } from 'react';
import './canvas.css';
import { Gradient } from "whatamesh";

export default function Hero() {
	useEffect(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	}, []);

    return (
        <canvas id="gradient-canvas" data-transition-in />
    );
}
