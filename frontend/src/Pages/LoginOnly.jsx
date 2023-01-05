import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function LoginOnly({ element }) {
  const { login } = useSelector(state => state.auth)
  const navigate = useNavigate()

  if (!login) {
    return navigate("/login")
  } 
  return element

}
