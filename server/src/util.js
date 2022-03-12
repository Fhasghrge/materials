function generatorAvator() {
  let id = 0;
  return () => {
    const key = (++id)%50
    return [key,`https://i.pravatar.cc/150?img=${key}`];
  }
}


module.exports = {
  generatorAvator: generatorAvator()
}