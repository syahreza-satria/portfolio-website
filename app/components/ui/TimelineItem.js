import React from 'react';

const timelineItem = ({ title, subtitle, period, location, details, isFirst = false }) => (
    <div className="relative pl-12 pb-12">
        {/* Titik pada Garis Waktu */}
        <div className="absolute left-0 top-1.5">
            <div
                className={`h-6 w-6 rounded-full border-4 border-gray-900 ${
                    isFirst ? 'bg-sky-400 ring-4 ring-sky-400/30' : 'bg-gray-600'
                }`}
            ></div>
        </div>
        
        {/* Konten */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <h4 className="text-lg font-medium text-sky-400">{subtitle}</h4>
                <p className="text-gray-500 text-sm mt-1">{location}</p>
            </div>
            <p className="text-gray-400 text-sm mt-1 sm:mt-0 sm:text-right">{period}</p>
        </div>
        
        <ul className="list-disc list-outside ml-4 text-gray-300 space-y-2">
            {details.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default timelineItem;