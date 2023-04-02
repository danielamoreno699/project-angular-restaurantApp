
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, dematerialize, materialize, mergeMap, Observable, of, throwError } from "rxjs";


let users = JSON.parse(localStorage.getItem('users') || '{}'  ) 



@Injectable()
export class fakeBackEndInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    
    {

           const { url, method, headers , body} = req;

           return of(null)
                .pipe(mergeMap(handleRoute))
                .pipe (materialize())
                .pipe(delay(500))
                .pipe( dematerialize());


            function handleRoute(){
                switch(true){
                    case url.endsWith('/users/authentication-user') && method === 'POST':
                        return register();

                    case url.endsWith('/users/login-user') && method == 'POST':
                        return authenticate();
                    
                    case url.endsWith('/users') && method == 'GET':
                        return getUser();
                    
                    default:
                         return next.handle(req)

                }
            }

            function register(){
                const user =  body 

                if (users.find((x: { email: any; }) => x.email === user.email )){
                    return error('email " ' + user.email + ' " is already taken')
                   
                }

                user.id = users.length ? Math.max(... users.map((x: { id: any; }) => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
                
            }

            function authenticate(){
                    const { email, password} = body;
                    const user = users.find((x: { email: any; password: any; }) => {x.email === email && x.password === password});
                    

                    if (!user) return error('Username or password is incorrect')
                    return ok({

                        id: user.id,
                        fname: user.fname,
                        lname: user.lname,
                        email: user.email,
                        phone: user.phone,
                        token: `fake-jwt-token.${user.id}`

                    })

            }

            function getUser(){
                if(!isLoggedIn()) return unauthorized();
                return ok(users)

            }

            

            function ok(body?: any){
                return of(new HttpResponse({status: 200, body}))
            }

            function error(message: string){
                return throwError({  status: 400, error: {message}})
            }


            function isLoggedIn() {
                return headers.get('Authorization') === 'Bearer fake-jwt-token';
                }

                function unauthorized() {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } })
                    ;
                    }
                    
        }
    }








export const fakeBackEndProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass : fakeBackEndInterceptor,
    multi: true

};