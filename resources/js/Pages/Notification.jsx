import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Flowbite, Modal, Button } from 'flowbite-react';
import axios from 'axios';
import orange from '../images/orange.png';


export default function Notification({ auth }) {
  console.log(auth)

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Notifications" />

        <Link href={route('dashboard')}>Retour à l'accueil</Link>

        </AuthenticatedLayout>
      </Flowbite>
      )
}