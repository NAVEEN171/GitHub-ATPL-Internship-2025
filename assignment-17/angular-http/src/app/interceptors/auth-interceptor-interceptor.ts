import { HttpInterceptorFn } from '@angular/common/http';
const publicEndPoint = ['/api/login', '/api/register'];

const isPublicUrl = (url: string): boolean => {
  return publicEndPoint.some((endpoint) => url.includes(endpoint));
};
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access-token');
  let publicUrl = isPublicUrl(req.url);

  const modified = req.clone({
    setHeaders: {
      ...(token && !publicUrl && { Authorization: `Bearer ${token}` }),
    },
  });

  return next(modified);
};
