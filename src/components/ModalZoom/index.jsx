const ModalZoom = ({foto}) =>{
    return (
        <>
            <dialog open={!!foto}>
                <p>Greetings, one and all</p>
                <form action="" method="dialog">
                    <button>OK</button>
                </form>
            </dialog>
        </>
    );
}

export default ModalZoom;