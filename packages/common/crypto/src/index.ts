import {hash} from "bcrypt"

export async function hashInput(input: string): Promise<string> {
    return hash(input, 0)
}