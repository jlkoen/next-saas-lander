export default function Hero() {
  return (
    <section className='relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Section header */}
          <div className='text-center pb-12 md:pb-16'>
            <h1
              className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Increase your guest revenue just like{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Theme Parks & Resorts
              </span>
            </h1>
            <div className='max-w-3xl mx-auto'>
              <p
                className='text-xl text-gray-600 mb-8'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                Using wildly popular guest engagement & retention techniques
                with modern applications and social style community features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
