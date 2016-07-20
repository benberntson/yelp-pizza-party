/**
 * Address
 * 
 * Address as it appears returned from the Yelp API.
 */
export class Address{
  constructor(
    public city: string,
    public display_address: string[],
    public postal_code: string,
    public country_code: string,
    public address: string[],   
    public state_code: string,
    public coordinate?: {
      "latitude": number,
      "longitude" : number
    }
  ){}
}