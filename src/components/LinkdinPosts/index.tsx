const SociableKitWidget: React.FC = () => {

  return (
    <>
      <section
        id="linkedinSec"
        className="relative overflow-hidden"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              ></div>
              <iframe src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/25488053' width='100%' height='1000'></iframe>
            </div>
          </div>
        </div>
      </section>
    </>)
};

export default SociableKitWidget;
