// Композиция

function createProgrammer(name) {
    const programmer = {name}
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode({ name }) {
    return {
        code: () =>  console.log(`${name} is coding...`)
    }
}

function canAngular({ name }) {
    return {
        angular: () => console.log(`${name} is creating Angular app...`)
    }
}

function canNode({ name }) {
    return {
        node: () => console.log(`${name} is programming on Node.js...`)
    }
}

function createFrontend(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canAngular(programmer),
        ...canReactAndVue(programmer)
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canNode(programmer)
    }
}

function createFullstack(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canNode(programmer),
        ...canAngular(programmer)
    }
}

function canReactAndVue({ name }) {
    return {
        react: () => console.log(`${name} is creating React App...`),
        vue: () => console.log(`${name} is creating VueJS App...`)
    }
}

const programmer = createProgrammer('Artem')
programmer.code()

const frontend = createFrontend('Vlad')
//frontend.code()
//frontend.angular()
frontend.react()
frontend.vue()

const backend = createBackend('Max')
backend.code()
backend.node()

const fullstack = createFullstack('Mikhail')
fullstack.code()
fullstack.node()
fullstack.angular()