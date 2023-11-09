import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import orange from '../images/orange.png';

export default function Agences({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Destination" />

        <div className='p-5'>
            <div className='text-center'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choix de la destination</h1>
            </div>
            <div className="mt-5 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={route('services.choix')}>
                    <img className="rounded-t-lg" src={orange} alt="" />
                </Link>
                <div className="p-5 text-center">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Orange Burkina Faso <br/> Agence principale</p>
                </div>
            </div>  
        </div>
        
        </AuthenticatedLayout>
        )
}