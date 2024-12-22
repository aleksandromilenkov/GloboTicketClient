import React from 'react'
import useCategoriesWithEvents from '../Components/Categories/useCategoriesWithEvents'
import CategoriesList from '../Components/Categories/CategoriesList';

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
        <div style={{paddingLeft:"1rem"}}>
          <h1>Categories Page</h1>
          <label>
            <input
              type="checkbox"
              checked={includeHistory}
              onChange={handleCheckboxChange}
            />
            Include past events?
          </label>
          <CategoriesList categoriesWithEvents={categoriesWithEvents}/>
        </div>
      );
    };
export default CategoriesPage