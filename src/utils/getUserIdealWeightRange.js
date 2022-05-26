
import { UNDER_WEIGHT, ADECUATE_WEIGHT } from "./TypeOfWeight";

const getUserIdealWeightRange = (height) => {

    return {
        MinIdealWeight: UNDER_WEIGHT * height * height,
        MaxIdealWeight: ADECUATE_WEIGHT * height * height
    }

}

export { getUserIdealWeightRange };