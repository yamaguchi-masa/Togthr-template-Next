import React from 'react'

import { useTranslations } from 'next-intl'

const Check = (props) => {
  return (
    <>
      <div className="check-check">
        <svg viewBox="0 0 1024 1024" className="check-icon1">
          <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .check-check {
            width: 32px;
            height: 32px;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            position: relative;
            align-items: center;
            border-color: #ffffff;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
            justify-content: center;
          }
          .check-icon1 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
        `}
      </style>
    </>
  )
}

export default Check
