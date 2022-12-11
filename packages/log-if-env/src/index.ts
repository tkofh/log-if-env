export const ENV = process.env.NODE_ENV

export enum ENVIRONMENTS {
  DEV = 'development',
  TEST = 'test',
  PROD = 'production'
}

export const IS_DEV = ENV === ENVIRONMENTS.DEV
export const IS_TEST = ENV === ENVIRONMENTS.TEST
export const IS_PROD = ENV === ENVIRONMENTS.PROD

export const NOT_DEV = ENV !== ENVIRONMENTS.DEV
export const NOT_TEST = ENV !== ENVIRONMENTS.TEST
export const NOT_PROD = ENV !== ENVIRONMENTS.PROD

type LogParams = Parameters<typeof console['log']>

export const logDev = (...args: LogParams) => {
  if(IS_DEV) {
    console.log(...args)
  }
}
export const logTest = (...args: LogParams) => {
  if(IS_TEST) {
    console.log(...args)
  }
}
export const logProd = (...args: LogParams) => {
  if(IS_PROD) {
    console.log(...args)
  }
}

export const logNotDev = (...args: LogParams) => {
  if(NOT_DEV) {
    console.log(...args)
  }
}
export const logNotTest = (...args: LogParams) => {
  if(NOT_TEST) {
    console.log(...args)
  }
}
export const logNotProd = (...args: LogParams) => {
  if(NOT_PROD) {
    console.log(...args)
  }
}

type WarnParams = Parameters<typeof console['warn']>

export const warnDev = (...args: WarnParams) => {
  if(IS_DEV) {
    console.warn(...args)
  }
}
export const warnTest = (...args: WarnParams) => {
  if(IS_TEST) {
    console.warn(...args)
  }
}
export const warnProd = (...args: WarnParams) => {
  if(IS_PROD) {
    console.warn(...args)
  }
}

export const warnNotDev = (...args: WarnParams) => {
  if(NOT_DEV) {
    console.warn(...args)
  }
}
export const warnNotTest = (...args: WarnParams) => {
  if(NOT_TEST) {
    console.warn(...args)
  }
}
export const warnNotProd = (...args: WarnParams) => {
  if(NOT_PROD) {
    console.warn(...args)
  }
}

type ErrorParams = Parameters<typeof console['error']>

export const errorDev = (...args: ErrorParams) => {
  if(IS_DEV) {
    console.error(...args)
  }
}
export const errorTest = (...args: ErrorParams) => {
  if(IS_TEST) {
    console.error(...args)
  }
}
export const errorProd = (...args: ErrorParams) => {
  if(IS_PROD) {
    console.error(...args)
  }
}

export const errorNotDev = (...args: ErrorParams) => {
  if(NOT_DEV) {
    console.error(...args)
  }
}
export const errorNotTest = (...args: ErrorParams) => {
  if(NOT_TEST) {
    console.error(...args)
  }
}
export const errorNotProd = (...args: ErrorParams) => {
  if(NOT_PROD) {
    console.error(...args)
  }
}
