const AboutComponent = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Blog Website</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Dive deep into a world of insightful articles and stories.</p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                At Blog Website, we believe in sharing the power of knowledge through our carefully curated articles, connecting readers with unique perspectives and thought-provoking insights.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Journey</h3>
              <p className="mt-2 text-base text-gray-500">
                From humble beginnings as a small blog, Lively Blogs has grown into a thriving community of readers and writers, bound together by a shared passion for knowledge and discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
