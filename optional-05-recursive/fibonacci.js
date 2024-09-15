function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const fibs = fibonacci(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
