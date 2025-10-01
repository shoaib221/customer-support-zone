
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {

	function slideIn () {
		let slide  = document.getElementById('slide');
		slide.style.display = 'flex';
	}

	function slideOut() {
		let slide = document.getElementById('slide');
		slide.style.display = 'none';
	}

    return (
    <nav >
        <div style={{ fontWeight: '600' }} >CS -- Ticket System </div>
		
        <div id="nav-1"   >
            <div>Home</div>
            <div>FAQ</div>
            <div>Changelog</div>
            <div>Blog</div>
            <div>Download</div>
            <div>Contact</div>
            <button className="button-2" >+ New Ticket</button>
        </div>

        <div id="nav-2" >
			<FontAwesomeIcon icon={faBars} onClick={slideIn} />
		</div>

		<div id="slide" >
			<button onClick={slideOut} className="button-2"
			style={{ background: 'var(--color-7)'  }} >Cancel</button>

			<button className="button-2" >Home</button>
			<button className="button-2" >FAQ</button>
			<button className="button-2" >Changelog</button>
			<button className="button-2" >Blog</button>
			<button className="button-2" >Download</button>
			<button className="button-2" >Contact</button>
            <button className="button-2" >+ New Ticket</button>
		</div>
        
    </nav>
    )
}