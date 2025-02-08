import { Address } from "./Address"
import { Name } from "./Name"
import { Picture } from "./Picture"
import { Wanted } from "./Wanted"

export const Poster = () => {
  return (
    <div className="bg-[url('/textures/paper.jpg')] bg-cover max-h-[900px] max-w-[675px] mx-auto shadow-2xl">
      <Wanted />
      <Picture />
      <Name />
      <Address />
    </div>
  )
}