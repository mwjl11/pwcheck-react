import React, { useState } from 'react';
import PasswordForm from './PasswordForm';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    match: false,
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const checkPassword = (e) => {
    if (e) e.preventDefault();

    //Special Characters
    const specialChar = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/;

    const match = password === confirmPassword;

    const validationResults = {
      match,
      length: match && password.length >= 6,
      uppercase: match && /[A-Z]/.test(password),
      lowercase: match && /[a-z]/.test(password),
      number: match && /[0-9]/.test(password),
      specialChar: match && specialChar.test(password),
    };

    setErrors(validationResults);
    setIsSubmitted(true);
  };

  const isSuccess = Object.values(errors).every((result) => result);

  return (
    <div
      id="pw-container"
      className="flex items-center justify-center h-screen"
    >
      <PasswordForm
        password={password}
        confirmPassword={confirmPassword}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        isSubmitted={isSubmitted}
        isSuccess={isSuccess}
        errors={errors}
        onSubmit={checkPassword}
      />
    </div>
  );
};

export default PasswordCheck;
