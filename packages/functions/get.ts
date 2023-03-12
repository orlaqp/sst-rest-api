import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { notes } from '../../services/notes';

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const noteId = event.pathParameters?.id;

    if (!noteId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Note id is missing" })

        }
    }

    const note = notes[noteId];

    return note
        ? { statusCode: 200, body: JSON.stringify(note) }
        : { statusCode: 404, body: JSON.stringify({ error: true, message: "note not found" }) };
}