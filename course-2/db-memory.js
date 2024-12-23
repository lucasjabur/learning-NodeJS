import { randomUUID } from "node:crypto"

export class DatabaseMemory {
  #videos = new Map() // private key (#)

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0]
        const data = videoArray[1]

        return {
          id,
          ...data, // spread operator
        }
      })
      .filter(video => {
        if (search) {
          return video.title.includes(search)
        }

        return true // return all the videos if a search wasn't made
      })
  }

  create(video) {
    const videoId = randomUUID()

    this.#videos.set(videoId, video) // save the 'video' inside '#videos' data structure with its id ('videoId)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }
}