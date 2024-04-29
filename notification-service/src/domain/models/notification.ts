export interface NotificationProps {
  to: string;
  subject: string;
  body: string;
}

export class Notification {
  to: string;
  subject: string;
  body: string;

  constructor({ body, subject, to }: NotificationProps) {
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}
