import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({'URL': 'ExpeditionsDeli.com'}, {status:200});
}

export async function POST(req) {
    const payload = await req.json();
    console.log('Submitted payload: ', payload);
    
    if(!payload || !payload.email){
        return NextResponse.json({'error':'A valid email address is required.'}, {status:400});
    }

    try {
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const DATACENTER = process.env.MAILCHIMP_API_SERVER;
        const data = {
          email_address: payload.email,
          status: 'subscribed',
        };
    
        const response = await fetch(
          `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    
          {
            body: JSON.stringify(data),
            headers: {
              Authorization: `apikey ${API_KEY}`,
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }
        );
    
        if (response.status >= 400) {
            console.log('MC REP: ', response);
            const json = await response.json();
            console.log('MC JSON: ', json);
          return NextResponse.json(
            {'error': 'There was an error subscribing to the newsletter. ' + json.title},
            {'status': response.status}
          );
        }
    
        return NextResponse.json({}, {status:201});

      } catch (error) {
        return NextResponse.json(
            {'error': error.message || error.toString()},
            {'status': 400}
        );
      }    
}