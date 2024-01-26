import { TypeOf, number, object, string } from "zod";

// const payload = {
//     body: object({
//       brand: string({
//         invalid_type_error: "Brand should be a string",
//       }),
//       name: string({
//         invalid_type_error: "Description should be a string",
//       }),
//       manufacturedYear: string({
//         invalid_type_error: "manufacturedYear should be a string",
//       }),
//       price: number({
//         invalid_type_error: "Price should be a number",
//       }),
//     }),
//   };

  const payload2 = object({
    brand: string({
      invalid_type_error: "Brand should be a string",
      required_error: "Brand is required",
    }),
    name: string({
      invalid_type_error: "Description should be a string",
      required_error: "Description is required",
    }),
    manufacturedYear: string({
      invalid_type_error: "manufacturedYear should be a string",
      required_error: "manufacturedYear is required",
    }),
    price: number({
      invalid_type_error: "Price should be a number",
      required_error: "Price is required",
    }),
  })
  
  const params = {
    params: object({
      id: string({
        required_error: "id is required",
      }),
    }),
  };

  // export const createCarSchema2 = object({
  //   ...payload
  // })
  
  export const createCarSchema = object({
    body: object({
      ...payload2.shape,
    })
  });
  
  export const updateCarSchema = object({
    body: object({
      ...payload2.partial().shape,
    }),
    ...params,
  });
  
  export const deleteCarSchema = object({
    ...params,
  });
  
  export const getCarSchema = object({
    ...params,
  });
  
  export type CreateCarInput = TypeOf<typeof createCarSchema>;
  export type UpdateCarInput= TypeOf<typeof updateCarSchema>;
  export type ReadCarInput = TypeOf<typeof getCarSchema>;
  export type DeleteCarInput= TypeOf<typeof deleteCarSchema>;