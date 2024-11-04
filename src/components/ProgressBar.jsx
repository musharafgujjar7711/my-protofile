import React from 'react';

const ProgressBar = ({ percentage }) => {
    // Dynamic styles for the dashed outline
    const dashArray = 100; // Length of the total dash
    const dashOffset = dashArray - (percentage / 100) * dashArray; // Calculate offset based on percentage

    return (
        <div className="relative w-full h-10">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 10">
                <defs>
                    <pattern id="dashed" width="4" height="4" patternUnits="userSpaceOnUse">
                        <line x1="0" y="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect
                    width="100"
                    height="10"
                    fill="none"
                    stroke="gray"
                    strokeWidth="10"
                    strokeDasharray="4"
                />
                <rect
                    width="100"
                    height="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} // Animation for the progress
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                {percentage}
            </div>
        </div>
    );
};

export default ProgressBar;
