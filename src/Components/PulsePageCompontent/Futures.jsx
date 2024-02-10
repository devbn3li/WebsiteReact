// FeatureSection.jsx
import React from 'react';
import target from '/assets/Premasset/target.png';
import Monitor from '/assets/Premasset/monitor.png';
import target2 from '/assets/Premasset/target2.png';


const features = [
  {
    title: 'Measure accurately',
    description: 'Measure your carbon footprint using state-of-the-art technology, allowing you to easily account for your 3 emissions scopes.',
    imageUrl: target
  },
  {
    title: 'Monitor with ease',
    description: 'Analyze your emissions, set your targets and achieve significant reductions with the help of our experts.',
    imageUrl: Monitor
  },
  {
    title: 'Measure physical & monitary flows',
    description: 'Monetary and physical approaches are complementary, and are essential to thoroughly assess your CO2 emissions.',
    imageUrl: target2
  }
];

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col p-4  max-w-sm aspect-square hover:scale-95 hover:bg-[#02c2ab]/20 rounded-xl transition-all duration-500 cursor-pointer">
      <img src={imageUrl} alt={title} className="mb-4 w-full aspect-square bg-gradient-to-r hover:bg-gradient-to-b hover:scale-95  duration-500  from-[#112b65] to-[#02c2ab] object-contain rounded-lg shadow-lg" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-8 max-w-[580px] inline-block box-border font-extrabold tracking-tight text-[#002e70] sm:text-4xl">
            Your carbon footprint is now 
            <span className='relative inline-block w-[80px] mx-2'>
              <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[75%] text-white z-30">10x</span>
              <svg className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[75%] w-full h-12 z-10' preserveAspectRatio="none" viewBox="0 0 272 53" fill="#002e70" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M262.166 49.9975C240.295 47.3283 218.189 49.3302 196.112 49.5193C166.204 49.7695 136.248 48.4304 106.397 50.9518C86.0238 52.6679 65.6711 52.6623 45.3073 52.9937C38.5203 53.1049 31.6975 51.7136 24.9317 50.6092C19.8161 49.7728 14.6392 51.1152 9.57635 49.5193C5.32327 48.1846 1.77705 10.7115 0.260402 4.80465C-0.480485 1.92298 0.389696 0.504943 2.48731 0.0756401C3.2265 -0.0700561 4.00822 0.02448 4.75931 0.11123C27.0055 2.66926 49.3222 2.21771 71.6084 2.43681C90.6622 2.62254 109.724 2.24774 128.778 1.71166C152.026 1.05992 175.278 0.527187 198.529 0.821916C212.045 0.989856 225.562 2.04866 239.068 1.89073C248.018 1.77951 256.895 3.76365 265.838 2.85833C266.409 2.8087 266.983 2.8558 267.545 2.99846C270.049 3.60127 272.618 41.7106 271.867 43.8938C271.054 46.245 270.294 49.5315 267.508 49.695C265.794 49.794 264.082 49.893 262.166 50.0008"></path></svg>
            </span>
             more accessible.
          </h2>
        </div>

        <div className="flex flex-wrap text-[#002e70] justify-center gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
