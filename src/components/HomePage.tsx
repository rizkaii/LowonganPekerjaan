import React from 'react';
import { ArrowRight, Users, MapPin, Clock, Star } from 'lucide-react';
import JobCard from './JobCard';
import { Job } from '../types/Job';

interface HomePageProps {
  featuredJobs: Job[];
  onJobClick: (job: Job) => void;
  onViewAllJobs: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ featuredJobs, onJobClick, onViewAllJobs }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl p-8 mx-4 mt-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Temukan Pekerjaan Impian Anda
          </h1>
          <p className="text-lg opacity-90 mb-6 leading-relaxed">
            Platform terpercaya untuk mencari lowongan kerja remote di Indonesia. 
            Bekerja dari rumah dengan gaji kompetitif dan fleksibilitas penuh.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-3">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">100+ Perusahaan</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">100% Remote</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Fleksibel</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Mengapa Memilih KerjaDirumahAja?
        </h2>
        <div className="grid gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lowongan Berkualitas</h3>
                <p className="text-gray-600 text-sm">
                  Semua lowongan telah diverifikasi dan berasal dari perusahaan terpercaya
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Remote</h3>
                <p className="text-gray-600 text-sm">
                  Bekerja dari mana saja tanpa perlu datang ke kantor
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Proses Mudah</h3>
                <p className="text-gray-600 text-sm">
                  Daftar langsung via WhatsApp tanpa ribet dan proses yang panjang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Lowongan Pilihan
          </h2>
          <button
            onClick={onViewAllJobs}
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Lihat Semua
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => onJobClick(job)}
            />
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button
            onClick={onViewAllJobs}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Jelajahi Semua Lowongan
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-4 mb-8">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Siap Memulai Karir Remote?</h3>
          <p className="mb-4 opacity-90">
            Bergabunglah dengan ribuan profesional yang sudah merasakan kebebasan bekerja dari rumah
          </p>
          <button
            onClick={onViewAllJobs}
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Mulai Cari Kerja
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;