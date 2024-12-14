const customError = (error, statusCode) => {
  if (error === "unauthorized to connect to Database") {
    statusCode = 401;
  }
  const customError = new Error(error);
  customError.statusCode = statusCode || 500;
  return customError;
};
export default customError;
