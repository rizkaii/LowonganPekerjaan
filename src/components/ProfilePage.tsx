import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Star, Award } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Profil Pengguna</h1>
        <p className="text-gray-600">Kelola informasi profil Anda</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Guest User</h2>
            <p className="text-gray-600">Pencari Kerja</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>Belum ada email terdaftar</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5" />
            <span>Belum ada nomor telepon</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Indonesia</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <Briefcase className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Lamaran Terkirim</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Lowongan Favorit</div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Fitur Premium</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Upgrade ke premium untuk mendapatkan akses ke fitur-fitur eksklusif
          </p>
          <ul className="space-y-2 text-sm text-gray-600 mb-4">
            <li>• Notifikasi lowongan terbaru</li>
            <li>• Simpan lowongan favorit</li>
            <li>• Riwayat lamaran</li>
            <li>• Filter pencarian lanjutan</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Upgrade ke Premium
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">Tentang KerjaDirumahAja</h3>
          <p className="text-gray-600 text-sm mb-4">
            Platform terpercaya untuk mencari lowongan kerja remote di Indonesia. 
            Kami menghubungkan pencari kerja dengan perusahaan-perusahaan terbaik 
            yang menawarkan pekerjaan dengan sistem remote.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Remote Work
            </span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Fleksibel
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              Terpercaya
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">Bantuan & Dukungan</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-900">FAQ</div>
              <div className="text-sm text-gray-600">Pertanyaan yang sering diajukan</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-900">Hubungi Kami</div>
              <div className="text-sm text-gray-600">Butuh bantuan? Hubungi tim support</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-900">Syarat & Ketentuan</div>
              <div className="text-sm text-gray-600">Baca syarat penggunaan platform</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;