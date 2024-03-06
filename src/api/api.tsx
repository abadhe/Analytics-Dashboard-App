// api.ts
import User from "../interfaces/User";

export const fetchUsers = async (setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        const formattedUsers: User[] = data.map((user: any) => ({
            id: user.id,
            name: `${user.name.firstname} ${user.name.lastname}`,
            email: user.email,
            username: user.username,
            address: user.address,
            phone: user.phone,
        }));
        setUsers(formattedUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

export const fetchCategories  = async (setCategories: React.Dispatch<React.SetStateAction<string[]>>) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const json = await response.json();
        setCategories(json);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

export const fetchCategoryData = async (categories: string[]) => {
    const promises = categories.map(async (category) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch products for category ${category}`);
            }
            const products = await response.json();
            return { label: category, value: products.length };
        } catch (error) {
            console.error(`Error fetching products for category ${category}:`, error);
            return { label: category, value: 0 };
        }
    });

    const categoryData = await Promise.all(promises);
    return categoryData.map((item, index) => ({ ...item, id: index }));
};

//export {fetchCategories, fetchCategoryData };
