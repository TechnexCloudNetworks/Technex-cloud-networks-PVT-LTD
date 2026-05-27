export default function  Applicationform () {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold py-7">Apply for Position</h2>

      <span className="p-2 bg-[#24c0c5]"><button className="font-bold "
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSc8brPpfgIHwPtGFqnO0fPThJ38wlYU31mPb-aIBr-FLIt9PA/viewform?usp=header",
            "_blank"
          )
        }
      >
        Apply Now
      </button></span>
    </div>
  );
}