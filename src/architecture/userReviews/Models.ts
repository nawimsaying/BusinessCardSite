export class UserReviews {
    id: number;
    siteImage: string;
    customerName: string;
    customerImage: string;
    description: string;

    constructor(id: number, siteImage: string, customerName: string, customerImage: string, description: string) {
        this.id = id;
        this.siteImage = siteImage;
        this.customerName = customerName;
        this.customerImage = customerImage;
        this.description = description;
    }
}