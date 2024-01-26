import { TypeOf, number, object, string } from "zod";

  const payload = object({
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
  
  const createCarSchema = object({
    body: object({
      ...payload.shape,
    })
  });
  
  const updateCarSchema = object({
    body: object({
      ...payload.partial().shape,
    }),
    ...params,
  });
  
  const deleteCarSchema = object({
    ...params,
  });
  
  const getCarSchema = object({
    ...params,
  });

  export const schemas = {
    createCarSchema,
    updateCarSchema,
    deleteCarSchema,
    getCarSchema
  }

  export type CreateCarInput = TypeOf<typeof createCarSchema>;
  export type UpdateCarInput= TypeOf<typeof updateCarSchema>;
  export type ReadCarInput = TypeOf<typeof getCarSchema>;
  export type DeleteCarInput= TypeOf<typeof deleteCarSchema>;