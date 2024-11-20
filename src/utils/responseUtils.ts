const createError = (code: number, message: string) => {
  return {
    code: code,
    message: message,
  };
}

export const successResponse = (data: any) => {
  return {
    status: "success",
    data: data,
    error: null
  };
};

export const errorResponse = (code: number, message: string) => {
  return {
    status: "error",
    data: null,
    error: createError(code, message)
  };
};