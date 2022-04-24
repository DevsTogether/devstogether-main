// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        projectName: 'DevsTogether',
        detailsUrl:
            'https://www.notion.so/TCC-4cf7e32955ee4b0bbbc3a2887e9f226e',
    });
}
