
// "id" : 1 , 
// "title": "Login Issues", 
// "description": "wjdh wioj  e3wioje 3e0iu je0u320ej e0u32091", 
// "customer": "Alif", 
// "priority": "Lam" , 
// "status": "Mim", 
// "createdAt": "1-2-2002" 


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";


const Open = () => {

    return (
        <div className="open"  >
            <div className="green-circle"  ></div>
            Open
        </div>
    )
}

const Progress = () => {

    return (
        <div className="progress"  >
            <div className="yellow-circle"  ></div>
            In-Progress
        </div>
    )
}


const Ticket = ( { ticket, addToProgress, progressList } ) => {

    
    return (
        <div  className="ticket" onClick={ ()=> addToProgress(ticket) } >
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <div style={{ fontWeight: '600' }} >{ ticket.title }</div>
                <div> { progressList[ ticket.id ] ? <Progress/> : <Open /> } </div>
            </div>

            <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--color-8)' }} > { ticket.description } </p>

            <div className="ticket-1" >
                <div style={{ display: 'flex', gap: '.5rem' }} >
                    <span>#{ ticket.id }</span>
                    { ticket.priority==='medium-priority' && <span className="medium-priority" >Medium Priority</span> } 
                    { ticket.priority==='high-priority' && <span className="high-priority" >High Priority</span> } 
                    { ticket.priority==='low-priority' && <span className="low-priority" >Low Priority</span> } 
                </div>

                <div>
                    <span> { ticket.customer } </span>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span> { ticket.createdAt } </span>
                </div>
            </div>

        </div>
    )
}

export const Tickets = ({tickets, addToProgress, progressList}) => {
    

    return (
        <div style={{ flexGrow: '1' }} >
            <div className="header-1" >Customer Tickets</div>
            <div id="tickets" >
                { tickets.map( ticket => <Ticket progressList={progressList} key={ticket.id} ticket={ticket} addToProgress={addToProgress}  /> ) }
            </div>
        </div>
    )
}