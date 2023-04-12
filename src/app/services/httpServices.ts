import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviornments/enviornment';

export class Parameter {
  public Id: number | undefined;
  constructor(init: Partial<Parameter>) {
    Object.assign(this, init);
  }
}

interface IHttpMethods {
  get<T>(url: string, id?: number, isShowProgressBar?: boolean): Observable<any>;
  getAll<T>(url: string, params?: Parameter): Observable<any>;
  post(url: string, data: any): Observable<any>;
  patch(url: string, data: any): Observable<any>;
  // postWithHeader(url: string, data: any, header: any): Observable<any>;
  delete(url: string, id: number): Observable<any>;
}

//https://codecraft.tv/courses/angular/http/core-http-api/
@Injectable()
export class HttpServices implements IHttpMethods {



  constructor(private http: HttpClient) {
  }

  getAll<T>(url: string, options?: any, isShowProgressBar: boolean = true): Observable<any> {
    url = this.generateUrl(url, options);
    var headers = this.setHeaders();

    return this.http
      .get(url, { headers: headers })

  }

  get<T>(url: string, id: number | string | null = null): Observable<any> {


    var headers = this.setHeaders();
    url = this.generateUrl(url);

    if (id != null)
      url = url + "/" + id;

    return this.http
      .get(url, { headers: headers })
  }

  post(url: string, data?: any): Observable<any> {

    var headers = this.setHeaders();
    url = this.generateUrl(url);
    let body = JSON.stringify(data);
    return this.http.post(url, body, { headers: headers })
  }

  postWithFormData(url: string, data?: any): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'multipart/form-data');
    url = this.generateUrl(url);

    return this.http.post(url, data, { headers: headers })
  }


  patch(url: string, data?: any): Observable<any> {

    var headers = this.setHeaders();
    url = this.generateUrl(url);
    let body = JSON.stringify(data);
    return this.http.patch(url, body, { headers: headers })
  }

  delete(url: string, id: number | string): Observable<any> {

    var headers = this.setHeaders();

    url = this.generateUrl(url);

    if (id != null)
      url = url + id;

    return this.http.delete(url, { headers: headers });
  }


  PreviewFileWithGet<T>(url: string, headerValue: any, accept: string): Observable<any> {
    var headers = this.setHeaders(undefined, false);
    url = this.generateUrl(url);
    headers = this.appendIntoHeader(headers, headerValue);
    const httpOptions = {
      headers: headers,
      //responseType: 'blob' as 'json',
      Accept: accept,
    };
    return this.http
      .get(url, httpOptions)

  }
  downloadFileWithGet<T>(url: string, headerValue: any, accept: string): Observable<any> {
    var headers = this.setHeaders(undefined, false);
    url = this.generateUrl(url);
    headers = this.appendIntoHeader(headers, headerValue);
    const httpOptions = {
      headers: headers,
      responseType: 'blob' as 'json',
      Accept: accept,
    };
    return this.http
      .get(url, httpOptions)

  }

  // downloadFileWithPost<T>(url: string, data: any, headerValue: any): Observable<any> {
  //   var headers = this.setHeaders();
  //   url = this.generateUrl(url);
  //   headers = this.appendIntoHeader(headers, headerValue);
  //   const httpOptions = {
  //     headers: headers,
  //     responseType: 'blob' as 'json',
  //     Accept: 'text/csv;charset=utf-8;',
  //   };
  //   return this.http
  //     .post(url, data, httpOptions)

  // }

  private generateUrl(rawUrl: String, options?: any): string {
    debugger
    var url = environment._baseUri + rawUrl;

    if (options != null) {
      let params = new URLSearchParams();
      for (let key in options) {
        if (options[key] === null) {
        }
        else {
          params.set(key, options[key])
        }
      }
      url = url + "?" + params.toString();
    }

    return url
  }

  //https://stackoverflow.com/questions/45286764/angular-httpclient-doesnt-send-header
  private setHeaders(params?: Parameter, isIncludeJsonContentType: boolean = true): HttpHeaders {
    var headers = new HttpHeaders();

    if (isIncludeJsonContentType)
      headers = headers.set('Content-Type', 'application/json');

    return headers;
  }


  private appendIntoHeader(existingHeader: any, appendValue: any): HttpHeaders {
    if (appendValue != null) {
      Object.getOwnPropertyNames(appendValue).forEach(element => {
        if (appendValue[element] === null) {

        }
        else {
          existingHeader = existingHeader.set(element, appendValue[element]);
        }
      });
    }

    return existingHeader;
  }

  getAsPromise(url: string, id: string): Promise<any> {
    url = this.generateUrl(url);

    return this.http
      .get(url)
      .toPromise();
  }
}
