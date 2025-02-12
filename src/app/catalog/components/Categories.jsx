'use client'

import { usePathname } from "next/navigation";
import CategoriesItem from "./CategoriesItem";
import NoElements from "@/components/no_elements/NoElements";

const Categories = ({categories}) => {

    let path = usePathname()

    if(categories === 'error') {
        return (
            <></>
        );
    }
    
    return (
        <div className="categories_block">
            {categories?.length
            ? categories.map((el) => (
                <CategoriesItem key={el.categories_id} el={el} path={path}/>
            ))
            :<NoElements>Категория пока пуста</NoElements>}
        </div>
    );
};

export default Categories;