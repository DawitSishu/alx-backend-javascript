export default function createIteratorObject(report) {
  return (function* _() {
    for (const dep of Object.values(report.allEmploys)) {
      for (const employ of dep) {
        yield employ;
      }
    }
  })();
}
