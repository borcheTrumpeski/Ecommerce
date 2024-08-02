import './Pagination.css'

export const Pagination = ({ currentPage, onNextPage, onPrevPage, disableNext }) => {
    return (
        <div className="pagination">
            <button className='pagination-buttons' onClick={onPrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{currentPage}</span>
            <button className='pagination-buttons' disabled={disableNext} onClick={onNextPage} >
                Next
            </button>
        </div>
    );
};