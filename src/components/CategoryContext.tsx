import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the Category interface
interface Category {
    icon: string;
    name: string;
}

// Define the context props
interface CategoryContextProps {
    selectedCategory: Category | null;
    setSelectedCategory: (category: Category | null) => void;
}

// Create the context with an initial undefined value
export const CategoryContext = createContext<CategoryContextProps | undefined>(
    undefined,
);

// Create a provider component
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null,
    );

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

// Custom hook for using the CategoryContext
export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error(
            "useCategoryContext must be used within a CategoryProvider",
        );
    }
    return context;
};
