import useResize from '../../../hooks/useResize';
import './pagination.css'

interface PaginatorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PAGINATOR_BREAKPOINT = 500;



const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
    const isWindowLarger = useResize(PAGINATOR_BREAKPOINT);
    const maxPagesToShow = isWindowLarger ? 4 : 2;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);


    const renderPageButton = (page: number, isActive: boolean = false) => (
        <div className={isActive ? 'active' : 'pag-button'}>
            <button key={page} onClick={() => onPageChange(page)}>
                {page}
            </button>
        </div>
    );

    const renderEllipsis = () => (
        <div className='pag-button'>
            <button style={{ cursor: 'default' }} disabled={true}>
                ...
            </button>
        </div>
    );

    const renderArrowButton = (direction: 'left' | 'right') => (
        <div onClick={() => onPageChange(currentPage + (direction === 'left' ? -1 : 1))} className='arrows-button'>
            <button disabled={direction === 'left' ? currentPage === 1 : currentPage === totalPages}>
                {direction === 'left' ? '<' : '>'}
            </button>
        </div>
    );

    return (
        <div className="paginator">
            {renderArrowButton('left')}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => renderPageButton(page, currentPage === page))}
            {totalPages > maxPagesToShow && endPage < totalPages - 2 && renderEllipsis()}
            {totalPages > maxPagesToShow && endPage < totalPages - 1 && renderPageButton(totalPages)}
            {renderArrowButton('right')}
        </div>
    );
};

export default Paginator;