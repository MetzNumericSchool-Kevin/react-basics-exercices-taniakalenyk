export default function Exercice4() {
    // @ts-ignore
    return (
        <>
            <div className="row">

                <div className="col">
                    <Buttons onClick = ({}) texte = {"🪄 Change la première boîte en rouge"} />
                </div>

                <div className="col">
                    <Buttons texte = {"🪄 Change les 2 premieres boîtes en bleu"} />
                </div>

                <div className="col">
                    <Buttons texte = {"🪄 Change toutes les boîtes en vert"} />
                </div>

            </div>

            <div className="row mt-5 gap-5">
                <div className="boite"></div>
                <div className="boite"></div>
                <div className="boite"></div>
            </div>
        </>)

    function Buttons(props) {
        <button className="btn btn-danger">
            {props.texte}
        </button>
    };

    function Boite() {
        return (
            <div className="boite"></div>
        )
    }
}