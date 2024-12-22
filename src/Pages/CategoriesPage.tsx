import React from 'react'
import useCategoriesWithEvents from '../Components/Categories/useCategoriesWithEvents'

type Props = {}

const CategoriesPage = (props: Props) => {
    const {isLoading, categoriesWithEvents, error, includeHistory, setIncludeHistory } = useCategoriesWithEvents();
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIncludeHistory(e.target.checked);
      };
      console.log(categoriesWithEvents);
      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error loading data.</p>;
    
      return (
        <div>
          <h1>Categories Page</h1>
          <label>
            <input
              type="checkbox"
              checked={includeHistory}
              onChange={handleCheckboxChange}
            />
            Include History
          </label>
          <ul>
            {categoriesWithEvents?.map((category: any) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
      );
    };
export default CategoriesPage