export const requireMy = (value) => {
    if(value) return undefined;
    return "Failed is required"
}

export const maxLengthControl = (max) => (value)=> {
  if (value.length > max) return `Max length ${max} symbols`
  return undefined
}

