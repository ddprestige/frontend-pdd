'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.prestigedreamdecor.in/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/auth/login');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="text" name="name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" name="password" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password" className="w-full p-2 border rounded" required />
        <button className="w-full bg-black text-white py-2 rounded">Register</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
