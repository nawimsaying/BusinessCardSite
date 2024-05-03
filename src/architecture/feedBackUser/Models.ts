export class UserFeedback {

    messageForUser: string
    emailSent: boolean


    constructor(messageForUser: string, emailSent: boolean) {

        this.messageForUser = messageForUser
        this.emailSent = emailSent

    }
}