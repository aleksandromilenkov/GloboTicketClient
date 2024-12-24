import React from 'react'
import CreateCategory from '../Components/Categories/CreateCategory'

type Props = {}

const AddCategoryPage = (props: Props) => {
  return (
    <div style={{padding:"1rem"}}>
        <h1>New Category</h1>
        <CreateCategory/>
    </div>
  )
}

export default AddCategoryPage