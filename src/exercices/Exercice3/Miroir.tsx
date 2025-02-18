import {useState} from "react";

export default function Exercice3() {
    const [opacity, setOpacity] = useState(false);
    const styleMiroir = opacity ? {opacity: 1} : {opacity: 0};

    return (
        <div className="card bg-dark border border-warning-subtle miroir">
            <img src="public/aventurier.jpg" className="card-img-top img-fluid"
                 style={styleMiroir}
                 onMouseOver={() => setOpacity(true)}
                 onMouseLeave={() => setOpacity(false)}/>
            <div className="card-body">
                <h5 className="card-title">Miroir mon beau miroir</h5>
                <p className="card-text">Quel est mon reflet ?</p>
            </div>
        </div>)
}