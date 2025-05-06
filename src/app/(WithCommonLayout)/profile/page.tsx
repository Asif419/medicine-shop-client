'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import coverImage from '@/assets/images/cover.jpg';
import Spinner from '@/components/ui/Spinner';
import profileImage from '@/assets/images/profile.jpg';
import cardImage from '@/assets/images/card.jpg';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ProfilePage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
                    setFormData({ name, email });
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

    return (
        <div className="min-h-screen bg-white">
            <div className="relative w-full h-64">
                <Image src={coverImage} alt="Cover" fill className="object-cover" />
            </div>

            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Personal Info</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 mb-4">
                                <Image src={profileImage} alt="Profile" className="w-16 h-16 rounded-full" />
                                <div>
                                    <p className="text-sm text-gray-500">Name</p>
                                    <p className="font-semibold">{formData.name}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-semibold mb-2">{formData.email}</p>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-semibold">+880 1234-567890</p>
                        </CardContent>
                    </Card>

                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Account Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-sm text-gray-500">Account Created</p>
                                    <p className="font-semibold">Jan 2023</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Order History</p>
                                    <p className="font-semibold">12 items</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Password Last Changed</p>
                                    <p className="font-semibold">3 months ago</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Shipping Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-sm text-gray-500">Address</p>
                                    <p className="font-semibold">123/A, Dhaka</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">City</p>
                                    <p className="font-semibold">Dhaka</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Country</p>
                                    <p className="font-semibold">Bangladesh</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Payment Method</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center gap-4">
                            <div className="space-y-2 flex-1">
                                <div>
                                    <p className="text-sm text-gray-500">Card Type</p>
                                    <p className="font-semibold">VISA</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Balance</p>
                                    <p className="font-semibold">$1,000</p>
                                </div>
                            </div>
                            <Image
                                src={cardImage}
                                alt="Card"
                                className="w-40 h-28 object-cover rounded"
                            />
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => router.push('/')}
                        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;