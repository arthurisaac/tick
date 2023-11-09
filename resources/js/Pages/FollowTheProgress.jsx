import { Flowbite } from 'flowbite-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function FollowTheProgress({ auth }) {

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Suivre l'évolution de la file" />

        <div className='p-5'>
            
            <Link href={route('tickets.user')}>Consulter l’évolution de mes tickets virtuels</Link>
            <p>Consulter l’évolution d’autres files d’attente</p>
        </div>

        </AuthenticatedLayout>
      </Flowbite>
      );

};