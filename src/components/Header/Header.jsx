import React from 'react'
import styled from '@emotion/styled'

const HeaderStyle = styled.div`
    height: auto;
    padding: 10px;
    background-color: #111;
    font-size: 32;
    color: #fff;
`

const Header = () => {
  return (
    <HeaderStyle>
      <div className="text-red-400 ml-9 text-4xl">News</div>
    </HeaderStyle>
  )
}

export default Header