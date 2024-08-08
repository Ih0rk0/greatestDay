import React, { useState } from 'react';
import { useCategoryContext } from './CategoryContext';

interface Category {
    icon: string;
    name: string;
}

interface DropdownProps {
    categories: Category[];
}

export function Accordion({ categories }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedCategory, setSelectedCategory } = useCategoryContext();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategorySelect = (category: Category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };

    return (
        <>
            <div className='h-[40px] md:h-[77px] p-[8px] md:p-[16px] bg-[#F5DACC] mb-[43px]'>
                <div onClick={toggleDropdown} className='flex justify-between bg-white h-[20px] md:h-[42px] items-center px-[7px] cursor-pointer'>
                    <div className='text-[12px] font-bold'>Category</div>
                    <img className='w-[5px] h-[4px]' src="/img/Triangle.png" alt="" />
                </div>
                {isOpen && (
                    <ul className="flex flex-col gap-[6px] bg-[#FDF8F5] p-[12px] relative z-10">
                        {categories.map((category) => (
                            <li
                                key={category.name}
                                className={`flex items-center p-[12px] bg-white cursor-pointer hover:bg-[#FAEBE3]`}
                                onClick={() => handleCategorySelect(category)}
                            >
                                <img src={category.icon} alt={category.name} className="w-6 h-6 mr-4" />
                                <span>{category.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
