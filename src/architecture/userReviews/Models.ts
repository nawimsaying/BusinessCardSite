export class UserReviews {
    id: number;
    siteImage: string;
    customerName: string;
    customerImage: string;
    rating: number;
    description: string;


    constructor(id: number, siteImage: string, customerName: string, customerImage: string, rating: number, description: string) {
        this.id = id;
        this.siteImage = siteImage;
        this.customerName = customerName;
        this.customerImage = customerImage;
        this.rating = rating;
        this.description = description;
    }
}