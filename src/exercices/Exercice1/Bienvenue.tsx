export default function Exercice1(props) {
    return (
        <section id="exercice1" className="my-5">
            <h1>{props.titre}</h1>
            <p>{props.texte}</p>
        </section>
    );
}
