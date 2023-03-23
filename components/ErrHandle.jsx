const errHandle = () => {
  return (
    <div
      class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4"
      role="alert"
    >
      <p class="font-bold">Oops! Something went wrong.</p>
      <p>We're sorry, but an error occurred while processing your request.</p>
      <p>Please try again later.</p>
    </div>
  );
};
export default errHandle;
