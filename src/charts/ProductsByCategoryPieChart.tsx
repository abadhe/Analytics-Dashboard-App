import * as React from 'react';
import Title from '../components/Title';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import ProductCategory from '../interfaces/ProductCategory';
import {fetchCategories, fetchCategoryData} from '../api/api'
const Deposits: React.FC = () =>
 {
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<ProductCategory[]>([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products/categories');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch categories');
  //       }
  //       const json = await response.json();
  //       setCategories(json);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };
  //   //fetchCategories(setCategories)
  //   fetchCategories();
  // }, []);

  // useEffect(() => {
  //   const fetchCategoryData = async () => {
  //     const promises = categories.map(async (category) => {
  //       try {
  //         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  //         if (!response.ok) {
  //           throw new Error(`Failed to fetch products for category ${category}`);
  //         }
  //         const products = await response.json();
  //         return { label: category, value: products.length };
  //       } catch (error) {
  //         console.error(`Error fetching products for category ${category}:`, error);
  //         return { label: category, value: 0 };
  //       }
  //     });

  //     const categoryData = await Promise.all(promises);
  //     setData(categoryData.map((item, index) => ({ ...item, id: index })));
  //   };

  //   if (categories.length > 0) {
  //     fetchCategoryData();
  //   }
  // }, [categories]);
  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      fetchCategoryData(categories).then((categoryData) => setData(categoryData));
    }
  }, [categories]);

    return (
        <React.Fragment>
            <Title>Product Categories</Title>
            <PieChart
                series={[
                    {
                        data
                    },
                ]}
            />
        </React.Fragment>
    );
}
export default Deposits;