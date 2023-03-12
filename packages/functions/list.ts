import { notes } from '../../services/notes';

export async function handler() {
    return {
        statusCode: 200,
        body: JSON.stringify(notes)
    }
}