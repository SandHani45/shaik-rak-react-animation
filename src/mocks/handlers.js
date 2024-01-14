import { http, HttpResponse } from "msw";
import slideMock from './../mocks/slide.json';
import reviewMock from './../mocks/review.json'

function githubApi(path){
    return `/${path}`
}
export const handlers = [
    http.get(githubApi('slides'), (req, res, ctx)=>{
        return HttpResponse.json(slideMock)
    }),
    http.get(githubApi('review-list'), (req, res, ctx)=>{
        return HttpResponse.json(reviewMock)
    }),
  ]