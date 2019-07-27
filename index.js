const scopes = 'https://www.googleapis.com/auth/chat.bot'
const {google} = require('googleapis');




async function main () {
    // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
    // environment variables.

    //Zhan set your environment variable with
    //export GOOGLE_APPLICATION_CREDENTIALS=path/of/this/project/6fdb4859339b.json
    const auth = await google.auth.getClient({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: [scopes]
    });

    // obtain the current project Id
    const project = await google.auth.getProjectId();

    const chat = google.chat({
        version: 'v1',
        auth: auth
    })

    chat.spaces.messages.create({
        parent: 'spaces/',  //put your hangout space link for a test
        requestBody: {
            text: 'Test message'
        }
    }).then(r => {
        console.log(r.data)
    })
}




main().catch(console.error);
