import { TypeOf, number, object, string } from "zod";

  const payload = object({
    brand: string({
      invalid_type_error: "Brand should be a string",
      required_error: "Brand is required",
    }).transform((val) => val.toLowerCase()),
    name: string({
      invalid_type_error: "Description should be a string",
      required_error: "Description is required",
    }).transform((val) => val.toLowerCase()),
    manufacturedYear: number({
      invalid_type_error: "manufacturedYear should be a string",
      required_error: "manufacturedYear is required",
    }).max(9999),
    price: number({
      invalid_type_error: "Price should be a number",
      required_error: "Price is required",
    }),
  })

  const query = {
    query: object({
      brand: string({
        invalid_type_error: "Brand should be a string",
      }).transform((val) => val.toLowerCase()),
      price: number({
        invalid_type_error: "Price should be a number",
      }),
      name: string({
        invalid_type_error: "Name should be a string",
      }).transform((val) => val.toLowerCase()),
      manufacturedYear: number({
        invalid_type_error: "manufacturedYear should be a string",
      }).max(9999),
    }).partial(),
  }
  
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

  const getAllCarsSchema = object({
    ...query,
  });

  export const schemas = {
    createCarSchema,
    updateCarSchema,
    deleteCarSchema,
    getCarSchema,
    getAllCarsSchema
  }

  export type CreateCarInput = TypeOf<typeof createCarSchema>['body'];
  export type UpdateCarInput= TypeOf<typeof updateCarSchema>['body'];
  export type ReadCarInput = TypeOf<typeof getCarSchema>;
  export type ReadAllCarsInput = TypeOf<typeof getAllCarsSchema>['query'];
  export type DeleteCarInput= TypeOf<typeof deleteCarSchema>;