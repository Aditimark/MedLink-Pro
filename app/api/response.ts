export function apiSuccess(
  data: any,
  message = 'Success'
) {
  return Response.json({
    success: true,
    message,
    data,
  })
}

export function apiError(
  message = 'Something went wrong',
  status = 400
) {
  return Response.json(
    {
      success: false,
      message,
    },
    {
      status,
    }
  )
}