import {Address} from './Address';

/**
 * Business
 * 
 * pojo that represents the Business data returned
 * from the Yelp API
 */
class Business {
  constructor(
    public name: string,
    public url: string,
    public phone?: string,
    public image_url?: string,
    public location?: Address,
    public snippet_text?: string,
    public rating?: number,
    public review_count?: number
  ) { }
}

let toBusiness = (datum) => new Business(
  datum.name,
  datum.url,
  datum.phone,
  datum.image_url,
  datum.location,
  datum.snippet_text,
  datum.rating,
  datum.review_count
)


export {Business,toBusiness}