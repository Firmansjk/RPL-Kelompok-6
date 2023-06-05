export default function PaginationVendor({totalPosts, postsPerPage, setCurrentPage, currentPage, previousPage, nextPage}){
    let pages = []

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    return(
        <div className="ml-6 mt-8">
            <button 
            onClick={previousPage}
            className="rounded-lg mr-3 px-3 py-2 leading-tight text-white font-semibold bg-[#F77E21] border"
            >Prev</button>
            {
                pages.map((page, index) => {
                    return <button 
                    key={index}
                    className={
                        page === currentPage ? "rounded-lg px-3 py-2 mx-1 leading-tight text-white font-semibold bg-[#F77E21] border border-gray-300" : "rounded-lg px-3 mx-1 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }
                    onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                })
            }
            <button 
            onClick={nextPage}
            className="rounded-lg ml-3 px-3 py-2 leading-tight text-white font-semibold bg-[#F77E21]"
            >Next</button>
        </div>
    )
}