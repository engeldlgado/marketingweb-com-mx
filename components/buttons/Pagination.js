const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, children }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pageButtonCount = 3

  const prevButton = (
    <button
      className='text-white bg-orange-700 border-transparent dark:bg-gray-800 btn btn-sm'
      disabled={currentPage === 0}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Ant
    </button>
  )

  const nextButton = (
    <button
      className='text-white bg-orange-700 border-transparent dark:bg-gray-800 btn btn-sm'
      disabled={currentPage === totalPages - 1}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Sig
    </button>
  )

  const start = Math.max(0, currentPage - Math.floor(pageButtonCount / 2))
  const end = Math.min(totalPages, start + pageButtonCount)

  const pageButtons = []
  for (let i = start; i < end; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`text-white bg-orange-600 dark:bg-gray-700 border-transparent btn btn-sm ${currentPage === i ? 'bg-orange-900 dark:bg-gray-500 btn-disabled' : ''}`}
        onClick={() => setCurrentPage(i)}
      >
        {i + 1}
      </button>
    )
  }

  if (start > 0) {
    pageButtons.unshift(
      <button key={-1} className='text-orange-600 dark:text-blue-700 btn btn-disabled btn-sm'>
        ...
      </button>
    )
  }

  if (end < totalPages) {
    pageButtons.push(
      <button key={totalPages} className='text-orange-600 dark:text-blue-700 btn btn-disabled btn-sm'>
        ...
      </button>
    )
  }

  return (
    <div className='flex flex-col mt-6'>
      <div className='justify-center btn-group'>
        {prevButton}
        {pageButtons}
        {nextButton}
      </div>
      {children}
      <div className='justify-center mt-10 btn-group sm:hidden'>
        {prevButton}
        {pageButtons}
        {nextButton}
      </div>
    </div>
  )
}

export default Pagination
