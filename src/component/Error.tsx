import React from 'react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
    <p className="alert alert-danger error">{message}</p>
)

export default Error
