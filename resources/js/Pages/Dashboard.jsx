import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import queue from '../images/queue.png';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <img src={queue} alt='queue management' className="h-auto max-w-full mx-auto" />

            <div className="grid grid-cols-3 grid-rows-5 gap-4 p-5">
                <div className="p-5">
                    <Link href={route('agences.choix')} className="relative max-w-xl mx-auto mt-20">
                        <img className="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image" />
                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">Prendre un e-ticket</h2>
                        </div>
                    </Link>
                </div>
                <div  className="p-5">
                    <Link href={route('follow-the-progress')} className="relative max-w-xl mx-auto mt-20">
                            <img className="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image" />
                            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white text-3xl font-bold">Suivre l'évolution de la file</h2>
                            </div>
                        </Link>
                    </div>
                <div  className="p-5">
                    <Link  href={route('profile.edit')} className="relative max-w-xl mx-auto mt-20">
                        <img className="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image" />
                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">Gérer son profil</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
