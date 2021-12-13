export const getRoll = () => {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6));
};

export default getRoll;
