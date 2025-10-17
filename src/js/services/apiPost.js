const API_BASE_URL = 'https://luislunaapiweb.loca.lt/netweb/api/v1/netweb_send';

const sendMessagePost = async( payload )=>{
    try {
        const resp = await fetch(API_BASE_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                "Bypass-Tunnel-Reminder": "true"             
            }
        });

        if( !resp.ok){
            const error = await resp.json();
            throw new Error( error.message || 'Error al enviar el mensaje' );
        }

        const data = await resp.json();
        return data;
                           
    } catch (error) {
        throw new Error(`Error al enviar el mensaje: ${ error }`);
    }
}

export{
    sendMessagePost
}