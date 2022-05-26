
import { UNDER_WEIGHT, ADECUATE_WEIGHT } from "./TypeOfWeight";

const getUserIdealWeightRange = (height) => {

    return {
        minIdealWeight: (UNDER_WEIGHT * height * height).toFixed(3),
        maxIdealWeight: (ADECUATE_WEIGHT * height * height).toFixed(3)
    }

}

export { getUserIdealWeightRange };