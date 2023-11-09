import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import orange from '../images/orange.png';

export default function Agences({ auth, agences }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Destination" />

        <div className='p-5'>
            <div className='text-center'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choix de la destination</h1>
            </div>
            {
                agences.map((agence, index) => 
                <div key={index} className="mt-5 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href={route('services.choix')} data={{ agence: agence.id }}>
                        <img className="rounded-t-lg" src={orange} alt="" />
                    </Link>
                    <div className="p-5 text-center">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{agence.name}</p>
                    </div>
                </div>  
                )
            }
           
        </div>
        
        </AuthenticatedLayout>
        )
}