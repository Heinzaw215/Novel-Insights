const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className="w-16 h-16 border-4 border-t-4 border-amber-700 border-solid rounded-full animate-spin infinite"
      >
        <div className="spinner-dot absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-orange-300 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-orange-300 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-orange-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;