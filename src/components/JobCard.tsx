import React from 'react';
import { MapPin, Clock, Briefcase, Star } from 'lucide-react';
import { Job } from '../types/Job';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'remote':
        return 'bg-green-100 text-green-800';
      case 'freelance':
        return 'bg-blue-100 text-blue-800';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'design':
        return 'bg-pink-100 text-pink-800';
      case 'marketing':
        return 'bg-orange-100 text-orange-800';
      case 'it':
        return 'bg-indigo-100 text-indigo-800';
      case 'admin':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-200"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
              {job.title}
            </h3>
            {job.isNew && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                NEW
              </span>
            )}
          </div>
          <p className="text-gray-600 font-medium mb-1">{job.company}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{new Date(job.postedDate).toLocaleDateString('id-ID')}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium text-gray-600">4.8</span>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(job.type)}`}>
          {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(job.category)}`}>
          {job.category}
        </span>
      </div>

      <div className="flex justify-between items-center">
        {job.salary && (
          <div className="flex items-center gap-1 text-green-600">
            <Briefcase className="w-4 h-4" />
            <span className="font-semibold text-sm">{job.salary}</span>
          </div>
        )}
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default JobCard;