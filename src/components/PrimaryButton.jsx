import React from 'react'


export default function PrimaryButton({ text, action, icon, isAttentded }) {
  return (
    <button className={`primary-button radius-10 ${isAttentded ? 'attended' : ''}`} type='button' onClick={action}>
        {icon && icon}
        {text}
    </button>
  )
}