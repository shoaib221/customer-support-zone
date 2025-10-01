import { useEffect, useState } from "react"


export const Task = ( {progressList ,addResolved } ) => {

    const [ pList, setPList ] = useState(null)
    const [ resolvedList, setResolved ] = useState([])

    useEffect( () => {
        let aha=[]
        for(let key in progressList )
        {
            aha.push( progressList[ key ] )
        }
        setPList( aha )
        console.log( 'task', pList )
    }, [progressList] )

    function resolve (ticket) {
        setResolved( [ ...resolvedList, ticket ] )
        addResolved(ticket)
    }

    return (
        <div id="task" >
            <div>
                <div className="header-1">Task Status</div>
                <div>
                    { pList && pList.map( elem => (
                        <div>
                            <div style={{ fontWeight: '600' }} >  { elem.title }  </div>
                            <button className="button-1" 
                                onClick={() => resolve(elem)  }
                            >Complete</button>
                        </div>
                    ) )
                    }
                </div>
            </div>

            <div>
                <div className="header-1" >Resolved Task</div>
                <div>
                    {   resolvedList && resolvedList.map( ticket => <div style={{ backgroundColor: '#c2e5ecff', padding: '.5rem', marginTop: '.5rem' }} >
                        { ticket.title }
                    </div>)

                    }
                </div>
            </div>
        </div>
    )
}