
import Logo from '../svg/Logo'
export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='p-10 rounded footer footer-center bg-base-200 text-base-content'>
      <div>
        {/* <svg width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd' className='inline-block fill-current'><path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z' /></svg> */}
        <Logo className='w-20 md:w-24' primary='fill-secondary dark:fill-white' secondary='fill-teal-900 dark:fill-secondary' />
        <p className='font-bold'>
          Marketing Web. <br />Brindando soluciones de tecnología desde 1992
        </p>
      </div>
      <div>
        <div className='grid grid-flow-col gap-4'>

          <a href='https://www.linkedin.com/in/armando-d-a84a333b/' target='_blank' rel='noreferrer nofollow' aria-label='LinkedIn'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></svg></a>
          <a href='https://www.instagram.com/mkwagencia/' target='_blank' rel='noreferrer nofollow' aria-label='Instagram'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' /></svg></a>
          {/* <a href='https://www.twitter.com/wwwmarketingweb/' target='_blank' rel='noreferrer nofollow' aria-label='Twitter'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' /></svg></a> */}
          {/* Facebook */}
          <a href='https://www.facebook.com/marketingweb' target='_blank' rel='noreferrer nofollow' aria-label='Facebook'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.364 10.977 10.125 11.875v-8.438h-2.719v-3.281h2.719v-2.5c0-2.687 1.625-4.156 4.031-4.156 1.156 0 2.156.094 2.438.125v2.781h-1.688c-1.312 0-1.562.625-1.562 1.531v2.031h3.125l-.406 3.281h-2.719v8.438c5.761-.898 10.125-5.885 10.125-11.875z' /></svg></a>

        </div>
      </div>
      <div>
        <p>Copyright © {year} | Todos los derechos reservados </p>
      </div>
    </footer>
  )
}
