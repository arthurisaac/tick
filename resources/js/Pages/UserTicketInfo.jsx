import { Flowbite } from 'flowbite-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import enfant from '../images/enfant.png';
import orange from '../images/orange.png';
import card from '../images/card.png';
import { useState, useEffect, useRef } from 'react';

export default function UserTicketInfo({ auth, ticket, agence }) {
  const [numero, setNumero] = useState(0);
  const [average, setAverage] = useState("");
  const [passage, setPassage] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {

    axios.get(agence.url + '/api/tickets/' + ticket.ticket_id)
        .then(res => {
            if (res.data.status) {
              const data = res.data;
              setAverage(data.average)
              setPassage(data.passage)

              if (data.ticket) {
                setNumero(data.ticket.numero)
                setService(data.ticket.service)
              }
            }
      })
    }, []);

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Suivre l'évolution de la file" />

        <div className='p-5'>
           <p>{service}</p>

            <h2>Votre numéro est le : </h2>
           <p>{numero}</p>
           <p>Estimation du temps d'attente : {average}</p>
           <p>Heure approximative de passage : {passage}</p>
        </div>

      <Link onClick={() => window.history.back()}>Retour</Link>
        </AuthenticatedLayout>
      </Flowbite>
      );

};