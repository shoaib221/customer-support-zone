
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Nav } from './Nav';
import { Banner } from './Banner';
import { Tickets } from './Tickets';
import { Suspense, useEffect, useState } from 'react';
import { Task } from './Task';
import { Footer } from './Footer';


function App() {

	const [ progressCount, setProgressCount ] = useState(0)
	const [ resolvedCount, setResolvedCount ] = useState(0)
	const [ ticketList, setTicketList ] = useState([])
	const [ progressList, setProgress ] = useState({})


	async function fetchTicket() {
		let response = await fetch( '../Tickets.json' )
		let data= await response.json()
		setTicketList(data)
	}

	function addToProgress (ticket) {
		if( progressList[ ticket.id ] ) return;
		console.log( ticket )
		setProgressCount( progressCount+1 )
		let aha={}
		aha[ ticket.id ] = ticket;
		setProgress( { ...progressList, ...aha   } )
    	toast.info("Task in progress");
	}

	function addResolved (ticket) {
		let aha = progressList;
		console.log(aha)
		delete aha[ ticket.id ]
		console.log(aha)
		setProgress({ ...aha })
		setProgressCount( progressCount-1 )
		setResolvedCount( resolvedCount+1 )
		let aha1 = ticketList.filter( x => x.id !== ticket.id )
		setTicketList(aha1)
		toast.success("Completed");
	}

	useEffect(() => {
		console.log( progressList )
	}, [progressList])

	useEffect(  ()=> {
		fetchTicket();
	}, [] )

	return (
	<>
		<ToastContainer />
		<Nav />
		<Banner progressCount={progressCount} resolvedCount={resolvedCount} />
		<div id="main"  >
			{ ticketList ? <Tickets progressList={progressList} tickets={ticketList} addToProgress={addToProgress} /> : <p>Loading...</p> }
			<Task progressList={progressList} addResolved={addResolved}  />
		</div>
		
		<Footer />
		
	</>
	)
}

export default App
