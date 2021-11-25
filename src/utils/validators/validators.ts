export type RequireMyType = (value : string) => string | undefined

export const requireMy : RequireMyType  = (value) => {
    if(value) return undefined;
    return "Failed is required"
}
  
export const maxLengthControl = (max: number): RequireMyType => (value)=> {
  if (value.length > max) return `Max length ${max} symbols`
  return undefined
}

