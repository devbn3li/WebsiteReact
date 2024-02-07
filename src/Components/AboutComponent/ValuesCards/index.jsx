import React from 'react';

const dataValue = [
  {
    title: 'Doing the right thing',
    description: 'At LevelUp, we prioritize ethical behavior and integrity. We believe in making decisions that align with our values and have a positive impact on those around us.'
  },
  {
    title: 'Innovating for a better tomorrow',
    description: 'We are committed to innovation as a means of driving positive change. By exploring new ideas and technologies, we aim to create a brighter future for our customers, employees, and communities.'
  },
  {
    title: 'Aiming high',
    description: 'At LevelUp, we set ambitious goals and push the boundaries of what’s possible. We believe in continuous improvement and always strive to exceed expectations.'
  },
  {
    title: 'Making a positive impact',
    description: 'Social responsibility is core to our identity. We use our resources and influence to make a meaningful difference in the world, enriching lives and leaving a lasting legacy of positive change.'
  },
  {
    title: 'Respecting each other',
    description: 'We value diversity and foster an inclusive environment where everyone feels respected and valued. By celebrating unique perspectives and talents, we create a culture of collaboration and mutual respect.'
  },
  {
    title: 'Growing together',
    description: 'Collaboration is key to our success. We believe in supporting each other’s growth and development, learning from our experiences, and working together towards shared goals.'
  }
];

const Card = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-2xl !font-extrabold text-[#112b65]  mb-4">{title}</h3>
    <p className="text-lg text-[#112b65]">{description}</p>
  </div>
);

const index = () => {
  return (
    <div className="relative flex h-full flex-col justify-center  w-full">
      <div className="mx-auto pt-12 h-full max-w-[1400px] p-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataValue.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
