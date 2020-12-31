import { createHash }  from "crypto"

export async function hashInput(input: string): Promise<string> {
    return createHash('sha256').update(input).digest('hex');
}