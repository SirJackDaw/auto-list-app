import { CarService } from "src/services/car-service.js";

describe('CarService', () => {
    const mockCarRepository = {
        create: jest.fn(dto => (Promise.resolve({ id: '1', ...dto }))),
        update: jest.fn((id, dto) => (Promise.resolve({ id: id, ...dto }))),
        deleteCar: jest.fn((id) => (Promise.resolve())),
        getAll: jest.fn(query => (Promise.resolve([]))),
        getById: jest.fn(id => (Promise.resolve({...car, createdAt: new Date(), updatedAt: new Date()}))),
    };

    const car = { brand: 'brand', name: 'name', manufacturedYear: 2020, price: 1000 }

    let service: CarService;

    beforeEach(() => {
        service = new CarService(mockCarRepository);
    });

    it ('should be defined', () => {
        expect(service).toBeDefined();
    });

    it ('should create article', async () => {
        expect(service.create(car)).resolves.toEqual({ 
            id: expect.any(String), 
            ...car,
        })

        expect(mockCarRepository.create).toHaveBeenCalledWith(car)
    });

    it ('should delete article', async () => {
        await expect(service.deleteCar('1')).resolves.toBeUndefined();
        await expect(mockCarRepository.deleteCar).toHaveBeenCalledWith('1')
    })

    it ('should update article', async () => {
        expect(service.update('1', car)).resolves.toEqual({ 
            id: '1', 
            ...car,	
        })
        expect(mockCarRepository.update).toHaveBeenCalledWith('1', car)
    })

    it ('should find articles', async () => {
        expect(service.getAll(car)).resolves.toEqual([])
        expect(mockCarRepository.getAll).toHaveBeenCalledWith(car)
    })

    it ('should find article by id', async () => {
        expect(service.getById('1')).resolves.toEqual({ id: '1' })
        expect(mockCarRepository.getById).toHaveBeenCalledWith('1')
    })
});
