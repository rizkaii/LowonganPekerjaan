import { Job } from '../types/Job';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'UI/UX Designer',
    company: 'TechStart Indonesia',
    category: 'Design',
    location: 'Remote',
    salary: 'Rp 8.000.000 - 12.000.000',
    description: 'Kami mencari UI/UX Designer yang berpengalaman untuk bergabung dengan tim kreatif kami. Posisi ini cocok untuk mereka yang passionate dalam menciptakan pengalaman digital yang luar biasa.',
    requirements: [
      'Minimal 2 tahun pengalaman di bidang UI/UX Design',
      'Menguasai Figma, Adobe XD, atau tools design lainnya',
      'Portfolio yang menunjukkan kemampuan design thinking',
      'Kemampuan komunikasi yang baik',
      'Bisa bekerja remote dengan disiplin'
    ],
    benefits: [
      'Gaji kompetitif',
      'Fleksibilitas waktu kerja',
      'Peralatan kerja disediakan',
      'Tunjangan kesehatan'
    ],
    contactHR: 'hr@techstart.id',
    whatsappNumber: '6287711878535',
    postedDate: '2024-01-15',
    isNew: true,
    type: 'remote'
  },
  {
    id: '2',
    title: 'Content Writer',
    company: 'Digital Marketing Pro',
    category: 'Marketing',
    location: 'Remote',
    salary: 'Rp 5.000.000 - 8.000.000',
    description: 'Bergabunglah dengan tim content marketing kami untuk menciptakan konten yang engaging dan berkualitas untuk berbagai platform digital.',
    requirements: [
      'Minimal 1 tahun pengalaman content writing',
      'Kemampuan menulis dalam Bahasa Indonesia dan Inggris',
      'Pemahaman SEO dan digital marketing',
      'Kreativitas tinggi dan detail oriented',
      'Kemampuan riset yang baik'
    ],
    benefits: [
      'Kerja fleksibel',
      'Bonus performa',
      'Pelatihan digital marketing',
      'Kesempatan berkembang'
    ],
    contactHR: 'careers@digitalpro.id',
    whatsappNumber: '6287711878535',
    postedDate: '2024-01-14',
    isNew: true,
    type: 'remote'
  },
  {
    id: '3',
    title: 'Virtual Assistant',
    company: 'Remote Solutions',
    category: 'Admin',
    location: 'Remote',
    salary: 'Rp 3.500.000 - 5.500.000',
    description: 'Posisi Virtual Assistant untuk membantu mengelola berbagai tugas administratif dan operasional secara remote.',
    requirements: [
      'Minimal lulusan SMA/SMK',
      'Kemampuan komputer dan internet yang baik',
      'Bahasa Inggris aktif (minimal pasif)',
      'Dapat bekerja mandiri',
      'Komunikasi yang baik'
    ],
    benefits: [
      'Jadwal fleksibel',
      'Pelatihan provided',
      'Work from anywhere',
      'Bonus achievement'
    ],
    contactHR: 'admin@remotesolutions.id',
    whatsappNumber: '6287711878535',
    postedDate: '2024-01-13',
    isNew: false,
    type: 'remote'
  },
  {
    id: '4',
    title: 'Frontend Developer',
    company: 'WebCraft Studio',
    category: 'IT',
    location: 'Remote',
    salary: 'Rp 10.000.000 - 15.000.000',
    description: 'Kesempatan untuk bergabung dengan tim development yang dinamis dalam mengembangkan aplikasi web modern.',
    requirements: [
      'Minimal 2 tahun pengalaman React/Vue.js',
      'Menguasai HTML, CSS, JavaScript',
      'Pengalaman dengan TypeScript',
      'Familiar dengan Git dan modern workflow',
      'Portfolio project yang bisa ditunjukkan'
    ],
    benefits: [
      'Gaji kompetitif',
      'Laptop dan peralatan kerja',
      'Asuransi kesehatan',
      'Flexible working hours'
    ],
    contactHR: 'dev@webcraft.id',
    whatsappNumber: '6287711878535',
    postedDate: '2024-01-12',
    isNew: false,
    type: 'remote'
  },
  {
    id: '5',
    title: 'Social Media Manager',
    company: 'Brand Boost Agency',
    category: 'Marketing',
    location: 'Remote',
    salary: 'Rp 6.000.000 - 9.000.000',
    description: 'Mengelola dan mengembangkan strategi social media untuk berbagai brand klien dengan pendekatan yang kreatif dan data-driven.',
    requirements: [
      'Minimal 1 tahun pengalaman social media marketing',
      'Kreatif dan up-to-date dengan tren social media',
      'Kemampuan analisis data dan reporting',
      'Menguasai tools social media management',
      'Portfolio campaign yang sukses'
    ],
    benefits: [
      'Remote work',
      'Bonus campaign success',
      'Training dan sertifikasi',
      'Career growth opportunity'
    ],
    contactHR: 'hr@brandboost.id',
    whatsappNumber: '6287711878535',
    postedDate: '2024-01-11',
    isNew: false,
    type: 'freelance'
  },
  {
    id: '6',
    title: 'Data Entry Specialist',
    company: 'DataFlow Corp',
    category: 'Admin',
    location: 'Remote',
    salary: 'Rp 3.000.000 - 4.500.000',
    description: 'Posisi part-time untuk data entry dengan volume kerja yang stabil dan sistem yang terstruktur.',
    requirements: [
      'Ketelitian tinggi dan detail oriented',
      'Kemampuan mengetik minimal 40 WPM',
      'Familiar dengan Microsoft Excel',
      'Dapat bekerja dengan deadline',
      'Koneksi internet stabil'
    ],
    benefits: [
      'Jadwal fleksibel',
      'Payment per project',
      'Long-term contract',
      'Simple dan mudah'
    ],
    contactHR: 'jobs@dataflow.id',
    whatsappNumber: '6287711878535',
    postedDate: '2024-01-10',
    isNew: false,
    type: 'freelance'
  }
];