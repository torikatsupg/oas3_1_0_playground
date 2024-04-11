/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * OAS 3.1.0 Playground
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  OptionalBinary
} from '../oAS310Playground.schemas'

export const getPostBinaryOptionalResponseMock = (): OptionalBinary => (new Blob(faker.helpers.arrayElements(faker.word.words(10).split(' '))))


export const getPostBinaryOptionalMockHandler = (overrideResponse?: OptionalBinary) => {
  return http.post('*/binary/optional', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getPostBinaryOptionalResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getOptionalBinaryMock = () => [
  getPostBinaryOptionalMockHandler()
]
