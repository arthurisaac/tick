import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Flowbite, Modal, Button } from 'flowbite-react';
import axios from 'axios';


export default function Services({ auth, agence }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(agence.url + '/api/services')
        .then(res => {
        if (Array.isArray(res.data.services)) {
            setServices(res.data.services);
        }
      })

    }, []);

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Services" />

        <div className='p-5'>
            <div className='text-center' >
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choix du service</h1>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-10">
                {
                     services.map((service, index) => <Link href={route('services.info')} data={{ service: service.id, agence: agence.id }} key={index}>
                        <div className="relative max-w-xl mx-auto mt-6 ml-3 mr-3">
                            <img className="h-64 w-full object-cover rounded-md" src={`${agence.url}/storage/${service.photo}`} alt="Random image" />
                            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className="text-white text-2xl font-bold">{service.nom}</h1>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>

        </AuthenticatedLayout>
      </Flowbite>
      )
}