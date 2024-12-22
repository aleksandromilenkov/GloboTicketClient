import React from 'react'
import { CategoryModelWithEvent } from '../../Models/Category'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'

type Props = {
    categoriesWithEvents : CategoryModelWithEvent[]
}

const CategoriesListUl = styled.ul`
 display: flex;
  align-items: center;
  flex-direction:column;
  list-style:none;
  padding:0;
`;

const CategoriesListContainer = styled.div`
    padding:1rem;
`;

const CategoriesList = (props: Props) => {
    const {categoriesWithEvents} = props;
  return (
    <CategoriesListContainer>
        <p>Category Name</p>
        <CategoriesListUl>
            {categoriesWithEvents?.map((category: CategoryModelWithEvent) => (
              <CategoryItem key={category.categoryId}
              categoryId={category.categoryId}
                categoryName = {category.name}
                categoryEvents = {category.events}
              />
            ))}
        </CategoriesListUl>
    </CategoriesListContainer>
  )
}

export default CategoriesList