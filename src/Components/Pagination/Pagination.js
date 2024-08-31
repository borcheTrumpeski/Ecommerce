import './Pagination.css'

export const Pagination = ({ currentPage, onNextPage, onPrevPage, disableNext }) => {
    return (
        <div className="pagination">
            {currentPage !== 1 ? <button className='pagination-buttons' onClick={onPrevPage} disabled={currentPage === 1}>
                Previous
            </button> : null}

            <span>{currentPage}</span>
            {!disableNext ? <button className='pagination-buttons' disabled={disableNext} onClick={onNextPage} >Next</button> : null}
        </div>
    );
};