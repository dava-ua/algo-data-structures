const SERVER = { cores: 3, memory: 5, storage: 10 };

const packServices = (services) => {
    const packed = [];
    const exceptional = [];
    let queue = [...services];

    while (queue.length) {
        let container = [];
        let capacity = { ...SERVER };

        queue.forEach(service => {
            if ((SERVER.cores -service.cores < 0)
                || (SERVER.memory - service.memory < 0)
                || (SERVER.storage - service.storage < 0)) {
                exceptional.push(service);
                queue = queue.filter(s => service.id !== s.id);
                return;              
            }

            if (
                (capacity.cores - service.cores >= 0)
                && (capacity.memory - service.memory >= 0)
                && (capacity.storage - service.storage >= 0)
            ) {
                capacity.cores -= service.cores;
                capacity.memory -= service.memory;
                capacity.storage -= service.storage;
                queue = queue.filter(s => service.id !== s.id);
                container.push(service);
            }
            
        });

        packed.push(container);
    }

    return [packed, exceptional];
}


describe('build servers list', () => {
    const services = [
        { id: 1, cores: 2, memory: 1, storage: 3 },
        { id: 2, cores: 2, memory: 2, storage: 4 },
        { id: 3, cores: 1, memory: 2, storage: 5 },
        { id: 4, cores: 10, memory: 2, storage: 5 },
    ]

    const result = [
        [
            [{ id: 1, cores: 2, memory: 1, storage: 3 }, { id: 3, cores: 1, memory: 2, storage: 5 }],
            [{ id: 2, cores: 2, memory: 2, storage: 4 }]
        ],
        [{ id: 4, cores: 10, memory: 2, storage: 5 },]
    ];

    const services2 = [
        { id: 1, cores: 2, memory: 1, storage: 30 }
    ]

    const result2 = [
        [[]],
        [{ id: 1, cores: 2, memory: 1, storage: 30 }]
    ];

    it('pack services into instance of SERVER', () => {
        expect(packServices(services)).toStrictEqual(result);
        expect(packServices(services2)).toStrictEqual(result2);
    });
});