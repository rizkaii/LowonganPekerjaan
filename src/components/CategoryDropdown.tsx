import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Grid3X3, Palette, Code, Users, FileText, Check } from 'lucide-react';

interface CategoryDropdownProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ 
  selectedCategory, 
  onCategorySelect 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'semua', label: 'Semua Kategori', icon: Grid3X3, color: 'text-gray-600' },
    { id: 'design', label: 'Design', icon: Palette, color: 'text-pink-600' },
    { id: 'it', label: 'IT & Programming', icon: Code, color: 'text-indigo-600' },
    { id: 'marketing', label: 'Marketing', icon: Users, color: 'text-orange-600' },
    { id: 'admin', label: 'Admin & Support', icon: FileText, color: 'text-gray-600' },
  ];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory) || categories[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <selectedCategoryData.icon className={`w-5 h-5 ${selectedCategoryData.color}`} />
        <span className="flex-1 text-left font-medium text-gray-900">
          {selectedCategoryData.label}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-200 ${
        isOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-2 invisible'
      }`}>
        <div className="py-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${
                  isSelected ? 'bg-blue-50' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${category.color}`} />
                <span className={`flex-1 text-left font-medium ${
                  isSelected ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {category.label}
                </span>
                {isSelected && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;