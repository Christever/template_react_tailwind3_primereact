import { email, string, z } from "zod"

// email -> exemple saisi email
// password -> exemple saisi password avec une longueur minimum
// phone -> exemple saisi avec regexe et  masque de saisi
// country -> exemple saisi dropdown 
export const authSchema = z.object({
    email: z.string().email("Email invalide"),
 
})