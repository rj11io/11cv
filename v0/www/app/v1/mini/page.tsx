import { MiniCV, miniMetadata } from "../_mini/mini-cv"
import { role } from "./content"

export const metadata = miniMetadata(role)

export default function Page() {
  return <MiniCV role={role} />
}
