import React, { useState } from 'react'
import Select from 'react-select'


export default ({ options, placeholder, identifier }) => {
  const [selected, setSelect] = useState({ value: null })
  return (
    <div
      style={{ marginBottom: '20px' }}
      value={selected.value}
      id={`${identifier}-select`}
    >
      <Select
        placeholder={placeholder}
        options={options}
        onChange={(selected) => { setSelect(selected) }}
      />
    </div>
  )
}