export default function ModalDelPK({open, onClose, children}){
    return(
        <div
            onClick={onClose}
            className={`
            fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/20 z-10" : "invisible"}
            `}
        >   
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-white rounded-xl justify-center shadow p-6 transition-all text-center w-56 md:w-80
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button onClick={onClose}className="absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    X
                </button>
                {children}
            </div>
        </div>
    )
}