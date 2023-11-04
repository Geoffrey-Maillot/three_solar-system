import {Object3DEventMap, Object3D, Intersection} from 'three'

export type RaycasterEvent = (selectedObject:Intersection<Object3D<Object3DEventMap>> | null) => void