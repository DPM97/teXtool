import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { onConvert } from '../processes/convert'

export default () => (
  <a
    href="#0"
    class="button"
    style={{ all: 'unset', marginTop: '200px', backgroundColor: 'transparent' }}
    onClick={(() => onConvert())}
  >
    <IoMdArrowForward style={{ fontSize: '75px' }} />
  </a>
)