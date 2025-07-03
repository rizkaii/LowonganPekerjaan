export interface Job {
  id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  salary?: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  contactHR: string;
  whatsappNumber: string;
  postedDate: string;
  isNew: boolean;
  type: 'remote' | 'freelance' | 'hybrid';
}