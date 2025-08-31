export async function fetchCount(amount) {
  // Simulate an API call
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}