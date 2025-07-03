import React from 'react';
import { ArrowLeft, MapPin, Clock, Briefcase, Users, MessageCircle, CheckCircle } from 'lucide-react';
import { Job } from '../types/Job';

interface JobDetailProps {
  job: Job;
  onBack: () => void;
}

const JobDetail: React.FC<JobDetailProps> = ({ job, onBack }) => {
  const handleApply = () => {
    const message = `Halo, saya tertarik dengan lowongan ${job.title} di ${job.company}. Mohon informasi lebih lanjut mengenai proses seleksinya. Terima kasih.`;
    const whatsappUrl = `https://wa.me/${job.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-semibold">Detail Lowongan</h1>
            <p className="text-sm opacity-90">Informasi lengkap pekerjaan</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                <p className="text-lg text-gray-600 font-medium">{job.company}</p>
              </div>
              {job.isNew && (
                <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                  NEW
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{new Date(job.postedDate).toLocaleDateString('id-ID')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>{job.type.charAt(0).toUpperCase() + job.type.slice(1)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="w-4 h-4" />
                <span>{job.category}</span>
              </div>
            </div>

            {job.salary && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-green-700">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-semibold">Gaji: {job.salary}</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi Pekerjaan</h3>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Persyaratan</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.benefits && job.benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefit & Fasilitas</h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontak HR</h3>
              <p className="text-gray-600">{job.contactHR}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <button
          onClick={handleApply}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Daftar via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default JobDetail;