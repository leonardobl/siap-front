import React from 'react'
import { useNavigate } from 'react-router-dom'

export const usePaymentConfirmation = () => {
  const navigate = useNavigate()
  return { navigate };
}
