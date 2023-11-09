import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { Flowbite } from 'flowbite-react';
import { useState, useEffect } from 'react';
import ticket from '../images/ticket_small.png';
import axios from 'axios';

export default function TicketTime({ auth, url, service_id }) {

    const { data, setData } = useForm({
        time: '',
    });
    const [times, setTimes] = useState([]);

    const submit = (e) => {
        e.preventDefault();

        if (data.time !== '') {
            /* axios.post(url + '/api/save-time-ticket', {...data, service_id, "user": auth.id})
                .then(res => {  
                    console.log(res);
            }) */
            router.post(route('ticket.save-in-time'), {...data, service_id, url})
        }
        
    };

    useEffect(() => {

        axios.post(url + '/api/available-time', { service_id})
        .then(res => {
            if (Array.isArray(res.data.disponible)) {
                setTimes(res.data.disponible);
            }
        })
    }, []);

    /* const checkTime = (e) => {
        if (data.time !== '') {
            axios.post(url + '/api/time-approximation', data)
                .then(res => {  
                    setPassage(res.data.passage);
            })
        }
    } */


 return (
      <Flowbite>

            <AuthenticatedLayout
            user={auth.user}
        >
        
        <Head title="Temps passage" />

        
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-100">
            <a href="#">
                <p className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">{new Date().toLocaleDateString([], {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
                <p className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">{new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
            </a>
            <img src={ticket} />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Passage dans</p>
            <form onSubmit={submit}>
                <select id="time" name='time' onChange={(e) => {
                        setData('time', e.target.value);
                    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option> --:-- </option>
                    {
                        times.map((time, index) => <option value={time.approximation} key={index}>{time.moment}</option>)
                    }
                </select>
                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {/* <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg> */}
                <svg className="w-3.5 h-3.5 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                Valider
                </button>
            </form>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Heure approximative de passage : {data.time}</p>
        </div>


        </AuthenticatedLayout>
      </Flowbite>
      )
}