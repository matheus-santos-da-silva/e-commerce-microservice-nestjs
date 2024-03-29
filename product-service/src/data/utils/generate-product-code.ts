import * as crypto from 'node:crypto';

const generateProductCode = () => {
  const randomBytes1 = crypto.randomBytes(4);
  const randomBytes2 = crypto.randomBytes(4);
  const codeProduct = (
    randomBytes1.readUInt32BE(0) * 0x100000000 +
    randomBytes2.readUInt32BE(0)
  ).toString();
  return codeProduct.padStart(15, '0');
};

export { generateProductCode };
