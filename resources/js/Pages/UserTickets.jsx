import { Flowbite } from 'flowbite-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import enfant from '../images/enfant.png';
import orange from '../images/orange.png';
import card from '../images/card.png';

export default function UserTickets({ auth, tickets }) {

    return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Suivre l'évolution de la file" />

        <div className='p-5'>
           <p>Mes tickets</p>

           <img src={enfant} alt='Enfant'/>

           {
            tickets.map((ticket, index) => <Link key={index} href={ route('tickets.info')} data={{ ticket: ticket.id }}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img src={orange} alt='Orange Burkina' className='h-10'/>
                  <h2>{ticket?.agence?.name}</h2>
                  <div className="relative max-w-xl mx-auto mt-20">
                        <img className="h-50 w-full object-fill rounded-md" src={card} alt="Ticket" />
                        <div className="absolute inset-0 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">{ticket.ticket}</h2>
                        </div>
                    </div>
                  <p>{ticket.service}</p>
                  <div>{new Date(ticket.created_at).getDate()}</div>
                  <div>{new Date(ticket.created_at).toLocaleString('default', { month: 'short' })}</div>
                  <div>{new Date(ticket.created_at).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
              </div>
            </Link>)
           }
        </div>

        <Link onClick={() => window.history.back()}>Retour</Link>

        </AuthenticatedLayout>
      </Flowbite>
      );

};