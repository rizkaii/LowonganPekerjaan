import React, { useMemo } from 'react';
import { Briefcase, Filter } from 'lucide-react';
import JobCard from './JobCard';
import CategoryDropdown from './CategoryDropdown';
import { Job } from '../types/Job';

interface JobsPageProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
  searchQuery: string;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const JobsPage: React.FC<JobsPageProps> = ({ 
  jobs, 
  onJobClick, 
  searchQuery, 
  selectedCategory,
  onCategorySelect
}) => {
  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'semua') {
      filtered = filtered.filter(job => 
        job.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    
    return filtered;
  }, [jobs, searchQuery, selectedCategory]);

  const getFilterText = () => {
    if (searchQuery && selectedCategory && selectedCategory !== 'semua') {
      return `"${searchQuery}" dalam kategori ${selectedCategory}`;
    } else if (searchQuery) {
      return `"${searchQuery}"`;
    } else if (selectedCategory && selectedCategory !== 'semua') {
      return `kategori ${selectedCategory}`;
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-20">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">
            Semua Lowongan Kerja
          </h1>
        </div>
        
        {/* Category Dropdown */}
        <div className="mb-4">
          <CategoryDropdown 
            selectedCategory={selectedCategory}
            onCategorySelect={onCategorySelect}
          />
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Filter className="w-4 h-4" />
          <p>
            {filteredJobs.length} lowongan 
            {getFilterText() && (
              <span> untuk {getFilterText()}</span>
            )}
            {!searchQuery && !selectedCategory && (
              <span> • Diurutkan dari terbaru</span>
            )}
          </p>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tidak ada lowongan ditemukan</h3>
            <p>
              {searchQuery || selectedCategory 
                ? 'Coba ubah kata kunci pencarian atau kategori yang dipilih'
                : 'Belum ada lowongan tersedia saat ini'
              }
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => onJobClick(job)}
            />
          ))}
        </div>
      )}

      {filteredJobs.length > 0 && (
        <div className="mt-8 text-center">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-600 mb-2">
              Sudah melihat semua lowongan yang tersedia
            </p>
            <p className="text-sm text-gray-500">
              Kembali lagi nanti untuk lowongan terbaru
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage