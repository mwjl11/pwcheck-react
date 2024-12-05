import React from 'react';
import Checkmark from './assets/pass.svg';

const PasswordForm = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  isSubmitted,
  isSuccess,
  errors,
  onSubmit,
}) => {
  return (
    <div className="max-w-md w-full p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-3 text-center">Fan Allan Zhang</h2>
      <h3 className="text-l font-medium mb-4">Password Checker</h3>
      <form className="flex flex-col" onSubmit={onSubmit}>

        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="absolute left-3 top-1 text-xs text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 pt-5 pb-2 border rounded pr-10 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {isSubmitted && isSuccess && errors.match && (
            <img
              src={Checkmark}
              alt="Checkmark"
              className="absolute right-3 top-4 h-5 w-5"
            />
          )}
        </div>

        <div className="relative mb-4">
          <label
            htmlFor="confirmPassword"
            className="absolute left-3 top-1 text-xs text-gray-500"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 pt-5 pb-2 border rounded pr-10 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {isSubmitted && isSuccess && errors.match && (
            <img
              src={Checkmark}
              alt="Checkmark"
              className="absolute right-3 top-4 h-5 w-5"
            />
          )}
        </div>

        {isSubmitted && isSuccess ? (
          <div className="mt-4 text-green-600 font-medium self-center">Success!</div>
        ) : (
          <ul className="mt-2 text-sm">
            <li
              className={`${
                isSubmitted
                  ? errors.match
                    ? 'text-green-600'
                    : 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              Passwords must match.
            </li>
            <li
              className={`${
                isSubmitted
                  ? errors.match
                    ? errors.length
                      ? 'text-green-600'
                      : 'text-red-600'
                    : 'text-gray-400'
                  : 'text-gray-600'
              }`}
            >
              Password must be at least 6 characters long.
            </li>
            <li
              className={`${
                isSubmitted
                  ? errors.match
                    ? errors.uppercase
                      ? 'text-green-600'
                      : 'text-red-600'
                    : 'text-gray-400'
                  : 'text-gray-600'
              }`}
            >
              Password must have at least 1 uppercase character.
            </li>
            <li
              className={`${
                isSubmitted
                  ? errors.match
                    ? errors.lowercase
                      ? 'text-green-600'
                      : 'text-red-600'
                    : 'text-gray-400'
                  : 'text-gray-600'
              }`}
            >
              Password must have at least 1 lowercase character.
            </li>
            <li
              className={`${
                isSubmitted
                  ? errors.match
                    ? errors.number
                      ? 'text-green-600'
                      : 'text-red-600'
                    : 'text-gray-400'
                  : 'text-gray-600'
              }`}
            >
              Password must have at least 1 number.
            </li>
            <li
              className={`${
                isSubmitted
                  ? errors.match
                    ? errors.specialChar
                      ? 'text-green-600'
                      : 'text-red-600'
                    : 'text-gray-400'
                  : 'text-gray-600'
              }`}
            >
              Password must have at least 1 special character.
            </li>
          </ul>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 self-end"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
