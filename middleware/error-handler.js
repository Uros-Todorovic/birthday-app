const errorHandler = (err, req, res, next) => {
  const defaultError = {
    msg: "Something went wrong, please try again later",
    statusCode: 500,
  };
  if (!err.msg) {
    return res.status(defaultError.statusCode).json({ msg: defaultError.msg });
  } else {
    return res.status(500).json({ msg: err });
  }
};

export default errorHandler;
