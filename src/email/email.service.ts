import { Injectable } from '@nestjs/common';
import { createTransport, Transport } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transport;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: '407955981@qq.com',
        pass: 'dcnlutzbtlxebjdd',
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '单县湖西棋院课时系统',
        address: '407955981@qq.com',
      },
      to,
      subject,
      html,
    });
  }
}
