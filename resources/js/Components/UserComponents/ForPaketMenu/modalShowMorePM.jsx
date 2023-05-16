export default function ModalShowMorePM({open, onClose, children}){
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
                bg-white rounded-xl flex justify-start flex-col shadow p-6 transition-all w-72 md:w-[30em] max-h-[25em] md:max-h-[28em] lg:max-h-none overflow-x-hidden overflow-y-scroll md:overflow-y-auto
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button onClick={onClose}className="absolute top-2 right-2 p-1 rounded-lg
                text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 z-10">
                    X
                </button>
                {children}
            </div>
        </div>
    )
}