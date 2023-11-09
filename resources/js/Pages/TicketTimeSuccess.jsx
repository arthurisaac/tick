import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Flowbite } from 'flowbite-react';
import orange from '../images/orange.png';
import valide from '../images/valide.png';

export default function TicketTimeSuccess({ auth, url, service_id }) {

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Temps passage" />

        
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-100">
                <img src={orange} />
                <img src={valide} />
                <h1>Horaire validé</h1>
                <p>Merci d’avoir utilisé le service de réservation de tickets virtuels LineUp. Un ticket virtuel vous sera bientôt octroyé !</p>
            </div>

            <Link href={route('dashboard')}>Retour à l'accueil</Link>
        </AuthenticatedLayout>
      </Flowbite>
      )

}