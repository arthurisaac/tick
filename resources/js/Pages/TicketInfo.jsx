import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Flowbite, Modal, Button } from 'flowbite-react';
import axios from 'axios';
import orange from '../images/orange.png';


export default function TicketInfo({ auth, service, numero, average }) {

    useEffect(() => {
        
    }, []);

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Services" />

        <div className='p-5'>
            <img src={orange} />

            <p>{service}</p>

            <p>Votre numéro est le : {numero}</p>

            <p>Estimation du temps d'attente : {average}</p>

            <p>Vous pourrez à tout moment consulter l’évolution de la file en cliquant sur l’onglet « Mes tickets ».</p>
        </div>

        <Link href={route('dashboard')}>Retour à l'accueil</Link>

        </AuthenticatedLayout>
      </Flowbite>
      )
}