'use client';

import Spinner from '@/components/ui/Spinner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('accessToken');
            try {
                const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/user/get-my-data', {
                    headers: {
                        Authorization: token || '',
                    },
                });
                const result = await res.json();
                if (result.success) {
                    const { name, email } = result.data;
                    setFormData({
                        name,
                        email,
                        phone: '',
                        address: '',
                    });
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    // };

    return (
        <div className="min-h-screen px-16 py-16 bg-white flex justify-center">
            {/* <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl space-y-6 bg-gray-50 p-8 rounded-xl shadow"
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Profile</h1>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Go to Homepage
                </button>
            </form> */}

            <div className="min-h-screen bg-white flex justify-center py-12 px-4">
                <div className="max-w-md w-full space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

                    <div className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">
                        {/* <p><strong>Name:</strong> {user?.name}</p> */}
                        <p><strong>Name:</strong> {formData?.name}</p>
                        <p><strong>Email:</strong> {formData?.email}</p>
                    </div>

                    <button
                        onClick={() => router.push('/')}
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;