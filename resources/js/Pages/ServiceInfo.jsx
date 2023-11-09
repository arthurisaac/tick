import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { Flowbite } from 'flowbite-react';
import axios from 'axios';
import ticket from '../images/ticket.png';


export default function ServiceInfo({ auth, url, service_id }) {
    const [service, setService] = useState([]);
    const [numero, setNumero] = useState(0);
    const [average, setAverage] = useState("");
    const [passage, setPassage] = useState("");


    useEffect(() => {

    axios.get(url + '/api/services/' + service_id)
        .then(res => {  
            setService(res.data.service);
            setNumero(res.data.numero);
            setAverage(res.data.average);
            setPassage(res.data.passage);
      })
    }, []);

    const takeTicket = () => {
        // Prendre le ticket maintenant
        /* axios.post(url + '/api/tickets/', {service_id: service_id})
        .then(res => {
            router.get(route('ticket.info'), { service: service.nom, numero, average, passage, ticket: res.data.ticket }, { replace: true })
        }).catch(e => {
            alert("Une erreur s'est produit " + JSON.stringify(e))
        }) */
        router.post(route('ticket.new'), {service_id, url})
    }

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Prendre un ticket" />

        <div className='p-5'>
            
            <p>Le prochain numéro pour ce service est le : </p>

            <div>
                <div>{new Date().getDate()}</div>
                <div>{new Date().toLocaleString('default', { month: 'short' })}</div>
                <div>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            </div>
            <div className="relative max-w-xl mx-auto mt-6 ml-3 mr-3">
                <img className="h-64 w-full object-cover object-right rounded-md" src={ticket} alt="Ticket suivant" />
                <div className="absolute inset-0 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">{numero}</h1>
                </div>
            </div>
            <p>Estimation du temps d'attente : {average}</p>
            <p>Heure approximative de passage : {passage}</p>
        </div>
        <div>
            <button onClick={takeTicket}>Valider</button>
            <p>Ou</p>
            <Link href={route('ticket.in-time')} data={{ service_id }}>Choisir une autre heure de passage</Link>
        </div>

        </AuthenticatedLayout>
      </Flowbite>
      )
}