import React from 'react'
import Select from './Select'


export default (props) => (
  <div style={{ padding: '0 50px', width: '400px' }}>
    <Select {...props} />
    <textarea id={`${props.identifier}-box`} style={{ width: '395px', height: '400px' }} />
  </div>
)