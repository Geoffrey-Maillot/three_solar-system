import { SphereGeometry } from "three"


function createGeometrie(){
  const geometrie = new SphereGeometry(100)
  

  return  {geometrie}
}

export {createGeometrie}