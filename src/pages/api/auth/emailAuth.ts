import { readFileSync } from 'fs';
import path from 'path';

async function getEmailTemplate(
    templateName: string,
    params: object
): Promise<string> {
    let template = readFileSync(
        `${path.dirname(
            require.main?.filename || ''
        )}/src/assets/emailTemplates/${templateName}.html`
    ).toString('utf-8');

    for (const param of Object.entries(params)) {
        template = template.replace(`{{${param[0]}}}`, param[1]);
    }

    const RegExp: RegExp = /{{*.*}}/gm;
    while (RegExp.test(template)) {
        template = template.replace(RegExp, '');
    }

    return template;
}

async function sendVerificationRequest({
    identifier,
    url,
    provider,
}: {
    identifier: string;
    url: string;
    provider: { server: string; from: string };
}) {
    const { host } = new URL(url);
    const emailBody: string = await getEmailTemplate(
        'sendVerificationRequest',
        { host, url, url_link: url }
    );
    const sendGrid = require('@sendgrid/mail');
    const email = {
        to: identifier,
        from: provider.from,
        subject: 'Entre em sua conta DevsTogether',
        text: 'Entre em sua conta DevsTogether',
        html: emailBody,
    };
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

    try {
        await sendGrid.send(email);
        console.log('email sent!');
    } catch (error: any) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body);
        }
    }
}

export { sendVerificationRequest };
