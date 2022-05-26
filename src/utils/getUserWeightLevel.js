import { WEIGHT_LEVELS } from "./weightLevels";
import { UNDER_WEIGHT, ADECUATE_WEIGHT, OVERWEIGHT } from "./TypeOfWeight";

const getUserWeightLevelIndex = () => {

    if(health > 0 && health < UNDER_WEIGHT){
        return  0;

    }else if(health > UNDER_WEIGHT && health < ADECUATE_WEIGHT){
        return  1;

    }else if(health > ADECUATE_WEIGHT && health < OVERWEIGHT){
        return  2;

    }else{
        return  3;
    }

}

const getUserWeightLevel = (health) => {
    
    if(health > 0 && health < UNDER_WEIGHT){
        return  WEIGHT_LEVELS[0];

    }else if(health > UNDER_WEIGHT && health < ADECUATE_WEIGHT){
        return  WEIGHT_LEVELS[1];

    }else if(health > ADECUATE_WEIGHT && health < OVERWEIGHT){
        return  WEIGHT_LEVELS[2];

    }else{
        return  WEIGHT_LEVELS[3];
    }

}

export { getUserWeightLevel, getUserWeightLevelIndex};

