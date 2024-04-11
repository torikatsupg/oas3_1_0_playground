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

export const getPostMultipartFormDataRequiredNullableOptionalResponseMock = (overrideResponse: any = {}): Blob => ({array: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample())), boolean: faker.datatype.boolean(), double: faker.number.int({min: undefined, max: undefined}), enum: {}, float: faker.number.int({min: undefined, max: undefined}), int32: faker.number.int({min: undefined, max: undefined}), int64: faker.number.int({min: undefined, max: undefined}), integer: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), nullable: {}, number: faker.number.int({min: undefined, max: undefined}), object: {key: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse}, optional: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.internet.password(), required: faker.word.sample(), ...overrideResponse})


export const getPostMultipartFormDataRequiredNullableOptionalMockHandler = (overrideResponse?: Blob) => {
  return http.post('*/multipart_form-data/:required/:nullable/:optional', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getPostMultipartFormDataRequiredNullableOptionalResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getMultipartFormDataMock = () => [
  getPostMultipartFormDataRequiredNullableOptionalMockHandler()
]
