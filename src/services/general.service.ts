import jwt from 'jsonwebtoken'
export const generateRandomNumber = () => Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

export const generateJWT = async (identification: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign({ identification }, "my_key");
      resolve(token);
    } catch (e) {
      reject(e);
    }
  })
}