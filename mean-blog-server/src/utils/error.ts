export const errorHandler = (statusCode: number, message: string) => {
  const error = new Error(message);
  (error as {statusCode?: number}).statusCode = statusCode;
  return error;
}