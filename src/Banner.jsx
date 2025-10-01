


export const Banner = ({ progressCount, resolvedCount }) => {

    return (
        <div  id="banner" >
            <div id="progress-banner" > 
                <div>In Progress</div>  
                <div style={{ fontSize: '3rem' }} > { progressCount } </div>
            </div>
            <div id="resolved-banner" > 
                <div>Resolved</div>  
                <div style={{ fontSize: '3rem' }} > { resolvedCount } </div>
            </div>
        </div>
    )
}