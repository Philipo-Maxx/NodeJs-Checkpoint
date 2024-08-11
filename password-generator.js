import generator from "generate-password";

const password = (gen, multiple = 1, options = { length: 10, numbers: true }) =>
  gen.generateMultiple(multiple, options);

console.log(password(generator, 6));
