export const getRoll = () => {
  return Array.from({ length: 5 }, () => Math.ceil(Math.random() * 6));
};

export default getRoll;
