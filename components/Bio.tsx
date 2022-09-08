import "react-vertical-timeline-component/style.min.css";

const Bio = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-2 w-4/5 h-4/5 ">
        <div className="rounded-xl h-full row-span-2 sm:row-span-2 lg:row-span-3 glass-light dark:glass-dark">
          1
        </div>
        <div className="rounded-xl lg:row-span-2 glass-light dark:glass-dark">
          2
        </div>
        <div className="rounded-xl glass-light dark:glass-dark">3</div>
        <div className="rounded-xl lg:row-span-2 glass-light dark:glass-dark">
          4
        </div>
        <div className="rounded-xl glass-light dark:glass-dark">5</div>
      </div>
    </div>
  );
};

export default Bio;
