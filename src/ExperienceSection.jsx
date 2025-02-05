import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { name: 'IT', value: 25, fill: '#4ADE80' },
  { name: 'Healthcare', value: 20, fill: '#60A5FA' },
  { name: 'Education', value: 15, fill: '#F472B6' },
  { name: 'Retail', value: 30, fill: '#FBBF24' },
  { name: 'Finance', value: 10, fill: '#A78BFA' },
];

function ExperienceSection() {
  return (
    <div className="bg-[--bg-color] py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[--primary-color] mb-8">
          Industry Experience
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            <LabelList dataKey="name" position="outside" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExperienceSection;

