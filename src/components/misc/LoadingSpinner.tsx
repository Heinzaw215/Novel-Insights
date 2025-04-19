// components/LoadingSpinner.tsx

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full border-t-4 border-white w-16 h-16"></div>
    </div>
  );
};

export default LoadingSpinner;
