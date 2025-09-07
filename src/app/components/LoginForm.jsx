'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = login(formData.email, formData.password);

    if (result.success) {
      const redirectTo = searchParams.get('redirectTo') || '/';
      router.push(redirectTo);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Login to Your Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full text-gray-900 border border-gray-300 p-2 rounded mt-1 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full text-gray-900 border border-gray-300 p-2 rounded mt-1 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-semibold transition"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="font-medium text-green-600 hover:text-green-500"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading login form...</p>}>
      <LoginForm />
    </Suspense>
  );
}
