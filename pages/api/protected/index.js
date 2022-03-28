import { getSession } from "next-auth/react"
import { getException } from '../../../src/utils/exceptionHandler/exceptionHandler.js'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send({})
  } else {
    res.send(getException("api-endpoint-auth-required"))
  }
}

export default handler