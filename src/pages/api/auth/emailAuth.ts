import { readFileSync } from 'fs';
import { createTransport } from 'nodemailer';
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

    const transport = createTransport(provider.server);
    const emailBody: string = await getEmailTemplate(
        'sendVerificationRequest',
        { host, url }
    );

    const result = await transport.sendMail({
        to: identifier,
        from: provider.from,
        subject: `Email de verificação - DevsTogether`,
        text: `Email de verificação - DevsTogether`,
        html: emailBody,
    });
    const failed = result.rejected.concat(result.pending).filter(Boolean);
    if (failed.length) {
        throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
    }
}

export { sendVerificationRequest };
